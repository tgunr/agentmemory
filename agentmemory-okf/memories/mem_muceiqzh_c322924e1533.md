---
type: Fact
title: # feat: update config.yaml with new hermes settings

source: hermes
session_id: 
description: # feat: update config.yaml with new hermes settings

source: hermes
session_id: 20260921_090459_65d161
resource: hermes://session/20260921_090459_65d161

# Conversation

- **Session ID:** `20260921_09
resource: agentmemory://memory/mem_muceiqzh_c322924e1533
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260921_090459_65d161"]
timestamp: 2026-09-22T08:17:43.606Z
source: agentmemory
strength: 7
---
# Content

# feat: update config.yaml with new hermes settings

source: hermes
session_id: 20260921_090459_65d161
resource: hermes://session/20260921_090459_65d161

# Conversation

- **Session ID:** `20260921_090459_65d161`
- **Source:** oneshot
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-21T14:05:03Z
- **Ended:** 2026-09-21T14:05:54Z
- **Messages:** 4
- **Tokens:** 31647 in / 562 out

---

### 👤 User — 2026-09-21T14:05:00Z

Write a single concise git commit message (one line, ≤72 chars) summarizing these changes.
Use conventional-commits style if it fits (e.g. "chore:", "fix:", "feat:"). Be specific, not generic.

Repository: .hermes
Files changed:
- config.yaml

Diff stat:


Diff (truncated):


Reply with ONLY the commit message line, nothing else.

### 🤖 Assistant — 2026-09-21T14:05:12Z

<details><summary>Reasoning</summary>

The user wants a concise git commit message for changes to `.hermes/config.yaml`. I need to see the actual diff to write a specific message, but they only provided "Diff stat:" with nothing after it and "(truncated):" with no content. 

Since I don't have the actual diff content, I need to either ask for it or check if I can find the changes. But the instructions say "Reply with ONLY the commit message line, nothing else." 

I can't see the actual changes in the diff. Let me check if I can access the repository to see what changed. Actually, I should use the git tools to see the diff of config.yaml. Let me use terminal or git tools to check.

Wait, I have access to terminal tools. Let me check the git status and diff for config.yaml in the .hermes repo.

Actually, looking at the prompt again, it says "Diff stat:" and then "Diff (truncated):" but no actual content is shown. This might mean the diff was not provided. But I should try to look at the actual file changes if possible.

Let me use terminal to check git diff in the .hermes directory.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && git diff --cached --stat && echo '---' && git diff --cached -- config.yaml",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-21T14:05:54Z

<details><summary>Reasoning</summary>

Looking at the diff, the main changes in config.yaml are:

1. A new top-level `moa:` section was added with presets, reference models, aggregator settings, etc. This looks like a new multi-model/aggregation config area.

2. Some formatting/whitespace changes in personality strings (line wrapping)

3. Changes to auxiliary.compression provider/model/base_url (from kilocode/kilo-auto/efficient to apple-fm/system with localhost:8001)

4. Minor quoting changes in display.memory_notifications and human_delay.mode

5. Quick command scripts were unwrapped from multi-line to single-line format

6. A commented-out fallback_model section was appended

7. The duplicate bottom `moa:` block was removed from the old location and consolidated at the top

The most significant change is the new moa section with presets/reference models/aggregator config, plus the compression provider switch. Since the user wants a concise conventional commit, I'll focus on the main structural change rather than the formatting tweaks.

I'll go with: "feat(config): add moa presets and reference-model aggregation config"

</details>

feat(config): add moa presets and reference-model aggregation config
