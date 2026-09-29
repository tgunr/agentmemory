---
type: Fact
title: # Fix Makerlook DXF QuickLook preview

source: hermes
session_id: 20260925_09513
description: # Fix Makerlook DXF QuickLook preview

source: hermes
session_id: 20260925_095139_830bf9
resource: hermes://session/20260925_095139_830bf9

# Conversation

- **Session ID:** `20260925_095139_830bf9`
-
resource: agentmemory://memory/mem_mul67rcw_708e46bfa03a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop/DXF"]
timestamp: 2026-09-28T11:35:09.514Z
source: agentmemory
strength: 7
---
# Content

# Fix Makerlook DXF QuickLook preview

source: hermes
session_id: 20260925_095139_830bf9
resource: hermes://session/20260925_095139_830bf9

# Conversation

- **Session ID:** `20260925_095139_830bf9`
- **Source:** tui
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-25T14:54:01Z
- **Ended:** 2026-09-27T16:16:25Z
- **Messages:** 157
- **CWD:** `/Users/davec/Desktop/DXF`
- **Tokens:** 342493 in / 19595 out

---

### 👤 User — 2026-09-25T14:54:01Z

The application Makerlook is supposed to provide a quicklook for .dxf files but when I select a file using `qlmanage -p [User attached file: /Volumes/design/DXF/3.dxf] ` for example it shows as a AutoCAD file. Examine what needs to be done.

### 👤 User — 2026-09-25T14:54:01Z

The application Makerlook is supposed to provide a quicklook for .dxf files but when I select a file using `qlmanage -p [User attached file: /Volumes/design/DXF/3.dxf] ` for example it shows as a AutoCAD file. Examine what needs to be done.

### 🤖 Assistant — 2026-09-25T14:54:14Z

<details><summary>Reasoning</summary>

The user is asking about a Quick Look issue with DXF files on macOS. They have an application called Makerlook that's supposed to provide a Quick Look plugin for .dxf files, but when they use `qlmanage -p` on a DXF file, it shows as an AutoCAD file instead of using Makerlook's preview.

Let me first gather context about the repo structure and what Makerlook is, then diagnose the Quick Look issue.

I should:
1. Look at the repo structure
2. Find the Makerlook Quick Look plugin
3. Examine how it's configured
4. Look at the qlmanage output and Info.plist
5. Determine what needs to be fixed

Let me start by exploring the repo.

</details>

**Tool call: terminal**

```json
{
  "command": "pwd && ls -la && find . -maxdepth 3 -type f \\( -name \"*.plist\" -o -name \"*.md\" -o -name \"*.swift\" -o -name \"*.m\" -o -name \"*.h\" -o -name \"Makefile\" -o -name \"*.entitlements\" \\) 2>/dev/null | head -200"
}
```

### 🤖 Assistant — 2026-09-25T14:54:14Z

<details><summary>Reasoning</summary>

The user is asking about a Quick Look issue with DXF files on macOS. They have an application called Makerlook that's supposed to provide a Quick Look plugin for .dxf files, but when they use `qlmanage -p` on a DXF file, it shows as an AutoCAD file instead of using Makerlook's preview.

Let me first gather context about the repo structure and what Makerlook is, then diagnose the Quick Look issue.

I should:
1. Look at the repo structure
2. Find the Makerlook Quick Look plugin
3. Examine how it's configured
4. Look at the qlmanage output and Info.plist
5. Determine what needs to be fixed

Let me start by exploring the repo.

</details>

**Tool call: terminal**

```json
{
  "command": "pwd && ls -la && find . -maxdepth 3 -type f \\( -name \"*.plist\" -o -name \"*.md\" -o -name \"*.swift\" -o -name \"*.m\" -o -name \"*.h\" -o -name \"Makefile\" -o -name \"*.entitlements\" \\) 2>/dev/null | head -200"
}
```

### 🤖 Assistant — 2026-09-25T14:54:25Z

<details><summary>Reasoning</summary>

The current terminal is not in the Makerlook project root, so I’m going to find where its repo lives first instead of guessing paths. I’ll inspect the likely repo folder and list Quick Look/plugin-related files there.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Volumes -maxdepth 4 -type d -iname '*makerlook*' 2>/dev/null\nfind ~/Desktop ~/Downloads ~/Documents -maxdepth 4 -type d -iname '*makerlook*' 2>/dev/null"
}
```

### 👤 User — 2026-09-25T14:55:42Z

[OUT-OF-BAND USER MESSAGE — a direct message from the user, delivered once at this position; not tool output and not a new delivery when replayed from conversation history]
Makerlook is in /Applications, no source code
[/OUT-OF-BAND USER MESSAGE]

### 🤖 Assistant — 2026-09-25T14:55:42Z

This turn did not complete. Some actions may already have run; verify their effects before resending.

### 👤 User — 2026-09-25T14:55:48Z

Makerlook is in /Applications, no source code

### 🤖 Assistant — 2026-09-25T14:55:58Z

<details><summary>Reasoning</summary>

The user is clarifying that Makerlook is an applic
