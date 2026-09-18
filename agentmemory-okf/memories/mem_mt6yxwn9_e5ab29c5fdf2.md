---
type: Fact
title: # Add bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0 as BROWSERUSE_API_KEY in A.
description: # Add bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0 as BROWSERUSE_API_KEY in A...

source: hermes
session_id: 20260823_112125_b1421d
resource: hermes://session/20260823_112125_b1421d

# Conversation

resource: agentmemory://memory/mem_mt6yxwn9_e5ab29c5fdf2
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-24T08:23:03.719Z
source: agentmemory
strength: 7
---
# Content

# Add bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0 as BROWSERUSE_API_KEY in A...

source: hermes
session_id: 20260823_112125_b1421d
resource: hermes://session/20260823_112125_b1421d

# Conversation

- **Session ID:** `20260823_112125_b1421d`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-23T17:05:57Z
- **Messages:** 13
- **CWD:** `/Users/davec`
- **Tokens:** 50244 in / 3513 out

---

### 👤 User — 2026-08-23T17:05:57Z

Add bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0 as a BROWSERUSE_API_KEY in my apple notes.

### 🤖 Assistant — 2026-08-23T17:06:03Z

<details><summary>Reasoning</summary>

The user wants me to add a key `bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0` as a `BROWSERUSE_API_KEY` in their Apple Notes.

I need to:
1. Use the apple-notes skill to understand how to edit Apple Notes via osascript
2. Find or create a note and add the key

Let me load the apple-notes skill first since it's directly relevant.

Actually, let me think about the request. "Add bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0 as a BROWSERUSE_API_KEY in my apple notes."

This means I should add to an Apple Note. The format likely is something like a key-value entry: `BROWSERUSE_API_KEY=bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0` or a line.

Let me load the apple-notes skill to see how it

</details>

**Tool call: skill_view**

```json
{
  "name": "apple-notes"
}
```

### 🤖 Assistant — 2026-08-23T17:08:10Z

<details><summary>Reasoning</summary>

Let me read the references for osascript templates to see exactly how to format the body edit. Also I need to find the note where I should add this key. The user says "Add bu_LoGTjBshwG9vr521wqklvRKz211KnJ99SOiGagcuQH0 as a BROWSERUSE_API_KEY in my apple notes."

I need to find the right note. Likely there's an "API Keys" folder. Let me search for an existing note that holds API keys. The user wants to add BROWSERUSE_API_KEY. There may be a note for browseruse, or maybe a general API keys note. Let me search first.

Let me look at the osascript templates reference and also search notes. These are independent: read the reference file and search notes. Let me do both.

Actually, the search via apple-mcp notes tool — but that's a tool I'd call. Let me think. The skill says reading is via mcp__apple_mcp__notes operation=search. But I need to check if that MCP tool is available. It's not in my directly listed tools but it's an MCP tool. Let me check — the tool_search catalog doesn't list apple_mcp. But the skill references mcp__apple_mcp__notes. MCP tools should be available if configured. Let me try using it. Actually, I don't have it in the deferred list either. Hmm. The deferred catalog doesn't list apple-mcp. But it might be a connected MCP server. Let me just try calling it via tool_call? No — I only get mcp tools that are connected. They appear as mcp__apple_mcp__notes in the function list? They're not in my list. 

Actually MCP tools, when connected, would show up. They're not in the provided function list. So maybe apple-mcp isn't currently connected, or it's available via tool_call. Let me check by trying the tool_search or just attempting. Actually, the skill says apple-mcp is read-only and used for search. But if not available, I can use osascript directly for everything including finding notes.

Let me read the reference template first, and also consider just using osascript to read notes. Actually, let me first find the note. I'll use osascript to search, or I could use the apple-mcp tool. Let me check if apple-mcp notes tool is callable.

Let me just read the reference and also do an osascript to list notes to locate the right one. Let me read the reference file.

</details>

**Tool call: skill_view**

```json
{
  "name": "apple-notes",
  "file_path": "references/osascript-templates.md"
}
```

**Tool call: terminal**

```json
{
  "command": "osascript -e 'tell application \"Notes\" to set out to {}' -e 'tell application \"Notes\" to repeat with f in every folder' -e 'tell application \"Notes\" to repeat with n in every note of f' -e 'tell application \"Notes\" to set end of out to (name of f as text) & \" :: \" & (name of n as text)' -e 'end re
