---
type: Fact
title: # Why agent is not running

source: hermes
session_id: local-b37270c7139091a7e8c
description: # Why agent is not running

source: hermes
session_id: local-b37270c7139091a7e8cf0b8164072fab16618939e39ef2226012209bcf63c6df
resource: hermes://session/local-b37270c7139091a7e8cf0b8164072fab16618939e
resource: agentmemory://memory/mem_mvqexx13_94f38e36291b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-10-27T08:18:00.007Z
source: agentmemory
strength: 7
---
# Content

# Why agent is not running

source: hermes
session_id: local-b37270c7139091a7e8cf0b8164072fab16618939e39ef2226012209bcf63c6df
resource: hermes://session/local-b37270c7139091a7e8cf0b8164072fab16618939e39ef2226012209bcf63c6df

# Conversation

- **Session ID:** `local-b37270c7139091a7e8cf0b8164072fab16618939e39ef2226012209bcf63c6df`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-26T11:57:22Z
- **Ended:** 2026-10-26T12:22:21Z
- **Messages:** 25
- **CWD:** `/Users/davec`
- **Tokens:** 43999 in / 4704 out
- **Est. cost:** $-23098.0000

---

### 👤 User — 2026-10-26T11:58:54Z

In telegram I see:
Session ID: 20261026_065605_fe9c0703
Created: 2026-10-26 06:56
Last Activity: 2026-10-26 06:56
Model: kilo-auto/free (kilocode)
Context: 0 / 256,000 (0%)
Lifetime tokens billed: 0 _(not your current context size; use /context)_
Agent Running: No

Connected Platforms: local, email
Why is the agent not running

### 🤖 Assistant — 2026-10-26T11:59:01Z

<details><summary>Reasoning</summary>

The user is asking about a Hermes session shown in telegram: "Agent Running: No". They want to know why the agent isn't running.

Let me look into this. Probably relevant skill: hermes-agent, hermes-session-recovery, hermes-gateway-control. Let me check the actual session state.

Let me first understand: there's a session card displayed in Telegram showing Agent Running: No. The question is why.

I should investigate. Recall memory: Hermes 2-Mac setup, gateway on mini. Telegram is a connected platform presumably via the mini gateway.

Let me check the session logs/state. Where would session info be? ~/.hermes/sessions or state.db.

Let me batch some reads.

Actually first let me load a skill — hermes-session-recovery or hermes-agent. The user's question is about Hermes internals. Let me check the skills list and relevant ones.

Let me do parallel: skill_view hermes-session-recovery, and terminal checks.

Actually, "Agent Running: No" in telegram — this is likely from the /sessions or session status command showing whether a Hermes agent process is currently attached to that session. The session was created 06:56 and last activity 06:56, context 0 tokens, model kilo-auto/free, billed 0.

So the session was created but nothing ever ran. Possibly a session created by a telegram message but the agent never spawned — e.g. because of model error, or the message failed.

Let me check state.db and logs.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/ | head -40; echo ---; ls -lt ~/.hermes/sessions 2>/dev/null | head -10; echo ---; ls -lt ~/.hermes/logs 2>/dev/null | head -15"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-session-recovery"
}
```

### 🤖 Assistant — 2026-10-26T11:59:07Z

<details><summary>Reasoning</summary>

The session ID 20261026_065605_fe9c0703 created 06:56. Let's check sessions.json and gateway logs around 06:56.

Note: current time? Conversation started Oct 26 2026. Let's look at the gateway logs for that session ID.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/logs; grep -n \"fe9c0703\" gateway.log | tail -40; echo \"=== GATEWAY.ERROR ===\"; grep -n \"fe9c0703\" gateway.error.log | tail -30; echo \"=== AGENT ===\"; grep -n \"fe9c0703\" agent.log | tail -30; echo \"=== ERRORS ===\"; grep -n \"fe9c0703\" errors.log | tail -20"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/sessions; python3 -c \"\nimport json\nd=json.load(open('sessions.json'))\nprint(type(d), len(d))\nitems = d if isinstance(d,list) else d.get('sessions',d)\nfor s in (items if isinstance(items,list) else items.values()):\n    if 'fe9c0703' in json.dumps(s):\n        print(json.dumps(s, indent=1)[:3000])\n\""
}
```

### 🤖 Assistant — 2026-10-26T11:59:14Z

<details><summary>Reasoning</summary>

Key detail: `transport_profile: "worker"` and session_key `agent:worker:telegram:dm:7451734548`. So this is the "worker" profile's telegram session. Created 06:56:05, no messages, 0 tokens.

Also "Agent Running: No" — this status is shown presumably by a /status or /sessions command in telegram. It means no agent turn is currently executing for that session. Given context 0 / 256,000 and
