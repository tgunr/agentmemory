---
type: Fact
title: # Find local model for offline diagnosis

source: hermes
session_id: 20261020_04
description: # Find local model for offline diagnosis

source: hermes
session_id: 20261020_042909_69904a
resource: hermes://session/20261020_042909_69904a

# Conversation

- **Session ID:** `20261020_042909_69904a
resource: agentmemory://memory/mem_mvhua4pd_cc8e56bd98ef
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-21T08:17:28.492Z
source: agentmemory
strength: 7
---
# Content

# Find local model for offline diagnosis

source: hermes
session_id: 20261020_042909_69904a
resource: hermes://session/20261020_042909_69904a

# Conversation

- **Session ID:** `20261020_042909_69904a`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-20T09:29:10Z
- **Messages:** 21
- **CWD:** `/Volumes/davec`
- **Tokens:** 339018 in / 5731 out
- **Est. cost:** $-230096.0000

---

### 👤 User — 2026-10-20T09:29:10Z

If my internet goes down what local model can I use to help diagnose problems? Hermes is not going to be able to use Ollama because of the context window for smaller models

### 🤖 Assistant — 2026-10-20T09:29:17Z

<details><summary>Reasoning</summary>

Evaluating offline local LLM options by comparing memory, context window, and CPU performance for diagnostics when Ollama is unavailable.

</details>

**Tool call: skill_view**

```json
{
  "name": "local-model-providers"
}
```

**Tool call: skill_view**

```json
{
  "name": "turboquant-mlx-run"
}
```

**Tool call: skill_view**

```json
{
  "name": "tq-serve-debug"
}
```

**Tool call: skill_view**

```json
{
  "name": "mlops-tools"
}
```

### 🤖 Assistant — 2026-10-20T09:29:26Z

<details><summary>Reasoning</summary>

Balancing local LLM options for offline diagnostics by comparing context length and CPU compatibility of llama, MLX, and Apple FM models.

</details>

**Tool call: terminal**

```json
{
  "command": "cat /Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh 2>/dev/null | head -n 60; echo \"---CONFIG---\"; grep -A15 \"providers:\" ~/.hermes/config.yaml 2>/dev/null | head -n 80; echo \"---PORTS---\"; lsof -nP -iTCP:8000 -sTCP:LISTEN 2>&1 | head; lsof -nP -iTCP:11434 -sTCP:LISTEN 2>&1 | head; echo \"---FM---\"; which fm; fm available 2>&1 | head -n 20"
}
```

### 🤖 Assistant — 2026-10-20T09:30:30Z

<details><summary>Reasoning</summary>

Evaluating local model options and context limits for offline diagnostics given port and provider configs.Comparing small-model limits against larger quantized options and a zero-VRAM fallback.

</details>

Don't use Ollama small models — context too small for Hermes agent history.

Use these, all offline with big context:

**1. Best: TQ 14B — `qwen3-14b-tq4`**
* :8000, 131k context, ~8GB resident, ~5.5 tok/s, fits 32GB Mac
* `bash /Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh 14` — or `/tq14`
* Provider `turboquant` already wired. Currently down — no listener on :8000, Ollama only on :11434.

**2. Harder diagnosis: TQ 27B — `Qwen3.8-27B-tq4-g64`**
* Same :8000 via `serve_vlm`, slower, more RAM. Only one TQ at a time.
* `tq_switch.sh 27` — or `/tq27`

**3. Fast triage: TQ 8B — `qwen3-8b-tq4`**
* `tq_switch.sh 8` — less RAM, faster, weaker.

**4. Zero-RAM fallback: Apple FM `system`**
* AFM 3 20B MoE on Neural Engine, no GPU contention. `fm` available now.
* `fm serve --port 8001` — provider `apple-fm` already in config. Must set `agent.reasoning_effort: none` or it 400s.

**5. LAN fallback if mini full: pve.local**
* `Qwen2.5-14B-Instruct q4_K_M`, llama.cpp `127.0.0.1:8080`, `n_ctx 131072`, ~3 tok/s CPU. Works if LAN up but WAN down.

Always verify with real `POST /v1/chat/completions max_tokens=12`, not `/health` — `/health` stays green when wedged.

### 👤 User — 2026-10-20T09:33:11Z

How do I startup TQ? Is it much better than Ollama.?

### 🤖 Assistant — 2026-10-20T09:33:29Z

<details><summary>Reasoning</summary>

Evaluating TQ startup steps and comparing it to Ollama using available tool details.Contrasting TQ and Ollama on context, memory, speed, and tool support before outlining startup steps.

</details>

Use the switcher, not manual `serve`:

```bash
bash /Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh 14
# 8 / 14 / 27 — only one fits in 32GB, switch unloads first
# stop — unload + restore cloud model
```

Or in chat: `/tq14` `/tq27` `/tq08` (per-profile `quick_commands`, same script).

What it does: kills wedged serve by exact PID, tears down idle Ollama to free RAM, starts one clean model on `:8000` via launchd `com.turboquant.serve`, flips Hermes `model:` to `turboquant` provider + bounces gateway.

Verify — d
