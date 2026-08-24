---
type: Fact
title: # Something else is using select for compare. As I see a "Compare with selected"
description: # Something else is using select for compare. As I see a "Compare with selected" a

source: kilo
session_id: 019d0612-b152-73af-8244-05d7b0b50955
resource: kilo://task/019d0612-b152-73af-8244-05d7b0b5
resource: agentmemory://memory/mem_mspdxz0r_5fe2f83658a2
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:09.928Z
source: agentmemory
strength: 7
---
# Content

# Something else is using select for compare. As I see a "Compare with selected" a

source: kilo
session_id: 019d0612-b152-73af-8244-05d7b0b50955
resource: kilo://task/019d0612-b152-73af-8244-05d7b0b50955

# Conversation

- **Task ID:** `019d0612-b152-73af-8244-05d7b0b50955`
- **Source:** kilo
- **Started:** 2026-03-19T12:29:41Z
- **Ended:** 2026-03-19T12:42:15Z
- **Message blocks:** 67
- **Tokens:** 1400766 in / 7329 out

---

### 👤 User — 2026-03-19T12:29:41Z

Something else is using select for compare. As I see a "Compare with selected" and a "Compare with Delta Walker" when I select a file in the Explorer. 
Perhaps you should prefix the "compare selected" with "deltawalker: compare selected" to differentiate it from the other one.

### 🤖 Assistant — 2026-03-19T12:29:49Z

<details><summary>Reasoning</summary>

The user is asking me to fix a conflict with another VSCode extension that also provides "Compare with selected" functionality. They want to prefix the Delta Walker extension's "compare selected" command with "deltawalker:" to differentiate it.

Let me first check the current state of the code to understand where these commands are defined. I need to look at the package.json and the command files to see how the context

</details>

### 👤 User — 2026-03-19T12:29:51Z

I'll examine the package.json and the relevant command files to understand how

### 🤖 Assistant — 2026-03-19T12:29:51Z

<details><summary>Reasoning</summary>

The user is asking me to fix a conflict with another VSCode extension that also provides "Compare with selected" functionality. They want to prefix the Delta Walker extension's "compare selected" command with "deltawalker:" to differentiate it.

Let me first check the current state of the code to understand where these commands are defined. I need to look at the package.json and the command files to see how the context menu commands are registered.

Let me read the relevant files to understand the current implementation.

</details>

### 👤 User — 2026-03-19T12:29:52Z

I'll examine the package.json and the relevant command files to understand how the context menu commands are currently defined, then prefix them with "deltawalker:" to differentiate from other extensions.


### 🤖 Assistant — 2026-03-19T12:29:52Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "deltawalker-vscode/package.json",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "deltawalker-vscode/package.json",
      "content": "/Users/davec/deltawalker-vscode/package.json"
    },
    {
      "path": "deltawalker-vscode/src/commands/compareWithActive.ts",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "deltawalker-vscode/src/commands/compareWithActive.ts",
      "content": "/Users/davec/deltawalker-vscode/src/commands/compareWithActive.ts"
    }
  ]
}
```

### 🤖 Assistant — 2026-03-19T12:30:01Z

<details><summary>Reasoning</summary>

Now I understand the issue. Looking at the package.json, I can see that the commands in the explorer/context menu are registered with simple titles like "DeltaWalker: Compare Selected Files" and "DeltaWalker: Compare Selected Folders". 

The user is saying that there's a conflict with another extension that also provides "Compare with selected" commands in the explorer context menu. They want to prefix the context menu entries with "DeltaWalker:" to differentiate them.

In VSCode, context menu entries in the `explorer/context` menu don't automatically show the command category or prefix. The solution is to change the `title` in the command definition to explicitly include "DeltaWalker:" at the beginning for the explorer context menu commands.

Looking at the current commands:
- Line 28-29: `"title": "DeltaWalker: Compare Selected Files"` 
- Line 32-33: `"title": "DeltaWalker: Compare Selected Folders"`

These already have "DeltaWalker:" in the title. However, I think what the user is referring to is that the context menu shows just "Compare Selected" without the extension prefix. 

Actually, wait - in VSCode's context menu, the command title is shown as-is. So "DeltaWalker: Compare Selected Files" should already show with the "DeltaWalk
