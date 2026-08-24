---
type: Fact
title: # How do i change my password for kilocode?

source: kilo
session_id: 019c3e73-8
description: # How do i change my password for kilocode?

source: kilo
session_id: 019c3e73-88ea-71ab-a2d2-82de52400167
resource: kilo://task/019c3e73-88ea-71ab-a2d2-82de52400167

# Conversation

- **Task ID:** `0
resource: agentmemory://memory/mem_mspcob4w_a4af6937e4cc
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:27:39.421Z
source: agentmemory
strength: 7
---
# Content

# How do i change my password for kilocode?

source: kilo
session_id: 019c3e73-88ea-71ab-a2d2-82de52400167
resource: kilo://task/019c3e73-88ea-71ab-a2d2-82de52400167

# Conversation

- **Task ID:** `019c3e73-88ea-71ab-a2d2-82de52400167`
- **Source:** kilo
- **Started:** 2026-02-08T18:11:25Z
- **Ended:** 2026-02-08T18:13:38Z
- **Message blocks:** 7
- **Tokens:** 208246 in / 930 out

---

### 👤 User — 2026-02-08T18:11:25Z

How do i change my password for kilocode?

### 🤖 Assistant — 2026-02-08T18:11:33Z

<details><summary>Reasoning</summary>

Let's work through this problem step by step. First, the user is asking "How do I change my password for kilocode?" 

First, I need to understand what Kilocode is and where it stores password information. Since the current workspace is /Users/davec, let's check for any Kilocode-related files or directories. Let's start by listing the files in the current directory to see if there's anything Kilocode-related.

So, first step: List files in /Users/davec to find Kilocode configuration or password files.

</details>

### 🤖 Assistant — 2026-02-08T18:11:36Z

**Tool call: listFilesTopLevel**

```json
{
  "path": "davec",
  "isOutsideWorkspace": false,
  "content": "No files found."
}
```

### 🤖 Assistant — 2026-02-08T18:11:51Z

<details><summary>Reasoning</summary>


I'm looking for information about changing a Kilocode password. Let me check if there are any relevant configuration files or documentation in the user's system. The user mentioned "kilocode" and I need to find where password configuration might be stored.

Let me search for files related to Kilocode in the user's home directory.


</details>

### 🤖 Assistant — 2026-02-08T18:11:55Z

**Tool call: command**

```json
{
  "command": "find /Users/davec -type f -name \"*kilocode*\" -o -name \"*kilo*\" 2>/dev/null"
}
```

### 🤖 Assistant — 2026-02-08T18:12:30Z

To change your password for Kilo Code (the VSCode extension), you need to access the settings through VSCode:

## Method 1: Through VSCode Settings
1. Open VSCode Settings (Cmd+, on macOS)
2. Search for "Kilo Code" or "kilocode"
3. Look for authentication or password settings
4. Update your credentials there

## Method 2: Through Command Palette
1. Open Command Palette (Cmd+Shift+P on macOS)
2. Type "Kilo Code" to see available commands
3. Look for authentication or sign-in related commands

## Method 3: Configuration Files
Kilo Code settings are typically stored in:
- VSCode settings: `~/Library/Application Support/Code/User/settings.json`
- Extension-specific config files in the `.kilocode` directory

## Method 4: Re-authenticate
If you need to reset your password completely:
1. Sign out of Kilo Code (if there's a sign-out option)
2. Sign back in with new credentials

Note: The specific method depends on how Kilo Code handles authentication. If it uses an external service (like GitHub, Google, etc.), you may need to change your password through that service's website instead.

### 🤖 Assistant — 2026-02-08T18:13:33Z

To change your password for kilocode.com:

1. **Visit the website**: Go to https://kilocode.com
2. **Sign in**: Log in with your current credentials
3. **Access Account Settings**: 
   - Look for your profile icon or username (usually in the top-right corner)
   - Click on it to access a dropdown menu
   - Select "Account Settings", "Profile", or similar option
4. **Navigate to Security/Password Settings**:
   - Look for "Security", "Password", or "Change Password" section
   - Click on it
5. **Change Password**:
   - Enter your current password
   - Enter your new password
   - Confirm your new password
   - Click "Save" or "Update Password"

**Alternative - Password Reset**:
If you've forgotten your current password:
1. Go to https://kilocode.com
2. Click "Sign In"
3. Click "Forgot Password?" or "Reset Password"
4. Enter your email address
5. Check your email for a password reset link
6. Follow the link and set a new password

If you encounter any issues or these options aren't available, contact Kilo Code support directly through their website.
