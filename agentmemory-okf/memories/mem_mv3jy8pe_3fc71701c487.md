---
type: Fact
title: # imgtagplus tag filter

source: hermes
session_id: 20261008_123109_5e5bc2
resou
description: # imgtagplus tag filter

source: hermes
session_id: 20261008_123109_5e5bc2
resource: hermes://session/20261008_123109_5e5bc2

# Conversation

- **Session ID:** `20261008_123109_5e5bc2`
- **Source:** d
resource: agentmemory://memory/mem_mv3jy8pe_3fc71701c487
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop/DXF/imgtagplus"]
timestamp: 2026-10-11T08:19:31.176Z
source: agentmemory
strength: 7
---
# Content

# imgtagplus tag filter

source: hermes
session_id: 20261008_123109_5e5bc2
resource: hermes://session/20261008_123109_5e5bc2

# Conversation

- **Session ID:** `20261008_123109_5e5bc2`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-08T17:31:09Z
- **Ended:** 2026-10-10T14:40:21Z
- **Messages:** 206
- **CWD:** `/Users/davec/Desktop/DXF/imgtagplus`
- **Tokens:** 2328228 in / 35774 out
- **Est. cost:** $-913334.0000

---

### 👤 User — 2026-10-06T08:51:15Z

switch to imgtagplus project

### 👤 User — 2026-10-06T08:51:15Z

switch to imgtagplus project

### 🤖 Assistant — 2026-10-06T08:51:41Z

<details><summary>Reasoning</summary>

Switched to imgtagplus project. Brief confirmation.

</details>

Switched to **imgtagplus** — workspace is now `/Users/davec/Desktop/DXF/imgtagplus`.

### 🤖 Assistant — 2026-10-06T08:51:41Z

<details><summary>Reasoning</summary>

Switched to imgtagplus project. Brief confirmation.

</details>

Switched to **imgtagplus** — workspace is now `/Users/davec/Desktop/DXF/imgtagplus`.

### 👤 User — 2026-10-06T08:57:18Z

commit changes

### 👤 User — 2026-10-06T08:57:18Z

commit changes

### 🤖 Assistant — 2026-10-06T08:57:52Z

<details><summary>Reasoning</summary>

The venv's python interpreter points to the old path `/Users/davec/Desktop/DXF/imgtagplus-fork/.venv/bin/python` — the project was presumably renamed/moved from `imgtagplus-fork` to `imgtagplus`, so the venv symlinks are broken. Options:
1. Recreate venv: `python3 -m venv .venv --clear` — but that would wipe installed deps. Could re-create and reinstall: `.venv/bin/pip install -e .` per AGENTS.md.
2. Or run pytest with a system python with pytest available.

Simplest fix: rebuild the venv and reinstall. Let me check what python is available and do it. Actually the venv is broken anyway; rebuilding is a fix, not a destructive change to source. Let me rebuild venv and install.

</details>

The venv is broken (points at the old `imgtagplus-fork` path). Rebuilding it:

### 🤖 Assistant — 2026-10-06T08:59:45Z

<details><summary>Reasoning</summary>

127 passed, 2 failed. The 2 failures are async tests needing pytest-asyncio (they error with "async functions not natively supported" — browser tests missing plugin, unrelated to the changes). Let me install pytest-asyncio and confirm.

</details>

2 failures are async tests missing the pytest-asyncio plugin (env gap, not the changes). Installing and re-running:

### 🤖 Assistant — 2026-10-06T09:00:08Z

<details><summary>Reasoning</summary>

The commit accidentally included `__pycache__/*.pyc` and `imgtagplus.egg-info/` files — those shouldn't be committed. I should check if there's a .gitignore, and if not, add one and remove those from tracking. This is a fix to my own commit (amend) since it just happened and hasn't been pushed anywhere (local branch feature/classification presumably).

</details>

The commit picked up `__pycache__` and `egg-info` artifacts — fixing with an amended commit plus `.gitignore`:

### 🤖 Assistant — 2026-10-06T09:00:36Z

Committed as **552e342** on `feature/classification` (amended to strip the `__pycache__`/egg-info that had been tracked from the earlier broken-venv install; added `.gitignore`).

- Contents: XMP sidecars now named from the full filename (`panel.png.xmp`), legacy `<stem>.xmp` read/migrate fallback, doc + test updates, new AGENTS.md
- Verified: `pytest tests/` → **129 passed** (recreated broken `.venv`, which pointed at the old `imgtagplus-fork` path, and added missing `pytest`/`pytest-asyncio`/`httpx`)
- Working tree clean; stray run logs now ignored

### 👤 User — 2026-10-07T08:03:13Z

still cannot enter folder to browse, FYI same thing happened on previous branch, may need to bisect the repo

### 🤖 Assistant — 2026-10-07T08:10:48Z

Now verifying with eslint + the real-browser repro:

### 🤖 Assistant — 2026-10-07T08:11:37Z

<details><summary>Reasoning</summary>

Server stopped. Now report.

Report contents (concise):
1. No bisect needed — the breakage isn't in any commit; it's the uncommitted working-tree changes in static/main.js/index.html (957 insertions of an unf
