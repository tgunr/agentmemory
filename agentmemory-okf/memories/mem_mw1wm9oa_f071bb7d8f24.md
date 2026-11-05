---
type: Fact
title: # Add session ID link to reminder

source: hermes
session_id: local-963de24bf52e
description: # Add session ID link to reminder

source: hermes
session_id: local-963de24bf52e42184aef3b00f56239d39578dd7fd1e8786ad97c80a9aef0de4e
resource: hermes://session/local-963de24bf52e42184aef3b00f56239d395
resource: agentmemory://memory/mem_mw1wm9oa_f071bb7d8f24
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-04T09:18:17.534Z
source: agentmemory
strength: 7
---
# Content

# Add session ID link to reminder

source: hermes
session_id: local-963de24bf52e42184aef3b00f56239d39578dd7fd1e8786ad97c80a9aef0de4e
resource: hermes://session/local-963de24bf52e42184aef3b00f56239d39578dd7fd1e8786ad97c80a9aef0de4e

# Conversation

- **Session ID:** `local-963de24bf52e42184aef3b00f56239d39578dd7fd1e8786ad97c80a9aef0de4e`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-02T15:40:30Z
- **Ended:** 2026-11-03T11:13:12Z
- **Messages:** 57
- **CWD:** `/Users/davec`
- **Tokens:** 56458 in / 14677 out
- **Est. cost:** $-23747.0000

---

### 👤 User — 2026-11-02T15:40:31Z

In the cron jobs for detecting unfinished sessions, we're creating a reminder but it does not show the session ID. I need a way to get back to this session in Hermes When I'm viewing the reminder

### 🤖 Assistant — 2026-11-02T15:40:35Z

<details><summary>Reasoning</summary>

The user wants cron jobs for detecting unfinished sessions to include the session ID so they can get back to the session from the reminder.

Let me load relevant skills and inspect the cron setup. Likely relevant skills: hermes-cron, hermes-session-hygiene, session-recovery.

Let me batch: skill_view hermes-cron, hermes-session-hygiene, and list cron jobs.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\nprint(terminal(\"ls -la ~/.hermes/cron/ 2>/dev/null; echo ---; cat ~/.hermes/cron/jobs.json 2>/dev/null | head -200\", timeout=60)[\"output\"])\n"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-session-hygiene"
}
```

### 🤖 Assistant — 2026-11-02T15:40:39Z

<details><summary>Reasoning</summary>

Now read the production scanner script: ~/.hermes/scripts/unfinished_session_audit.py.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/scripts/unfinished_session_audit.py"
}
```

### 🤖 Assistant — 2026-11-02T15:40:44Z

<details><summary>Reasoning</summary>

The sid is collected but not included in build_notes. So the fix: add the session ID to each entry in notes.

But the user wants "a way to get back to this session in Hermes when I'm viewing the reminder". So just showing the session ID helps, but better: a clickable link. Does Hermes desktop support a deep link URL scheme, e.g. hermes://session/<id>? Let me check. Also check if there's a CLI command `hermes resume <id>` or `hermes --session`.

Let me research: search hermes-agent source for URL scheme handling and for "session" open command.

Also the reminder note text — clicking a link in Reminders notes on macOS may not be clickable (Reminders notes are plain text; URLs in notes ARE auto-linked sometimes... actually Reminders notes support links poorly). Better approach: include both the session ID and a `hermes://` deep link if it exists; plus a copy-pastable command like `hermes chat --resume <sid>` or `/resume <sid>` slash command.

Let me check the codebase.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\ncmds = [\n \"cd ~/.hermes/hermes-agent && grep -rn 'hermes://' --include=*.py --include=*.ts --include=*.tsx --include=*.json --include=*.md -l | head -30\",\n \"cd ~/.hermes/hermes-agent && grep -rn 'open-url\\\\|openURL\\\\|setAsDefaultProtocolClient\\\\|CFBundleURLSchemes' --include=*.swift --include=*.ts --include=*.tsx --include=*.py --include=*.plist -l | head -30\",\n \"cd ~/.hermes/hermes-agent && grep -rn 'resume' --include=*.py hermes/*.py | grep -i 'session\\\\|argparse\\\\|add_argument' | head -40\",\n]\nfor c in cmds:\n    print(\"###\", c)\n    print(terminal(c, timeout=120)[\"output\"][:3000])\n"
}
```

### 🤖 Assistant — 2026-11-02T15:41:39Z

<details><summary>Reasoning</summary>

There's `apps/desktop/src/lib/hermes-open-target.ts` and `deep-link-protocol.ts`. Let me check the hermes:// URL scheme supported paths — maybe `hermes://session/<id>`.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal\nfor c in [\n \"cd ~/.hermes/hermes-agent && sed -n 1,120p apps/desktop/src/lib/hermes-open-target.ts\",\n \"cd ~/.hermes/hermes-agent && sed -n 1,80p apps/desktop/electron/deep-link-protocol.ts\",\n \"cd ~/.hermes/hermes-agent && gr
