---
type: Fact
title: # Cross-Platform System Admin Prompt

source: claude
session_id: c1d4b243-ecd1-4
description: # Cross-Platform System Admin Prompt

source: claude
session_id: c1d4b243-ecd1-480b-a3be-962ddc6e4f93
resource: claude://conversation/c1d4b243-ecd1-480b-a3be-962ddc6e4f93

# Conversation

- **Session 
resource: agentmemory://memory/mem_mtj6d7dd_7c142e7332fa
tags: ["okf", "okf-claude", "claude", "claude://conversation/c1d4b243-ecd1-480b-a3be-962ddc6e4f93"]
timestamp: 2026-09-01T21:24:08.842Z
source: agentmemory
strength: 7
---
# Content

# Cross-Platform System Admin Prompt

source: claude
session_id: c1d4b243-ecd1-480b-a3be-962ddc6e4f93
resource: claude://conversation/c1d4b243-ecd1-480b-a3be-962ddc6e4f93

# Conversation

- **Session ID:** `c1d4b243-ecd1-480b-a3be-962ddc6e4f93`
- **Source:** claude
- **Started:** 2025-07-30T11:09:41Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user requested creation of a comprehensive system administration prompt designed for use with AI assistants managing both macOS and Linux environments. They specifically wanted the prompt to handle operating system differences intelligently and ask users to specify their OS when it cannot be determined automatically. Claude developed a detailed system administration framework that emphasizes OS detection as a critical first step, then provides tailored guidance for each platform. The prompt covers core sysadmin responsibilities including system maintenance, security management, network administration, storage and backup management, and software package management. For macOS, it focuses on tools like Homebrew, launchctl, diskutil, and macOS-specific features like System Integrity Protection and Gatekeeper. For Linux, it accounts for different distributions and their respective package managers, systemd service management, and standard Unix utilities. The prompt incorporates safety-first principles by emphasizing explanation of potentially destructive commands, backup recommendations, and rollback procedures. It also provides structured response formats for single OS requests, cross-platform scenarios, and situations where the operating system is unknown, ensuring consistent and appropriate system administration guidance across both platforms.

---

### 👤 User — 2025-07-30T11:09:42Z

Create a useful and detailed system prompt for use as a system admin on MacOS and Linux. Specify any differences depending on what the user tells is the operating system. If you cannot determine which OS is in use you should ask the user to specify then determine the appropriate response.

---

### 🤖 Assistant — 2025-07-30T11:10:25Z

I'll create a comprehensive system administration prompt that adapts to both macOS and Linux environments. Let me craft this for you:
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

This system administration prompt provides a comprehensive framework that adapts to both macOS and Linux environments. Here are the key features:

**Universal Approach**: The prompt emphasizes determining the user's OS first, then providing tailored responses for macOS, Linux distributions, or both.

**Comprehensive Coverage**: It covers all major sysadmin responsibilities including system maintenance, security, networking, storage, and software management.

**OS-Specific Guidance**: 
- **macOS**: Focuses on Homebrew, launchctl, diskutil, and macOS-specific security features like SIP and Gatekeeper
- **Linux**: Accounts for different distributions and their package managers, systemd, and standard Unix tools

**Safety-First Mentality**: Emphasizes explaining dangerous commands, suggesting backups, and providing rollback procedures.

**Structured Response Format**: Provides clear guidelines for formatting responses whether dealing with single OS requests, cross-platform scenarios, or unknown systems.

The prompt ensures that any AI using it will provide accurate, secure, and contextually appropriate system administration guidance while maintaining safety and best practices across both platforms.

`[tool_use: artifacts]` create
`[tool_result]` OK

---
