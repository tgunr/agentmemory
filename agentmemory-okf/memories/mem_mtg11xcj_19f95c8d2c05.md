---
type: Fact
title: # Modify project workspace setup for all profiles

source: hermes
session_id: 20
description: # Modify project workspace setup for all profiles

source: hermes
session_id: 20260724_093221_d048dc
resource: hermes://session/20260724_093221_d048dc

# Conversation

- **Session ID:** `20260724_0932
resource: agentmemory://memory/mem_mtg11xcj_19f95c8d2c05
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260724_093221_d048dc"]
timestamp: 2026-08-30T16:32:06.116Z
source: agentmemory
strength: 7
---
# Content

# Modify project workspace setup for all profiles

source: hermes
session_id: 20260724_093221_d048dc
resource: hermes://session/20260724_093221_d048dc

# Conversation

- **Session ID:** `20260724_093221_d048dc`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T14:33:55Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 12
- **Tokens:** 27109 in / 7068 out

---

### 👤 User — 2026-07-24T14:33:55Z

 the `/project-workspace-setup' should be modified to apply to all profiles, not just the cnc

### 🤖 Assistant — 2026-07-24T14:34:00Z

<details><summary>Reasoning</summary>

The user wants me to modify the `project-workspace-setup` skill so that it applies to all profiles, not just the cnc profile. Let me first load the skill to understand its current content.

</details>

**Tool call: skill_view**

```json
{
  "name": "project-workspace-setup"
}
```

### 🤖 Assistant — 2026-07-24T14:34:38Z

<details><summary>Reasoning</summary>

The user wants me to modify this skill to apply to all profiles, not just the cnc profile. The skill currently hardcodes `~/.hermes/profiles/cnc/workspace/` and `~/.hermes/profiles/cnc/projects.yaml`. 

I need to generalize it so it works from whatever profile is active, rather than hardcoded to 'cnc'. Let me think about the approach:

1. The skill mentions `~/.hermes/profiles/cnc/projects.yaml` and `~/.hermes/profiles/cnc/workspace/`. These should become dynamic based on the current profile.

2. I should parametrize the profile. The profile can be passed as context, or determined from the active profile. In Hermes, the active profile is known. The skill should reference the active/current profile generically.

Let me also reconsider the name. The user profile says: "Prefers class-level / umbrella names for new skills over session- or domain-specific names. When designing a new skill, widen the name (e.g., `projects` not `cnc-projects`...)." But here they're not asking to rename — they're asking to modify to apply to all profiles. The name `project-workspace-setup` is already class-level (no cnc prefix). Good.

So I need to edit the skill content to:
- Replace hardcoded `cnc` profile references with a generic/active profile reference.
- Keep CNC as the example/use case but make it work for any profile.

Let me think about how to make it profile-agnostic. The skill is in `/Users/davec/.hermes/skills/autonomous-ai-agents/project-workspace-setup`. Note: this skill lives in a shared skills location (the `autonomous-ai-agents` category under `~/.hermes/skills/`), which is the global/default profile skills dir. It's not inside a specific profile's skills dir.

To make it apply to "all profiles," I should:
- Reference the active profile dynamically. A skill can instruct: use the active Hermes profile. The agent knows the current profile from context. We can use a placeholder like `<PROFILE>` or instruct to detect `$HERMES_PROFILE` env var, or reference the active profile.

Actually, the cleanest approach: the skill should reference the current/active profile. In Hermes, there's a notion of the active profile. The skill can say "replace `cnc` with the active profile name" and explain how to determine it.

Let me make the edits. I'll rewrite the relevant sections:

- "When to Use": generalize — applies before starting any project that needs a tracked workspace, not just CNC. Mention CNC as the original use case.
- Steps: use `<PROFILE>` placeholder for the active profile. Provide a way to determine it (env var or the active profile from context). 
- Pitfalls: mention writing to the correct profile's workspace.

Let me use the patch action. Actually `skill_manage` with `action='patch'` uses old_string/new_string. Let me do targeted patches.

Actually, a full rewrite via `edit` might be cleaner given how many references to cnc exist. But the skill_manage edit requires reading first (it says read with skill_view then provide complete updated text). Let me do a patch with multiple replacements, or just rewrite.

I think the best approach is to rewrite the content comprehensively but keep the structure. Let me use skill_manage action='edit' with the 
