---
type: Fact
title: # MacOS Beta Installation on Separate Volume

source: claude
session_id: 3211d1b
description: # MacOS Beta Installation on Separate Volume

source: claude
session_id: 3211d1bb-f80e-4025-b76f-992a167f0759
resource: claude://conversation/3211d1bb-f80e-4025-b76f-992a167f0759

# Conversation

- **
resource: agentmemory://memory/mem_mti600en_39807d7aa8bc
tags: ["okf", "okf-claude", "claude", "claude://conversation/3211d1bb-f80e-4025-b76f-992a167f0759"]
timestamp: 2026-09-01T04:26:07.162Z
source: agentmemory
strength: 7
---
# Content

# MacOS Beta Installation on Separate Volume

source: claude
session_id: 3211d1bb-f80e-4025-b76f-992a167f0759
resource: claude://conversation/3211d1bb-f80e-4025-b76f-992a167f0759

# Conversation

- **Session ID:** `3211d1bb-f80e-4025-b76f-992a167f0759`
- **Source:** claude
- **Started:** 2025-06-29T09:53:24Z
- **Messages:** 22

---

### 👤 User — 2025-06-29T09:53:25Z

help me find the installer for MacOS 26 that i let beta software update to occur but don't want to install over my current OS but rather on a separate APFS volume I created. I need to prevent the system from trying to restart and run the installer.

---

### 🤖 Assistant — 2025-06-29T09:53:43Z

The user is asking about macOS 26, but there's an issue here. As of my knowledge cutoff in January 2025, macOS 26 doesn't exist yet. The latest macOS versions I'm aware of are:

- macOS 15 (Sequoia) - released in 2024
- macOS 14 (Sonoma) - released in 2023
- macOS 13 (Ventura) - released in 2022

The user mentions they "let beta software update to occur" which suggests they might have downloaded a beta version of a future macOS. However, macOS 26 would be many years in the future based on Apple's typical release cycle (they release one major version per year).

It's possible the user:
1. Made a typo and meant macOS 15.6 or some other version
2. Is confused about version numbering
3. Actually has some beta software but it's not macOS 26

I should clarify this first, but also provide helpful information about how to handle macOS installers and prevent automatic installation, since that's what they're really asking about - the technical process.

The user wants to:
1. Find the installer they downloaded
2. Install it on a separate APFS volume (not overwrite current OS)
3. Prevent automatic restart/installation

This is all technically feasible with actual macOS installers.I need to clarify something first - as of early 2025, macOS 26 doesn't exist yet. Apple typically releases one major macOS version per year, and the current latest is macOS 15 (Sequoia). You might be referring to a different version number or perhaps a beta of macOS 15.x?

That said, here's how to handle macOS installers and prevent automatic installation:

## Finding the Downloaded Installer

The macOS installer is typically downloaded to:
- `/Applications/` (as "Install macOS [Version Name].app")
- Or check `~/Library/Updates/` for staged updates

You can also check what's downloaded using Terminal:
```bash
ls /Applications/ | grep "Install macOS"
```

## Preventing Automatic Installation

To stop the system from auto-restarting and installing:

1. **Disable automatic updates immediately:**
   - System Settings > General > Software Update
   - Turn off "Download new updates when available"
   - Turn off "Install macOS updates"

2. **Remove the staged update:**
   ```bash
   sudo softwareupdate --clear-catalog
   ```

3. **If you see a notification about restarting, click "Later" and choose "Remind Me Tomorrow"**

## Installing to Separate APFS Volume

Once you have the installer and have prevented auto-installation:

1. **Use the installer manually:**
   ```bash
   sudo /Applications/Install\ macOS\ [Version].app/Contents/Resources/startosinstall --volume /Volumes/[YourVolumeName]
   ```

2. **Or run the installer GUI and select your separate volume when prompted**

Can you confirm which macOS version you actually downloaded? I can provide more specific guidance once we clarify that.

---

### 👤 User — 2025-06-29T10:07:06Z

davec@Mini ~ % sudo softwareupdate -l
Software Update Tool
Finding available software
Software Update found the following new or updated software:
* Label: macOS Tahoe 26 Beta 2-25A5295e
	Title: macOS Tahoe 26 Beta 2, Version: 26.0, Size: 7440128KiB, Recommended: YES, Action: restart,

---

### 🤖 Assistant — 2025-06-29T10:07:20Z

Interesting! The user is showing me output that indicates there actually is a "macOS Tahoe 26 Beta 2" available. This is surprising since my knowledge cutoff is January 2025 and I wasn't aware of macOS 26 being announced or released. However, the user is showing me actual terminal output from their system, so this appears to be real.

The o
