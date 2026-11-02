---
type: Fact
title: # Hermes desktop missing previous sessions

source: hermes
session_id: local-3e1
description: # Hermes desktop missing previous sessions

source: hermes
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
resource: hermes://session/local-3e140115fa5d0f8d79b0b0d66
resource: agentmemory://memory/mem_mvxm9jri_5ca02447aee5
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-01T09:17:23.216Z
source: agentmemory
strength: 7
---
# Content

# Hermes desktop missing previous sessions

source: hermes
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
resource: hermes://session/local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435

# Conversation

- **Session ID:** `local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T18:51:05Z
- **Ended:** 2026-11-01T04:19:53Z
- **Messages:** 668
- **CWD:** `/Users/davec`
- **Tokens:** 668217 in / 118794 out
- **Est. cost:** $-287717.0000

---

### 👤 User — 2026-10-31T18:51:37Z

hermes desktop is not showing previous sessions after launch

### 👤 User — 2026-10-31T18:51:37Z

hermes desktop is not showing previous sessions after launch

### 🤖 Assistant — 2026-10-31T18:51:42Z

<details><summary>Reasoning</summary>

The user says Hermes desktop is not showing previous sessions after launch. Let me investigate. There's a skill `hermes-desktop` and `hermes-session-hygiene`, `hermes-session-recovery`. Let me load relevant skills.

Let me check hermes-desktop skill and session recovery.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-session-recovery"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

### 🤖 Assistant — 2026-10-31T18:51:42Z

<details><summary>Reasoning</summary>

The user says Hermes desktop is not showing previous sessions after launch. Let me investigate. There's a skill `hermes-desktop` and `hermes-session-hygiene`, `hermes-session-recovery`. Let me load relevant skills.

Let me check hermes-desktop skill and session recovery.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-session-recovery"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

### 🤖 Assistant — 2026-10-31T18:51:47Z

<details><summary>Reasoning</summary>

The user's issue: "hermes desktop is not showing previous sessions after launch". This machine is... I'm running on mini.local? Let me check hostname. Memory says viewer=pro.local (GUI), agent runtime on mini.local. So agent runs on mini. But the user's desktop... Let's first diagnose locally: check state.db counts.

Run the diagnostic script.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\nprint(terminal(command=\"hostname; whoami; echo HERMES_HOME=$HERMES_HOME; ls -la ~/.hermes/state.db* 2>/dev/null | head -20\")['output'])\nprint(\"----\")\ncode = r'''\nimport sqlite3, os\nroots = [os.path.expanduser('~/.hermes/state.db')]\npd = os.path.expanduser('~/.hermes/profiles')\nif os.path.isdir(pd):\n    for p in sorted(os.listdir(pd)):\n        d = os.path.join(pd,p)\n        if os.path.isdir(d):\n            roots.append(os.path.join(d,'state.db'))\nfor p in roots:\n    if not os.path.exists(p) or os.path.getsize(p)==0:\n        print(f'{p}: missing/empty'); continue\n    try:\n        con = sqlite3.connect(f'file:{p}?mode=ro', uri=True)\n        cur = con.cursor()\n        n = cur.execute('select count(*) from sessions').fetchone()[0]\n        cols = [r[1] for r in cur.execute('PRAGMA table_info(sessions)').fetchall()]\n        tcol = next((c for c in ['last_active','updated_at','started_at'] if c in cols), cols[0])\n        rows = cur.execute(f'select session_id,{tcol} from sessions order by {tcol} desc limit 3').fetchall()\n        print(f'{p}: {n} sessions, tcol={tcol}, latest={rows}')\n        con.close()\n    except Exception as e:\n        print(f'{p}: err={e}')\n'''\nopen('/tmp/hermes-db-check.py','w').write(code)\nprint(terminal(command=\"python3 /tmp/hermes-db-check.py\")['output'])\n"
}
```

### 🤖 Assistant — 2026-10-31T18:51:54Z

<details><summary>Reasoning</summary>

Need proper column names. Let me dump schema and counts.

</details>

**Tool call: execute_code**

```json
{
  "code": "code = r'''\nimport sqlite3, os\nroots = [os.path.expanduser('~/.hermes/state.db')]\npd = os.path.expanduser('~/.hermes/profiles')\nif os.path.isdir(pd):\n    for p in sorted(os.listdir(pd)):\n        d = os.path.join(pd,p)\n        if os.path.isdir(d):\n            f=os.path.join(d,'state.db')\n            if os.path.exists(f): roots.append(f)\nfor p in roots:\n    
