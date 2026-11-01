---
type: FileRead
title: skill_view of hermes-slash-command-dispatch
description: No output
resource: agentmemory://observation/obs_mvwj3s9h_547b3dfe0996
tags: ["hermes-cli", "fileread"]
timestamp: 2026-10-31T15:01:09.458137+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 4
confidence: 1
---
# Summary

A Hermes Slash command was invoked, displaying technical documentation.

## Facts
- Tool: skill_view
- Input: {"name": "hermes-slash-command-dispatch"}
- Output: {"success": true, "name": "hermes-slash-command-dispatch", "description": "Adding or debugging a Hermes slash command.", "tags": ["hermes", "slash-command", "dispatch", "quick_commands", "exec", "shlex", "shell-quoting"], "related_skills": [], "content": "---\nname: hermes-slash-command-dispatch\ndescription: \"Adding or debugging a Hermes slash command.\"\nversion: 1.0.0\nauthor: Hermes Agent\nlicense: MIT\nplatforms: [macos, linux]\nmetadata:\n  hermes:\n    tags: [hermes, slash-command, dispatch, quick_commands, exec, shlex, shell-quoting]\n    homepage: https://hermes-agent.nousresearch.com/docs/\n ---\n\n# Hermes Slash-Command Dispatch\n\n## When to use\n\nA Hermes slash command (`/optimize`, `/classify`, `/route`, `/action`, `/am`, or any custom `quick_commands` entry) returns an error like:\n - Quick command '/route' has unsupported type (supported: 'exec', 'alias') — **the config entry has `type: slash`**, which is NOT a valid quick_command type. Only `exec` and `alias` are supported by the dispatch code (cli.py, gateway/run_inbound.py, tui_gateway/methods_tools.py). This is the most common root cause; check this FIRST.\n - No prompt. Usage: optimize.py \"your text\" — the script received an empty argv\n - The script ran but received literal quote characters in its argument\n - The command works when called directly from a terminal but fails when invoked via the slash handler\n  → either the config `type` is wrong, or the dispatch layer is not passing the user's typed args into the configured shell command.\n\n## Adding a NEW slash command\n\nOrder the work by the one decision that drives everything: **who owns the state the command touches.**\n  - In-process state (this REPL's cwd, a local file) → a `CommandDef` plus `_handle_<name>_command` on a CLI mixin is enough.\n  - Live-session state in the TUI/Desktop (workspace, model, approvals) → the command must run **in the client**: `ui-tui/src/app/slash/commands/<topic>.ts`, registered in `ui-tui/src/app/slash/registry.ts`, moving state over an RPC. The Python side of a TUI slash command runs inside the `_SlashWorker` child process, where `hermes_cli.gateway_automation.gateway_connection(cli)` is `None` — an `os.chdir`/`TERMINAL_CWD` there moves the worker, never the live session.\n  - Register it in `hermes_cli/commands.py` either way. That registry alone feeds the `/` popover, `/help`, `commands.catalog` and the alias map (`tui_gateway/command_discovery.py::_catalog_registry` skips only `gateway_only` names and `_TUI_HIDDEN`). A client-only command with no `CommandDef` runs when typed but is invisible in every listing.\n    **Do not reach for `cli_only=True` on a command you want offered everywhere.** `cli_only` removes the name from `GATEWAY_KNOWN_COMMANDS`, which is the uncapped bucket in `command_discovery._rank` — the command then sorts into the capped "other" group, still runs when typed, and is missing from the bare-`/` popover (it can sit below the fold even for a typed prefix). Reserve `cli_only` for something that must never run on a chat surface, and expect no popover slot for it.\n  - Regenerate the desktop dump: `python scripts/dump_desktop_slash_registry.py`. `tests/hermes_cli/test_desktop_slash_registry.py` and its vitest twin fail on drift. Give terminal-only commands `desktop="terminal"` so the desktop palette hides them — desktop dispatch answers `unsupported_command` for anything only the client implements.\n  - Put the handler where the ratchet allows it: `wc -l hermes_cli/cli_*mixin*.py`. A file already over the 2000-line cap may only shrink, so a new method goes in a topical mixin *under* the cap (or in a new mixin added to `HermesCLI`'s bases in `cli.py`, which has room).\n  - Move live state with the RPC the repo already tests: `session.workspace.move {session_key, cwd}` (re-homes the stored row and a live agent, works mid-turn) with `session.cwd.set {session_id, cwd}` as the fall

## Concepts
- hermes-cli

_Importance: 4 · Confidence: 1_
