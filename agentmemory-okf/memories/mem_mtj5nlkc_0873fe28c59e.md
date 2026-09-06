---
type: Fact
title: # Editor window behavior update

source: chatgpt
session_id: 689f3b74-6fb8-8324-
description: # Editor window behavior update

source: chatgpt
session_id: 689f3b74-6fb8-8324-ad2a-2cdb3ddf6e2e
resource: chatgpt://conversation/689f3b74-6fb8-8324-ad2a-2cdb3ddf6e2e

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj5nlkc_0873fe28c59e
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689f3b74-6fb8-8324-ad2a-2cdb3ddf6e2e"]
timestamp: 2026-09-01T21:04:14.205Z
source: agentmemory
strength: 7
---
# Content

# Editor window behavior update

source: chatgpt
session_id: 689f3b74-6fb8-8324-ad2a-2cdb3ddf6e2e
resource: chatgpt://conversation/689f3b74-6fb8-8324-ad2a-2cdb3ddf6e2e

# Conversation

- **Session ID:** `689f3b74-6fb8-8324-ad2a-2cdb3ddf6e2e`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-15T13:51:49.791381+00:00
- **Messages:** 4

---

### 👤 User

The editor window should update on a selection in the controller files just like local macros. The same rules apply. If the editor window has modifications of the file that's in the editor window, it should first ask to save that. Then I can proceed to view the current selection.

---

### 🤖 Assistant

Done. Now when you select a controller file in the tree:

- If the editor has unsaved changes, you’ll get the same save/discard/cancel prompt used for local macros.
- If you choose Yes/No, the selected controller file is immediately loaded into the editor.
- If you choose Cancel, nothing changes and the selection stays put.
- Button states stay in sync with the selection.

If you want this behavior only on single-click (current) or to restrict it to double-click, say the word and I’ll tweak it.

---

### 👤 User

The app is not asking to save changes when i make an edit then select a different file

---

### 🤖 Assistant

Thanks for the heads-up — I’ve tightened the dirty-check so it actually fires the prompt.

### What changed
Your editor exposes “dirty” a few different ways across the codebase (`has_unsaved_changes()`, `is_editor_dirty()`, and the Tk `Text.edit_modified()` flag). The previous check only looked for `has_unsaved_changes()`, so if your editor was setting a different flag, you’d never get prompted.

I updated `macro_panel.py` so `_prompt_save_changes(...)` now:

- Detects unsaved changes via any of:
  - `code_editor.has_unsaved_changes()`
  - `code_editor.is_editor_dirty()`
  - `code_editor.text_widget.edit_modified()`
  - (fallback) `main_window.is_editor_dirty()`
- Shows the Yes / No / Cancel dialog when any of those indicate dirty.
- On Yes: calls your existing save flow.
- On Yes or No: clears all known modified flags (`clear_modified_flag()`, `mark_editor_clean()`, and `text_widget.edit_modified(False)`) so the editor state is consistent.

### How to verify quickly
1. Open any controller file in the editor.
2. Make a small edit.
3. Click another file in “Controller Files”.

You should now see the save/discard/cancel prompt. If you don’t, tell me which of those dirty flags your editor actually sets, and I’ll tailor the check further (or we can add a single source of truth helper to your editor).

---
