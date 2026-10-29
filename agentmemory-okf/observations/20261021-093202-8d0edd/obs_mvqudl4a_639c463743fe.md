---
type: file_edit
title: smbd detail
description: output of smbd command
resource: agentmemory://observation/obs_mvqudl4a_639c463743fe
tags: ["smbd", "file_edit"]
timestamp: 2026-10-27T15:30:05.479991+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 4
confidence: 0.9
---
# Summary

The command executed a timeout of 400 seconds with an initial command of
  `timeout 300 ssh -o ConnectTimeout=15 pve.root 'set +e\necho \"=== smbd zombie detail (ppid tells the story) ===\"\nps -eo pid,ppid,stat,etimes,comm | awk \"\\$3 ~ /Z/ && \\$5 ~ /smbd/\" | head -8\necho \"count by ppid:\"; ps -eo ppid,stat,comm | awk \"\\$2 ~ /Z/ && \\$3 ~ /smbd/ {print \\$1}\" | sort | uniq -c\necho \"--- current smbd master + live children ---\"\nps -eo pid,ppid,stat,args | grep \"[s]mbd --foreground\" | awk \"{print \\$1, \\$2, \\$3}\" | head -6\necho; echo \"=== sessions now ===\"; smbstatus -b 2>/dev/null | tail -n +4 | grep -c \"^[0-9]\"\necho; echo \"=== loadavg: is it real? (90 s watch) ===\"\ncat /proc/loadavg; echo \"r/b from vmstat:\"; vmstat 1 3 | tail -2\nsleep 90\necho \"--- after 90s ---\"; cat /proc/loadavg\nvmstat 1 2 | tail -1\necho \"running threads: $(ps -eo stat= | grep -c ^R)\"' 2>&1`, which output 
  ```output
  ...
  ```

  followed by details of smbd process, load averages and other information.

## Facts
- ps -eo pid,ppid,stat,etimes,comm | awk \"\\$3 ~ /Z/ && \\$5 ~ /smbd/\" | head -8
- ps -eo ppid,stat,comm | awk \"\\$2 ~ /Z/ && \\$3 ~ /smbd/ {print \\$1}\" | sort | uniq -c

## Concepts
- smbd

_Importance: 4 · Confidence: 0.9_
