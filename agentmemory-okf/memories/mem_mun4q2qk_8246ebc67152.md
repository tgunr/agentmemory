---
type: Fact
title: FIXED: Hermes quick commands (type: exec) silently dropped their arguments, so '
description: FIXED: Hermes quick commands (type: exec) silently dropped their arguments, so '/optimize <text>', '/classify <text>', '/route <text>' all failed with 'error: No prompt. Usage: optimize.py "your text"
resource: agentmemory://memory/mem_mun4q2qk_8246ebc67152
tags: ["okf", "hermes", "manual"]
timestamp: 2026-09-29T20:28:56.990Z
source: agentmemory
strength: 7
---
# Content

FIXED: Hermes quick commands (type: exec) silently dropped their arguments, so '/optimize <text>', '/classify <text>', '/route <text>' all failed with 'error: No prompt. Usage: optimize.py "your text"'. Root cause: all three dispatch sites accepted user_args but ran the configured snippet via shell=True with NO positional parameters, so a '$1'/'$@' placeholder expanded to empty. Repro: sh -c 'echo "arg1=[$1]"' prints arg1=[]. Upstream had a fix (commit 8630981230, tg/main tip, authored Aug 22) that was lost in the local main branch (main...tg/main = 20649 1; merge-base --is-ancestor said NO). Reimplemented 2026-09-29 as ONE shared helper hermes_cli/quick_command_args.py (substitute_args + quoted_all_words) wired into cli.py, tui_gateway/methods_tools.py (_dispatch_quick) and gateway/run_inbound.py -- chosen over cherry-picking upstream because upstream copy-pastes the substitution logic 3x. Semantics: $1 = whole arg string as ONE shell-quoted argument; $@ = each whitespace-separated word quoted separately; quoted forms ("$1", '$1') replaced first INCLUDING surrounding quotes so shlex.quote output is never nested inside literal quotes; empty arg returns the snippet unchanged. Committed: mini 09e6f93390, pve 758dfae1fb, pro e175cc4056 (all three verified: 15/15 functional asserts pass; mini also has tests/hermes_cli/test_quick_command_args.py 25/25 green under ./.venv/bin/python -- pro/pve have NO pytest so use the pytest-free assert script). CRITICAL: this is a CODE patch, not config, so it only takes effect after the process holding old bytecode restarts. Diagnose staleness by comparing .pyc mtime vs patched source mtime; deleting the .pyc forces recompile on next start. On mini the app-chat runtime is the parent process of the running chat session -- never kill it from inside a session; ask the user to restart Hermes.app plus 'launchctl kickstart -k gui/501/ai.hermes.gateway'. pro: launchctl kickstart -k gui/501/ai.hermes.gateway. pve: systemctl --user restart hermes-gateway.
