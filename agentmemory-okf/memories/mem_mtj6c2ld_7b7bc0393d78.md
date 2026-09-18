---
type: Fact
title: # Buildbotics Controller Boot Failure

source: claude
session_id: 3a65af4d-f29b-
description: # Buildbotics Controller Boot Failure

source: claude
session_id: 3a65af4d-f29b-4f20-ac2a-f20bd609132e
resource: claude://conversation/3a65af4d-f29b-4f20-ac2a-f20bd609132e

# Conversation

- **Session
resource: agentmemory://memory/mem_mtj6c2ld_7b7bc0393d78
tags: ["okf", "okf-claude", "claude", "claude://conversation/3a65af4d-f29b-4f20-ac2a-f20bd609132e"]
timestamp: 2026-09-01T21:23:16.021Z
source: agentmemory
strength: 7
---
# Content

# Buildbotics Controller Boot Failure

source: claude
session_id: 3a65af4d-f29b-4f20-ac2a-f20bd609132e
resource: claude://conversation/3a65af4d-f29b-4f20-ac2a-f20bd609132e

# Conversation

- **Session ID:** `3a65af4d-f29b-4f20-ac2a-f20bd609132e`
- **Source:** claude
- **Started:** 2025-06-30T21:49:20Z
- **Messages:** 2

---

### 👤 User — 2025-06-30T21:49:22Z

my buildbotics controller won't boot completely, all i see are rectangles in the LED display. I can ping its ip address but can't ssh in.

---

### 🤖 Assistant — 2025-06-30T21:49:45Z

The user is describing an issue with a Buildbotics controller that's having boot problems. Let me think about what this could indicate:

1. LED display showing rectangles - This suggests the controller is partially booting but the display isn't showing proper characters/numbers. This could indicate:
   - Display driver issues
   - Incomplete boot sequence
   - Corrupted firmware
   - Hardware problem with the display

2. Can ping IP address - This means:
   - Network interface is working
   - Basic network stack is loaded
   - Controller has some level of functionality

3. Can't SSH in - This suggests:
   - SSH daemon hasn't started
   - Boot process is incomplete
   - Services aren't fully loaded

This combination of symptoms points to an incomplete boot or corrupted firmware. The Buildbotics controller runs on embedded Linux, so this could be a filesystem corruption, incomplete firmware update, or hardware issue.

I should provide troubleshooting steps focusing on:
- Power cycling
- Firmware recovery/reflashing
- SD card issues (if applicable)
- Factory reset procedures
- Hardware diagnostics

Let me provide a systematic approach to diagnosing and fixing this issue.This sounds like your Buildbotics controller is stuck in an incomplete boot state. The rectangles on the LED display and inability to SSH in (despite network connectivity) suggests the boot process is failing partway through.

Here's a systematic troubleshooting approach:

**Immediate Steps:**
1. **Power cycle completely** - Unplug for 30 seconds, then reconnect
2. **Check power supply** - Ensure you're getting stable 24V (insufficient power can cause boot issues)

**If the problem persists:**

**Firmware Recovery:**
- Try accessing the web interface at the controller's IP address in a browser - sometimes this works even when SSH doesn't
- Look for firmware recovery options in the web interface
- The Buildbotics controller may have a recovery mode you can access

**SD Card Issues (if your model uses one):**
- Power down and reseat the SD card
- If you have access to another computer, check the SD card for corruption
- You may need to reflash the firmware to a fresh SD card

**Factory Reset:**
- Look for a reset button on the controller - hold it while powering on
- Some models require holding specific button combinations during boot

**Hardware Check:**
- Inspect for any loose connections, damaged components, or signs of overheating
- Check that all ribbon cables to the display are properly seated

What model Buildbotics controller do you have? This will help me give more specific recovery instructions. Also, did this issue start after any particular event (power outage, firmware update, etc.)?

---
