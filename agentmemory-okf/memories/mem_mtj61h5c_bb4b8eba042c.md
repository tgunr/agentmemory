---
type: Fact
title: # Bun Runtime Missing in MCP Server Log

source: hermes
session_id: claude__227a
description: # Bun Runtime Missing in MCP Server Log

source: hermes
session_id: claude__227a4bbd-80fb-4a8d-8505-cc3ec7d0269d
resource: hermes://session/claude__227a4bbd-80fb-4a8d-8505-cc3ec7d0269d

# Conversation
resource: agentmemory://memory/mem_mtj61h5c_bb4b8eba042c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:01.638Z
source: agentmemory
strength: 7
---
# Content

# Bun Runtime Missing in MCP Server Log

source: hermes
session_id: claude__227a4bbd-80fb-4a8d-8505-cc3ec7d0269d
resource: hermes://session/claude__227a4bbd-80fb-4a8d-8505-cc3ec7d0269d

# Conversation

- **Session ID:** `claude__227a4bbd-80fb-4a8d-8505-cc3ec7d0269d`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-08T17:03:07Z
- **Ended:** 2025-08-08T17:19:28Z
- **Messages:** 8
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-08T17:03:08Z

Look at /Users/davec/Library/Logs/Claude/mcp-server-apple-mcp.log and find out why file not found.

### 🤖 Assistant — 2025-08-08T17:03:35Z

I'll help you examine the MCP server log file to investigate the "file not found" issue. Let me read the log file first.
```
This block is not supported on your current device yet.
```

I found the issue! Looking at the log file, the problem is clear:

**Root Cause:** The error `env: bun: No such file or directory` indicates that the `bun` executable is not found in your system PATH.

**What's happening:**
1. The MCP server is trying to run the Apple MCP server using `bunx @dhravya/apple-mcp@latest`
2. The system is looking for `bun` (the JavaScript runtime) but can't find it
3. This causes the server process to exit early, resulting in the connection failure

**Solution:**
You need to install Bun on your system. Here are the steps:

1. **Install Bun:**
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Restart your shell or reload your profile:**
   ```bash
   source ~/.bashrc  # or ~/.zshrc if you use zsh
   ```

3. **Verify Bun is installed:**
   ```bash
   bun --version
   ```

4. **Restart Claude** to reconnect the MCP server

**Alternative:** If you prefer not to install Bun, you might be able to use Node.js instead by modifying the MCP server configuration to use `npx` instead of `bunx`, but Bun is the recommended runtime for this particular MCP server.

The log shows that the server was trying to resolve dependencies successfully before failing on the missing `bun` executable, so once you install Bun, the Apple MCP server should work properly.

`[tool_use: desktop-commander-mcp:read_file]`
`[tool_result]` [Reading 29 lines from start (total: 30 lines, 1 remaining)]  2025-08-08T17:00:49.405Z [apple-mcp] [info] Initializing server... { metadata: undefined } 2025-08-08T17:00:49.448Z [apple-mcp] [info] Using MCP server command: /Users/davec/.bun/bin/bunx with args and path: {   metadata: {     args: [ '@dhravya/apple-mcp@latest', [length]: 1 ],     paths: [       '/Users/davec/.nvm/versions/node/v20.19

### 👤 User — 2025-08-08T17:08:44Z

I installed bun, look now at log

### 🤖 Assistant — 2025-08-08T17:10:17Z

Let me check the updated log file to see if the Bun installation resolved the issue.
```
This block is not supported on your current device yet.
```

I can see there's still an issue, but it's a different one now. The problem is that the system is trying to run `~/.bun/bin/bunx` but the tilde (`~`) isn't being expanded properly, resulting in `ENOENT` (file not found).

Let me check if Bun is actually installed and where it's located:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Let me try a different approach to check if Bun is installed:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Good! Bun is installed in `~/.bun/bin/`. The issue is that the tilde (`~`) is not being properly expanded in the MCP server configuration, and Bun is not in your PATH.

**The problem:** Bun is installed but not added to your PATH, and the MCP configuration is using `~/.bun/bin/bunx` which isn't being expanded to the full path.

**Solution:** Add Bun to your PATH. Let me check your shell:
```
This block is not supported on your current device yet.
```

You're using zsh. Add Bun to your PATH by adding this line to your `~/.zshrc` file:
```
This block is not supported on your current device yet.
```

I can see your `.zshrc` file. Let me add the Bun PATH export:
```
This block is not supported on your current device yet.
```

Now reload your shell co
