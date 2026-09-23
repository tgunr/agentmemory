---
type: Fact
title: # Hermes telegram duplicate credential warning

source: hermes
session_id: 20260
description: # Hermes telegram duplicate credential warning

source: hermes
session_id: 20260920_030430_a1574b
resource: hermes://session/20260920_030430_a1574b

# Conversation

- **Session ID:** `20260920_030430_
resource: agentmemory://memory/mem_muceioj2_92cb026054ef
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-22T08:17:40.377Z
source: agentmemory
strength: 7
---
# Content

# Hermes telegram duplicate credential warning

source: hermes
session_id: 20260920_030430_a1574b
resource: hermes://session/20260920_030430_a1574b

# Conversation

- **Session ID:** `20260920_030430_a1574b`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-09-20T08:05:48Z
- **Ended:** 2026-09-21T08:48:11Z
- **Messages:** 42
- **CWD:** `/Users/davec`
- **Tokens:** 235498 in / 2609 out

---

### 👤 User — 2026-09-20T08:05:48Z

hermes update is showing:

### 🤖 Assistant — 2026-09-20T08:05:56Z

<details><summary>Reasoning</summary>

The user says "hermes update is showing:" but then the message is cut off. They seem to be in the middle of describing an issue with the `hermes update` command. Let me wait for the full message or ask for clarification.

Actually, the user message is just "hermes update is showing:" with nothing after it. This seems incomplete. Let me ask for the full message.

</details>

It looks like your message got cut off. Could you share the full output or error from `hermes update`?

### 👤 User — 2026-09-20T08:05:57Z

⚠ Memory provider 'builtin' is configured but not installed and not in the plugin catalog. Install it with `hermes plugins install <source>` or change memory.provider.

### 🤖 Assistant — 2026-09-20T08:06:05Z

<details><summary>Reasoning</summary>

The user is getting an error about a memory provider 'builtin' not being installed. Let me check the Hermes configuration to understand what's going on. I should look at the config files and possibly the skills related to Hermes configuration.

Let me start by checking the Hermes config and understanding the current state.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "cat ~/.hermes/config.yaml 2>/dev/null || echo \"No config.yaml found\""
}
```

### 🤖 Assistant — 2026-09-20T08:06:27Z

<details><summary>Reasoning</summary>

I can see the issue. In the config, under `memory:`, it says:

```yaml
memory:
  memory_enabled: true
  user_profile_enabled: true
  write_approval: false
  memory_char_limit: 4096
  user_char_limit: 1375
  nudge_interval: 10
  provider: builtin
  flush_min_turns: 6
```

The `provider: builtin` is set, but the `basic` plugin (which provides the builtin memory provider) is listed under `plugins.disabled`. Let me check the plugin catalog and fix this.

Let me check if there's a builtin memory plugin or if we need to install something.

</details>

**Tool call: terminal**

```json
{
  "command": "hermes plugins list 2>&1 | head -60"
}
```

**Tool call: terminal**

```json
{
  "command": "hermes plugins catalog 2>&1 | grep -i memory"
}
```

### 🤖 Assistant — 2026-09-20T08:06:48Z

<details><summary>Reasoning</summary>

So the issue is clear. The `basic` plugin is bundled with Hermes and is the backend for the `builtin` memory provider. Your config has `memory.provider: builtin`, but the `basic` plugin is in the `plugins.disabled` list.

The fix is simple: remove `basic` from `plugins.disabled` so it can be enabled, which will satisfy the `builtin` memory provider requirement. I can patch the config.yaml directly. This is a targeted change — just removing one entry from a list. Let me do that.

However, I should note that the user said "Desktop MCP + agent read HERMES_HOME/config.yaml, not profiles/<name> subpath. Root config.yaml is live." And also the patch tool might have issues with config.yaml. Let me check — earlier memory said "patch tool refuses config.yaml" in some cases, but that was about `hermes config set`. Let me try the patch tool since I have the exact line.

Actually wait — the memory note says: "Desktop MCP + agent read HERMES_HOME/config.yaml, not profiles/<name> subpath. Root config.yaml is live. MCP reload via `/reload-mcp now` in chat, not `hermes mcp reload`. User prefers self-fixing MCP via panel UI over agent config edits when both paths exist."

So the user prefers the panel UI for MCP/plugin config. But this isn't exactly MCP — it's the plugin system. The memory also says config.yaml is live and patching it works. The patch tool is the right approach for a targ
