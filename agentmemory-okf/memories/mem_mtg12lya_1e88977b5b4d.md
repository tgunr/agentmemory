---
type: Fact
title: # Review diskclean.sh dry-run output #2

source: hermes
session_id: 20260824_194
description: # Review diskclean.sh dry-run output #2

source: hermes
session_id: 20260824_194753_a8f5ad
resource: hermes://session/20260824_194753_a8f5ad

# Conversation

- **Session ID:** `20260824_194753_a8f5ad`
resource: agentmemory://memory/mem_mtg12lya_1e88977b5b4d
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:37.940Z
source: agentmemory
strength: 7
---
# Content

# Review diskclean.sh dry-run output #2

source: hermes
session_id: 20260824_194753_a8f5ad
resource: hermes://session/20260824_194753_a8f5ad

# Conversation

- **Session ID:** `20260824_194753_a8f5ad`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-25T00:47:53Z
- **Ended:** 2026-08-26T11:40:22Z
- **Messages:** 35
- **CWD:** `/Users/davec`
- **Tokens:** 57111 in / 5713 out
- **Est. cost:** $-50196.0000

---

### 👤 User — 2026-08-25T00:29:50Z

loak result of ~/bin/diskclean.sh clean --dry-run and tell me if it looks ok toe delete items

### 🤖 Assistant — 2026-08-25T00:34:38Z

<details><summary>Reasoning</summary>

Let me now check the remaining areas I haven't verified: the hermes-fresh copies, .local, .npm, MCP_Local, .hermes (the actual hermes-agent source tree — wait, the memory says hermes-agent lives at ~/.hermes/hermes-agent). Let me check the non-node_modules entries in MCP_Local, .hermes-fresh, .local, and the AI-Prompt-Vault build output. Also let me verify the script to understand what "clean" does and confirm categories are safe.

Let me look at the diskclean.sh script itself to understand the clean command's behavior, and check remaining large areas. Also important: check whether any of the deleted paths are the actual current hermes-agent install that's running (since the agent runs from ~/.hermes/hermes-agent per memory — the memory says the working tree is at ~/.hermes/hermes-agent). The dry run shows node_modules under .hermes-fresh/hermes-agent and .local/hermes-agent-source, but what about ~/.hermes/hermes-agent/node_modules? Let me check if that's in the list. It's critical — deleting node_modules of the running hermes agent could break it.

Also check the LSP node_modules under ~/.hermes — those belong to active LSP servers for various profiles. Deleting them would just mean they reinstall on next use, but if a profile is actively used (ai, cc, ollama, systems, default), the LSP would need reinstall. That's fine but worth noting.

Let me check the full list for entries under ~/.hermes/hermes-agent (the live install) and ~/.hermes-fresh, .local, MCP_Local.

</details>

Now let me check the areas that matter most — the live Hermes install, MCP servers, and the hermes-fresh/source copies — plus look at the script itself to understand what `clean` does.

### 🤖 Assistant — 2026-08-25T00:35:04Z

<details><summary>Reasoning</summary>

Good. Key findings so far:
- The live `~/.hermes/hermes-agent/` node_modules is NOT in the delete list (only .pytest_cache and venv pycache). Good — that's the critical one.
- `~/.hermes-fresh/hermes-agent` — a fresh copy, node_modules 1046MB would be deleted. Is that a live install? Let me check. `.hermes-fresh` sounds like a fresh test install. Need to verify whether it's in use.
- `~/.local/hermes-agent-source` — source copy, node_modules 358MB. Check if it's in use.
- `MCP_Local/agentmemory/node_modules` 2928MB — this is a real MCP server that might be running. Need to check if agentmemory is active.
- `MCP_Local/docmost-mcp/node_modules` 228MB — docmost MCP, might be in use.
- `~/Library/Logs` 2994MB — all of Library/Logs. That contains system logs, but they're regenerable. Still, worth checking whether it's the whole folder including things like DiagnosticReports which can be useful.

Let me check:
1. The script itself to understand what categories it deletes and if there's a way to exclude.
2. Whether MCP_Local/agentmemory and docmost-mcp are in use (running processes / referenced in config).
3. Whether ~/.hermes-fresh and ~/.local/hermes-agent-source are actively used.
4. What's in ~/Library/Logs.
5. Check the .npm/_npx entries — are they stale? _npx caches are regenerable but some might be for tools in active use (npx caches of installed CLIs).

Let me look at the script and check for running processes.

</details>

Good — the live `~/.hermes/hermes-agent/` node_modules is **not** in the delete list, which is the critical one. Now let me check whether the big items are actually in active use: MCP servers, the hermes-fresh/source copies, and what's in `~/Library/Logs`. Let me also look at the s
