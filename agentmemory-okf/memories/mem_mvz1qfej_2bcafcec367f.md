---
type: Fact
title: # Move session to profile cc fails

source: hermes
session_id: local-c798b807ec4
description: # Move session to profile cc fails

source: hermes
session_id: local-c798b807ec45a329e5ddb492ad026a476129607487a7ecffa7d8b7c930295a82
resource: hermes://session/local-c798b807ec45a329e5ddb492ad026a476
resource: agentmemory://memory/mem_mvz1qfej_2bcafcec367f
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-11-02T09:18:11.196Z
source: agentmemory
strength: 7
---
# Content

# Move session to profile cc fails

source: hermes
session_id: local-c798b807ec45a329e5ddb492ad026a476129607487a7ecffa7d8b7c930295a82
resource: hermes://session/local-c798b807ec45a329e5ddb492ad026a476129607487a7ecffa7d8b7c930295a82

# Conversation

- **Session ID:** `local-c798b807ec45a329e5ddb492ad026a476129607487a7ecffa7d8b7c930295a82`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-01T12:54:42Z
- **Ended:** 2026-11-01T16:19:48Z
- **Messages:** 121
- **CWD:** `/Volumes/davec`
- **Tokens:** 81425 in / 19160 out

---

### 👤 User — 2026-11-01T12:54:44Z

trying to move session 20261030_140842_13e155 to profile cc i get an error

### 🤖 Assistant — 2026-11-01T12:54:48Z

<details><summary>Reasoning</summary>

The user wants to move a session to profile cc, hits an error. Let me look at the relevant skill: session-transfer (rare/session-transfer) or hermes-session-hygiene. Let me load session-transfer skill.

</details>

**Tool call: skill_view**

```json
{
  "name": "session-transfer"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/ 2>/dev/null; ls -la ~/.hermes/sessions/ | head -20"
}
```

### 🤖 Assistant — 2026-11-01T12:57:28Z

<details><summary>Reasoning</summary>

The user says "trying to move session 20261030_140842_13e155 to profile cc i get an error". They didn't paste the error. Let me reproduce it. First find where the session lives, and run the transfer script to see the error.

Let me locate the session across profiles and check the script.

</details>

**Tool call: terminal**

```json
{
  "command": "for db in ~/.hermes/state.db ~/.hermes/profiles/*/state.db; do c=$(sqlite3 \"$db\" \"SELECT count(*) FROM sessions WHERE id='20261030_140842_13e155';\" 2>/dev/null); echo \"$c  $db\"; done"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/shared-skills/rare/session-transfer/scripts/transfer_session.py"
}
```

### 🤖 Assistant — 2026-11-01T13:00:27Z

<details><summary>Reasoning</summary>

Session lives in ~/.hermes/profiles/systems/state.db. Note: this session (the current one) — active profile is default per environment. The user is running in "default"? Environment says "Active Hermes profile: default". But the session is in systems.

Let's reproduce the error by running the script targeting cc. But careful — the script actually performs the transfer. Let me do a dry-run first by checking schema differences to understand likely failure. Actually, let me just run it — it's the actual desired operation. But first, let me check for likely error: schema mismatch between systems and cc DBs.

Let me compare schemas.

</details>

**Tool call: execute_code**

```json
{
  "code": "import sqlite3\nfrom pathlib import Path\nsrc = Path.home()/\".hermes/profiles/systems/state.db\"\ndst = Path.home()/\".hermes/profiles/cc/state.db\"\ndef cols(p,t):\n    c=sqlite3.connect(str(p)); r=[x[1] for x in c.execute(f\"PRAGMA table_info({t})\")]; c.close(); return r\ndef tables(p):\n    c=sqlite3.connect(str(p)); r=[x[0] for x in c.execute(\"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name\")]; c.close(); return r\nprint(\"SRC tables:\", tables(src))\nprint(\"DST tables:\", tables(dst))\nprint()\nfor t in (\"sessions\",\"messages\"):\n    s=cols(src,t); d=cols(dst,t)\n    print(t, \"src-only:\", [x for x in s if x not in d], \"| dst-only:\", [x for x in d if x not in s])\nprint()\nc=sqlite3.connect(str(src))\nrow=c.execute(\"SELECT * FROM sessions WHERE id='20261030_140842_13e155'\").fetchone()\nnames=[x[1] for x in c.execute(\"PRAGMA table_info(sessions)\")]\nfor n,v in zip(names,row):\n    print(f\"  {n} = {str(v)[:120]}\")\nprint(\"msg count:\", c.execute(\"SELECT count(*) FROM messages WHERE session_id='20261030_140842_13e155'\").fetchone()[0])\nprint(\"msgs min/max id:\", c.execute(\"SELECT min(id),max(id) FROM messages WHERE session_id='20261030_140842_13e155'\").fetchone())\nc.close()\nc=sqlite3.connect(str(dst))\nprint(\"dst max msg id:\", c.execute(\"SELECT max(id) FROM messages\").fetchone())\nc.close()\n"
}
```

### 🤖 Assistant — 2026-11-01T13:00:32Z

<details><summary>Reasoning</summary>

Schemas match exactly. So the error the user got is probably something else
