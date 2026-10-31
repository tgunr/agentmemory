---
type: file_edit
title: Invalid runtime path error
description: No input taken
resource: agentmemory://observation/obs_mvuh3aqp_3e2435e4da88
tags: ["invalid ssh session token file", "file_edit"]
timestamp: 2026-10-30T04:29:15.163866+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 1
---
# Summary

A runtime path error occurred while searching for an invalid --ssh-session-token-file in Python files.

## Facts
- Command: cd ~/.hermes/hermes-agent && grep -rn \"invalid runtime path\" --include=*.py . | head -5
- Tool: terminal
- Output:
      ./hermes_cli/windows_ssh_runtime.py:239:        raise SystemExit(\"--ssh-session-token-file has an invalid runtime path\")\n
      ./hermes_cli/main_dashboard.py:766:        raise SystemExit(\"--ssh-session-token-file has an invalid runtime path\")\n
      ./tests/hermes_cli/test_ssh_session_token_parser.py:108:        with pytest.raises(SystemExit, match=\"invalid runtime path"):
- Output:
      ./.kilo/worktrees/foil-mailman/hermes_cli/windows_ssh_runtime.py:208:        raise SystemExit(\"--ssh-session-token-file has an invalid runtime path\")\n
      ./.kilo/worktrees/foil-mailman/hermes_cli/main.py:11161:        raise SystemExit(\"--ssh-session-token-file has an invalid runtime path\")", "exit_code": 0, "error": null, "cwd": "/Users/davec/.hermes/hermes-agent"

## Concepts
- invalid ssh session token file

_Importance: 8 · Confidence: 1_
