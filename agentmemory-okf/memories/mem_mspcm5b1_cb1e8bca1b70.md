---
type: Fact
title: # Export Stored Memories And Context

source: hermes
session_id: 20260713_112752
description: # Export Stored Memories And Context

source: hermes
session_id: 20260713_112752_93e0e7
resource: hermes://session/20260713_112752_93e0e7

# Conversation

- **Session ID:** `20260713_112752_93e0e7`
- 
resource: agentmemory://memory/mem_mspcm5b1_cb1e8bca1b70
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T00:25:58.604Z
source: agentmemory
strength: 7
---
# Content

# Export Stored Memories And Context

source: hermes
session_id: 20260713_112752_93e0e7
resource: hermes://session/20260713_112752_93e0e7

# Conversation

- **Session ID:** `20260713_112752_93e0e7`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-13T16:27:52Z
- **Messages:** 34
- **CWD:** `/Users/davec`
- **Tokens:** 66 in / 6268 out
- **Est. cost:** $0.0695

---

### 👤 User — 2026-07-13T16:27:52Z

Export all of my stored memories and any context you've learned about me from past conversations. Preserve my words verbatim where possible, especially for instructions and preferences.

## Categories (output in this order):

1. **Instructions**: Rules I've explicitly asked you to follow going forward — tone, format, style, "always do X", "never do Y", and corrections to your behavior. Only include rules from stored memories, not from conversations.

2. **Identity**: Name, age, location, education, family, relationships, languages, and personal interests.

3. **Career**: Current and past roles, companies, and general skill areas.

4. **Projects**: Projects I meaningfully built or committed to. Ideally ONE entry per project. Include what it does, current status, and any key decisions. Use the project name or a short descriptor as the first words of the entry.

5. **Preferences**: Opinions, tastes, and working-style preferences that apply broadly.

## Format:

Use section headers for each category. Within each category, list one entry per line, sorted by oldest date first. Format each line as:

[YYYY-MM-DD] - Entry content here.

If no date is known, use [unknown] instead.

## Output:
- Wrap the entire export in a single code block for easy copying.
- After the code block, state whether this is the complete set or if more remain.

### 🤖 Assistant — 2026-07-13T16:28:05Z

<details><summary>Reasoning</summary>

The user wants me to export all stored memories and context learned about them. Let me first look at what's already in my memory (shown in the system prompt), and then search past sessions for additional context.

From the system prompt, I can see:

**MEMORY (personal notes):**
1. ComfyUI canonical install path and launch command
2. .hermes/ and .startup/ are git repos. Shared KB location.
3. AgentMemory integration rules
4. CNC merged into CC profile
5. Profile CWD auto-sync bug workaround
6. Single-source-of-truth cleanup requests require consolidation audit
7. Desktop GUI profile bug workaround
8. Home org: projects=maker/fab, sources=code/AI/scripts, Work=admin. Hazrl ages Downloads→Desktop→Trash
9. SSH server access aliases

**USER PROFILE:**
1. Prefers MCP router for external service queries
2. Prefers clean fresh installs from GitHub over migrating existing code
3. Prefers class-level / umbrella names for new skills
4. Active NSFW/literary AI roleplay via SillyTavern+Ollama

Now I need to search past sessions for more context about the user's identity, career, projects, etc. Let me do a broad search.

</details>

**Tool call: session_search**

```json
{
  "query": "name age location family education background",
  "limit": 5
}
```

**Tool call: session_search**

```json
{
  "query": "career job work role company developer engineer",
  "limit": 5
}
```

**Tool call: session_search**

```json
{
  "query": "project built created committed working on",
  "limit": 5
}
```

### 🤖 Assistant — 2026-07-13T16:28:12Z

<details><summary>Reasoning</summary>

The session search returned no results. Let me try different queries to find past conversation data about the user.

</details>

**Tool call: session_search**

```json
{
  "limit": 5,
  "query": "Dave David user name"
}
```

**Tool call: session_search**

```json
{
  "limit": 5,
  "query": "preference likes dislikes workflow"
}
```

**Tool call: session_search**

```json
{
  "limit": 5,
  "query": "CNC epoxy resin fab maker"
}
```

### 🤖 Assistant — 2026-07-13T16:28:16Z

<details><summary>Reasoning</summary>

The session search is returning empty results. Let me try browsing recent sessions to see what's available.


</details>

**Tool call: session_search**

```json
{
  "limit": 10
}
```

### 🤖
