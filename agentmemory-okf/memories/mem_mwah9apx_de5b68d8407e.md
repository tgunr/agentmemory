---
type: Fact
title: # Fix Finder folder sort order

source: hermes
session_id: local-b1d27d9bc46ede2
description: # Fix Finder folder sort order

source: hermes
session_id: local-b1d27d9bc46ede2125736607de619c64b41964edacaa9ff1d34ee1c04206c897
resource: hermes://session/local-b1d27d9bc46ede2125736607de619c64b4196
resource: agentmemory://memory/mem_mwah9apx_de5b68d8407e
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-11-10T09:18:13.718Z
source: agentmemory
strength: 7
---
# Content

# Fix Finder folder sort order

source: hermes
session_id: local-b1d27d9bc46ede2125736607de619c64b41964edacaa9ff1d34ee1c04206c897
resource: hermes://session/local-b1d27d9bc46ede2125736607de619c64b41964edacaa9ff1d34ee1c04206c897

# Conversation

- **Session ID:** `local-b1d27d9bc46ede2125736607de619c64b41964edacaa9ff1d34ee1c04206c897`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-09T13:35:39Z
- **Ended:** 2026-11-10T02:33:49Z
- **Messages:** 35
- **CWD:** `/Volumes/davec`
- **Tokens:** 45594 in / 14997 out

---

### 👤 User — 2026-11-09T13:35:57Z

[The user sent an image~ Here's what I can see:
This is a macOS Finder window in dark mode, using column view and showing the folder path **iCloud Drive > 3CL > design**. The middle column highlights the selected **design** folder, while the right column lists design-related items such as **Floral, Boxes, Plans, Boards, Workshop, scripts, .vscode, Laser, Luban, Fonts, Military, VCarve, SVG, CAD, DXF, Etsy, Plasma, SEPERATORLER, and Signs**. The sidebar includes locations like **Recents, iCloud Drive, Desktop, Downloads, Documents, Dropbox, Google Drive, AirDrop**, and **Network**. The bottom status bar reports **47 items**, **1.19 TB available on iCloud**, and an active upload of **596 bytes of 625 bytes**.]
[If you need a closer look, use vision_analyze with image_url: /Users/davec/.hermes/cache/documents/native-inputs/047c96d17fbdeb079310786c48f70bc1e850c0393541044f5866fd8beebbe1c8/dashboard_20261109_073557_f3107c2e_CleanShot_2026-11-09_at_07.35.16_64c5c5.png ~]

in the Finder I have this folder sorted by name but as you can see it is not sorted by name. Why?

### 🤖 Assistant — 2026-11-09T13:36:18Z

<details><summary>Reasoning</summary>

The user asks why Finder isn't sorting by name. Looking at the list: Floral, Boxes, Plans, Boards, Workshop, scripts, .vscode, Laser, Luban, Fonts, Military, VCarve, SVG, CAD, DXF, Etsy, Plasma, SEPERATORLER, Signs.

Wait — that ordering is actually... not alphabetical. But note the image description may be partial/read by an AI caption. Let me actually look at the image myself.

Let me use vision_analyze to see the actual order.

Possible reasons: iCloud Drive folders with un-downloaded items appear... Actually the most likely explanation: iCloud Drive's "sort by name" in column view sorts using the *localized* name, and items may have display names differing. But a stronger candidate: the folder is sorted by Name but Finder's column view sorts folders-first only for "date added"... hmm.

Another classic reason: the items are all folders vs files — Finder sorts folders first. But here mixed?

Actually a very common cause: iCloud Drive / cloud-synced files sort by *date* until fully downloaded? No.

Real classic cause: Finder sorts case-insensitively but also uses natural ordering. "Floral" first then "Boxes"? That's not alphabetical at all. Unless there's an invisible character or the display name is a localized string.

Hmm, wait — maybe the list isn't truly in that order; the caption may be arbitrary. Let me look.

Another very plausible cause: those are aliases/symlinks? No.

The strongest real-world explanation for arbitrary-looking order in a Finder list column while "Sort By Name" is checked: the items live in iCloud Drive and some are not downloaded, and Finder falls back to... no.

Actually! A known Finder behavior: sorting by Name in column view with "Arrange By" vs "Sort By" differences. If "Sort By: Name" but the view is set to "Arrange By: Date Added" / "Arrange By: None"? No, arrange overrides.

Also: Finder sorts using the "Sort name" metadata... For folders whose names contain non-ASCII, no.

Better approach: inspect the actual folder with `ls` and read Finder's .DS_Store order. The folder is iCloud Drive/3CL/design. I can check the sort setting in .DS_Store using a tool, or check the file system order.

Key insight: Finder in column view actually sorts by Name using a "localized standard" comparison. But files that are iCloud placeholders (.icloud) sort... hmm, no.

Let me actually inspect. Path: ~/Library/Mobile Documents/com~apple~CloudDocs/3CL/design.

Plan:
1. vision_analyze the image to see exact order (maybe compare with l
