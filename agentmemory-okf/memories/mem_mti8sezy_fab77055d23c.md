---
type: Fact
title: # Error Fixing Guide

source: abacus
session_id: 822cab07f
resource: abacus://co
description: # Error Fixing Guide

source: abacus
session_id: 822cab07f
resource: abacus://conversation/822cab07f

# Conversation

- **Session ID:** `822cab07f`
- **Source:** abacus.ai
- **Project:** AI Vault
- **
resource: agentmemory://memory/mem_mti8sezy_fab77055d23c
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/822cab07f"]
timestamp: 2026-09-01T05:44:11.558Z
source: agentmemory
strength: 7
---
# Content

# Error Fixing Guide

source: abacus
session_id: 822cab07f
resource: abacus://conversation/822cab07f

# Conversation

- **Session ID:** `822cab07f`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-12-21T23:12:10+00:00
- **Messages:** 4

---

### 👤 User

How to fix this error?

---

### 🤖 Assistant

The dialog says:

> Error uploading to print host: Connect storage quota exceeded

This is coming from your print host (e.g., PrusaLink/PrusaConnect/OctoPrint/etc.), not from PrusaSlicer itself. The printer/host is out of allowed storage or quota, so the upload is refused.

Try this:

### 1. Free space on the print host
On whatever you’re uploading to (PrusaLink, PrusaConnect, OctoPrint, Duet, etc.):

1. Open its web interface in a browser.
2. Delete:
   - Old G‑code files
   - Old project files / uploads
   - Any unused logs or timelapse videos if your host stores them
3. Empty any “trash”/“deleted” folders if present.

Then try uploading again from PrusaSlicer.

### 2. Check host storage/quota settings
Depending on your host:

- **PrusaConnect / PrusaLink**
  - Log into [PrusaConnect](https://connect.prusa3d.com/) in your browser.
  - Check the printer’s storage usage; if you’re at or near the limit, delete files or upgrade the quota (if applicable).
- **OctoPrint or other local host**
  - Check the SD

card / internal storage usage on the Raspberry Pi or controller board.
  - If the disk is almost full, delete files or move logs/timelapses off the device.

### 3. Workaround: Save G‑code locally then copy manually
Until the quota issue is solved, you can:

1. In PrusaSlicer, instead of “Upload and print”, choose “Export G‑code”.
2. Save the file locally.
3. Upload it manually through the host’s web UI (it may give a clearer quota/space error there too).

### 4. If it still fails
If you’ve deleted files and it still says “quota exceeded”:

- Restart the print host (PrusaLink box, OctoPrint Pi, etc.) so it refreshes free-space info.
- Confirm:
  - What printer/host you are using (MK4 with PrusaLink, Mini, OctoPrint, etc.)
  - Whether you’re using PrusaConnect cloud or a direct IP connection

If you tell me which printer/host you’re using and how you connect from PrusaSlicer, I can give you host‑specific steps.

---

### 👤 User

I show 28.75 GB free

---

### 🤖 Assistant

If you really have ~28.75 GB free on the host but PrusaSlicer still says “Connect storage quota exceeded”, it’s almost certainly a **quota / limit in the service**, not raw disk space.

Below are the most likely cases and what to try for each. Skim to the one that matches how you’re connected.

---

### 1. If you’re using **PrusaConnect (cloud)**

PrusaConnect has its **own storage quota per account/printer**, independent of free space on the printer or SD card. You can have plenty of disk space but still hit the Connect quota.

1. Log in to [PrusaConnect](https://connect.prusa3d.com/) in a browser.
2. Go to your printer → look for:
   - Storage usage / quota bar
   - Any banner or tooltip about “storage quota exceeded” or “limit reached”.
3. Delete files from Connect:
   - Old G‑code jobs
   - Old project files / uploads
   - Any timelapse/video files stored there
4. Try another upload from PrusaSlicer.

If the quota bar looks wrong (e.g., mostly empty but still erroring), try:

- Log out and back into

PrusaConnect.
- Remove the printer from PrusaConnect and re‑add it (this forces a resync of metadata).

---

### 2. If you’re using **PrusaLink (direct to printer)**

PrusaLink talks to local storage on the printer (USB / internal). A few things to check:

1. **Verify free space from the printer’s own UI**
   - On the printer or its web interface, check the reported free space.
   - Sometimes the OS shows 28 GB free, but the *partition or mount* where G‑code is stored is smaller or full.

2. **Delete directly from the printer/PrusaLink UI**
   - Open the PrusaLink web page (printer’s IP).
   - Delete older G‑code files from there and retry.

3. **Restart the printer**
   - Power‑cycle the printer so PrusaLink refreshes d
