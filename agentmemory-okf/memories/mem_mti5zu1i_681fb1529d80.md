---
type: Fact
title: # Supermicro Server JBOD ZFS Configuration

source: claude
session_id: 1d86a237-
description: # Supermicro Server JBOD ZFS Configuration

source: claude
session_id: 1d86a237-f181-4338-9f1c-5e24adcab3a9
resource: claude://conversation/1d86a237-f181-4338-9f1c-5e24adcab3a9

# Conversation

- **Se
resource: agentmemory://memory/mem_mti5zu1i_681fb1529d80
tags: ["okf", "okf-claude", "claude", "claude://conversation/1d86a237-f181-4338-9f1c-5e24adcab3a9"]
timestamp: 2026-09-01T04:25:58.880Z
source: agentmemory
strength: 7
---
# Content

# Supermicro Server JBOD ZFS Configuration

source: claude
session_id: 1d86a237-f181-4338-9f1c-5e24adcab3a9
resource: claude://conversation/1d86a237-f181-4338-9f1c-5e24adcab3a9

# Conversation

- **Session ID:** `1d86a237-f181-4338-9f1c-5e24adcab3a9`
- **Source:** claude
- **Started:** 2025-06-19T20:53:44Z
- **Messages:** 8

---

### 👤 User — 2025-06-19T20:53:45Z

How do i configure a Supermicro SuperStorage 6048R-E1CR36N 
36 Bay LFF 4U Server with X10DRi-T4+, 2X E5-2640 V4 2.4GHz 10 Core, 16GB DDR4, 36x Trays, 2X 10GbE, 2X 1280W PSUs to use JBOD for ZFS. Need step by step instructions to get into bios.

---

### 🤖 Assistant — 2025-06-19T20:54:11Z

The user is asking about configuring a specific Supermicro server model for JBOD (Just a Bunch of Disks) to work with ZFS. This is a technical server configuration question that involves:

1. Getting into BIOS
2. Configuring the storage controller for JBOD mode
3. Setting it up for ZFS

Let me break this down step by step. The SuperStorage 6048R-E1CR36N is a 4U server with 36 LFF (Large Form Factor) drive bays. The X10DRi-T4+ is the motherboard model.

For ZFS, you typically want the drives to be presented as individual drives (JBOD mode) rather than being managed by a hardware RAID controller, since ZFS handles its own redundancy and disk management.

I should provide step-by-step instructions for:
1. Accessing BIOS/UEFI
2. Configuring storage controller settings
3. Setting up JBOD mode
4. Any additional settings needed

Let me provide comprehensive instructions.Here's a step-by-step guide to configure your Supermicro SuperStorage server for JBOD mode to work with ZFS:

## Accessing BIOS/UEFI

### Step 1: Power On and Access BIOS
1. **Power on the server** and watch the boot screen
2. **Press Delete key** repeatedly during POST (Power-On Self-Test) when you see the Supermicro logo
   - Alternative: Press **F11** for boot menu, then select "Enter Setup"
   - You have about 3-5 seconds during the initial boot sequence

### Step 2: Navigate BIOS Interface
- Use arrow keys to navigate
- Enter to select options
- Esc to go back
- F10 to save and exit

## Configuring Storage for JBOD/ZFS

### Step 3: Configure Storage Controller
1. In BIOS, navigate to **"Advanced"** tab
2. Go to **"PCIe/PCI/PnP Configuration"** or **"Chipset"**
3. Look for **"Storage Configuration"** or **"SATA Configuration"**

### Step 4: Set SATA Mode
1. Find **"SATA Mode Selection"** or **"SATA Controller Mode"**
2. Change from **"RAID"** to **"AHCI"** mode
   - AHCI allows individual drive access needed for ZFS
   - Avoid "IDE" mode as it's legacy

### Step 5: Configure LSI/Broadcom HBA (if present)
If your server has an LSI HBA card for the drive bays:

1. During boot, watch for **LSI/Broadcom BIOS prompt** (usually Ctrl+C)
2. Access the LSI WebBIOS or SAS BIOS
3. Navigate to **"Controller Settings"** 
4. Set **"RAID Support"** to **"Disabled"** or **"IT Mode"**
5. This presents drives as individual JBOD devices

### Step 6: Additional BIOS Settings
1. **"Advanced" → "CPU Configuration"**:
   - Enable **"Intel VT-d"** if using virtualization
   
2. **"Advanced" → "Chipset Configuration"**:
   - Enable **"Above 4G Decoding"** for large memory configurations
   
3. **"Boot"** tab:
   - Set boot priority to your OS drive/USB

### Step 7: Save and Exit
1. Press **F10** or navigate to **"Save & Exit"**
2. Select **"Save Changes and Reset"**
3. Confirm **"Yes"**

## Post-BIOS Verification

### Step 8: Verify Drive Detection
After reboot, ensure your OS can see all drives individually:
```bash
# In Linux, check drive detection
lsblk
# or
ls /dev/sd*

# Verify drives are not in RAID arrays
cat /proc/mdstat
```

## Important Notes

- **LSI Controller Firmware**: If using LSI HBA, ensure it's flashed to **IT (Initiator Target) mode** rather than IR (Integrated RAID) mode
- **Drive Naming**: In JBOD mode, drives will appear as /dev/sda, /dev/sdb, etc.
- **Hot-Swap**: JBOD mode typically supports hot-swapping drives
- **No Hardware RAID**: ZFS manages all redundancy - don't create hardware RAID arrays

## Troubleshooting

If you can't access BIOS:
- Try **F2** key instead of Delete
- Remove all drive
