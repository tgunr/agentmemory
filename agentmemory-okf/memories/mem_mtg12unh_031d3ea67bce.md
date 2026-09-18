---
type: Fact
title: # TQ08 Troubleshooting

source: hermes
session_id: 20260826_163518_0d6116
resour
description: # TQ08 Troubleshooting

source: hermes
session_id: 20260826_163518_0d6116
resource: hermes://session/20260826_163518_0d6116

# Conversation

- **Session ID:** `20260826_163518_0d6116`
- **Source:** de
resource: agentmemory://memory/mem_mtg12unh_031d3ea67bce
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260826_163518_0d6116"]
timestamp: 2026-08-30T16:32:49.237Z
source: agentmemory
strength: 7
---
# Content

# TQ08 Troubleshooting

source: hermes
session_id: 20260826_163518_0d6116
resource: hermes://session/20260826_163518_0d6116

# Conversation

- **Session ID:** `20260826_163518_0d6116`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-26T21:36:33Z
- **Ended:** 2026-08-27T16:59:44Z
- **Messages:** 42
- **Tokens:** 138845 in / 7704 out

---

### 👤 User — 2026-08-26T21:36:33Z

hello

### 🤖 Assistant — 2026-08-26T21:36:40Z

<details><summary>Reasoning</summary>

The user said "hello" — this is just a greeting. I should respond in a friendly, natural way as the Hermes agent. No skills need to be loaded since there's no specific task. I'll keep it brief and welcoming.

</details>

Hey! What's up?

### 👤 User — 2026-08-26T21:36:52Z

what model is this?

### 🤖 Assistant — 2026-08-26T21:37:06Z

<details><summary>Reasoning</summary>

The user is asking what model is being used for this conversation. According to the project context, I can see:

"Model: kilo-auto/free
Provider: kilocode"

So the model is "kilo-auto/free" from the provider "kilocode". Let me give a straightforward answer.

</details>

This conversation is using **kilo-auto/free** via **kilocode**.

### 👤 User — 2026-08-26T21:39:32Z

the /tq08 is not switching the model, we should be using its model, not kilo. Also, tq08 model is not in the model list for turboquant

### 🤖 Assistant — 2026-08-26T21:39:40Z

<details><summary>Reasoning</summary>

The user is reporting two issues:

1. The `/tq08` command (a Hermes slash command) is not switching the model — it's staying on kilo-auto/free instead of switching to a TurboQuant model.
2. The `tq08` model is not appearing in the model list for TurboQuant.

This relates to the user's setup where they have Hermes configured to switch between different models, including local TurboQuant (TQ) models. From memory, I know:
- They have Ollama running independently
- They use `/tq08|/tq14|/tq27` slash commands to switch models
- The TQ models are served locally via TurboQuant-MLX
- There's a `tq_switch.sh` script at `/Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh`
- The logic involves tearing down Ollama to free RAM for TQ models

I should investigate:
1. What the `/tq08` slash command actually does
2. What models are available from TurboQuant
3. Why the model isn't switching

Let me start by looking at the slash command setup and the TQ switch script, and also check what models are currently available.

</details>

**Tool call: terminal**

```json
{
  "command": "cat ~/.config/kilo/command/tq08 2>/dev/null || echo \"NOT FOUND\"; echo \"---\"; cat /Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh 2>/dev/null || echo \"NOT FOUND\""
}
```

**Tool call: terminal**

```json
{
  "command": "curl -s http://localhost:8000/v1/models 2>/dev/null | python3 -m json.tool 2>/dev/null || echo \"TQ endpoint not responding\""
}
```

### 🤖 Assistant — 2026-08-26T21:40:01Z

<details><summary>Reasoning</summary>

I can see a few things:

1. The `/tq08` quick command exists at `~/.config/kilo/command/tq08` and runs the `tq_switch.sh` script.
2. The TurboQuant serve is up on :8000 with only ONE model loaded right now: `qwen3-8b-tq4` (which is the /tq08 model).
3. The Hermes config is probably NOT switching away from `kilocode/tencent/hy3:free` when `/tq08` runs — that's why you're still seeing me answer as `kilo-auto/free`.

So the likely problem is in `model_edit.py` — the script that `tq_switch.sh` calls to rewrite `model:` in Hermes's `config.yaml`. If that's failing silently, Hermes keeps the cloud model active even though TQ is serving locally on :8000.

Let me check:
1. What `model_edit.py` does
2. What the current `config.yaml` `model:` block actually says
3. Whether the script succeeds or errors

I can do these independently.

</details>

**Tool call: terminal**

```json
{
  "command": "python3 /Users/davec/MCP_Local/turboquant-mlx-work/model_edit.py --help 2>&1 || echo \"NO HELP\""
}
```

**Tool call: terminal**

```json
{
  "command": "python3 -c \"\nimport yaml\nwith open('/Users/davec/.hermes/config.yaml') as f:\n    cfg = yaml.safe_
