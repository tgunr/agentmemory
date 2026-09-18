---
type: Fact
title: # Add imagine skill to jo profile

source: hermes
session_id: 20260709_083615_6f
description: # Add imagine skill to jo profile

source: hermes
session_id: 20260709_083615_6f5443
resource: hermes://session/20260709_083615_6f5443

# Conversation

- **Session ID:** `20260709_083615_6f5443`
- **S
resource: agentmemory://memory/mem_mspcm4b4_c35f8da0d3e5
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260709_083615_6f5443"]
timestamp: 2026-08-12T00:25:57.314Z
source: agentmemory
strength: 7
---
# Content

# Add imagine skill to jo profile

source: hermes
session_id: 20260709_083615_6f5443
resource: hermes://session/20260709_083615_6f5443

# Conversation

- **Session ID:** `20260709_083615_6f5443`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-09T13:37:09Z
- **Ended:** 2026-07-09T13:42:35Z
- **Messages:** 9
- **Tokens:** 24 in / 893 out
- **Est. cost:** $0.0141

---

### 👤 User — 2026-07-09T13:37:09Z

The profile in .hermes/jo is missing the /imagine skill to create images

### 🤖 Assistant — 2026-07-09T13:37:23Z

<details><summary>Reasoning</summary>

The user is saying that the `jo` profile is missing the `/imagine` skill for image creation. Let me look at what's going on with this. First, let me check what the imagine skill looks like and whether it's available to the `jo` profile.

Let me first load the imagine skill to understand its current state, and also check what's in the jo profile's directory to see if there's a symlink or configuration issue.

</details>

**Tool call: skill_view**

```json
{
  "name": "imagine"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/profiles/jo/skills/ 2>/dev/null | grep -i imagine || echo \"Not found in jo profile\"; echo \"---\"; ls ~/.hermes/profiles/jo/skills/ 2>/dev/null || echo \"No skills dir\""
}
```

### 🤖 Assistant — 2026-07-09T13:37:46Z

<details><summary>Reasoning</summary>

The `imagine` skill lives at `~/.hermes/skills/image-generation/imagine/` (shared skills directory). The `jo` profile at `~/.hermes/profiles/jo/skills/` doesn't have it. I need to figure out how the jo profile gets its skills — does it use symlinks, or does each profile have its own copy? Based on memory, shared KB is at `~/sources/hermes-knowledge/skills` via `skills.external_dirs`. Let me check if there's a symlink mechanism or if I need to check how other profiles reference the imagine skill.


Since the jo profile already has category folders like `apple`, `autonomous-ai-agents`, and `creative`, I can just symlink the imagine skill into its `creative` category folder rather than copying it.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== jo creative category ===\"; ls -la ~/.hermes/profiles/jo/skills/creative/ 2>/dev/null || echo \"no creative dir\"; echo \"\"; echo \"=== default profile imagine ===\"; find ~/.hermes/profiles/default/skills/ -name \"imagine*\" -o -path \"*imagine*\" 2>/dev/null | head -5; echo \"\"; echo \"=== all profiles with imagine ===\"; find ~/.hermes/profiles/*/skills/ -path \"*imagine*\" 2>/dev/null | head -10"
}
```

### 🤖 Assistant — 2026-07-09T13:38:00Z

<details><summary>Reasoning</summary>

The imagine skill exists in the shared skills at `~/.hermes/skills/image-generation/imagine/`. The jo profile needs it added. I'll copy it into the jo profile's creative category (since jo already has a creative category folder). I should put it under `creative/imagine` in the jo profile's skills directory.
</anttml:thinking>


</details>

**Tool call: terminal**

```json
{
  "command": "cp -R ~/.hermes/skills/image-generation/imagine ~/.hermes/profiles/jo/skills/creative/imagine && echo \"Copied successfully\" && ls -la ~/.hermes/profiles/jo/skills/creative/imagine/"
}
```

### 🤖 Assistant — 2026-07-09T13:38:11Z

<details><summary>Reasoning</summary>

...


</details>

Done! The `imagine` skill is now installed in the jo profile at `~/.hermes/profiles/jo/skills/creative/imagine/`. It includes the main `SKILL.md`, the `scripts/generate.py` and `scripts/prompt_analyze.py` helpers, and the reference docs.

You'll need to switch to the jo profile (`hermes -p jo`) for the agent to pick it up. Both ComfyUI local generation and FAL backend should work from there.
