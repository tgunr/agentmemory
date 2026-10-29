---
type: file_edit
title: Bootctl tool usage
description: Last bootctl call details
resource: agentmemory://observation/obs_mvr1vfmp_435aad48f82c
tags: ["Bootctl", "Systemd", "file_edit"]
timestamp: 2026-10-27T18:59:55.485478+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 5
confidence: 1
---
# Summary

This terminal call performed several checks and actions related to the bootctl tool, including checking its availability, listing its dependencies, and querying packages related to systemd-boot. It also inspected the contents of a specific ESP (EFI System Partition) and created a temporary mount point for investigation.

## Facts
- Command: ssh pve.root 'echo \"=== bootctl present? ===\"'
- Command: command -v bootctl || echo &quot;NOT in PATH&quot;
- Command: ls -la /usr/bin/bootctl /usr/lib/systemd/boot/efi/ 2>&1 | head -8;
- Command: echo &quot;=== package owning bootctl ===&quot;
- Command: dpkg -S bootctl 2>/dev/null | head -3;
- Command: dpkg -l | grep -iE \"systemd-boot|systemd \" | awk \"{print \\$1, \\$2, \\$3}\";
- Command: echo &quot;=== what is on sdo2 (good ESP) ===&quot;
- Command: mkdir -p /mnt/good; mount -o ro /dev/sdo2 /mnt/good && find /mnt/good -maxdepth 3 -type f | head -20;
- Command: umount /mnt/good

## Concepts
- Bootctl
- Systemd

## Files
- `/usr/bin/bootctl`
- `/usr/lib/systemd/boot/efi/`

_Importance: 5 · Confidence: 1_
