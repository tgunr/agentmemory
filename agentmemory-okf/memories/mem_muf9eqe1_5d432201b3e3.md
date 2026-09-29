---
type: Fact
title: # Fix Apple Mail auto-marking emails as read

source: hermes
session_id: 2026092
description: # Fix Apple Mail auto-marking emails as read

source: hermes
session_id: 20260923_090704_b595f0
resource: hermes://session/20260923_090704_b595f0

# Conversation

- **Session ID:** `20260923_090704_b5
resource: agentmemory://memory/mem_muf9eqe1_5d432201b3e3
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-24T08:17:56.655Z
source: agentmemory
strength: 7
---
# Content

# Fix Apple Mail auto-marking emails as read

source: hermes
session_id: 20260923_090704_b595f0
resource: hermes://session/20260923_090704_b595f0

# Conversation

- **Session ID:** `20260923_090704_b595f0`
- **Source:** desktop
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-23T14:07:04Z
- **Messages:** 44
- **CWD:** `/Volumes/davec`
- **Tokens:** 90960 in / 5912 out

---

### 👤 User — 2026-09-23T14:07:04Z

Something is marking my email as read when it comes in the Apple Mail program and I can't seem to find out what it is. I've disabled all the rules, but still I see them being marked as read when I open the file, even though I have not read them yet.

### 🤖 Assistant — 2026-09-23T14:07:13Z

<details><summary>Reasoning</summary>

The user is reporting an issue where emails are being automatically marked as read in Apple Mail even though they haven't actually read them. They've already disabled all rules but the issue persists. This is likely related to some background process or automation that's accessing the mailbox.

Let me think about what could cause this:
1. Some other app or script accessing the mailbox via IMAP/API
2. A macOS system process
3. A third-party email client syncing
4. Some kind of email monitoring/triaging automation
5. Apple Mail itself might have some settings

I should look at:
- Apple Mail rules (user says disabled)
- Apple Mail settings/preferences
- Other email clients that might be running
- Any scripts/automation that access email
- Check if there are any launch agents/daemons related to email

Let me start by examining the system for email-related processes, scripts, and configurations. I'll use the terminal to investigate.

I should look at:
1. Running processes related to mail
2. Launch agents/daemons
3. Any scripts in common locations that might access mail
4. Apple Mail preferences
5. Maybe check for other email clients

Let me batch some independent reads/searches.

</details>

**Tool call: terminal**

```json
{
  "command": "ps aux | grep -i -E 'mail|imap|exchange|outlook|postfix|dovecot|himalaya|offlineimap|mbsync|notmuch|alpine|mutt|neomutt|thunderbird|spark|airmail|canary|polymail| Edison|Airmail' | grep -v grep",
  "timeout": 15
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/Library/LaunchAgents/ ~/Library/LaunchDaemons/ 2>/dev/null | grep -i -E 'mail|imap|email|msg|exchange'",
  "timeout": 15
}
```

**Tool call: terminal**

```json
{
  "command": "find /tmp ~/Library ~/bin ~/scripts -maxdepth 3 -type f \\( -iname '*mail*' -o -iname '*imap*' -o -iname '*email*' -o -iname '*msg*' \\) 2>/dev/null | head -50",
  "timeout": 15
}
```

### 🤖 Assistant — 2026-09-23T14:07:37Z

<details><summary>Reasoning</summary>

We have found likely suspects:
- /System/Library/PrivateFrameworks/EmailDaemon.framework/Versions/A/maild
- com.apple.mail.Shared/Group preferences
- com.apple.icloudmailagent.plist
- com.apple.unilog.MacMailSearch.plist

These can change mail state even if Mail.app rules are disabled. Also we found DEVONthink rules scripts, but those are disabled. Need to look for hidden mail rules in private frameworks, configuration profiles, smart mailboxes, and third-party apps that access the mail store. Also check for keyboard shortcuts or automation that marks read. Next: check for smart mailboxes and hidden rules, and look at the mail store files for read/unread state changes.

I should also look at file access logs or use fs_usage to catch writes to the mail database. But need to be careful about privacy. Also check for third-party apps that have access to Mail, like DEVONthink, Hazel, etc.

Let’s search for mail-related configuration in system and user preferences, and check if any third-party apps have mail access via Accessibility or AppleEvents.

Also need to check if the user has any mail syncing or backup tools that touch the mailbox.

Let’s inspect the system mail preferences and check for any hidden rules or smart mailboxes.

Also check if there are any third-party mail clients or plugins that might be syncing.

We should look at ~/Library/Mail/ for any plugins or extensions.

Also check for a
