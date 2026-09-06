---
type: Fact
title: # Export Telegram Threads MacOS

source: abacus
session_id: 83695e836
resource: 
description: # Export Telegram Threads MacOS

source: abacus
session_id: 83695e836
resource: abacus://conversation/83695e836

# Conversation

- **Session ID:** `83695e836`
- **Source:** abacus.ai
- **Project:** AI
resource: agentmemory://memory/mem_mti8sg7a_295346c3dacc
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/83695e836"]
timestamp: 2026-09-01T05:44:13.210Z
source: agentmemory
strength: 7
---
# Content

# Export Telegram Threads MacOS

source: abacus
session_id: 83695e836
resource: abacus://conversation/83695e836

# Conversation

- **Session ID:** `83695e836`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-21T17:03:15+00:00
- **Messages:** 4

---

### 👤 User

In telegram on macOS, how can I export an entire thread of a conversation? Where are the messages store?

---

### 🤖 Assistant

### Exporting a specific thread/conversation in Telegram on macOS

Telegram doesn’t have a “one‑click export this single thread” button in the Mac app itself, but you *can* export chats using the official Telegram Desktop app. On macOS, there are actually two different apps:

- **Telegram** (from App Store, the “native” macOS app)
- **Telegram Desktop** (from [desktop.telegram.org](https://desktop.telegram.org/))

The **export function is in Telegram Desktop**, not the App Store macOS app. So first make sure you’re using / install:

> [Telegram Desktop](https://desktop.telegram.org/)

Once you have that:

1. **Open Telegram Desktop** and log in.
2. In the **chat list**, right‑click (or two‑finger click) the **chat you want to export** (this can be a 1:1 chat, group, or channel).
3. Choose **“Export chat history”** (wording may be “Export chat history” / “Export chat history…” depending on version).
4. In the dialog:
   - Select **what to include**:  
     - Messages  
     - Photos  
     - Videos  
     -

Voice messages / files, etc.  
   - Optionally set a **date range** (e.g., from the beginning to now).
   - Choose **export format**, typically:
     - HTML (nice for browsing in a browser)
     - JSON (for programmatic use)
5. Click **Export**.
6. When it finishes, click **Show in Finder** to see the folder where the export was saved. It will contain:
   - `messages.html` (or similar)
   - `photos`, `videos`, etc. as subfolders if you included media.

That effectively exports that entire “thread” (i.e., that chat).

> If you only see “Export Telegram data” without per‑chat export, you may need to:
> - Use the *Telegram Desktop* build (not the Mac Store app), and  
> - Make sure it’s updated to a recent version.

---

### Where Telegram messages are stored on macOS

Telegram is **cloud‑based**, so your full message history lives primarily on Telegram’s servers. The macOS app stores only a **local cache** of messages and media for quick access.

That local cache is **not** in a nice readable text file; it’s a

database plus media files.

Depending on which app you’re using, storage paths differ:

#### 1. Telegram Desktop (from desktop.telegram.org)

Typical locations (your username will differ):

- Config & data folder (sandboxed in user Library):

  ```text
  ~/Library/Application Support/Telegram Desktop/
  ```

  Inside you’ll see things like:

  - `tdata/` – encrypted profile/data storage, includes message database, keys, etc.
  - `D877F783D5D3EF8C` and similar – internal data directories
  - `user_data/`, `emoji`, etc.

Media cache is within `tdata` as well, but file names are not self‑explanatory.

#### 2. Telegram (Mac App Store version)

Sandboxed under the application container, e.g.:

```text
~/Library/Containers/ru.keepcoder.Telegram/
~/Library/Containers/ru.keepcoder.Telegram/Data/Library/Application Support/Telegram/
~/Library/Containers/ru.keepcoder.Telegram/Data/Library/Caches/
```

(If you installed a version with a slightly different bundle id, the `ru.keepcoder.Telegram` bit may differ, but it

will be under `~/Library/Containers/`.)

Again, messages are in internal databases; media cached under `Caches` or `Application Support`.

---

### Key points / limitations

- **You cannot simply copy a “messages file”** and read it like a log—Telegram encrypts/structures its local data.
- **Export is the intended way** to get a readable copy of a chat.
- Local storage is mostly a **cache**; deleting the app does **not** delete the chat from Telegram’s servers.
- If you want to back up *only one thread*, use the **per‑chat “Export chat history”** in Telegram Desktop as described above.

---

If yo
