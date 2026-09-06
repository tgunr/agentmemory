---
type: Fact
title: # Reinstalling Buildbotics firmware

source: chatgpt
session_id: 68ac63a6-30d8-8
description: # Reinstalling Buildbotics firmware

source: chatgpt
session_id: 68ac63a6-30d8-832c-8747-b93de37b6134
resource: chatgpt://conversation/68ac63a6-30d8-832c-8747-b93de37b6134

# Conversation

- **Session
resource: agentmemory://memory/mem_mtj5ogj4_f7f5720a804b
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/68ac63a6-30d8-832c-8747-b93de37b6134"]
timestamp: 2026-09-01T21:04:54.344Z
source: agentmemory
strength: 7
---
# Content

# Reinstalling Buildbotics firmware

source: chatgpt
session_id: 68ac63a6-30d8-832c-8747-b93de37b6134
resource: chatgpt://conversation/68ac63a6-30d8-832c-8747-b93de37b6134

# Conversation

- **Session ID:** `68ac63a6-30d8-832c-8747-b93de37b6134`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-25T13:23:07.435277+00:00
- **Messages:** 12

---

### 👤 User

I need detailed step-by-step instructions on how to reinstall firmware on a Buildbotics CNC controller if I need to restore back to the original factory image. Where is the factory image located, how do I download it, and then how do I install it?

---

### 🤖 Assistant

Got you. Below is a clear, end-to-end way to put a Buildbotics-style controller back to its “factory” software by re-imaging the microSD card (plus the lighter-weight alternative of reinstalling firmware only).

# First: pick the right path

- **If the controller still boots into the UI:** back up your settings and try a normal **firmware Upgrade/Upload** from the web UI first. (This does **not** reimage the SD card, so it preserves the OS and files.) The Admin tab documents **Backup/Restore** and the **Upgrade / Upload** firmware options. citeturn10view3  
  • Official firmware tarballs (Upload) are hosted in Buildbotics’ `/bbctrl/` directory (e.g., `bbctrl-0.4.xx.tar.bz2`). citeturn11view0

- **If the OS is broken / SD is corrupted / you want a true factory refresh:** do a **full SD-card reimage** with a factory OS image. This fully overwrites the card. (You’ll restore your configuration afterward.) citeturn3view0

> Tip: Buildbotics V2 controllers run on a Raspberry Pi 4 (hardware rev “V17 main board”). If you have V2, use a newer image that matches Pi 4; earlier V1 units use Pi 3 images. citeturn1search5

---

# Where the “factory” SD images live

Buildbotics publishes compressed SD-card images (`*.img.xz`) in their **/upload** area. You’ll see dated images such as:

- `2018-05-15-raspbian-stretch-bbctrl.img.xz` (Pi 3 era)  
- `2021-03-04-raspios-buster-armhf-bbctrl.img.xz` / `2022-03-30-…`  
- `2023-09-26-debian-bookworm-bbctrl.img.xz` (Pi 4 era)

Those are linked from the public index that community members have referenced (and that Buildbotics points to in their development docs). Pick the newest image appropriate to your hardware (V1/Pi 3 vs V2/Pi 4). citeturn7view0

If you’re actually restoring a **Onefinity** (which uses a Buildbotics-derived controller), use Onefinity’s “**Full SD Image**” resources; they post ready-to-flash controller images and step-by-step flashing instructions. citeturn1search1turn2search4

---

# Step-by-step: full SD-card “factory” restore

**What you need**

- A computer with a microSD reader/writer  
- A good-quality **32 GB** (or larger) microSD card (fresh cards reduce weird boot issues)  
- **Raspberry Pi Imager** (recommended) or **balenaEtcher** (both write `.img` or `.img.xz` directly) citeturn4view0turn2search4

**0) Back up your configuration (if the UI still loads)**  
Settings → **Admin** → **Configuration → Backup**. This saves a file you can **Restore** later. (If the UI is dead, you’ll re-enter settings manually.) citeturn10view3

**1) Power down and open the controller (safely)**  
- Switch **Enable** off and unplug AC.  
- Remove the top cover (four top screws). There’s heat-transfer paste between the lid and heatsink; lift gently. citeturn3view0

**2) Remove the microSD card**  
- It’s in the Raspberry Pi board (upper logic board). Eject the card. citeturn3view0

**3) Download the factory image**  
- From Buildbotics’ `/upload/` list, download the image that matches your hardware (Pi 3 vs Pi 4). Examples are shown above. (They’re `*.img.xz`—no need to manually decompress when using Imager/Etcher.) citeturn7view0

**4) Flash the card** (Raspberry Pi Imager or balenaEtcher)  
- Insert the microSD in your computer.  
- **Raspberry Pi Imager:**  
  - Choose OS → **Use custom** → select the downloaded `.img`/`.img.xz`.  
  - Choose Storage → your microSD → **Write**.  
- **balenaEtcher:** Select image → select target → **Flash**.  
(Onefinity’s SD-flash guide shows the same flow and works fine h
