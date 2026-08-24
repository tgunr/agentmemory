---
type: Fact
title: # Configuring Hermes default working directory

source: hermes
session_id: 20260
description: # Configuring Hermes default working directory

source: hermes
session_id: 20260706_072310_3ad477
resource: hermes://session/20260706_072310_3ad477

# Conversation

- **Session ID:** `20260706_072310_
resource: agentmemory://memory/mem_mspdzgmh_dfed834429f3
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-12T01:04:19.378Z
source: agentmemory
strength: 7
---
# Content

# Configuring Hermes default working directory

source: hermes
session_id: 20260706_072310_3ad477
resource: hermes://session/20260706_072310_3ad477

# Conversation

- **Session ID:** `20260706_072310_3ad477`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-06T12:25:58Z
- **Messages:** 10
- **CWD:** `/Volumes/davec`
- **Tokens:** 77516 in / 1392 out
- **Est. cost:** $0.0380

---

### 👤 User — 2026-07-06T12:26:00Z

why does my inital `hermes` show "/Users/davec/projects/UV/Love State", I should be in the default profile no? I see it also in the bottom as 1 session ~/projects/UV/Love State. Does hermes remember the last project?

### 🤖 Assistant — 2026-07-06T12:26:29Z

<details><summary>Reasoning</summary>

The user is asking about why Hermes Agent launched with a working directory of `/Users/davec/projects/UV/Love State` instead of their home directory or some other default location. They want to know if Hermes remembers the last project directory.

Let me look into this. I know from my memory that there's a `hermes-workspace-context` skill and a `project-workspace-setup` skill that might be relevant. Let me also check the Hermes documentation and the profile CWD sync script I know about.

Let me load the relevant skill first - `hermes-workspace-context` seems most relevant here.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-06T12:26:29Z

<details><summary>Reasoning</summary>


Let me also check the `projects` skill since it's mentioned in the AGENTS.md and might have info about project state and how projects are tracked.


</details>

**Tool call: skill_view**

```json
{
  "name": "projects"
}
```

### 🤖 Assistant — 2026-07-06T12:26:29Z

<details><summary>Reasoning</summary>


Now I understand the situation. Let me check the user's current project state to see what's registered. The user is asking why their initial `hermes` session shows `/Users/davec/projects/UV/Love State` as the working directory when they expect to be in the default profile.

Looking at the skills I just read:

1. From `hermes-workspace-context`: The working directory depends on the interface:
   - **CLI/TUI:** the directory where you run `hermes` or `hermes chat`
   - **Desktop app:** the initial project directory supplied at launch with `hermes desktop --cwd <path>` or `HERMES_DESKTOP_CWD`

2. The skill mentions that profiles have their own `terminal.cwd` configuration, and there's also a "Profile CWD Auto-Sync Shell Hook" that syncs the working directory based on config.

3. From `projects` skill: The project registry tracks projects and their paths. The `detect` command can identify the project matching the current working directory.

The user is seeing `/Users/davec/projects/UV/Love State` because:
1. They likely ran `hermes` from within that directory (cd'd into it first)
2. Or there's a `terminal.cwd` config set in their profile pointing to that directory
3. Or the project "Love State" is registered and detected as the current project

Let me check the project state and config to give them a definitive answer.

</details>

**Tool call: execute_code**

```json
{
  "code": "from hermes_tools import terminal, read_file, search_files\nimport os\n\n# Check current working directory\ncwd = os.getcwd()\nprint(f\"Current CWD: {cwd}\")\n\n# Check projects.yaml for Love State\nproject_file = os.path.expanduser(\"~/.hermes/projects.yaml\")\nif os.path.exists(project_file):\n    content = read_file(path=project_file)\n    print(\"\\n--- projects.yaml ---\")\n    print(content['content'])\nelse:\n    print(f\"No projects.yaml found at {project_file}\")\n\n# Check config.yaml for terminal.cwd\nconfig_file = os.path.expanduser(\"~/.hermes/config.yaml\")\nif os.path.exists(config_file):\n    content = read_file(path=config_file)\n    print(\"\\n--- config.yaml ---\")\n    print(content['content'])\nelse:\n    print(f\"No config.yaml found at {config_file}\")\n\n# Check active profile\nactive_profile_file = os.path.expanduser(\"~/.hermes/active-profile.json\")\nif os.path.exists(active_profile_file):\n    content = 
