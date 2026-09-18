---
type: Fact
title: # Apple to Google Calendar Migration

source: claude
session_id: a5449b01-6b4e-4
description: # Apple to Google Calendar Migration

source: claude
session_id: a5449b01-6b4e-4834-a1c4-c411b36bea55
resource: claude://conversation/a5449b01-6b4e-4834-a1c4-c411b36bea55

# Conversation

- **Session 
resource: agentmemory://memory/mem_mti60ue0_7be22b6c8eb8
tags: ["okf", "okf-claude", "claude", "claude://conversation/a5449b01-6b4e-4834-a1c4-c411b36bea55"]
timestamp: 2026-09-01T04:26:46.012Z
source: agentmemory
strength: 7
---
# Content

# Apple to Google Calendar Migration

source: claude
session_id: a5449b01-6b4e-4834-a1c4-c411b36bea55
resource: claude://conversation/a5449b01-6b4e-4834-a1c4-c411b36bea55

# Conversation

- **Session ID:** `a5449b01-6b4e-4834-a1c4-c411b36bea55`
- **Source:** claude
- **Started:** 2025-07-08T16:11:51Z
- **Messages:** 30
- **Summary:** **Conversation Overview**

The user requested help creating an MCP (Model Context Protocol) server to migrate calendar events from Apple's iCloud Calendar to Google Calendar, with specific requirements for ongoing synchronization every four hours and storage in the AI/Servers/MCP folder structure. The conversation evolved from a simple migration tool into a comprehensive continuous sync solution with persistent state management and duplicate detection.

Claude developed a complete Python-based MCP server that uses AppleScript to access macOS Calendar data, specifically filtering for iCloud calendars only. The server includes sophisticated features like MD5-based event deduplication, configurable sync intervals, persistent state storage using pickle files, and comprehensive logging. Key tools implemented include list_icloud_calendars, get_icloud_events, configure_sync, start_sync, stop_sync, manual_sync with dry-run capability, sync_status, and reset_sync_state.

The user specifically requested that the project be published as a GitHub repository under an MCP parent organization with a name indicating "iCalendar to Google Calendar" functionality. Claude created the repository "mcp-icloud-gcal-sync" under the tgunr organization, including the complete Python source code, requirements.txt, package.json with MCP metadata, comprehensive README with installation instructions, and an automated installation script. The final solution provides a production-ready MCP server that handles the iCloud data extraction portion of the sync process, with clear documentation for integrating with Google Calendar APIs to complete the synchronization workflow.

**Tool Knowledge**

GitHub repository creation and file management required breaking down large files into smaller pieces due to token limitations. When uploading the main Python file, Claude encountered token constraints and had to split the content across multiple create_or_update_file operations, completing the file in segments. The github:create_or_update_file tool works more reliably with smaller content chunks rather than attempting to upload complete large files in single operations.

For MCP server development, the project structure follows specific conventions with src/ for source code, data/ for persistent storage, logs/ for activity logging, and venv/ for Python virtual environments. The package.json requires specific MCP metadata including the "mcp" section with server command and args configuration. The AppleScript integration uses subprocess.run with ["osascript", "-e", script] parameters and requires careful JSON escaping for data extraction from macOS Calendar app. The server implements asyncio-based scheduling for continuous sync operations and uses pickle files for persistent state management across restarts.

---

### 👤 User — 2025-07-08T16:11:53Z

Can we create a MCP server that will look at my Apple calendar events and migrate them to the Google calendar?

---

### 🤖 Assistant — 2025-07-08T16:12:02Z

Yes, we can definitely create an MCP server to migrate Apple Calendar events to Google Calendar! This is a great use case for an MCP server since it involves connecting two different systems and performing data migration.

Let me break down what we'll need to build:

## MCP Server Components

1. **Apple Calendar Access** - Read events from your local Calendar app
2. **Google Calendar Integration** - Create events in your Google Calendar
3. **Event Mapping** - Convert between the two calendar formats
4. **Migration Logic** - Handle duplicates, date ranges, and error handling

## Technical Approach

The MCP server will need:
- Access to macOS Calendar data (using EventKit framework via AppleScript or direct API access)
- Google Calendar API integration (OAuth2 authentication)
- Event comparison logic to avoid duplic
