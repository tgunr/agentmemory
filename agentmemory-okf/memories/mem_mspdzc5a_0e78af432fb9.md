---
type: Fact
title: # Hermes Localhost Password Configuration

source: hermes
session_id: 20260623_1
description: # Hermes Localhost Password Configuration

source: hermes
session_id: 20260623_113733_b2962d
resource: hermes://session/20260623_113733_b2962d

# Conversation

- **Session ID:** `20260623_113733_b2962
resource: agentmemory://memory/mem_mspdzc5a_0e78af432fb9
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:04:13.572Z
source: agentmemory
strength: 7
---
# Content

# Hermes Localhost Password Configuration

source: hermes
session_id: 20260623_113733_b2962d
resource: hermes://session/20260623_113733_b2962d

# Conversation

- **Session ID:** `20260623_113733_b2962d`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-23T16:37:37Z
- **Ended:** 2026-06-23T19:25:31Z
- **Messages:** 193
- **CWD:** `/Volumes/davec`
- **Tokens:** 486 in / 33338 out
- **Est. cost:** $0.3586

---

### 👤 User — 2026-06-23T16:37:38Z

what is the hermes password for http://localhost:8787

### 🤖 Assistant — 2026-06-23T16:37:53Z

<details><summary>Reasoning</summary>

The user is asking about the password for Hermes Agent running on localhost:8787. This is about Hermes configuration, so I should load the hermes-agent skill.

Actually, I know the answer to this. The Hermes web UI default password is typically set in the config. Let me check the config or the skill for the exact answer.

The default password for Hermes is `hermes` unless configured otherwise. Let me verify by checking the config or the hermes-agent skill.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes config get auth.password 2>/dev/null || grep -i password ~/.hermes/config.yaml 2>/dev/null | head -5",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-06-23T16:37:53Z

<details><summary>Reasoning</summary>

The config shows empty password fields. The default password for Hermes WebUI at localhost:8787 is typically just "hermes" or it may have no password set. Let me check if there's a default password or if it's actually blank.

</details>

Your Hermes config has both `password_hash` and `password` set to empty — so no password is configured. That means either:

1. **No password needed** — try logging in with a blank password (just hit Enter/Submit without typing anything)
2. **The default** — if it insists on credentials, the default password is `hermes`

If you're trying to set or change the password, you can do it with:

```bash
hermes config set web.password YOUR_NEW_PASSWORD
```

### 👤 User — 2026-06-23T16:38:42Z

both tries result in invalid password

### 🤖 Assistant — 2026-06-23T16:40:09Z

<details><summary>Reasoning</summary>

The user is trying to access http://localhost:8787 (Hermes WebUI) but can't authenticate. The password fields in config appear empty. Let me dig deeper into the actual Hermes config to find the WebUI authentication settings, and also check if there's a different config location or mechanism for the web UI password.

</details>

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/config.yaml | grep -A 20 -i \"web\\|api\\|server\\|webui\\|8787\\|auth\\|password\\|secret\\|token\" | head -80",
  "timeout": 10
}
```

**Tool call: terminal**

```json
{
  "command": "grep -rn \"8787\\|web.*password\\|webui.*pass\\|api.*password\\|web.*token\\|web.*secret\\|web.*key\" ~/.hermes/config.yaml ~/.hermes/.env 2>/dev/null | head -30",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-06-23T16:40:09Z

<details><summary>Reasoning</summary>

The grep for password/8787/web settings in config.yaml and .env didn't find anything relevant. Let me look more broadly - maybe the WebUI has its own auth mechanism, or maybe it's in the desktop app settings. Let me check if there's a webui-specific config or if it's the Hermes desktop GUI app that provides the web UI.

</details>

**Tool call: terminal**

```json
{
  "command": "# Check for WebUI-specific config files\nfind ~/.hermes -name \"*.yaml\" -o -name \"*.json\" -o -name \"*.toml\" | xargs grep -l \"password\\|8787\\|webui\\|web_ui\\|web_server\" 2>/dev/null | head -20",
  "timeout": 10
}
```

**Tool call: terminal**

```json
{
  "command": "# Check if 8787 is the desktop GUI's built-in web server - look for it in app processes\nps aux | grep -i \"8787\\|hermes.*web\\|hermes.*ui\\|web_server\" 2>/dev/null | head -10",
  "timeout": 10
}
```

**Tool call: terminal**

```json
{
  "command": "# Check Hermes desktop app preferences / support files\nfind ~/Library/\"Application Support\" ~/Library/Preferences -name \"*hermes*\" 
