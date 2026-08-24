---
type: Fact
title: # Investigate missing /classify skill

source: hermes
session_id: 20260813_06473
description: # Investigate missing /classify skill

source: hermes
session_id: 20260813_064737_e61469
resource: hermes://session/20260813_064737_e61469

# Conversation

- **Session ID:** `20260813_064737_e61469`
-
resource: agentmemory://memory/mem_mssoo3m2_cfd1d89ec8d1
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-14T08:26:43.571Z
source: agentmemory
strength: 7
---
# Content

# Investigate missing /classify skill

source: hermes
session_id: 20260813_064737_e61469
resource: hermes://session/20260813_064737_e61469

# Conversation

- **Session ID:** `20260813_064737_e61469`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T11:47:38Z
- **Messages:** 193
- **CWD:** `/Volumes/davec`
- **Tokens:** 130007 in / 56985 out

---

### 👤 User — 2026-08-13T11:47:38Z

What happened to my /classify skill? It is missing

### 🤖 Assistant — 2026-08-13T11:47:47Z

<details><summary>Reasoning</summary>

The user says their /classify skill is missing. Let me investigate. I should look at the skills directory and check if there's a /classify skill. Let me search for it.

Let me check the skills directory and also consider that the user might be referring to a skill that was pruned or removed. Let me investigate the actual state.

Let me look at the available skills - I see a list in the system prompt but there's no "classify" skill listed. Let me check the actual filesystem to see what's there.

Let me search for "classify" in the skills directories

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== Default profile skills ===\" ; ls -la ~/.hermes/skills/ 2>/dev/null ; echo \"=== Search for classify anywhere in hermes ===\" ; find ~/.hermes -iname '*classify*' 2>/dev/null ; echo \"=== external dirs ===\" ; ls -la ~/sources/hermes-knowledge/skills 2>/dev/null | head -50"
}
```

**Tool call: search_files**

```json
{
  "pattern": "classify",
  "target": "files",
  "path": "/Users/davec/.hermes"
}
```

### 🤖 Assistant — 2026-08-13T11:48:05Z

<details><summary>Reasoning</summary>

So there's no `classify` skill directory in `~/.hermes/skills/`. There are some files containing "classify" but those are part of the hermes-agent codebase itself, not a user skill.

Interesting findings:
- `~/sources/hermes-knowledge/skills` is empty (total 0)
- No `classify` skill in `~/.hermes/skills/`
- There's a `.archive` directory in skills — maybe it was archived
- There's a `.curator_backups` directory

Let me check the `.archive` directory and the `.curator_backups`, and also check the `hermes-agent` cron scripts classify_items.py — that might be something. But the user says "/classify skill" so it's a slash command skill.

Also note there's a `hermes-agent` directory under `~/.hermes/hermes-agent` — that's the hermes-agent source repo. And there's `cron/scripts/classify_items.py`.

Let me look at:
1. `.archive` in skills — maybe classify was archived
2. The `hermes-agent/cron/scripts/classify_items.py` — could be the /classify skill content
3. Check the curator state / usage json for any record of classify

Let me also check if "classify" was registered anywhere. Let me look at the archive and the hermes-agent cron script

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== .archive ===\" ; ls -la ~/.hermes/skills/.archive/ 2>/dev/null ; echo ; echo \"=== .curator_backups ===\" ; ls -la ~/.hermes/skills/.curator_backups/ 2>/dev/null ; echo ; echo \"=== classify script content ===\" ; wc -l ~/.hermes/hermes-agent/cron/scripts/classify_items.py 2>/dev/null ; echo \"--- head ---\" ; head -40 ~/.hermes/hermes-agent/cron/scripts/classify_items.py 2>/dev/null"
}
```

**Tool call: search_files**

```json
{
  "pattern": "classify",
  "path": "/Users/davec/.hermes",
  "file_glob": "*.json",
  "output_mode": "content"
}
```

### 🤖 Assistant — 2026-08-13T11:48:21Z

<details><summary>Reasoning</summary>

So there's no `classify` skill in the default profile. The `classify_items.py` in `hermes-agent/cron/scripts/` is part of the Hermes Agent source repo (a built-in cron script), not a user-created skill.

The user is asking "What happened to my /classify skill?" They believe they had a `classify` skill. But I don't see one in the default profile. 

Wait — maybe it's in another profile. The system prompt mentions profiles live under `/Users/davec/.hermes/profiles/<name>/`. Let me check other profiles. Also maybe it's a slash command. The memory mentions "Slash commands like `/route` must work in chat UI". Maybe `/classify`
