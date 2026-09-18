---
type: Fact
title: # Missing sessions in project sidebar

source: hermes
session_id: 20260724_08204
description: # Missing sessions in project sidebar

source: hermes
session_id: 20260724_082040_88f841
resource: hermes://session/20260724_082040_88f841

# Conversation

- **Session ID:** `20260724_082040_88f841`
-
resource: agentmemory://memory/mem_mtg11wnc_cac11d49a083
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Work/tiltpal"]
timestamp: 2026-08-30T16:32:05.154Z
source: agentmemory
strength: 7
---
# Content

# Missing sessions in project sidebar

source: hermes
session_id: 20260724_082040_88f841
resource: hermes://session/20260724_082040_88f841

# Conversation

- **Session ID:** `20260724_082040_88f841`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T13:20:40Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 140
- **CWD:** `/Users/davec/Work/tiltpal`
- **Tokens:** 126279 in / 54252 out

---

### 👤 User — 2026-07-24T13:20:40Z

Why am i not seeing sessions in this project, i have created at least two, nothing but "No sessions yet" in sidebar

### 🤖 Assistant — 2026-07-24T13:20:47Z

<details><summary>Reasoning</summary>

The user is asking about Hermes sessions not showing up in the sidebar. This is a Hermes Agent issue. Let me load the relevant skill - there are several Hermes-related skills. The most relevant ones appear to be:
- `hermes-session-recovery`: Diagnose and recover missing Hermes sessions across Desktop...
- `hermes-workspace-context`: Manage Hermes project roots, working directories, Desktop...
- `hermes-session-hygiene`: Quarterly cleanup

The user says they created sessions in "this project" but the sidebar shows "No sessions yet". This is about project-scoped sessions / workspace context. Let me load `hermes-session-recovery` and `hermes-workspace-context` since the issue is about sessions not appearing in a project context.

Let me load these skills first.

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
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-24T13:21:03Z

<details><summary>Reasoning</summary>

This is very relevant. The Projects sidebar is backed by `~/.hermes/projects.db`, and the sidebar auto-associates sessions by cwd. The user says they created "at least two" sessions in "this project" but the sidebar shows "No sessions yet".

Key insight: The Projects sidebar groups sessions by **cwd** — the working directory of each session. If the two sessions were created in a different cwd than the project folder the sidebar thinks it is, they won't show up under that project.

Let me read the relevant reference: `references/projects-sidebar-and-consolidation.md`. This is the authoritative file. Let me load it.

Also I should diagnose. Let me:
1. Run the diagnostic script from hermes-session-recovery to check state.db session counts.
2. Read the projects-sidebar reference.
3. Check projects.db to understand what projects exist and how sessions are associated.

Let me do these in parallel

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context",
  "file_path": "references/projects-sidebar-and-consolidation.md"
}
```

**Tool call: terminal**

```json
{
  "command": "python3 - <<'PY'\nimport sqlite3, os\n# 1. state.db session scan\nroots = [os.path.expanduser('~/.hermes/state.db')]\nprof = os.path.expanduser('~/.hermes/profiles')\nif os.path.isdir(prof):\n    for p in os.listdir(prof):\n        d = os.path.join(prof, p, 'state.db')\n        if os.path.exists(d): roots.append(d)\nprint(\"=== state.db scan ===\")\nfor p in roots:\n    if not os.path.exists(p) or os.path.getsize(p)==0:\n        print(f'{p}: missing/empty'); continue\n    con=sqlite3.connect(p); cur=con.cursor()\n    try:\n        cols=[r[1] for r in cur.execute('PRAGMA table_info(sessions)').fetchall()]\n        n=cur.execute('SELECT count(*) FROM sessions').fetchone()[0]\n        time_col=next((c for c in ['last_active','updated_at','started_at'] if c in cols), cols[0])\n        print(f'{p}: {n} sessions; cols={cols}')\n        if n:\n            for row in cur.execute(f'SELECT id, cwd, {time_col} FROM sessions ORDER BY {time_col} DESC LIMIT 10'):\n                print('   ', row)\n    except Exception as e:\n        print(f'{p}: err={e}')\n    finally: con.close()\nPY"
}
```

**Tool call: terminal**

```json
{
  "command": "python3 - <<'PY'\nimport sqlite3, os\ndb=os.path.expanduser('~/.hermes/projects.db')\nprint(\"=== projects.db ===\")\nif not os.path.exists(db):\n    print(\"NO projects.db found\"); raise SystemExit\nprint(\"
