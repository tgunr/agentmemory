---
type: file_edit
title: Terminal edit
description: User: davec, Working directory: /Users/davec/.hermes/profiles/systems/cache/scratch
resource: agentmemory://observation/obs_mvs8m8rk_6e74af1669b7
tags: ["launchctl", "file_edit"]
timestamp: 2026-10-28T14:56:30.174594+00:00
source: agentmemory
session_id: local-acc7b1b28c8606c1208207b194b2e11452b4002aa149635699173b12eeb4d0ac
importance: 8
confidence: 1
---
# Summary

Edit and run commands within a Hermes system cache scratch directory. launchctl command executes notification with and without asuser privileges.

## Facts
- Command: cd /Users/davec/.hermes/profiles/systems/cache/scratch\necho "console user: $(stat -f %Su /dev/console)  uid=$(id -u $(stat -f %Su /dev/console))"
- Command: launchctl asuser $(id -u davec) sudo -u davec /usr/bin/osascript -e 'display notification \"A: asuser works\" with title \"Hermes test\"' 2>&1; echo \"rc=$?\"
- Command: sudo -u davec /usr/bin/osascript -e 'display notification \"B: plain works\" with title \"Hermes test\"' 2>&1; echo \"rc=$?\"

## Concepts
- launchctl

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch`

_Importance: 8 · Confidence: 1_
