---
type: Fact
title: # Parallels Desktop File Extensions and Locations

source: hermes
session_id: cl
description: # Parallels Desktop File Extensions and Locations

source: hermes
session_id: claude__70a739f1-3558-4008-9f89-7bf6bea176a6
resource: hermes://session/claude__70a739f1-3558-4008-9f89-7bf6bea176a6

# Co
resource: agentmemory://memory/mem_mtj628kd_ab888505a99a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:37.145Z
source: agentmemory
strength: 7
---
# Content

# Parallels Desktop File Extensions and Locations

source: hermes
session_id: claude__70a739f1-3558-4008-9f89-7bf6bea176a6
resource: hermes://session/claude__70a739f1-3558-4008-9f89-7bf6bea176a6

# Conversation

- **Session ID:** `claude__70a739f1-3558-4008-9f89-7bf6bea176a6`
- **Source:** claude
- **Model:** None
- **Started:** 2025-05-02T14:00:33Z
- **Ended:** 2025-05-02T15:05:42Z
- **Messages:** 6
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-05-02T14:00:34Z

what is the file extension for macos parallels and where are they located

### 🤖 Assistant — 2025-05-02T14:00:42Z

I'll help you understand the file extension and location for macOS Parallels files.

Parallels Desktop is a popular virtualization software for macOS that allows you to run Windows and other operating systems on your Mac.

The main file extension for Parallels virtual machines is ".pvm" (Parallels Virtual Machine). This is actually a package (folder) that contains all the files related to a specific virtual machine.

By default, Parallels virtual machines are stored in the following location:

```
~/Documents/Parallels/
```

Where "~" represents your home directory (typically /Users/yourusername/).

Inside this Parallels folder, you'll find your virtual machines, each as a .pvm package. If you right-click on a .pvm file and select "Show Package Contents," you can see the individual files that make up the virtual machine, including:

- The virtual hard disk files (.hdd)
- Configuration files
- Snapshots
- Other related files

If you've moved your virtual machines to a custom location, you can find them by opening Parallels Desktop, right-clicking on a virtual machine in the Control Center, and selecting "Show in Finder."

### 👤 User — 2025-05-02T14:53:54Z

How can I configure Windows 11 to always use an external drive to install programs?

### 🤖 Assistant — 2025-05-02T14:54:04Z

To configure Windows 11 to always install programs on an external drive, you need to modify some system settings. Here's how you can do it:

## Method 1: Change Default Installation Location

1. Press **Windows key + I** to open Settings
2. Go to **System > Storage**
3. Under "Storage management," click on **Change where new content is saved**
4. Under "New apps will save to," select your external drive from the dropdown menu
5. Click **Apply**

This will change the default installation location for apps from the Microsoft Store. However, for traditional desktop applications, you'll need to use the method below.

## Method 2: Create a Junction Point (Symbolic Link)

For traditional Windows applications, you can create a symbolic link that redirects the standard Program Files folders to your external drive:

1. Move your existing Program Files folders to the external drive (if desired)
2. Open Command Prompt as Administrator
3. Use the following commands (replace D: with your external drive letter):

```
mklink /J "C:\Program Files" "D:\Program Files"
mklink /J "C:\Program Files (x86)" "D:\Program Files (x86)"
```

## Method 3: Manual Installation Path Selection

For most traditional Windows applications, you can manually select the installation location during setup:

1. When installing software, look for "Custom" or "Advanced" installation options
2. When prompted for an installation location, browse to and select your external drive
3. Proceed with the installation

## Important Considerations

- Make sure your external drive is always connected when using applications
- Some system applications may still install to the system drive regardless of settings
- Performance may be affected depending on your external drive's connection type (USB 3.0/3.1/3.2, Thunderbolt, etc.)
- Consider using a high-speed SSD external drive for better performance

Would you like more specific instructions for any of these methods?

### 👤 User — 2025-05-02T15:05:32Z

how to copy all program files from c: to x:

### 🤖 Assistant — 2025-05-02T15:05:42Z

To copy all program files from C: drive to X: drive in Windows, you can use several methods. Here's how to accomplish this:

## Method 1: Using Windows File Explorer

1. Open File Explorer
2. Navigate to C:\Program Files and C:\Program Files (x8
