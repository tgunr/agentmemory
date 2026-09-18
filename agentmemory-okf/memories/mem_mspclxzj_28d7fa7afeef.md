---
type: Fact
title: # Hermes Gateway Remote Connection Authentication Failure

source: hermes
sessio
description: # Hermes Gateway Remote Connection Authentication Failure

source: hermes
session_id: 20260629_044157_a49924
resource: hermes://session/20260629_044157_a49924

# Conversation

- **Session ID:** `20260
resource: agentmemory://memory/mem_mspclxzj_28d7fa7afeef
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T00:25:49.121Z
source: agentmemory
strength: 7
---
# Content

# Hermes Gateway Remote Connection Authentication Failure

source: hermes
session_id: 20260629_044157_a49924
resource: hermes://session/20260629_044157_a49924

# Conversation

- **Session ID:** `20260629_044157_a49924`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-29T09:43:20Z
- **Ended:** 2026-06-29T10:35:00Z
- **Messages:** 120
- **CWD:** `/Volumes/davec`
- **Tokens:** 486 in / 31771 out
- **Est. cost:** $0.5206

---

### 👤 User — 2026-06-29T09:43:20Z

is the hermes gateway listening on all interfaces on port 8787? My PC Hermes does not connect to remote gateway http://192.168.88.7:8787

### 🤖 Assistant — 2026-06-29T09:52:25Z

<details><summary>Reasoning</summary>

The user is asking about whether the Hermes gateway is listening on all interfaces on port 8787, and they're having trouble connecting from their PC to the gateway at 192.168.88.7:8787. Let me check the gateway configuration and what's actually listening.

</details>

**Tool call: terminal**

```json
{
  "command": "lsof -i :8787 -P -n 2>/dev/null | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes config get web_server 2>/dev/null || echo \"---\"; hermes config get gateway 2>/dev/null"
}
```

### 🤖 Assistant — 2026-06-29T09:52:25Z

<details><summary>Reasoning</summary>

Good news - the gateway IS listening on all interfaces (`*:8787` means 0.0.0.0:8787). So the bind address isn't the problem. Let me check the gateway config more carefully to see if there's something else going on - like an auth token issue, CORS, or firewall.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes config get web_server.host 2>/dev/null; hermes config get web_server.port 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "pfctl -sr 2>/dev/null | grep 8787 || echo \"No pf rules for 8787\""
}
```

**Tool call: terminal**

```json
{
  "command": "/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "curl -s -o /dev/null -w \"%{http_code}\" http://192.168.88.7:8787/ 2>/dev/null || echo \"curl failed\""
}
```

### 🤖 Assistant — 2026-06-29T09:52:25Z

<details><summary>Reasoning</summary>

So from the Mac itself, `curl` to `http://192.168.88.7:8787/` returns a 302 (redirect), which means the gateway is responding. The macOS firewall is disabled, no pf rules blocking port 8787. The gateway is bound to `*:8787` (all interfaces).

So the issue is likely on the PC side or the network. Let me check:
1. What 192.168.88.7 actually is - is it this Mac's IP?
2. Is there a network connectivity issue between the PC and this Mac?
3. Is the PC trying to connect to the right URL?

Let me verify the Mac's IP addresses.

</details>

**Tool call: terminal**

```json
{
  "command": "ifconfig | grep \"inet \" | grep -v 127.0.0.1"
}
```

**Tool call: terminal**

```json
{
  "command": "curl -sv http://192.168.88.7:8787/ 2>&1 | head -30"
}
```

### 🤖 Assistant — 2026-06-29T09:52:25Z

<details><summary>Reasoning</summary>

Now I can see the issue. The gateway is running fine, listening on all interfaces, responding on 192.168.88.7:8787. But look at the CSP (Content Security Policy) header — specifically the `connect-src` directive:

```
connect-src 'self' http://127.0.0.1:* http://localhost:* http://ipc.localhost https://127.0.0.1:* https://localhost:* ws://127.0.0.1:* ws://localhost:* https://cdn.jsdelivr.net;
```

It only allows WebSocket connections to `127.0.0.1` and `localhost` — NOT to `192.168.88.7`. So when the PC browser loads the WebUI from `http://192.168.88.7:8787`, the page loads fine (the 302 redirect to login works), but the WebSocket connection that the WebUI uses to communicate with the gateway will be blocked by the browser's CSP enforcement.

This is almost certainly the issue. The WebUI front-end tries to establish a WebSocket to the gateway, but the CSP only allows `ws://127.0.0.1:*` and `ws://localhost:*`, not `ws://192.168.88.7:*`.

Let me check how to configure this. Let me look at the hermes-agent skill for webui configuration.

</details>

**Tool call: skill_view**

```json
{
  "name
