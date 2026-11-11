---
type: Fact
title: # Update skill docs for macOS and workflows

source: hermes
session_id: local-34
description: # Update skill docs for macOS and workflows

source: hermes
session_id: local-341d2b7168c8fc9da50160a6bcfae68a13fc60b88ce13a00bd988450251a9438
resource: hermes://session/local-341d2b7168c8fc9da50160a6
resource: agentmemory://memory/mem_mwah97mq_f656c53607c0
tags: ["okf", "okf-hermes", "hermes", "/"]
timestamp: 2026-11-10T09:18:09.744Z
source: agentmemory
strength: 7
---
# Content

# Update skill docs for macOS and workflows

source: hermes
session_id: local-341d2b7168c8fc9da50160a6bcfae68a13fc60b88ce13a00bd988450251a9438
resource: hermes://session/local-341d2b7168c8fc9da50160a6bcfae68a13fc60b88ce13a00bd988450251a9438

# Conversation

- **Session ID:** `local-341d2b7168c8fc9da50160a6bcfae68a13fc60b88ce13a00bd988450251a9438`
- **Source:** oneshot
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-09T22:19:41Z
- **Ended:** 2026-11-09T22:24:57Z
- **Messages:** 8
- **CWD:** `/`
- **Tokens:** 26808 in / 458 out
- **Est. cost:** $-23066.0000

---

### 👤 User — 2026-11-09T22:19:42Z

Write a single concise git commit message (one line, ≤72 chars) summarizing these changes.
Use conventional-commits style if it fits (e.g. "chore:", "fix:", "feat:"). Be specific, not generic.

Repository: .hermes
Files changed:
- skills/apple/macos-integrations/SKILL.md
- skills/macos/samba-mount-access/SKILL.md
- skills/productivity/productivity-tools/SKILL.md
- skills/software-development/factor-build/SKILL.md
- skills/software-development/git-workflows/SKILL.md

Diff stat:


Diff (truncated):


Reply with ONLY the commit message line, nothing else.

### 🤖 Assistant — 2026-11-09T22:19:47Z

<details><summary>Reasoning</summary>

I need the diff to be specific. But there's no diff given. Let me check the repo quickly.

I should look at git diff for these files to write an accurate message.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git diff --stat -- skills/apple/macos-integrations/SKILL.md skills/macos/samba-mount-access/SKILL.md skills/productivity/productivity-tools/SKILL.md skills/software-development/factor-build/SKILL.md skills/software-development/git-workflows/SKILL.md 2>&1 | tail -20"
}
```

### 🤖 Assistant — 2026-11-09T22:19:50Z

<details><summary>Reasoning</summary>

Empty diff — maybe files are untracked or changes staged? Let me check git status and diff HEAD.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git status --porcelain | head -20 && echo \"---\" && git diff HEAD --stat 2>&1 | tail -10"
}
```

### 🤖 Assistant — 2026-11-09T22:19:54Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git diff --cached --stat -- skills/apple/macos-integrations/SKILL.md skills/macos/samba-mount-access/SKILL.md skills/productivity/productivity-tools/SKILL.md skills/software-development/factor-build/SKILL.md skills/software-development/git-workflows/SKILL.md && git diff --cached -- skills/apple/macos-integrations/SKILL.md skills/macos/samba-mount-access/SKILL.md skills/productivity/productivity-tools/SKILL.md skills/software-development/factor-build/SKILL.md skills/software-development/git-workflows/SKILL.md | grep -E '^[+-]' | grep -vE '^(\\+\\+\\+|---)' | head -60"
}
```

### 🤖 Assistant — 2026-11-09T22:19:57Z

chore(skills): document CP857 name repair, Factor renames, PDF export
