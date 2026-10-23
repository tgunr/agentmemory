---
type: Fact
title: # Fix TurboQuant gateway restart failure on :8000

source: hermes
session_id: 20
description: # Fix TurboQuant gateway restart failure on :8000

source: hermes
session_id: 20261021_033005_284670
resource: hermes://session/20261021_033005_284670

# Conversation

- **Session ID:** `20261021_0330
resource: agentmemory://memory/mem_mvj9ptvb_fd427fef04d5
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-22T08:17:21.358Z
source: agentmemory
strength: 7
---
# Content

# Fix TurboQuant gateway restart failure on :8000

source: hermes
session_id: 20261021_033005_284670
resource: hermes://session/20261021_033005_284670

# Conversation

- **Session ID:** `20261021_033005_284670`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-21T08:30:49Z
- **Messages:** 121
- **CWD:** `/Volumes/davec`
- **Tokens:** 86698 in / 26542 out
- **Est. cost:** $-32551.0000

---

### 👤 User — 2026-10-21T08:30:49Z

TurboQuant 14 up on :8000 (/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4)
model: -> /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
WARN: gateway restart failed — run /reset manually

### 🤖 Assistant — 2026-10-21T08:30:54Z

**Tool call: terminal**

```json
{
  "command": "curl -s -m 5 http://127.0.0.1:8000/v1/models | head -c 500; echo; echo \"exit=$?\"",
  "timeout": 15
}
```

### 🤖 Assistant — 2026-10-21T08:31:00Z

TurboQuant 14 is up on :8000. `/v1/models` lists `/Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4`, so the model path you gave is the one being served.

The gateway restart failed, so run `/reset` in chat yourself. I haven't touched the gateway, and I can't confirm it's healthy until that reset succeeds.

### 👤 User — 2026-10-21T08:32:38Z

restarted the desktop, same error

### 🤖 Assistant — 2026-10-21T08:32:46Z

**Tool call: terminal**

```json
{
  "command": "hostname; id -u; launchctl print-disabled user/$(id -u) 2>/dev/null | grep -i hermes; launchctl list | grep -i -E 'hermes|gateway' ; ls -t ~/.hermes/logs 2>/dev/null | head -5; tail -n 40 ~/.hermes/logs/gateway*.log 2>/dev/null | tail -n 40",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-10-21T08:33:38Z

**Tool call: terminal**

```json
{
  "command": "tail -n 25 ~/.hermes/logs/errors.log; echo ---; grep -i -E 'restart|reset|gateway' ~/.hermes/logs/desktop.log | tail -n 20; echo ---; ps -p 32603 -o pid,etime,command; curl -s -m 5 -o /dev/null -w '%{http_code}\\n' http://127.0.0.1:8642/health 2>/dev/null",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-10-21T08:33:51Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes; grep -n -i -B2 -A6 'turboquant' config.yaml | head -n 40; echo ---; launchctl print user/501/ai.hermes.gateway 2>&1 | grep -E 'state|path|last exit|program' | head; echo ---; tail -n 15 ~/.hermes/logs/gateway.error.log 2>/dev/null",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-10-21T08:34:13Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes; grep -n -E '^(providers|custom_providers|provider_profiles):|name: *(custom|local|turbo)' config.yaml | head; grep -n -A4 -E '^custom_providers|^providers' config.yaml | head -n 30; grep -n 'TERMINAL_CWD\\|terminal:' -A0 config.yaml | head -n 5",
  "timeout": 20
}
```

### 🤖 Assistant — 2026-10-21T08:34:21Z

The restart isn't the real problem. `~/.hermes/config.yaml` sets `model.provider: turboquant`, but no provider named `turboquant` is defined. The log shows `Unknown provider 'turboquant'` on every session start, and Hermes falls back to `kilocode / poolside/laguna-s-2.1:free`. The server on :8000 is fine.

The `providers:` section (line 759) has `apple-fm` and nothing for turboquant. I'd add:

```yaml
  turboquant:
    api: http://127.0.0.1:8000/v1
    api_key: not-needed
    default_model: /Users/davec/MCP_Local/turboquant-mlx-work/qwen3-14b-tq4
```

Then restart the gateway with `launchctl kickstart -k user/501/ai.hermes.gateway`, not a kill.

I haven't made either change. Should I apply the provider block and restart the gateway? Note that the gateway launchd job (PID 32603) has been up for 23h with last exit status 75, and the `launchctl print` lookup came back empty, so I haven't confirmed the restart path yet.

### 👤 User — 2026-10-21T08:34:34Z

yes

### 🤖 Assistant — 2026-10-21T08:34:40Z

<details><summary>Reasoning</summary>

Let me load the hermes-agent skill since this is Hermes config work. Actually the user said "yes" — apply the provider block and restart gateway.

Let me first check the skill. Given rules, load hermes-agent skill. But keep it efficient. Let me check config around line 759 and check the model config, and also check wheth
