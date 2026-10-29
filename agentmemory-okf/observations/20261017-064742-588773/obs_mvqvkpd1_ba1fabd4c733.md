---
type: file_edit
title: zfs send/receive issues
description: Snapshot source no longer exists
resource: agentmemory://observation/obs_mvqvkpd1_ba1fabd4c733
tags: ["zfs send and receive", "file_edit"]
timestamp: 2026-10-27T16:03:37.185161+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 4
confidence: 1
---
# Summary

zfs send and receive operations encountered issues due to non-existent snapshot sources. The zfs destroy command also failed. The partially received state is being reset.

## Facts
- zfs send  -t 1-12d09b374e-108-789c636064000310a501c49c50360710a715e5e7a69766a630404144f2bba6dd121b172900d9ec48eaf293b252934b1818b6ce7a075687219f96569c5a0292e94b81c9b321c9275596a41603e98a554ff63363d15f920f71459ceef73b4fc32f320520c97382e5f3127353191812730a3212f58bf34b8b92538b1d124b4bf28bf3120be28d0c8ccc740d0d748d4ce30dccac0c8cac4c0de233808a722a1910000020f92fd5
- zfs receive  -s -F '\"'\"'data1/sources'\"'\"' failed: 256
- mbuffer: error: outputThread: error writing to <stdout> at offset 0x3b97f0000: Broken pipe
- pv -p -t -e -r -b -s 0 | lzop  | mbuffer  -q -s 128k -m 16M | ssh     -i /root/.ssh/id_rsa.pve.root -S /tmp/syncoid-rootsyncoidpolymicroinet-1793015744-3361437-6331 root@syncoid.polymicronet ' mbuffer  -q -s 128k -m 16M | lzop -dfc

## Concepts
- zfs send and receive

_Importance: 4 · Confidence: 1_
