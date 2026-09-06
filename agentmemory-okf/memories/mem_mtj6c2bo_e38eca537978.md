---
type: Fact
title: # iCloud Calendar Function Request

source: claude
session_id: 3799c161-31f9-433
description: # iCloud Calendar Function Request

source: claude
session_id: 3799c161-31f9-433c-9301-423fe54eedc2
resource: claude://conversation/3799c161-31f9-433c-9301-423fe54eedc2

# Conversation

- **Session ID
resource: agentmemory://memory/mem_mtj6c2bo_e38eca537978
tags: ["okf", "okf-claude", "claude", "claude://conversation/3799c161-31f9-433c-9301-423fe54eedc2"]
timestamp: 2026-09-01T21:23:15.660Z
source: agentmemory
strength: 7
---
# Content

# iCloud Calendar Function Request

source: claude
session_id: 3799c161-31f9-433c-9301-423fe54eedc2
resource: claude://conversation/3799c161-31f9-433c-9301-423fe54eedc2

# Conversation

- **Session ID:** `3799c161-31f9-433c-9301-423fe54eedc2`
- **Source:** claude
- **Started:** 2025-07-08T23:19:26Z
- **Messages:** 4
- **Summary:** **Conversation Overview**

The user attempted to access iCloud calendar functionality by calling `list_icloud_calendars()`, but Claude explained that only Google Calendar functions were available through the current MCP tools. When the user reported that their icloud-gcal-sync server wasn't showing up in Claude Desktop, Claude investigated their configuration file at `/Users/davec/Library/Application Support/Claude/claude_desktop_config.json`. The investigation revealed that while the icloud-gcal-sync server was properly configured in the JSON file, the main Python script at `/Users/davec/AI/Servers/MCP/icloud-gcal-sync/src/icloud_gcal_sync.py` was corrupted, starting with a stray closing brace `}` instead of proper Python code. This corruption prevented the MCP server from loading properly. Claude offered two solutions: either restore the corrupted Python file from a backup or original source, or temporarily disable the server by adding a "disabled": true flag to the configuration.

**Tool Knowledge**

When troubleshooting MCP server issues in Claude Desktop, the configuration file is located at `/Users/davec/Library/Application Support/Claude/claude_desktop_config.json`. MCP server changes require restarting Claude Desktop to take effect. File corruption in Python MCP server scripts will prevent the entire server from loading, even if the configuration is correct. Using `desktop-commander:read_file` with length and offset parameters allows targeted inspection of file contents to identify corruption issues. Testing MCP server scripts directly with `--help` flags can quickly reveal syntax errors that prevent server initialization.

---

### 👤 User — 2025-07-08T23:19:27Z

list_icloud_calendars()

---

### 🤖 Assistant — 2025-07-08T23:19:42Z

I don't have access to an iCloud calendar function. The calendar tools I have available are specifically for Google Calendar, not iCloud.

The calendar functions I can use are:
- `list_gcal_calendars()` - to list Google calendars
- `list_gcal_events()` - to list events from Google calendars
- `fetch_gcal_event()` - to get details of a specific Google calendar event
- `find_free_time()` - to find free time slots across Google calendars

If you'd like to work with your calendars, I can help you with Google Calendar. Would you like me to list your Google calendars instead?

---

### 👤 User — 2025-07-08T23:22:45Z

Look at /Users/davec/Library/Application Support/Claude/claude_desktop_config.json The icloud-gcal-sync is not showing in Claude desktop

---

### 🤖 Assistant — 2025-07-08T23:23:48Z

I'll help you check your Claude desktop configuration file to see what's configured and why the icloud-gcal-sync might not be showing up.
```
This block is not supported on your current device yet.
```

I can see that the `icloud-gcal-sync` server is configured in your Claude desktop config file at the bottom. The configuration looks like this:

```json
"icloud-gcal-sync": {
  "command": "/Users/davec/AI/Servers/MCP/icloud-gcal-sync/venv/bin/python",
  "args": ["/Users/davec/AI/Servers/MCP/icloud-gcal-sync/src/icloud_gcal_sync.py"]
}
```

Since it's in your config but not showing up, here are a few things to check:

1. **Restart Claude Desktop** - MCP server changes require a restart to take effect.

2. **Check if the files exist**:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

The files exist. Let's check if the Python script is executable and working:
```
This block is not supported on your current device yet.
```

There's a syntax error in your icloud_gcal_sync.py file. The first line has an unexpected `}` character with wrong indentation. Let's look at the beginning of the file:
```
This block is not supported on your current device yet.
```

The file starts 
