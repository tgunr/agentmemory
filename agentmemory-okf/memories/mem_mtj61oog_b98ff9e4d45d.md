---
type: Fact
title: # Removing Unwanted UCO2 Audio Device

source: hermes
session_id: claude__34eb66
description: # Removing Unwanted UCO2 Audio Device

source: hermes
session_id: claude__34eb66fd-cd3e-4d55-8cc9-11e1bc3083aa
resource: hermes://session/claude__34eb66fd-cd3e-4d55-8cc9-11e1bc3083aa

# Conversation


resource: agentmemory://memory/mem_mtj61oog_b98ff9e4d45d
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:11.400Z
source: agentmemory
strength: 7
---
# Content

# Removing Unwanted UCO2 Audio Device

source: hermes
session_id: claude__34eb66fd-cd3e-4d55-8cc9-11e1bc3083aa
resource: hermes://session/claude__34eb66fd-cd3e-4d55-8cc9-11e1bc3083aa

# Conversation

- **Session ID:** `claude__34eb66fd-cd3e-4d55-8cc9-11e1bc3083aa`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-06T14:07:11Z
- **Ended:** 2025-08-06T14:21:11Z
- **Messages:** 12
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-06T14:07:12Z

on my Macintosh running Mac OS, I have a sound device called UCO2 that's constantly being set as the microphone device. How do I get rid of this sound device? I am not seeing defied it anywhere.

### 🤖 Assistant — 2025-08-06T14:07:27Z

The UCO2 device sounds like it could be related to a USB audio interface or virtual audio driver that's being automatically recognized by macOS. Here are several ways to identify and remove it:

## First, identify what UCO2 is:

1. **Check Audio MIDI Setup:**
   - Open Applications → Utilities → Audio MIDI Setup
   - Look for the UCO2 device in the list
   - Right-click on it to see if there's a "Remove Device" option

2. **Check System Information:**
   - Hold Option and click the Apple menu → System Information
   - Go to Hardware → USB or Hardware → Audio
   - Look for any devices that might correspond to UCO2

## Common removal methods:

3. **Check for related software:**
   - Look in Applications for any audio software you may have installed
   - Check Login Items in System Preferences → Users & Groups → Login Items
   - Look for any audio-related startup items

4. **Remove kernel extensions (if applicable):**
   - Open Terminal and run: `kextstat | grep -i audio`
   - Look for any third-party audio drivers
   - If you find suspicious ones, you may need to remove them from `/Library/Extensions/` or `/System/Library/Extensions/`

5. **Check for virtual audio drivers:**
   - UCO2 might be from software like Loopback, SoundFlower, or similar virtual audio tools
   - If you have any of these installed, uninstall them properly using their uninstallers

6. **Reset audio preferences:**
   - Delete `/Library/Preferences/Audio/` folder contents (requires admin password)
   - Restart your Mac

Have you installed any audio recording software, virtual instruments, or audio interfaces recently? That might give us a clue about what's creating this UCO2 device.

### 👤 User — 2025-08-06T14:11:32Z

It looks like it might be the sound device on my Thunderbolt dark. How do I disable it?

### 🤖 Assistant — 2025-08-06T14:11:48Z

Ah, that makes perfect sense! Many Thunderbolt docks have built-in audio interfaces that macOS automatically detects. Here are several ways to disable the audio portion of your Thunderbolt dock:

## Option 1: Disable in Audio MIDI Setup (Recommended)
1. Open **Audio MIDI Setup** (Applications → Utilities)
2. Find the UCO2/dock audio device
3. Right-click on it and select **"Use This Device For Sound Input: Off"**
4. You can also set it to **"Drift Correction: Off"** if available

## Option 2: System Preferences
1. Go to **System Preferences → Sound**
2. Click the **Input** tab
3. Select a different microphone as your default
4. The dock's audio should stop being automatically selected

## Option 3: Disable the dock's audio completely
1. **Audio MIDI Setup** → select the dock device
2. Click the gear icon (⚙️) and choose **"Configure Speakers"**
3. Uncheck all the audio channels to effectively disable it

## Option 4: Firmware/Hardware level (if available)
Some Thunderbolt docks have:
- Companion software that lets you disable audio functions
- Physical switches or buttons to disable audio
- Firmware settings accessible through manufacturer software

## Prevention tip:
You can also go to **System Preferences → Sound → Input** and lock your preferred microphone by selecting it, then the system is less likely to automatically switch to the dock's audio when you connect/disconnect it.

What brand/model is your Thunderbolt dock? Some have specific software or methods for disabling just the audio portion while keeping other functions active.

### 👤 User — 2025-08-06T14:16:52Z

**USB3.1 Hub:**

  Location ID: 0x00200000
  
