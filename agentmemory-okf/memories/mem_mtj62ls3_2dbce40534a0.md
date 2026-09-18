---
type: Fact
title: # Apple to Google Calendar Migration

source: hermes
session_id: claude__a5449b0
description: # Apple to Google Calendar Migration

source: hermes
session_id: claude__a5449b01-6b4e-4834-a1c4-c411b36bea55
resource: hermes://session/claude__a5449b01-6b4e-4834-a1c4-c411b36bea55

# Conversation

-
resource: agentmemory://memory/mem_mtj62ls3_2dbce40534a0
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:54.272Z
source: agentmemory
strength: 7
---
# Content

# Apple to Google Calendar Migration

source: hermes
session_id: claude__a5449b01-6b4e-4834-a1c4-c411b36bea55
resource: hermes://session/claude__a5449b01-6b4e-4834-a1c4-c411b36bea55

# Conversation

- **Session ID:** `claude__a5449b01-6b4e-4834-a1c4-c411b36bea55`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-08T16:11:51Z
- **Ended:** 2025-07-08T20:30:32Z
- **Messages:** 30
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-07-08T16:11:53Z

Can we create a MCP server that will look at my Apple calendar events and migrate them to the Google calendar?

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
- Event comparison logic to avoid duplicates
- Proper date/timezone handling

## Implementation Options

We have a few paths:

1. **Python MCP Server** - Using PyObjC to access EventKit + Google Calendar API
2. **Node.js MCP Server** - Using AppleScript bridges + Google APIs
3. **Hybrid approach** - AppleScript for Calendar access, web APIs for Google

Would you like me to start building this? I'll need to know:
- Do you want to migrate all events or specific date ranges?
- Should we handle recurring events?
- Any specific calendars to include/exclude?
- Do you want one-time migration or ongoing sync?

I can create a working MCP server that you can install and use. Which approach sounds most appealing to you?

### 👤 User — 2025-07-08T16:17:39Z

I only want to synchronize the iCloud calendar events, none of the rest.

### 🤖 Assistant — 2025-07-08T16:19:43Z

Perfect! Focusing on just iCloud calendar events will make this much cleaner. Let me create an MCP server that specifically targets your iCloud calendar.
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

Now let me create the package.json and setup files to make this a complete MCP server:
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```


```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```


```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

Perfect! I've created a complete MCP server that will migrate your iCloud calendar events to Google Calendar. Here's what it provides:

## Key Features

**🎯 iCloud-Specific**: Only targets iCloud calendars, ignoring local or other account calendars
**📅 Event Extraction**: Reads events with configurable date ranges (past and future)
**🔄 Date Normalization**: Converts AppleScript dates to standard ISO format
**👁️ Dry Run Support**: Preview what would be migrated before doing it
**🛠️ Migration Tools**: Complete workflow from discovery to migration planning

## How It Works

1. **Uses AppleScript** to access your macOS Calendar app
2. **Filters for iCloud calendars** by checking the account name
3. **Extracts event data** including title, dates, location, description
4. **Normalizes the data** for Google Calendar compatibility
5. **Provides migration instructions** for the Google Calendar MCP

## Installation Steps

1. Create the directory structure and save the files
2. Install Python dependencies: `pip install -r requirements.txt`
3. Add to your Claude Desktop MCP configuration
4. Grant Calendar access permissions if prompted

## Workflow

1. **`list_icloud_calendars`** - See what's available
2. **`get_icloud_events`** - Prev
