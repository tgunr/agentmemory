---
type: Fact
title: # Start iMCP at login and keep running

source: hermes
session_id: 20260813_0701
description: # Start iMCP at login and keep running

source: hermes
session_id: 20260813_070135_694b2c4d
resource: hermes://session/20260813_070135_694b2c4d

# Conversation

- **Session ID:** `20260813_070135_694b
resource: agentmemory://memory/mem_mssoo3v4_88026d6bdc1f
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260813_070135_694b2c4d"]
timestamp: 2026-08-14T08:26:43.897Z
source: agentmemory
strength: 7
---
# Content

# Start iMCP at login and keep running

source: hermes
session_id: 20260813_070135_694b2c4d
resource: hermes://session/20260813_070135_694b2c4d

# Conversation

- **Session ID:** `20260813_070135_694b2c4d`
- **Source:** telegram
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T12:01:35Z
- **Ended:** 2026-08-13T12:06:46Z
- **Messages:** 14
- **Tokens:** 35697 in / 14329 out

---

### 👤 User — 2026-08-13T12:02:17Z

Need to make sure that the iMCP application is started at login time and it is kept running

### 🤖 Assistant — 2026-08-13T12:02:40Z

<details><summary>Reasoning</summary>

The user wants to ensure the iMCP application starts at login and stays running. Let me think about what iMCP is — it's referenced in the tools as `mcp__iMCP__maps_*`, so it's an MCP server for Apple Maps / iMessage. iMCP is an app that provides MCP tools for Mac (iMessage, Maps, etc.).

Let me understand the context: iMCP runs as a macOS app and provides MCP server capability. The user wants it to launch at login and stay running (auto-relaunch if it crashes).

Let me first check the environment. The terminal backend is ssh, but the working directory is /Users/davec on Darwin. Let me verify where iMCP is installed.

This is a macOS task. I should:
1. Find the iMCP app location
2. Ensure it's in Login Items (Launch at Login)
3. Ensure it's kept running (auto-relaunch)

For "kept running" on macOS, options:
- Login Item / LaunchAgent that launches and an KeepAlive can keep it running. But LaunchAgents for GUI apps with KeepAlive can conflict with the app's own login item. Actually iMCP may have a built-in "Launch at Login" preference in its settings. 

Let me think. iMCP is a GUI menubar app. Its settings likely have a "Launch at Login" toggle. To keep it running (auto-relaunch on crash), we could use a LaunchAgent with KeepAlive. But LaunchAgents that spawn a GUI .app — KeepAlive would restart it. However, mixing Login Item and LaunchAgent KeepAlive could double-launch.

Let me actually investigate the system first. Let me check if iMCP is installed, where, and whether there's a launchd plist.

Let me gather info. I'll run some terminal commands in parallel:
- find iMCP app
- check for existing launchd plists mentioning imcp
- check login items via osascript or defaults

Since this is macOS with ssh backend, the user is davec. Let me explore.

Let me look at the skills — there's `apple` category with stuff like `macos-integrations`, `bluebubbles-gateway`. There might be an iMCP skill. Let me check skills_list for imcp. Actually the available_skills don't list an iMCP-specific skill. But the tool_search shows `mcp__iMCP__maps_*`. 

Let me think about whether I should load a relevant skill. The task is about configuring macOS login item + keepalive for iMCP. There's `macos-integrations` skill but that's about Apple local integrations. Possibly relevant. But let me first investigate the actual system, because the approach depends on what's installed.

Let me start with investigation commands. I'll batch independent ones.

Actually, given the task, let me be careful — this involves login items and launchd. I should verify the current state before making changes.

Let me run:
1. `mdfind "kMDItemFSName == 'iMCP.app'"` or `ls /Applications | grep -i imcp` and `ls ~/Applications`
2. `launchctl list | grep -i imcp`
3. Check login items: `osascript -e 'tell application "System Events" to get the name of every login item'` — but this needs to run as the user with UI; over ssh it may work if agent has access. Actually osascript over ssh might not have the right context. Let me try.
4. Check the iMCP settings plist.

Let me also consider that iMCP has its own launch-at-login built in. Many such menubar apps (e.g., iMCP) use a "Launch at Login" helper. Let me check.

Let me just investigate first

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== Finding iMCP app ===\"; ls -d /Applications/iMCP.app ~/Applications/iMCP.app /System/Applications/iMCP.app 2>/dev/null; mdfind \"kMDItemFSName == 'iMCP.app'\" 2>/dev/null; echo; echo \"=== launchd jobs mentioning imcp ===\"; launchctl
