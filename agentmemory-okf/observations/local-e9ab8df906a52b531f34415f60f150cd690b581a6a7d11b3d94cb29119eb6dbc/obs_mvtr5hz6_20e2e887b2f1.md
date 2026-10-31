---
type: CommandRun
title: Post-VM power-on process
description: Executing qm showcmd and screendump commands on PVE root
resource: agentmemory://observation/obs_mvtr5hz6_20e2e887b2f1
tags: ["Post-VM power-on process", "VM monitoring", "OVMF", "commandrun"]
timestamp: 2026-10-29T16:23:07.836965+00:00
source: agentmemory
session_id: local-e9ab8df906a52b531f34415f60f150cd690b581a6a7d11b3d94cb29119eb6dbc
importance: 7
confidence: 0.9
---
# Summary

The agent executed a command on a PVE server to retrieve VM details and capture a screendump. The output includes bootindex, OVMF_CODE, and SCSI drive information.

## Facts
- Command: ssh pve.root 'qm showcmd 111 --pretty | grep -oE \"OVMF_CODE[^\\\"]*|drive-ide0[^ ]*bootindex[^ ]*|ide-cd,bus=ide.0[^ ]*|size.:[0-9]+\" | sort -u; qm monitor 111 <<< \"screendump /tmp/111.ppm\" >/dev/null 2>&1; qm showcmd 111 --pretty | grep -E \"ide-cd|ide-hd|bootindex\"'; scp -q pve.root:/tmp/111.ppm $TMPDIR/111.ppm && sips -s format png $TMPDIR/111.ppm --out $TMPDIR/111.png >/dev/null; echo $TMPDIR/111.png'
- Type: ssh

## Concepts
- Post-VM power-on process
- VM monitoring
- OVMF

## Files
- `$TMPDIR/111.png`

_Importance: 7 · Confidence: 0.9_
