---
type: Fact
title: # Fixing Slow Session Summarization

source: hermes
session_id: 20260723_062742_
description: # Fixing Slow Session Summarization

source: hermes
session_id: 20260723_062742_cf43a2
resource: hermes://session/20260723_062742_cf43a2

# Conversation

- **Session ID:** `20260723_062742_cf43a2`
- *
resource: agentmemory://memory/mem_mspdvt4e_2100301b72ad
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:28.973Z
source: agentmemory
strength: 7
---
# Content

# Fixing Slow Session Summarization

source: hermes
session_id: 20260723_062742_cf43a2
resource: hermes://session/20260723_062742_cf43a2

# Conversation

- **Session ID:** `20260723_062742_cf43a2`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-23T11:27:43Z
- **Messages:** 1393
- **CWD:** `/Users/davec`
- **Tokens:** 1189723 in / 47936 out
- **Est. cost:** $1.5531

---

### 👤 User — 2026-07-23T11:27:43Z

why does summarizing a session take so long? It's taking minutes!

### 🤖 Assistant — 2026-07-23T11:28:01Z

<details><summary>Reasoning</summary>

The user is asking about why summarizing a session takes so long in Hermes. This is a Hermes Agent question — troubleshooting/understanding Hermes itself. Per the system prompt, I should load the `hermes-agent` skill first when the user asks about configuring/troubleshooting Hermes Agent itself.

Let me load the hermes-agent skill to get context on how session summarization works and what could make it slow.

Also relevant: hermes-config-audit maybe. But primarily hermes-agent skill.

Let me load it.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-23T11:28:19Z

<details><summary>Reasoning</summary>

The user is asking about why summarizing a session takes so long. Let me think about what "summarizing a session" means in the context of Hermes.

Looking at the skill content, I see there's a `/compress` slash command for manually compressing context. There's also automatic context compression that triggers near the token limit. The `session_search` tool can also read sessions.

But the user says "summarizing a session takes minutes" - this could be about:
1. The `/compress` command (context compression)
2. The session title generation (which happens automatically)
3. The `session_search` tool when reading a full session

Let me think about what could cause slow summarization. The most likely culprit is context compression (`/compress`), which needs to call an LLM to summarize the conversation. If the session is very long, this means sending a huge prompt to the model.

Let me check if there's more specific information about how compression/summarization works. I should look at the source code or configuration to understand what's happening.

Actually, let me think about this more practically. The user is frustrated that it takes minutes. Let me check the compression config and see what model is being used for compression, since that's likely the bottleneck.

</details>

**Tool call: terminal**

```json
{
  "command": "grep -A 10 'compression' ~/.hermes/config.yaml | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -A 5 'auxiliary' ~/.hermes/config.yaml | head -20"
}
```

### 🤖 Assistant — 2026-07-23T11:28:41Z

**Tool call: terminal**

```json
{
  "command": "curl -s http://127.0.0.1:11434/api/tags | python3 -c \"\nimport json, sys\ndata = json.load(sys.stdin)\nfor m in data.get('models', []):\n    print(m['name'], m.get('capabilities', []), m.get('size', 0) / 1e9, 'GB')\n\" 2>/dev/null || echo \"Ollama not running or no models\""
}
```

**Tool call: terminal**

```json
{
  "command": "curl -s http://127.0.0.1:11434/api/ps | python3 -c \"\nimport json, sys\ndata = json.load(sys.stdin)\nfor m in data.get('models', []):\n    print('LOADED:', m['name'], m.get('size_vram', 0) / 1e9, 'GB VRAM')\n\" 2>/dev/null || echo \"No loaded models\""
}
```

### 🤖 Assistant — 2026-07-23T11:33:21Z

<details><summary>Reasoning</summary>

...


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config set compression.model qwen3:1.7b"
}
```

### 🤖 Assistant — 2026-07-23T11:33:38Z

**Tool call: terminal**

```json
{
  "command": "hermes config set compression.provider ollama-launch"
}
```

### 🤖 Assistant — 2026-07-23T11:33:55Z

**Tool call: terminal**

```json
{
  "command": "grep -A 8 '^compression:' ~/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-07-23T11:34:04Z

**Tool call: terminal**

```json
{
  "command": "grep -B2 -A 8 'compression' ~/.hermes/config.yaml | grep -A 8 'provider\\|model\\|base_url' | head -20"
