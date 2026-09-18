---
type: Fact
title: # AgentMemory open session count query

source: hermes
session_id: 20260721_0654
description: # AgentMemory open session count query

source: hermes
session_id: 20260721_065448_4675e7
resource: hermes://session/20260721_065448_4675e7

# Conversation

- **Session ID:** `20260721_065448_4675e7`

resource: agentmemory://memory/mem_mspdzts3_4ab7e0d15cfb
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:36.428Z
source: agentmemory
strength: 7
---
# Content

# AgentMemory open session count query

source: hermes
session_id: 20260721_065448_4675e7
resource: hermes://session/20260721_065448_4675e7

# Conversation

- **Session ID:** `20260721_065448_4675e7`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-07-21T11:54:49Z
- **Messages:** 12
- **CWD:** `/Users/davec`
- **Tokens:** 80461 in / 1075 out

---

### 👤 User — 2026-07-21T11:54:50Z

route this: how many open sessions in agentmemory?

### 🤖 Assistant — 2026-07-21T11:54:58Z

<details><summary>Reasoning</summary>

The user wants to know how many open sessions are in AgentMemory. I should query the AgentMemory service. According to the memory, AgentMemory is on port 3111 and I should verify livez at http://127.0.0.1:3111/agentmemory/livez first. Then I need to find an endpoint for sessions or open/active sessions.

I'll run a quick curl to check livez, and also inspect the AgentMemory API endpoint structure. Since these are independent, I can batch them.

</details>

**Tool call: terminal**

```json
{
  "command": "curl -s http://127.0.0.1:3111/agentmemory/livez && echo '---' && curl -s http://127.0.0.1:3111/agentmemory/api/sessions | head -c 3000",
  "timeout": 15
}
```

### 🤖 Assistant — 2026-07-21T11:55:04Z

<details><summary>Reasoning</summary>

The curl to `/agentmemory/livez` returned `ok`, but the second request to `/agentmemory/api/sessions` produced odd shell output (`Popping nested shell level 2-->1`). I’m not going to blindly repeat the same request—I’m going to check whether Hermes already has a dedicated AgentMemory/session integration skill or known API shape, then query the actual sessions endpoint once with that context.

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

### 🤖 Assistant — 2026-07-21T11:55:12Z

<details><summary>Reasoning</summary>

Health check confirms AgentMemory is up. Now I’ll probe `/sessions` and the first session’s observations, exactly as the skill prescribes.

</details>

**Tool call: terminal**

```json
{
  "command": "SECRET=\"$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env 2>/dev/null | head -1 | cut -d= -f2-)\" && \necho '--- sessions ---' && \ncurl -s -H \"Authorization: Bearer ${SECRET}\" http://127.0.0.1:3111/agentmemory/sessions && \necho && \necho '--- observations probe ---' && \nSIDS=\"$(curl -s -H \"Authorization: Bearer ${SECRET}\" http://127.0.0.1:3111/agentmemory/sessions | python3 -c \"import sys,json; d=json.load(sys.stdin); print(d[0]['id'] if d else '')\")\" && \nif [ -n \"$SIDS\" ]; then curl -s -H \"Authorization: Bearer ${SECRET}\" \"http://127.0.0.1:3111/agentmemory/observations?sessionId=$SIDS\" | head -c 500; else echo 'no sessions'; fi",
  "timeout": 20
}
```

### 🤖 Assistant — 2026-07-21T11:55:19Z

<details><summary>Reasoning</summary>

The `/sessions` output is a JSON object with a top-level `sessions` array, so my `d[0]` indexing was wrong. I already have the open sessions from the main response though. Let me extract the count of active sessions directly and also do a proper observations probe.

</details>

**Tool call: terminal**

```json
{
  "command": "python3 -c \"import json; s=json.load(open('/dev/stdin')); print(len(s.get('sessions',[]))); print('active=',''.join(str(r['status']=='active') for r in s['sessions']).count('True'))\"",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-07-21T11:55:46Z

<details><summary>Reasoning</summary>

I already have the full sessions JSON from the previous curl call; I'll just count from that output instead of trying to re-parse. The earlier response showed all sessions with their statuses. Let me count the active ones manually from that data.

</details>

**Tool call: terminal**

```json
{
  "command": "SECRET=\"$(grep '^AGENTMEMORY_SECRET=' ~/.agentmemory/.env 2>/dev/null | head -1 | cut -d= -f2-)\" && curl -s -H \"Authorization: Bearer ${SECRET}\" http://127.0.0.1:3111/agentmemory/sessions > /tmp/am_sessions.json && python3 -c \"import json; d=json.load(open('/tmp/am_sessions.json')); print('total=',len(d.get('sessions',[]))); print('active=',[r.get('status') for r in d.get('sess
