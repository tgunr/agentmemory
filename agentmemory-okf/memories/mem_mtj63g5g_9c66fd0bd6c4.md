---
type: Fact
title: # Check Mac Disk Space

source: hermes
session_id: claude__f4870af7-0f6c-479f-94
description: # Check Mac Disk Space

source: hermes
session_id: claude__f4870af7-0f6c-479f-943f-493bdc4413e3
resource: hermes://session/claude__f4870af7-0f6c-479f-943f-493bdc4413e3

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj63g5g_9c66fd0bd6c4
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:33.645Z
source: agentmemory
strength: 7
---
# Content

# Check Mac Disk Space

source: hermes
session_id: claude__f4870af7-0f6c-479f-943f-493bdc4413e3
resource: hermes://session/claude__f4870af7-0f6c-479f-943f-493bdc4413e3

# Conversation

- **Session ID:** `claude__f4870af7-0f6c-479f-943f-493bdc4413e3`
- **Source:** claude
- **Model:** None
- **Started:** 2025-03-01T00:18:27Z
- **Ended:** 2025-03-01T00:18:38Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-03-01T00:18:28Z

How much free space do I have on my Mac?

### 🤖 Assistant — 2025-03-01T00:18:38Z

I can help you check your available disk space on your Mac. Let me run a command to get that information for you.
```
This block is not supported on your current device yet.
```



Based on the system information, you have:
- Total disk size: 1.8 TB
- Used space: 14 GB
- Available free space: 491 GB
- Current capacity usage: 3%

Your Mac has plenty of free space available (491 GB). This is a healthy amount of storage for most typical uses.

`[tool_use: systemInfo]`
`[tool_result]` {   "diskInfo": "Filesystem        Size    Used   Avail Capacity iused ifree %iused  Mounted on\n/dev/disk3s1s1   1.8Ti    14Gi   491Gi     3%    410k  4.3G    0%   /\n" }
