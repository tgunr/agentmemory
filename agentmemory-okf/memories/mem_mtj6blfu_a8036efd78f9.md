---
type: Fact
title: # macOS User Logout Methods

source: claude
session_id: 02a3a097-468c-4140-b632-
description: # macOS User Logout Methods

source: claude
session_id: 02a3a097-468c-4140-b632-758395552a31
resource: claude://conversation/02a3a097-468c-4140-b632-758395552a31

# Conversation

- **Session ID:** `02
resource: agentmemory://memory/mem_mtj6blfu_a8036efd78f9
tags: ["okf", "okf-claude", "claude", "claude://conversation/02a3a097-468c-4140-b632-758395552a31"]
timestamp: 2026-09-01T21:22:53.786Z
source: agentmemory
strength: 7
---
# Content

# macOS User Logout Methods

source: claude
session_id: 02a3a097-468c-4140-b632-758395552a31
resource: claude://conversation/02a3a097-468c-4140-b632-758395552a31

# Conversation

- **Session ID:** `02a3a097-468c-4140-b632-758395552a31`
- **Source:** claude
- **Started:** 2025-07-06T13:11:07Z
- **Messages:** 2

---

### 👤 User — 2025-07-06T13:11:08Z

in macOS as admin how do I logout a user ether from UI or terminal

---

### 🤖 Assistant — 2025-07-06T13:11:18Z

Here are several ways to log out a user on macOS as an admin:

## From Terminal (as admin)

**Force logout a specific user:**
```bash
sudo pkill -KILL -u username
```

**More graceful logout (gives user a chance to save work):**
```bash
sudo pkill -TERM -u username
```

**Using launchctl (recommended for clean logout):**
```bash
sudo launchctl bootout user/$(id -u username)
```

**Find user ID first, then logout:**
```bash
id username  # Get the UID
sudo launchctl bootout user/UID
```

## From System Preferences/Settings UI

**macOS Ventura and later:**
1. Open System Settings
2. Go to Users & Groups
3. Select the user you want to log out
4. Click the "Log Out" button (if available for that user)

**macOS Monterey and earlier:**
1. Open System Preferences
2. Go to Users & Groups
3. Select the user and look for logout options

## Using Activity Monitor
1. Open Activity Monitor
2. Go to View → All Processes
3. Find processes belonging to the target user
4. Select processes and click "Force Quit"

## Fast User Switching Menu
If Fast User Switching is enabled:
1. Click the current user name in the menu bar
2. Select "Login Window..."
3. This effectively logs out the current user

The `launchctl bootout` method is generally preferred as it cleanly terminates the user session, while `pkill` methods are more forceful and may cause data loss if the user has unsaved work.

---
