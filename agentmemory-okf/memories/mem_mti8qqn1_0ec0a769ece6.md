---
type: Fact
title: # Connect Prusa XL to OctoPrint

source: abacus
session_id: 131f622b85
resource:
description: # Connect Prusa XL to OctoPrint

source: abacus
session_id: 131f622b85
resource: abacus://conversation/131f622b85

# Conversation

- **Session ID:** `131f622b85`
- **Source:** abacus.ai
- **Project:**
resource: agentmemory://memory/mem_mti8qqn1_0ec0a769ece6
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/131f622b85"]
timestamp: 2026-09-01T05:42:53.440Z
source: agentmemory
strength: 7
---
# Content

# Connect Prusa XL to OctoPrint

source: abacus
session_id: 131f622b85
resource: abacus://conversation/131f622b85

# Conversation

- **Session ID:** `131f622b85`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-09-26T11:05:22+00:00
- **Messages:** 20

---

### 👤 User

I need some specific instructions on how to connect a Prusa XL printer to Linux running OctoPrint.

---

### 🤖 Assistant

### Connect a Prusa XL to OctoPrint on Linux (USB/Serial)

Below is a reliable, step-by-step setup that works well with the Prusa XL’s multi-tool configuration.

#### 1) Prerequisites
- Linux machine with OctoPrint installed (system service or virtualenv).
- A good quality, short USB cable (avoid cheap/long cables).
- Latest Prusa XL firmware installed.
- Your Linux user added to the serial groups.

Run:
- Add user to serial groups
  - Debian/Ubuntu:
    - sudo usermod -a -G dialout $USER
    - sudo usermod -a -G tty $USER
  - Then log out and back in (or reboot).

#### 2) Physically connect
- Power on the Prusa XL.
- Connect the USB cable from the XL to your Linux host.
- Verify the kernel sees it:
  - dmesg | tail -n 50
  - You should see something like /dev/ttyACM0 or /dev/ttyUSB0.

Optional: find vendor/product to make a persistent symlink
- lsusb to identify the device.
- Create a udev rule for a stable name:
  - sudo nano /etc/udev/rules.d/99-prusa-xl.rules
  - Example (adjust ATTRS values to match

your device from udevadm info):
    - SUBSYSTEM=="tty", ATTRS{manufacturer}=="Prusa Research", SYMLINK+="prusa_xl", GROUP="dialout", MODE="0660"
  - Reload rules:
    - sudo udevadm control --reload-rules && sudo udevadm trigger
  - You should now have /dev/prusa_xl.

Tip: If you’re unsure of exact attributes, run:
- udevadm info --name=/dev/ttyACM0 --attribute-walk
…then copy the correct manufacturer/product/serial fields into the rule.

#### 3) Prevent USB autosuspend (recommended)
Some Linux power settings can drop the serial link:
- Create a rule:
  - sudo nano /etc/udev/rules.d/10-usb-autosuspend.rules
  - Add:
    - ACTION=="add", SUBSYSTEM=="usb", TEST=="power/control", ATTR{power/control}="on"
  - Reload:
    - sudo udevadm control --reload-rules && sudo udevadm trigger

Alternatively, disable USB autosuspend in your power manager or via TLP/Powertop if you use them.

#### 4) Configure OctoPrint
- Open OctoPrint in your browser and go to Settings.

Serial Connection:
- Serial Port: choose /dev/ttyACM0

or your symlink (/dev/prusa_xl).
- Baudrate: try Auto first; if needed, set 115200. If you get intermittent issues, try 250000.
- Check “Request exclusive access” (prevents other processes from grabbing the port).
- Optional: increase “Communication timeout” to 30–60s for stability.

Printer Profile:
- General:
  - Printer name: Prusa XL
  - Firmware: Marlin (Prusa firmware is Marlin-based).
- Print bed & build volume:
  - Form factor: Rectangular
  - Origin: Lower Left
  - Heated bed: Yes
  - Dimensions (approx):
    - X: 360 mm
    - Y: 360 mm
    - Z: 360 mm
- Axes:
  - Default speeds can be left at defaults; not critical for OctoPrint.
- Extruder:
  - Number of extruders: set to however many tools you have installed (1–5).
  - Shared nozzle: Off (each Nextruder has its own nozzle, OctoPrint will send T0–T4 tool changes).
  - Nozzle diameter: 0.4 mm (or whatever you’re using).
  - Heated extruder: Yes.

G-code flavor:
- Marlin.

Save profile.

#### 5) Connect and test
- Click “Connect” in OctoPrint.
- In

the Terminal tab, send:
  - M115 (report firmware)
  - M105 (temperature report)
- You should see the firmware ID and periodic temperature updates.

#### 6) Slicer notes (PrusaSlicer/Cura)
- If you’ll print via OctoPrint:
  - In your slicer, pick a Prusa XL profile matching your tool count.
  - Enable thumbnails if you use the “PrusaSlicer Thumbnails” OctoPrint plugin (optional).
  - Ensure start/end G-code is appropriate for the XL (usually the stock profile handles this).
- Tool changes: OctoPrint will pass through T0–T4 from your G-code. The XL docks/undocks tools itself.

#### 7) Useful OctoPrint
