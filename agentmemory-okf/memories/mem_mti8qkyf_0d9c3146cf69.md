---
type: Fact
title: # SD 10:0:17:0 Failure

source: abacus
session_id: 1219e11eb8
resource: abacus:/
description: # SD 10:0:17:0 Failure

source: abacus
session_id: 1219e11eb8
resource: abacus://conversation/1219e11eb8

# Conversation

- **Session ID:** `1219e11eb8`
- **Source:** abacus.ai
- **Project:** AI Vault
resource: agentmemory://memory/mem_mti8qkyf_0d9c3146cf69
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/1219e11eb8"]
timestamp: 2026-09-01T05:42:46.074Z
source: agentmemory
strength: 7
---
# Content

# SD 10:0:17:0 Failure

source: abacus
session_id: 1219e11eb8
resource: abacus://conversation/1219e11eb8

# Conversation

- **Session ID:** `1219e11eb8`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-03-25T11:41:27+00:00
- **Messages:** 8

---

### 👤 User

why is SD 10:0:17:0 failing

---

### 🤖 Assistant

The error messages in your image indicate that the drive at SCSI address `10:0:17:0` (identified as `sdq`) is experiencing a hardware-level communication failure. Specifically, the kernel is reporting a series of **task aborts** followed by **"Power-on or device reset occurred"** events.

Based on the logs and common issues with the `mpt3sas` driver (which manages LSI/Broadcom SAS controllers), here is why it is failing:

### 1. Physical Connection Issues (Most Likely)
The most common cause for these specific errors (`task abort: SUCCESS` followed by a reset) is a faulty or loose physical connection.
*   **Cables:** If you are using SFF-8087 or SFF-8643 to SATA breakout cables, one of the individual SATA strands or the main connector may be failing.
*   **Backplane:** If the drive is in a hot-swap bay, there could be a poor connection between the drive and the backplane, or the backplane itself could have a failing port.
*   **Power:** A failing power cable or a "daisy-chained" power splitter that isn't

providing stable voltage can cause the drive to momentarily lose power and reset.

### 2. Drive Hardware Failure
The drive `sdq` may be developing internal mechanical or electrical faults.
*   The log shows `Asking for cache data failed` and `Assuming drive cache: write through`, which happens when the controller loses the ability to communicate with the drive's onboard firmware.
*   The drive might be "hanging" on a bad sector, causing the controller to time out and issue a hard reset to try and recover it.

### 3. Controller (HBA) Overheating or Firmware Bug
The `mpt3sas_cm0: log_info(0x31110e03)` code is a specific diagnostic from the LSI/Broadcom controller.
*   **0x31110e03:** This typically translates to a "PL" (Protocol Layer) error indicating a "PL_LOGINFO_CODE_RESET_HISTORY" or a transport-layer reset.
*   If your HBA (Host Bus Adapter) is getting too hot, it can drop individual links. Ensure there is adequate airflow over the controller's heatsink.

### Recommended Next Steps:
1.  **Identify the

Drive:** Run `lsblk -S` or `lsscsi` to confirm which physical serial number or model corresponds to `sdq`.
2.  **Reseat Everything:** Shut down the system and reseat the data and power cables for that specific drive. If it's in a backplane, try moving it to a different slot.
3.  **Check SMART Data:** Run `smartctl -a /dev/sdq` to check for `Reallocated_Sector_Ct` or `UDMA_CRC_Error_Count`. A high CRC error count almost always confirms a bad cable.
4.  **Swap Cables:** If the errors persist after reseating, replace the SATA/SAS cable for that drive.

If the errors continue after a cable swap and a port move, the drive `sdq` is likely failing and should be replaced. For more detailed troubleshooting, [Server Fault](https://serverfault.com/questions/1104977/kernel-log-regular-attempting-task-abort-power-on-or-device-reset-occurred) and the [TrueNAS Community](https://www.truenas.com/community/threads/constant-power-on-or-device-reset-occurred-msgs.114238/) have extensive threads on these exact `mpt3sas` log

codes.

---

### 👤 User

how do I find out what drive bag that drive SDL is in on the supermicro server?

---

### 🤖 Assistant

To find the physical location of drive **SDL** on your Supermicro server, you can use the labels you have already applied to the drive caddies, combined with a software command to confirm the hardware path.

### 1. Visual Identification (Based on your Photo)
Looking at your second uploaded image (`IMG_20260325_072327.jpg`), you have labeled your drives. 
*   **SDL** is located in the **second column from the left, top row**.
*   The label on that caddy explicitly says **"SDL"** with a serial number starting with **"ZAD..."**.

### 2. Software Verificati
