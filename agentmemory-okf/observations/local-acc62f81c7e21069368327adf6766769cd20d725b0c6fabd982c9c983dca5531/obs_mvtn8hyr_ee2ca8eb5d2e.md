---
type: file_edit
title: Podman info and storage details
description: Nested commands and container information
resource: agentmemory://observation/obs_mvtn8hyr_ee2ca8eb5d2e
tags: ["Podman container management", "file_edit"]
timestamp: 2026-10-29T14:33:29.323533+00:00
source: agentmemory
session_id: local-acc62f81c7e21069368327adf6766769cd20d725b0c6fabd982c9c983dca5531
importance: 6
confidence: 1
---
# Summary

Podman was run with a bash script that gathered information about the current storage, Docker container, and OctoPrint configuration. The script logged relevant commands and execution, providing insight into the current environment.

## Facts
- Running command: timeout 100 ssh pve.root 'bash -s' <<'EOF'\necho HOST=$(hostname -s)\npodman info --format '{{.Store.GraphRoot}} {{.Store.RunRoot}}'\nzfs get -H -o name,property,value,source mountpoint dpool dpool/docker dpool/podman\nzfs get -H -o name,value,source canmount dpool dpool/docker\ngrep -n docker /etc/systemd/system/octoprint.service /etc/systemd/system/podman.socket.d/mode.conf\nsystemctl list-units --all | grep -iE \"octoprint|prusa\"; systemctl list-unit-files | grep -iE \"octoprint|prusa\"\nls -la /var/lib/docker/podman | head -5\nlsof +D /var/lib/docker 2>/dev/null | head -3\nEOF'
- Output:
dpool\tmountpoint\t/var/lib/docker\tlocal
ndpool\tmountpoint\t/dpool/podman\tlocal
ndpool\ton\tdefault
ndpool/docker\ton\tdefault
- ExecStart=/bin/sh -c 'if [ ! -e /dev/ttyACM0 ]; then echo "printer not connected; idle" ; exit 0 ; fi ; /usr/bin/podman rm -f octoprint >/dev/null 2>&1 || true ; exec /usr/bin/podman run --rm --name octoprint --device /dev/ttyACM0 --uidmap 0:501:1 --uidmap 1:100000:65535 --gidmap 0:501:1 --gidmap 1:100000:65535 --security-opt apparmor=unconfined -p 5000:5000 -v /home/davec/.prusa-XL:/octoprint/octoprint:rw docker.io/octoprint/octoprint:latest'

## Concepts
- Podman container management

## Files
- `/var/lib.docker/podman`

_Importance: 6 · Confidence: 1_
