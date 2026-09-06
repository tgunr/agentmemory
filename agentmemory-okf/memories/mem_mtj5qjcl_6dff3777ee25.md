---
type: Fact
title: # Folder structure update

source: chatgpt
session_id: 689ce05c-ee94-8330-b0e1-6
description: # Folder structure update

source: chatgpt
session_id: 689ce05c-ee94-8330-b0e1-69843488ea2d
resource: chatgpt://conversation/689ce05c-ee94-8330-b0e1-69843488ea2d

# Conversation

- **Session ID:** `68
resource: agentmemory://memory/mem_mtj5qjcl_6dff3777ee25
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689ce05c-ee94-8330-b0e1-69843488ea2d"]
timestamp: 2026-09-01T21:06:31.310Z
source: agentmemory
strength: 7
---
# Content

# Folder structure update

source: chatgpt
session_id: 689ce05c-ee94-8330-b0e1-69843488ea2d
resource: chatgpt://conversation/689ce05c-ee94-8330-b0e1-69843488ea2d

# Conversation

- **Session ID:** `689ce05c-ee94-8330-b0e1-69843488ea2d`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-13T18:58:38.780474+00:00
- **Messages:** 4

---

### 👤 User

The macros folder does not have the same folder strucutre as    the controller, files should be moved into the same folders as on the controller

---

### 🤖 Assistant

Got it — I updated the macro storage so the on-disk **macros folder mirrors the controller’s folder structure** for the raw G-code files.

What changed:

- Raw macro files now live under `macros/` in the **same subfolders** as on the controller (this already happened in your `sync_from_controller`, and now it won’t be polluted by JSONs).
- All **metadata JSON** files are moved into `macros/.meta/`.  
  This keeps the visible `macros/` tree matching the controller exactly.
- Loader/saver now read/write JSONs from `.meta/` instead of the top level.
- Added a tiny helper `_local_raw_path_from_data()` for future use.

You don’t need to change your sync logic: `sync_from_controller` already writes the raw content to the controller-relative path, and now the directory is clean so that structure is preserved.

If you’ve already got stray `*.json` files in `macros/`, just move them into `macros/.meta/` (or delete them) once—after that, everything will stay tidy.

---

### 👤 User

the various modelsac130

---

### 🤖 Assistant

Could you clarify what you mean by “the various models ac130”?  
Are you asking about:

- AC-130 aircraft variants (military gunships)?
- AI or machine learning models with “ac130” in the name?
- Or something else entirely?

---
