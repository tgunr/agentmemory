---
type: Fact
title: # SillyTavern Installation Location

source: hermes
session_id: 20260707_114350_
description: # SillyTavern Installation Location

source: hermes
session_id: 20260707_114350_78e104
resource: hermes://session/20260707_114350_78e104

# Conversation

- **Session ID:** `20260707_114350_78e104`
- *
resource: agentmemory://memory/mem_mspdvfqw_ff5eab45827b
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:01:11.640Z
source: agentmemory
strength: 7
---
# Content

# SillyTavern Installation Location

source: hermes
session_id: 20260707_114350_78e104
resource: hermes://session/20260707_114350_78e104

# Conversation

- **Session ID:** `20260707_114350_78e104`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-07T16:44:06Z
- **Messages:** 160
- **CWD:** `/Volumes/davec`
- **Tokens:** 368920 in / 9483 out
- **Est. cost:** $0.3128

---

### 👤 User — 2026-07-07T16:44:08Z

where did i install sillytavern

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>

The user is asking about where they installed SillyTavern. I have a memory note about this - it mentions "SillyTavern for local AI roleplay" in the skills list, and there's a skill called `sillytavern-setup` available. 

Let me check the skill first to see if it has installation details, and I can also search my memory/notes for this information.

I know from the available skills that there's a `sillytavern-setup` skill. Let me load it to see if it contains the installation path information.

</details>

**Tool call: skill_view**

```json
{
  "name": "sillytavern-setup"
}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


There are two files matching SillyTavern setup. Let me check both to find the one with installation details. Let me try reading the one in productivity folder first, as that's likely the main setup guide.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/skills/productivity/sillytavern-setup/SKILL.md"
}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


The skill file shows the installation instructions but doesn't specify the actual installation path. Let me check the references folder for the config snapshot which might have more details, and also search for any existing SillyTavern installations on the system.

Actually, I should search for SillyTavern directories or check common installation locations. Let me search for it.


</details>

**Tool call: search_files**

```json
{
  "pattern": "SillyTavern",
  "path": "/Users/davec",
  "target": "files"
}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


No results found. Let me try a broader search to find where SillyTavern might be installed. Common locations would be:
- ~/SillyTavern
- /opt/SillyTavern
- Anywhere with "sillytavern" in the path

Let me also check if there are any node processes running or npm/node installations that might indicate the location.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Users/davec -type d -iname \"*sillytavern*\" 2>/dev/null; find /opt -type d -iname \"*sillytavern*\" 2>/dev/null; find /usr/local -type d -iname \"*sillytavern*\" 2>/dev/null",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


The find command timed out. Let me try a more targeted search in common locations.

</details>

**Tool call: terminal**

```json
{}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


Let me try a different approach - check common install locations directly.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la ~/SillyTavern 2>/dev/null || echo \"Not found at ~/SillyTavern\"; ls -la ~/siltta* 2>/dev/null || echo \"Not found at ~/siltta*\"; ls -la ~/st* 2>/dev/null | head -20 || echo \"Not found at ~/st*\"",
  "timeout": 10
}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


Let me check if there's any node/npm related files or project directories that might indicate where SillyTavern was installed. I should also check the references folder in the skill for more specific info.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/skills/autonomous-ai-agents/uncensored-llm-models/references/sillytavern-setup.md"
}
```

### 🤖 Assistant — 2026-07-07T16:48:19Z

<details><summary>Reasoning</summary>


The reference files show the installation instructions but don't specify an actual installation path. Based on the installatio
