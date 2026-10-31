---
type: FileRead
title: Syncoid System Information
description: Retrieve system information using SSH
resource: agentmemory://observation/obs_mvtn45hm_18d254a87b1f
tags: ["zpool management", "fileread"]
timestamp: 2026-10-29T14:30:06.535075+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 4
confidence: 1
---
# Summary

The tool executed a command on Syncoid to retrieve various system information, including disk usage and snapshots. The output indicates that the system is functioning normally.

## Facts
- Command executed: timeout 120 ssh pve.root 'echo HOST=$(hostname -s); ssh -o BatchMode=yes -o ConnectTimeout=10 -i /root/.ssh/id_rsa.pve.root root@syncoid.polymicro.net "hostname; zpool list -H; echo; zfs list -o name,used,usedbysnapshots,usedbydataset,avail,refer -r -d 2 data1; echo; zfs get -H -r -o name,value receive_resume_token data1 | grep -v -- "-\$\"; echo; for d in data1/sources data1/data data1/repository; do echo \$d snaps: \\$(zfs list -H -t snapshot -o name -r \\$d | wc -l); done"', 2>&1 | cut -c1-220
- Output:
- HOST=pve
fm1865b.rsync.net
data1       1.77T       1.71T       56.1G   -         384G         32%         96%         1.00x         ONLINE       -
data1
1.71T        0B    104K     0B   104K
data1/data         792G      776K    792G     0B   792G
data1/home        1.91G      211M    165M     0B   165M
data1/home/davec  1.54G        0B   1.54G     0B  1.54G
data1/repository  45.0G     25.9G   19.1G     0B  19.1G
data1/sources      913G      270M    898G     0B   898G
data1/sources    snaps: 6
data1/data snaps: 7
data1/repository snaps: 28

## Concepts
- zpool management

_Importance: 4 · Confidence: 1_
