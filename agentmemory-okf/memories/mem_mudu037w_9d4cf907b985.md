---
type: Fact
title: # Application Maker QuickLook DXF not working

source: hermes
session_id: 202609
description: # Application Maker QuickLook DXF not working

source: hermes
session_id: 20260922_113321_8251bd
resource: hermes://session/20260922_113321_8251bd

# Conversation

- **Session ID:** `20260922_113321_8
resource: agentmemory://memory/mem_mudu037w_9d4cf907b985
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Work/spotlights/DXF"]
timestamp: 2026-09-23T08:18:52.974Z
source: agentmemory
strength: 7
---
# Content

# Application Maker QuickLook DXF not working

source: hermes
session_id: 20260922_113321_8251bd
resource: hermes://session/20260922_113321_8251bd

# Conversation

- **Session ID:** `20260922_113321_8251bd`
- **Source:** desktop
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-22T16:33:22Z
- **Messages:** 56
- **CWD:** `/Users/davec/Work/spotlights/DXF`
- **Tokens:** 71265 in / 7481 out

---

### 👤 User — 2026-09-22T16:33:22Z

I installed the Application Maker look yesterday, which is supposed to have quicklook for DXF and other files. The application will open the file and display it, but the quick look is not functional. Can you look at the application resources and see what's going on and why it's not working?

### 🤖 Assistant — 2026-09-22T16:33:32Z

<details><summary>Reasoning</summary>

The user is asking about "Application Maker" — but they likely mean "App Wrapper" or "App Maker"? Wait, they say "Application Maker look" — maybe they mean "App Wrapper"? Or maybe "App Make"? Actually, they mention "quicklook for DXF and other files". This sounds like macOS Quick Look plugin issue. "Application Maker" might be "App Wrapper"? Let me search.

Actually, "Application Maker" might be "App Wrapper"? Hmm. Let me search for what they might have installed. They said "Application Maker look yesterday" — maybe it's "App Make"? Or maybe they mean "App Wrapper"? Let me think.

Wait, there is a tool called "App Wrapper" by Ohanaware? Or "App Make"? Actually, "Application Maker" might be "App Make"? I'm not sure. Let me search for it.

But wait, the user is on macOS (mini.local, pro.local). They installed something yesterday that provides Quick Look for DXF and other files. The application opens files but Quick Look doesn't work. They want me to look at application resources to see what's going on.

I should first figure out what they installed. Let me search the system for recent installs, or maybe search for "Application Maker" or "App Make" or similar. Or maybe they mean "App Wrapper"? Let me search for Quick Look plugins related to DXF.

Actually, there is a macOS app called "Application Maker"? No, I think they might mean "App Wrapper" or maybe "App Make"? Wait, there's "App Make" — no. Let me search.

Actually, I recall an app called "App Wrapper" that wraps websites into apps. But that's not it. There's also "Application Maker" — maybe it's "App Maker"? Let me search.

Alternatively, maybe they installed "App Make" which is a tool to create apps? No.

Wait, maybe it's "App Make"? Or maybe it's "App Make"? Hmm.

Let me just search the system for what was installed recently and what might be related to Quick Look and DXF.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Applications -maxdepth 2 -type d -name \"*App*\" -o -name \"*Quick*\" -o -name \"*DXF*\" -o -name \"*Maker*\" | head -50",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la /Library/QuickLook/ 2>/dev/null; ls -la ~/Library/QuickLook/ 2>/dev/null",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "find /Applications -maxdepth 3 -name \"*.qlgenerator\" -o -name \"*quicklook*\" -o -name \"*QuickLook*\" 2>/dev/null | head -50",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-09-22T16:33:46Z

<details><summary>Reasoning</summary>

I found the app: /Applications/MakerLook.app. Let me inspect it to see why Quick Look is not working. The app likely has a Quick Look extension/plugin embedded, but may not be installed or enabled.

</details>

**Tool call: terminal**

```json
{
  "command": "find /Applications/MakerLook.app -maxdepth 4 -name \"*.qlgenerator\" -o -name \"*QuickLook*\" -o -name \"*Extension*\" -o -name \"*PlugIn*\" -o -name \"*plugin*\" -o -name \"*.qlplugin\" 2>/dev/null | head -50",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "plutil -p /Applications/MakerLook.app/Contents/Info.plist 2>/dev/null | head -200",
  "timeout": 30
}
```

**Tool call: terminal**

```json
{
  "command": "find /Applications/MakerLook.app/Contents -maxdepth 4 \\( -name \"PlugIns\" -o -name \"Extensions\" -o -name \"Framework
