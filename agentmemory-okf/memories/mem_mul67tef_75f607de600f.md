---
type: Fact
title: # feat: add model selection routing skill guide

source: hermes
session_id: 2026
description: # feat: add model selection routing skill guide

source: hermes
session_id: 20260927_112738_3b6495
resource: hermes://session/20260927_112738_3b6495

# Conversation

- **Session ID:** `20260927_112738
resource: agentmemory://memory/mem_mul67tef_75f607de600f
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260927_112738_3b6495"]
timestamp: 2026-09-28T11:35:12.163Z
source: agentmemory
strength: 7
---
# Content

# feat: add model selection routing skill guide

source: hermes
session_id: 20260927_112738_3b6495
resource: hermes://session/20260927_112738_3b6495

# Conversation

- **Session ID:** `20260927_112738_3b6495`
- **Source:** oneshot
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-27T16:27:41Z
- **Ended:** 2026-09-27T16:28:12Z
- **Messages:** 4
- **Tokens:** 29559 in / 334 out

---

### 👤 User — 2026-09-27T16:27:39Z

Write a single concise git commit message (one line, ≤72 chars) summarizing these changes.
Use conventional-commits style if it fits (e.g. "chore:", "fix:", "feat:"). Be specific, not generic.

Repository: .hermes
Files changed:
- skills/autonomous-ai-agents/model-selection-routing/SKILL.md

Diff stat:


Diff (truncated):


Reply with ONLY the commit message line, nothing else.

### 🤖 Assistant — 2026-09-27T16:27:51Z

<details><summary>Reasoning</summary>

The user wants a single concise git commit message (one line, ≤72 chars) summarizing changes to a specific file in the .hermes repository. They want conventional-commits style if it fits, and to be specific, not generic.

I need to first read the diff to understand what changed. The user provided:
- Repository: .hermes
- Files changed: skills/autonomous-ai-agents/model-selection-routing/SKILL.md
- Diff stat: (empty/truncated)
- Diff: (truncated)

I should use the terminal to check git status and diff in the .hermes directory to see what actually changed. Let me do that.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git diff --cached --stat && echo '---' && git diff --cached -- skills/autonomous-ai-agents/model-selection-routing/SKILL.md",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-27T16:28:12Z

<details><summary>Reasoning</summary>

The diff shows a single added line in `skills/autonomous-ai-agents/model-selection-routing/SKILL.md`: adding a new reference `kilo-aux-models.md` to the existing references list. This is documentation/skill maintenance for model routing. A concise conventional commit message could be:

docs(model-selection-routing): add kilo aux_models mirroring reference

That's specific, one line, under 72 chars, and conventional-commits style.

</details>

docs(model-selection-routing): add kilo aux_models mirroring reference
