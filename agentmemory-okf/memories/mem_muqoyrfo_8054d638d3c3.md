---
type: Fact
title: # Update Hermes workspace and research skills

source: hermes
session_id: 202610
description: # Update Hermes workspace and research skills

source: hermes
session_id: 20261001_204738_d98ba2
resource: hermes://session/20261001_204738_d98ba2

# Conversation

- **Session ID:** `20261001_204738_d
resource: agentmemory://memory/mem_muqoyrfo_8054d638d3c3
tags: ["okf", "okf-hermes", "hermes", "/"]
timestamp: 2026-10-02T08:18:53.274Z
source: agentmemory
strength: 7
---
# Content

# Update Hermes workspace and research skills

source: hermes
session_id: 20261001_204738_d98ba2
resource: hermes://session/20261001_204738_d98ba2

# Conversation

- **Session ID:** `20261001_204738_d98ba2`
- **Source:** oneshot
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-02T01:47:39Z
- **Ended:** 2026-10-02T01:47:59Z
- **Messages:** 6
- **CWD:** `/`
- **Tokens:** 36181 in / 830 out
- **Est. cost:** $-26017.0000

---

### 👤 User — 2026-10-02T01:47:39Z

Write a single concise git commit message (one line, ≤72 chars) summarizing these changes.
Use conventional-commits style if it fits (e.g. "chore:", "fix:", "feat:"). Be specific, not generic.

Repository: .hermes
Files changed:
- skills/autonomous-ai-agents/hermes-workspace-context/SKILL.md
- skills/productivity/product-research/SKILL.md

Diff stat:


Diff (truncated):


Reply with ONLY the commit message line, nothing else.

### 🤖 Assistant — 2026-10-02T01:47:48Z

<details><summary>Reasoning</summary>

The user wants a git commit message for changes in .hermes repo, files changed:
- skills/autonomous-ai-agents/hermes-workspace-context/SKILL.md
- skills/productivity/product-research/SKILL.md

But the diff is truncated/empty. I should look at the actual diff to write a specific commit message. The instruction says reply with ONLY the commit message line. But to be specific, I need to see what changed. Let me check the repo quickly.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes && git diff -- skills/autonomous-ai-agents/hermes-workspace-context/SKILL.md skills/productivity/product-research/SKILL.md | head -120 && git status --short"
}
```

### 🤖 Assistant — 2026-10-02T01:47:52Z

<details><summary>Reasoning</summary>

The diff was empty in output (head -120 showed only git status output, meaning the diff was empty). The files are staged (M with staged flag "M "). Let me check the staged diff.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes && git diff --cached -- skills/autonomous-ai-agents/hermes-workspace-context/SKILL.md skills/productivity/product-research/SKILL.md | head -150"
}
```

### 🤖 Assistant — 2026-10-02T01:47:59Z

<details><summary>Reasoning</summary>

The staged changes:
1. hermes-workspace-context SKILL.md: added warnings about session_move.py not remapping message IDs, unique title index traps, FTS triggers, sidebar grouping after migration.
2. product-research SKILL.md: added app/OSS alternative evaluation (version 0.2.0), plus pitfall updates.

Both are skill documentation updates. One-line commit ≤72 chars, conventional commits style, "docs:" fits.

Something like: "docs(skills): add session-move traps + app/OSS evaluation to skills" — count chars: let me count. "docs(skills): add session-move traps + app/OSS evaluation to skills" = let's count: d-o-c-s-(-s-k-i-l-l-s-)-: = 12, space 13, "add session-move traps + app/OSS evaluation to skills" = "add " 4 → 17, "session-move traps" 18 → 35, " + " 3 → 38, "app/OSS evaluation" 18 → 56, " to skills" 10 → 66. 66 chars, good.

Be specific. Maybe "docs(skills): session-move ID/title traps; app+OSS eval guide". Count: 13 + "session-move ID/title traps; app+OSS eval guide" = 48 → 61. Good too.

I'll go with: "docs(skills): add session-move traps to workspace skill; app/OSS eval to product-research" — too long (90). Keep it under 72.

"docs(skills): session-move ID/title traps; product-research app/OSS eval" = count: "docs(skills): " 14, "session-move ID/title traps; " 29 → 43, "product-research app/OSS eval" 29 → 72. Exactly 72. That works.

Hmm, exactly 72 is fine (≤72). Let me double check count: "docs(skills): " = d1 o2 c3 s4 (5 s6 k7 i8 l9 l10 s11 )12 :13 space14. "session-move ID/title traps; " = s15... "session-move" is 12 chars → 26, space → 27, "ID/title" 8 → 35, space → 36, "traps;" 6 → 42, space → 43. "product-research" 16 → 59, space → 60, "app/OSS" 7 → 67, space → 68, "eval" 4 → 72. Yes, exactly 72.

Reply with only that line.

</details>

docs(skills): session-move ID/title traps; product-research app/OSS eval
