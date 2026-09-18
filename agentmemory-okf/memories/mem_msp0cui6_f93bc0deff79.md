---
type: Fact
title: # Hiding Hermes Profiles In TUI

source: hermes
session_id: 20260708_142919_6ad2
description: # Hiding Hermes Profiles In TUI

source: hermes
session_id: 20260708_142919_6ad22c
resource: hermes://session/20260708_142919_6ad22c

# Conversation

- **Session ID:** `20260708_142919_6ad22c`
- **Sou
resource: agentmemory://memory/mem_msp0cui6_f93bc0deff79
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-11T18:42:49.309Z
source: agentmemory
strength: 7
---
# Content

# Hiding Hermes Profiles In TUI

source: hermes
session_id: 20260708_142919_6ad22c
resource: hermes://session/20260708_142919_6ad22c

# Conversation

- **Session ID:** `20260708_142919_6ad22c`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-08T19:29:20Z
- **Messages:** 16
- **CWD:** `/Volumes/davec`
- **Tokens:** 36 in / 1468 out
- **Est. cost:** $0.0270

---

### 👤 User — 2026-07-08T19:29:21Z

Is it possible in hermes to have a profile hidden in the desktop but available ib TUI?

### 🤖 Assistant — 2026-07-08T19:29:28Z

<details><summary>Reasoning</summary>

The user is asking about Hermes Agent configuration - specifically whether a profile can be hidden from the Desktop GUI but still available in the TUI. Let me load the hermes-agent skill to get the actual documentation on profile visibility settings.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-08T19:29:38Z

<details><summary>Reasoning</summary>

The user is asking about whether a profile can be hidden in the Desktop GUI but still available in the TUI. Let me think about what I know about Hermes profiles. From the skill docs, there's `hermes profile list`, and profiles live under `~/.hermes/profiles/<name>/`. I don't see a specific "hidden" flag mentioned in the profile commands. Let me check if there's a config option or flag for this.

I don't recall a built-in "hidden" option. I should be honest about this. The TUI (`hermes -p <name> chat`) just needs the profile to exist — it doesn't care about Desktop visibility. But the question is whether there's a way to exclude a profile from the Desktop GUI picker while keeping it accessible via CLI.


Let me look at the profile configuration to see if there's a hidden flag or some other mechanism to control visibility.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -r \"hidden\\|hide.*profile\\|visible\\|desktop.*profile\\|profile.*exclude\\|profile.*show\" --include=\"*.py\" -l"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"profile.*list\\|list_profile\\|profiles_for\" --include=\"*.py\" | grep -iv test | head -30"
}
```

### 🤖 Assistant — 2026-07-08T19:29:55Z

<details><summary>Reasoning</summary>

Let me look at how profiles are listed and filtered, specifically to see if there's any mechanism for hiding a profile from the Desktop/WebUI but keeping it visible in the TUI.


</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -n \"list_profiles\\|def list\\|hidden\" hermes_cli/profiles.py | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -n \"list_profiles\" hermes_cli/web_server.py | head -20"
}
```

### 🤖 Assistant — 2026-07-08T19:30:01Z

<details><summary>Reasoning</summary>

Let me look at the `list_profiles` function to see if there's any filtering logic for hidden/desktop-visible profiles.


</details>

**Tool call: read_file**

```json
{
  "path": "~/.hermes/hermes-agent/hermes_cli/profiles.py",
  "offset": 877,
  "limit": 80
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -n \"desktop\\|hidden\\|visible\\|profile.*list\\|list.*profile\\|profile_select\" hermes_cli/web_server.py | grep -i \"profile\\|hidden\\|visible\\|desktop\" | head -30"
}
```

### 🤖 Assistant — 2026-07-08T19:30:09Z

<details><summary>Reasoning</summary>

Looking at the code, `list_profiles()` just enumerates all directories under `~/.hermes/profiles/` (plus the default). There's no concept of "hidden" profiles in the current codebase.

Let me check if there's anything in the web_server/desktop profile endpoints that filters.


</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -n \"hidden\\|visible\\|desktop_only\\|tui_only\\|profile_hide\" hermes_cli/profiles.py hermes_cli/web_server.py hermes_cli/subcommands/profile.py 2>/dev/null | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-a
