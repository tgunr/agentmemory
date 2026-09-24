---
type: Fact
title: # Fix iCloud Documents folder using wrong path

source: hermes
session_id: 20260
description: # Fix iCloud Documents folder using wrong path

source: hermes
session_id: 20260921_063601_6d3667
resource: hermes://session/20260921_063601_6d3667

# Conversation

- **Session ID:** `20260921_063601_
resource: agentmemory://memory/mem_mudu00n8_ffdd0ffc9550
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260921_063601_6d3667"]
timestamp: 2026-09-23T08:18:49.663Z
source: agentmemory
strength: 7
---
# Content

# Fix iCloud Documents folder using wrong path

source: hermes
session_id: 20260921_063601_6d3667
resource: hermes://session/20260921_063601_6d3667

# Conversation

- **Session ID:** `20260921_063601_6d3667`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-09-21T11:36:02Z
- **Ended:** 2026-09-23T07:52:09Z
- **Messages:** 23
- **Tokens:** 68203 in / 6176 out

---

### 👤 User — 2026-09-21T11:36:02Z

my iCloud Documents folder is using Documents 2 instead of Documents how do I fix this?

### 🤖 Assistant — 2026-09-21T11:36:17Z

<details><summary>Reasoning</summary>

The user is having an issue with their iCloud Documents folder. They say it's using "Documents 2" instead of "Documents". This is likely a macOS iCloud Drive issue where the folder structure got changed or there are two Documents folders.

Let me think about what could cause this. iCloud Drive on macOS syncs the Documents and Desktop folders. Sometimes when there are issues, macOS creates a "Documents 2" folder, or the folder gets renamed.

Let me search the system to understand the situation better. I should check:
1. What's in the user's home directory regarding Documents
2. iCloud Drive status
3. Whether there are two Documents folders

Let me use the terminal to investigate.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== Home dir listing ===\" && ls -la ~ | grep -i document && echo \"\" && echo \"=== iCloud Drive path ===\" && ls -la ~/Library/Mobile\\ Documents/ 2>/dev/null | head -20 && echo \"\" && echo \"=== Check iCloud Drive root for Documents ===\" && ls -la ~/Library/Mobile\\ Documents/com~apple~CloudDocs/ 2>/dev/null | grep -i document"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== iCloud status ===\" && defaults -currentHost read ~/Library/Preferences/ByHost/com.apple.icloud.managed 2>/dev/null | grep -i doNotSync | head -20; echo \"\" && echo \"=== iCloud Drive Desktop/Docs sync setting ===\" && defaults -currentHost read ~/Library/Containers/com.apple.icloud.apps.osx.clouddocuments/NSAppSleepDisabled 2>/dev/null; echo \"\" && echo \"=== Check if iCloud Drive is enabled ===\" && defaults -currentHost read ~/Library/Preferences/ByHost/com.apple.icloud.managed.plist 2>/dev/null | grep -E \"(MobileBackups|Services|Documents)\" | head -20; echo \"\" && echo \"=== Find all Documents folders in iCloud ===\" && find ~/Library/Mobile\\ Documents/com~apple~CloudDocs/ -maxdepth 1 -name \"*ocument*\" 2>/dev/null"
}
```

### 🤖 Assistant — 2026-09-21T11:36:41Z

<details><summary>Reasoning</summary>

So I can see the situation now. The key findings:

1. `~/Documents` is a real local directory (not a symlink)
2. `~/icloud` is a symlink to `~/Library/Mobile Documents/com~apple~CloudDocs` (the iCloud Drive root)
3. Inside iCloud Drive (`com~apple~CloudDocs`), there's a `Documents` symlink that points to `/Users/davec/Documents`

So the issue is that `~/Documents` is a local folder, but it appears the user expects it to be the iCloud Drive Documents folder. The `~/Documents` directory on the local machine is being used, but the iCloud Drive's Documents folder is just a symlink pointing back to the local one.

This is actually a common macOS configuration issue. When you enable "Desktop & Documents Folders" in iCloud Drive settings, macOS typically moves the contents of `~/Documents` into iCloud and replaces the local `~/Documents` with a symlink/placeholder.

Let me check the System Preferences for iCloud Drive settings and verify what's actually happening. The issue is that somehow `~/Documents` became a real local folder instead of staying as an iCloud Drive folder.

Wait, let me re-read the user's question. "my iCloud Documents folder is using Documents 2 instead of Documents how do I fix this?"

Hmm, "Documents 2" — this could mean there's a duplicate folder, or maybe the iCloud Drive is syncing to a folder called "Documents 2" instead of "Documents". Let me investigate more carefully.

Actually, looking at the output again:
- `~/Documents` is a local folder
- `~/Library/Mobile Documents/com~apple~CloudDocs/Documents` is a symlink → `/Users/davec/
