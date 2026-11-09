---
type: Fact
title: # Check if Telegram backend is down

source: hermes
session_id: local-f83d47a5eb
description: # Check if Telegram backend is down

source: hermes
session_id: local-f83d47a5eba11397de3d2eb47aa1a2ac8f640512ae3c7df960feb7623d455ed5
resource: hermes://session/local-f83d47a5eba11397de3d2eb47aa1a2ac
resource: agentmemory://memory/mem_mw4rhklo_095f716b32bd
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-06T09:17:58.839Z
source: agentmemory
strength: 7
---
# Content

# Check if Telegram backend is down

source: hermes
session_id: local-f83d47a5eba11397de3d2eb47aa1a2ac8f640512ae3c7df960feb7623d455ed5
resource: hermes://session/local-f83d47a5eba11397de3d2eb47aa1a2ac8f640512ae3c7df960feb7623d455ed5

# Conversation

- **Session ID:** `local-f83d47a5eba11397de3d2eb47aa1a2ac8f640512ae3c7df960feb7623d455ed5`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-05T09:56:16Z
- **Messages:** 30
- **CWD:** `/Users/davec`
- **Tokens:** 45485 in / 5657 out
- **Est. cost:** $-23742.0000

---

### 👤 User — 2026-11-05T09:56:17Z

telegram backend is down?

### 🤖 Assistant — 2026-11-05T09:56:20Z

<details><summary>Reasoning</summary>

The user asks: "telegram backend is down?" Let me check Telegram gateway status. There's a skill `telegram-bots` under integrations. Let me check gateway status quickly.

Let me look at what's running: hermes gateway status, launchctl, logs. Let me batch a few commands.

First load skill? The telegram-bots skill might be relevant. Let's load it and check status in parallel.

</details>

**Tool call: skill_view**

```json
{
  "name": "telegram-bots"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes gateway status 2>&1 | head -40; echo \"---LAUNCHCTL---\"; launchctl list | grep -i -E 'hermes|telegram' ; echo \"---PROC---\"; ps aux | grep -i -E 'hermes.*gateway|telegram' | grep -v grep | head -20"
}
```

### 🤖 Assistant — 2026-11-05T09:56:28Z

<details><summary>Reasoning</summary>

The user asks "telegram backend is down?" — meaning the Hermes Telegram gateway/interface (Telegram channel for Hermes). Let's check gateway logs for telegram errors and the telegram connection config.

Let me check logs for telegram-related lines and config.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes; echo \"---CONFIG telegram---\"; grep -n -i -A12 '^telegram' config.yaml | head -40; echo \"---LOG tail grep---\"; grep -i -E 'telegram' logs/gateway.log | tail -30; echo \"---ERR---\"; grep -i -E 'telegram' logs/gateway.error.log | tail -30"
}
```

### 🤖 Assistant — 2026-11-05T09:56:33Z

<details><summary>Reasoning</summary>

So at 02:30 Telegram polling failed with conflict — another process using the same bot token. Also earlier network issues. Let's check current state: is there another process using the token? The `warden` process running on Desktop/telegram-warden with `--send` may be using the same bot token! That's a candidate. Let's check warden's token vs hermes telegram token.

Check current: is telegram adapter connected now? Check gateway status/log tail after 02:30. Also check if there's a "telegram" status command.

Let me grep the log for lines after 02:30 and check warden token.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes; echo \"---after 02:30---\"; awk '$0 >= \"2026-11-05 02:30\"' logs/gateway.log | grep -i -E 'telegram|connected|adapter' | tail -20; echo \"---TOKENS---\"; python3 - <<'EOF'\nimport os,re,pathlib,json\ndef find(path):\n    try: t=pathlib.Path(path).read_text(errors='ignore')\n    except Exception as e: return None\n    m=re.findall(r'(\\d{8,12}):[A-Za-z0-9_-]{30,}',t)\n    return set(m)\npairs={\n 'hermes config': os.path.expanduser('~/.hermes/config.yaml'),\n 'hermes dotenv': os.path.expanduser('~/.hermes/.env'),\n 'warden env': os.path.expanduser('~/Desktop/telegram-warden/.env'),\n 'warden config': os.path.expanduser('~/Desktop/telegram-warden/config.yaml'),\n}\nfor k,v in pairs.items():\n    s=find(v)\n    print(k, '->', [x.split(':')[0] for x in s] if s else s)\nEOF"
}
```

### 🤖 Assistant — 2026-11-05T09:56:39Z

<details><summary>Reasoning</summary>

There it is: warden uses token 9228442863 — the same as one of the two tokens in hermes dotenv. So the warden bot process (running since Sun05AM) is holding getUpdates for the same bot, causing the polling conflict and killing the hermes Telegram home adapter at 02:30.

Wait — which token does the home adapter use? Two tokens in dotenv: 8933113586 and 9228442863. Likely TELEGRAM_BOT_TOKEN=8933... (home) and WARDEN_BOT_TOKEN=9228... warden uses 9228... The conflicting one is the "home" profile adapter — which token? Let's check the dotenv var names. If
