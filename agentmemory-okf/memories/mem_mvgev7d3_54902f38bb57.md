---
type: Fact
title: # Fix Zed unknown variant ClaudeCode error

source: hermes
session_id: 20261015_
description: # Fix Zed unknown variant ClaudeCode error

source: hermes
session_id: 20261015_072213_9741aa
resource: hermes://session/20261015_072213_9741aa

# Conversation

- **Session ID:** `20261015_072213_9741
resource: agentmemory://memory/mem_mvgev7d3_54902f38bb57
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-20T08:18:11.728Z
source: agentmemory
strength: 7
---
# Content

# Fix Zed unknown variant ClaudeCode error

source: hermes
session_id: 20261015_072213_9741aa
resource: hermes://session/20261015_072213_9741aa

# Conversation

- **Session ID:** `20261015_072213_9741aa`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-15T12:22:14Z
- **Ended:** 2026-10-19T09:36:25Z
- **Messages:** 136
- **CWD:** `/Volumes/davec`
- **Tokens:** 104164 in / 96343 out
- **Est. cost:** $-29264.0000

---

### 👤 User — 2026-10-15T12:22:14Z

@file:/Users/davec/.hermes/attachments/pasted_content_2026-10-15_12-22-06-091_883afa.txt

Zed keeps reporting:

--- Attached Context ---

📄 @file:/Users/davec/.hermes/attachments/pasted_content_2026-10-15_12-22-06-091_883afa.txt (1336 tokens)
```
2026-10-15T07:19:21-05:00 ERROR [crates/agent_ui/src/agent_panel.rs:319] unknown variant `ClaudeCode`, expected one of `NativeAgent`, `TextThread`, `native_agent`, `Custom`, `custom` at line 1 column 44
2026-10-15T07:19:21-05:00 ERROR [crates/agent_ui/src/agent_panel.rs:319] unknown variant `ClaudeCode`, expected one of `NativeAgent`, `TextThread`, `native_agent`, `Custom`, `custom` at line 1 column 44
2026-10-15T07:19:21-05:00 ERROR [project::environment] Failed to load shell environment for directory "/Users/davec/Desktop/BoxTap": capturing shell environment with "/usr/bin/zsh": No such file or directory (os error 2)
2026-10-15T07:19:21-05:00 ERROR [project::environment] Failed to load shell environment for directory "/Users/davec/Desktop/BoxTap/BoxTap": capturing shell environment with "/usr/bin/zsh": No such file or directory (os error 2)
2026-10-15T07:19:21-05:00 ERROR [project::git_store] failed to get working directory environment for repository "/Users/davec/Desktop/BoxTap"
2026-10-15T07:19:21-05:00 ERROR [project::git_store] failed to get working directory environment for repository "/Users/davec/Desktop/BoxTap/BoxTap"
2026-10-15T07:19:21-05:00 INFO  [git::repository] opening git repository at "/Users/davec/Desktop/BoxTap/BoxTap/.git" using git binary "/opt/homebrew/bin/git"
2026-10-15T07:19:21-05:00 INFO  [git::repository] opening git repository at "/Users/davec/Desktop/BoxTap/.git" using git binary "/opt/homebrew/bin/git"
2026-10-15T07:19:22-05:00 ERROR [project::context_server_store] Failed to create context server configuration from settings: from extension "Brave Search MCP Server" version 0.2.0: missing field `brave_api_key`
2026-10-15T07:19:22-05:00 ERROR [project::context_server_store] mcp-server-github context server failed to start: failed to spawn command cd "/Users/davec/Desktop/BoxTap" && GITHUB_PERSONAL_ACCESS_TOKEN="[REDACTED]" "/usr/bin/zsh" "-c" "'/Users/davec/Library/Application Support/Zed/extensions/work/mcp-server-github/github-mcp-server-v2.0.2/github-mcp-server' stdio"
2026-10-15T07:19:22-05:00 ERROR [project::context_server_store] mcp-server-sequential-thinking context server failed to start: failed to spawn command cd "/Users/davec/Desktop/BoxTap" && "/usr/bin/zsh" "-c" "/Users/davec/.local/bin/node '/Users/davec/Library/Application Support/Zed/extensions/work/mcp-server-sequential-thinking/node_modules/@modelcontextprotocol/server-sequential-thinking/dist/index.js'"
2026-10-15T07:19:22-05:00 ERROR [project::context_server_store] mcp-server-context7 context server failed to start: failed to spawn command cd "/Users/davec/Desktop/BoxTap" && "/usr/bin/zsh" "-c" "/Users/davec/.local/bin/node '/Users/davec/Library/Application Support/Zed/extensions/work/mcp-server-context7/node_modules/@upstash/context7-mcp/dist/index.js' '--api-key=ctx7sk-17d42422-94b8-4df1-aa60-2259ae01230f'"
2026-10-15T07:19:22-05:00 ERROR [project::context_server_store] mcp-server-puppeteer context server failed to start: failed to spawn command cd "/Users/davec/Desktop/BoxTap" && "/usr/bin/zsh" "-c" "/Users/davec/.local/bin/node '/Users/davec/Library/Application Support/Zed/extensions/work/mcp-server-puppeteer/node_modules/@modelcontextprotocol/server-puppeteer/dist/index.js'"
2026-10-15T07:19:22-05:00 ERROR [project::context_server_store] browser-tools-context-server context server failed to start: failed to spawn command cd "/Users/davec/Desktop/Box
