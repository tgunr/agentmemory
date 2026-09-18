---
type: Fact
title: # Hermex Troubleshooting

source: hermes
session_id: 20260617_100800_e0359a
reso
description: # Hermex Troubleshooting

source: hermes
session_id: 20260617_100800_e0359a
resource: hermes://session/20260617_100800_e0359a

# Conversation

- **Session ID:** `20260617_100800_e0359a`
- **Source:** 
resource: agentmemory://memory/mem_mspdz8e7_66123a2c1e05
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260617_100800_e0359a"]
timestamp: 2026-08-12T01:04:08.712Z
source: agentmemory
strength: 7
---
# Content

# Hermex Troubleshooting

source: hermes
session_id: 20260617_100800_e0359a
resource: hermes://session/20260617_100800_e0359a

# Conversation

- **Session ID:** `20260617_100800_e0359a`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-17T15:09:28Z
- **Ended:** 2026-06-17T15:25:06Z
- **Messages:** 89
- **Tokens:** 204 in / 12399 out
- **Est. cost:** $0.2053

---

### 👤 User — 2026-06-17T15:09:29Z

my Hermex  app on ios is not connected, help me troubleshoot

### 🤖 Assistant — 2026-06-17T15:13:18Z

<details><summary>Reasoning</summary>

The user wants help troubleshooting their Hermes app on iOS that isn't connecting. Let me first check my memory/profile, then look at the available skills and documentation.

From memory, I know:
- This is Dave, who uses Hermes Agent
- For Hermes configuration issues, I should load the `hermes-agent` skill
- The docs are at https://hermes-agent.nousresearch.com/docs

Let me load the hermes-agent skill and also search for any relevant skills about iOS or mobile connectivity.

Actually, let me look at what skills might be relevant:
- `hermes-agent` - Configure, extend, or contribute to Hermes Agent


- `hermes-session-management` - Managing sessions

The `hermes-agent` skill seems most relevant here. I should pull that up and check my memory to see if there's anything I've noted about their setup before diving in.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: memory**

```json
{
  "action": "add",
  "target": "user",
  "content": "Has a Hermes app on iOS that they use for connecting to the Hermes agent."
}
```

### 🤖 Assistant — 2026-06-17T15:13:18Z

<details><summary>Reasoning</summary>

The user mentioned "Hermex app on iOS." This is likely the Hermes mobile companion app for iOS that connects to their Hermes agent. Let me think about what I know and what could help.

Looking at the skill content, I don't see specific iOS app troubleshooting. But I can see there's a reference about remote access (`references/remote-access-setup.md`) which might be relevant. Let me also check the docs or think about common connection issues.

The Hermes iOS app (sometimes called "Hermex" or just the Hermes mobile app) typically connects to a running Hermes instance. Common connection issues could be:


Since they're using "Hermex" specifically, this is likely a third-party iOS client connecting to a Hermes gateway. The most probable culprits are network connectivity—whether the phone and Mac are on the same network—and whether the gateway has the right API server adapter configured for incoming connections.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": "references/remote-access-setup.md"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes gateway status 2>&1; echo \"---\"; hermes status --all 2>&1 | head -40"
}
```

### 🤖 Assistant — 2026-06-17T15:13:18Z

<details><summary>Reasoning</summary>

Good - the gateway is running (PID 61590). Now I need to understand what "Hermex app on iOS" is. It's likely the Hermes WebUI accessed from a phone, or possibly a dedicated iOS app. Let me check what adapters are configured in the gateway - specifically whether there's an API server or WebUI set up.

Let me check the gateway config and logs for more info.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config 2>&1 | grep -A 5 -i \"gateway\\|api_server\\|webui\\|adapter\" ; echo \"---LOGS---\"; tail -40 ~/.hermes/logs/gateway.log 2>/dev/null; echo \"---ERRORS---\"; tail -20 ~/.hermes/logs/gateway.error.log 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -r \"api_server\\|webui\\|hermex\\|ios\" ~/.hermes/config.yaml 2>/dev/null; echo \"---\"; grep \"platform\\|adapter\\|enabled\" ~/.hermes/config.yaml | head -20"
}
```

### 🤖 Assistant — 2026-06-17T15:13:18Z

<details><summary>Reasoning</summary>

I see the gateway is running with 2 platform(s) connected. The logs mention Email and one other platform. Let me check the actual platform configuration to see what's set up for the 
