---
type: Fact
title: # Fix Ollama gating for remote providers

source: hermes
session_id: local-b4f44
description: # Fix Ollama gating for remote providers

source: hermes
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
resource: hermes://session/local-b4f44b0edab54099e0baaee2f92
resource: agentmemory://memory/mem_mvxm9pfy_b65d29e64acc
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-11-01T09:17:30.569Z
source: agentmemory
strength: 7
---
# Content

# Fix Ollama gating for remote providers

source: hermes
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
resource: hermes://session/local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a

# Conversation

- **Session ID:** `local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T10:06:14Z
- **Ended:** 2026-10-31T11:50:43Z
- **Messages:** 216
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 393025 in / 42480 out
- **Est. cost:** $-260384.0000

---

### 👤 User — 2026-10-31T10:08:52Z

You said "    Two follow-ups if you want them: (1) the code fix — gate the override on is_local_endpoint(agent.base_url) so a remote provider is      ┃
    never clamped by an Ollama knob (1-line guard + invariant test); (2) set fast-jev's threshold via JEV_THRESHOLD_PERCENT if 500K (50%    ┃
    of 1M) isn't the compaction point you want. "
I would say fix the code so remote provider is  not gated by Ollama.
And what is the current compression model? Does it need the same context window size as the model in use?

### 🤖 Assistant — 2026-10-31T10:09:09Z

<details><summary>Reasoning</summary>

Let me find the relevant code. The override is likely `OLLAMA_CONTEXT_LENGTH` or similar in agent/. Let me search.

I lost prior context (compaction). Let me grep for is_local_endpoint and ollama context override.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import search_files, terminal\nfor pat in [\"is_local_endpoint\", \"OLLAMA_CONTEXT\", \"context_length\", \"JEV_THRESHOLD_PERCENT\"]:\n    r = search_files(pattern=pat, path=\"/Users/davec/.hermes/hermes-agent\", output_mode=\"files_only\", limit=40)\n    print(\"==\", pat)\n    for m in r.get(\"matches\", [])[:40]:\n        print(\" \", m if isinstance(m,str) else m.get(\"path\"))\n"
}
```

### 🤖 Assistant — 2026-10-31T10:09:17Z

<details><summary>Reasoning</summary>

No matches? That's odd. Maybe search_files returns different shape. Let me use terminal grep.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"is_local_endpoint\" --include=*.py | head -20; echo ---; grep -rn \"OLLAMA_CONTEXT\\|context_length\" --include=*.py -l | head -20; echo ---; grep -rn \"JEV_THRESHOLD\\|jev\" --include=*.py -il | head"
}
```

### 🤖 Assistant — 2026-10-31T10:09:42Z

<details><summary>Reasoning</summary>

Now I need to find the specific "override"/clamp referenced. The previous turn mentioned "gate the override on is_local_endpoint(agent.base_url) so a remote provider is never clamped by an Ollama knob". Presumably there's a place where OLLAMA_CONTEXT_LENGTH or a num_ctx / context override is applied. Let me grep for "ollama" in agent/ and run_agent.py.

Also run_agent.py:565 `if uses_implicit_default and base_url and is_local_endpoint(base_url):` — that's context length resolution.

Let me look at that region and grep for ollama context override.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"ollama\" --include=*.py -i agent/ tools/ run_agent.py hermes_cli/*.py | grep -i \"ctx\\|context\\|num_ctx\\|override\\|env\" | head -40"
}
```

### 🤖 Assistant — 2026-10-31T10:09:46Z

<details><summary>Reasoning</summary>

Let me read agent/agent_init_ollama.py fully.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/agent/agent_init_ollama.py"
}
```

### 🤖 Assistant — 2026-10-31T10:09:52Z

<details><summary>Reasoning</summary>

The bug: `_override = model.ollama_num_ctx` is honoured on ANY base_url, including remote provider. Then at line 30-40 it caps num_ctx by context_length, and `_clamp_compressor_to_ollama_num_ctx` clamps the compressor window to num_ctx — even when the base_url is a remote provider (e.g. kilocode). So a stale `ollama_num_ctx: 32768` in the model config for a remote provider would clamp the compressor.

Fix: gate the whole num_ctx configuration on local endpoint. So a remote provider never gets `_ollama_num_ctx` set at all.

Considerations: what if the config sets ollama_num_ctx but base_url is empty? base
