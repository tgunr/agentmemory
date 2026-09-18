---
type: Fact
title: # Pruning skill sets

source: hermes
session_id: 20260618_090817_26f2f6
resource
description: # Pruning skill sets

source: hermes
session_id: 20260618_090817_26f2f6
resource: hermes://session/20260618_090817_26f2f6

# Conversation

- **Session ID:** `20260618_090817_26f2f6`
- **Source:** tui

resource: agentmemory://memory/mem_msp0ckib_081625eed722
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260618_090817_26f2f6"]
timestamp: 2026-08-11T18:42:36.366Z
source: agentmemory
strength: 7
---
# Content

# Pruning skill sets

source: hermes
session_id: 20260618_090817_26f2f6
resource: hermes://session/20260618_090817_26f2f6

# Conversation

- **Session ID:** `20260618_090817_26f2f6`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-18T14:09:37Z
- **Ended:** 2026-06-18T16:19:43Z
- **Messages:** 122
- **Tokens:** 288 in / 15779 out
- **Est. cost:** $0.2355

---

### 👤 User — 2026-06-18T14:09:37Z

there are massive changes in the skills, whats going on here, why are there deletions?

### 🤖 Assistant — 2026-06-18T14:10:31Z

<details><summary>Reasoning</summary>

The user is asking about changes in the skills directory - specifically about deletions and massive changes. Let me check the git status of the skills directory to understand what's going on.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git status --short skills/ 2>/dev/null || echo \"Not a git repo at ~/.hermes\""
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/skills && git status --short 2>/dev/null || echo \"No git repo here\"; echo \"---\"; ls -la 2>/dev/null"
}
```

### 🤖 Assistant — 2026-06-18T14:10:31Z

<details><summary>Reasoning</summary>

This is a massive change. Let me look at the curator state and archive to understand what happened.

</details>

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/skills/.curator_state"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/skills/.archive/ 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/skills/.curator_backups/ 2>/dev/null"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git log --oneline -10 -- skills/"
}
```

### 🤖 Assistant — 2026-06-18T14:10:31Z

<details><summary>Reasoning</summary>

Now I understand what happened. The Hermes **skill curator** ran an automated consolidation pass on June 17th. It processed 87 candidate skills, consolidated them down to 25 active skills, archiving/merging 75 of them into umbrella skills. Let me check the backup to see the full picture and explain this to the user.

The key points:
1. The curator ran automatically on 2026-06-17 at 17:54 UTC
2. It took ~25 minutes (1534 seconds)
3. It started with 87 skills and consolidated to 25
4. 75 skills were archived (not permanently deleted - they're in `.archive/` and `.curator_backups/`)


5. The consolidation merged overlapping skills into umbrella skills

But I'm noticing git is showing these as deletions rather than moves to the archive directories, which suggests either the curator intended to move them but something went wrong, or the git status is reflecting an intermediate state before the archival was completed.

Looking at the curator state more carefully, it shows "75 skills archived," and I can see an `.archive/` directory exists with some content, but most of the "deleted" skills aren't showing up in `.archive/`, `.curator_backups/`, or as new umbrella skills—only 5 ended up in archive and a few replacements exist. So it seems like the curator consolidated many overlapping skills into broader umbrellas like merging apple-notes, apple-reminders, and imessage into a single `macos-integrations` skill, but the intermediate files got removed in the process without all of them being properly preserved in the archive. I'm realizing git is showing these as deletions rather than moves because the archived files either have different names or paths than the originals. The umbrella skills probably incorporated the content in reformatted ways, so git sees them as new additions rather than renames. Looking at the curator's summary of "archived 75 skill(s) → merged into umbrellas," it seems the intended behavior was consolidation, but git's perspective doesn't capture that intent. The real question is whether this was intentional and safe, or if something went wrong during the curation process.


</details>

**Tool call: terminal**

```json
{
  "command": "ls ~/.hermes/skills/.curator_backups/2026-06-17T17-54-14Z/ 2>/dev/null | head -30"
}
```

**Tool call: terminal**

```json
{
  "command
