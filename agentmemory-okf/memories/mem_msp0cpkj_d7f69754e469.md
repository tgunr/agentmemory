---
type: Fact
title: # Copy Projects Skills to AI Profile

source: hermes
session_id: 20260704_092500
description: # Copy Projects Skills to AI Profile

source: hermes
session_id: 20260704_092500_ddf3cb
resource: hermes://session/20260704_092500_ddf3cb

# Conversation

- **Session ID:** `20260704_092500_ddf3cb`
- 
resource: agentmemory://memory/mem_msp0cpkj_d7f69754e469
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260704_092500_ddf3cb"]
timestamp: 2026-08-11T18:42:42.923Z
source: agentmemory
strength: 7
---
# Content

# Copy Projects Skills to AI Profile

source: hermes
session_id: 20260704_092500_ddf3cb
resource: hermes://session/20260704_092500_ddf3cb

# Conversation

- **Session ID:** `20260704_092500_ddf3cb`
- **Source:** tui
- **Model:** gemma4:12b-mlx
- **Started:** 2026-07-04T14:26:52Z
- **Messages:** 13
- **Tokens:** 180350 in / 892 out

---

### 👤 User — 2026-07-04T14:26:52Z

copy projects skills to ai profile

### 🤖 Assistant — 2026-07-04T14:32:11Z

<details><summary>Reasoning</summary>

The user wants to copy the "projects" skill from the current profile (default or whatever is active) to the "ai" profile.

I need to:
1.  Identify which profile has the `projects` skill currently. I'll start by listing the skills in the current/active profile.
2.  Check if an `ai` profile exists and find its skills.
3.  The `projects` skill is likely under the `productivity` category or similar (it was listed in the prompt as `project-workspace-setup`, but also referred to as `projects` in memory/prompts). I should check for a skill specifically named `projects`.
4.  Wait, looking at the available skills provided in the system prompt:
    *   `productivity`: contains `projects` (Project registry for the Hermes Desktop sidebar...).
5.  I need to find where that skill's file is located and copy it to the `ai` profile's skill directory.

However, I first need to verify if a profile named `ai` exists and what its path is. The system prompt says: "Active Hermes profile: default. Other profiles (if any) live under ~/.hermes/profiles/<name>/. Each profile has its own skills/, plugins/, cron/, and memories...".

Plan:
1.  List all available skills to confirm the name and content of the `projects` skill. (Actually, I'll just look for "projects" in the list).
2.  Identify the target profile path/location. The prompt says profiles are at `~/.hermes/profiles/<name>/`. So `ai` profile is at `~/.hermes/profiles/ai/`.
3.  Determine where the skills directory is for each. Usually it's inside the profile folder.
4.  I will need to read the content of the `projects` skill (which is in `.hermes/skills/`).
5.  Then I will write it to `.hermes/profiles/ai/skills/`.

Wait, let me check the file structure for skills first. The system prompt says: "Skills are your procedural memory... New skills go to ~/.hermes/skills/;". And profiles have their own `skills/` directories under `~/.hermes/profiles/<name>/`.

Step-by-step:
1.  List skills to find the exact name and file path of `projects`.
2.  Check if `~/.hermes/profiles/ai/` exists.
3.  Read the content of the `projects` skill (likely in `.hermes/skills/`).
4.  Write it to `.hermes/profiles/ai/skills/`.

Let's start by listing skills and checking for the profile.

</details>

**Tool call: skills_list**

```json
{
  "category": "productivity"
}
```

### 🤖 Assistant — 2026-07-04T14:32:19Z

**Tool call: skills_list**

```json
{}
```

### 🤖 Assistant — 2026-07-04T14:32:43Z

**Tool call: skill_view**

```json
{
  "name": "projects"
}
```

### 🤖 Assistant — 2026-07-04T14:33:59Z

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-04T14:36:11Z

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-04T14:37:35Z

I've identified the `projects` skill and its related workspace context skills. I can now proceed to copy the logic and metadata into an `ai` profile as requested.

Since you're asking for a cross-profile operation, I will use the `cross_profile=True` flag for any file writes required to establish this in the `ai` profile. 

I'll start by extracting the content of the `projects` skill and then prepare to create it within the `ai` profile (likely under a directory like `/Users/davec/.hermes/profiles/ai/skills/productivity/`).

How would you like me to handle any existing skills in the `ai` profile? I can:
1.  **Append** them if they don't conflict.
2.  **Overwrite** if there's a naming collision.
3.  **Create** only if it doesn't exist (and notify you of conflicts).

### 👤 User — 2026-07-04T15:51:04Z

1
