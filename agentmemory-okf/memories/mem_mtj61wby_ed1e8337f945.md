---
type: Fact
title: # Troubleshooting Filament Clogging on Prusa XL Printer

source: hermes
session_
description: # Troubleshooting Filament Clogging on Prusa XL Printer

source: hermes
session_id: claude__52484f30-237a-4565-bbe4-587e8f21e50e
resource: hermes://session/claude__52484f30-237a-4565-bbe4-587e8f21e50e
resource: agentmemory://memory/mem_mtj61wby_ed1e8337f945
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:21.328Z
source: agentmemory
strength: 7
---
# Content

# Troubleshooting Filament Clogging on Prusa XL Printer

source: hermes
session_id: claude__52484f30-237a-4565-bbe4-587e8f21e50e
resource: hermes://session/claude__52484f30-237a-4565-bbe4-587e8f21e50e

# Conversation

- **Session ID:** `claude__52484f30-237a-4565-bbe4-587e8f21e50e`
- **Source:** claude
- **Model:** None
- **Started:** 2025-05-13T16:52:53Z
- **Ended:** 2025-05-13T16:53:54Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-05-13T16:52:54Z

When my Prusa XL I'm getting a constant stuck filament even though the unload and reload and purging looks normal as soon as it starts to reprint I can hear the gears engaging trying to push the filament through as if the nozzle is clogged

### 🤖 Assistant — 2025-05-13T16:53:03Z

It sounds like you're experiencing a recurring filament feeding issue with your Prusa XL printer. Even though the unload/reload operations appear normal, the printing process itself is getting stuck. This is a common problem that could have several causes.

Based on your description, here are the most likely culprits and solutions:

1. Partial nozzle clog - While purging might push through some filament, there could still be a partial blockage. Try:
   - Performing a "cold pull" cleaning technique
   - Using a cleaning filament
   - Removing the nozzle for manual cleaning if necessary

2. Heat creep issues - Filament might be softening too early in the hot end:
   - Check that your cooling fans are working properly
   - Make sure the heat break is properly installed and the thermal paste is applied correctly

3. Incorrect printing temperature - The temperature might be:
   - Too low for proper flow of your filament type
   - Inconsistent due to a faulty thermistor

4. Extruder gear tension problems:
   - Tension might be too high, causing the filament to deform
   - Or too low, causing insufficient grip

5. Filament quality or moisture issues:
   - Try a different filament spool
   - Ensure your filament is properly dried

Would you like me to provide more detailed steps for any of these potential solutions? Or is there any additional information about when this problem occurs that might help narrow down the cause?

### 👤 User — 2025-05-13T16:53:44Z

How do I do a cold pull on the Prusa XL?

### 🤖 Assistant — 2025-05-13T16:53:54Z

# How to Perform a Cold Pull on a Prusa XL

A cold pull (also called an atomic pull) is an effective way to clean your nozzle of debris and partial clogs. Here's how to do it on your Prusa XL:

## Materials Needed
- Nylon filament (works best for cold pulls, but you can also use PLA or PETG)
- Tweezers or needle-nose pliers

## Step-by-Step Process

1. **Preheat the nozzle** to the appropriate temperature for your cleaning filament:
   - For Nylon: 250-260°C
   - For PLA: 200-210°C
   - For PETG: 230-240°C

2. **Load the filament** manually through the Prusa XL interface:
   - Go to the LCD menu
   - Select "Filament" → "Load Filament"
   - Follow the on-screen instructions to load your cleaning filament
   - Wait until the filament extrudes cleanly

3. **Cool down the nozzle** with the filament still inside:
   - Go back to the menu and select "Temperature"
   - Set the nozzle temperature to about 90°C for PLA, 110°C for PETG, or 120-130°C for Nylon
   - Wait for the temperature to reach the target

4. **Perform the pull**:
   - Once the target temperature is reached, firmly but gently pull the filament straight up
   - It should come out with resistance, bringing debris with it
   - The end should form a clean "tip" shape that matches your nozzle's interior

5. **Examine the tip**:
   - If it's dirty or discolored, repeat the process with fresh filament
   - Continue until the extracted filament comes out clean

6. **Reload your regular filament** and run a test print

If you need to do multiple cold pulls, you can repeat the heating/cooling cycle until the extracted filament shows no sign of contaminants.

This method is particularly effective for the Prusa XL as its tool-changing setup can sometimes lead to small amounts of debris accumulating in the nozzle during filament changes.
