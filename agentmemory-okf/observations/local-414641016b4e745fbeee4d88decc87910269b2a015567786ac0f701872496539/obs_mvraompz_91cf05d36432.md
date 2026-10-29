---
type: file_edit
title: APT Upgrade Report
description: Retrieve PVE upgrade report
resource: agentmemory://observation/obs_mvraompz_91cf05d36432
tags: ["Apt package management", "file_edit"]
timestamp: 2026-10-27T23:06:34.623203+00:00
source: agentmemory
session_id: local-414641016b4e745fbeee4d88decc87910269b2a015567786ac0f701872496539
importance: 5
confidence: 0.9
---
# Summary

Apt upgrade report retrieved and analyzed for PVE. Relevant packages identified.

## Facts
- command: ssh pve.root 'echo "=== the 5 upgradable ==="; apt list --upgradable 2>/dev/null | tail -n +2; echo; echo "=== kept back ==="; apt-get -s upgrade 2>&1 | sed -n "/kept back/,+3p" | head -4; echo; echo "=== sanity: does PVE still see its repo? ==="; apt-cache policy pve-manager | head -5'
- output: === the 5 upgradable ===\nbind9-dnsutils/oldstable-security 1:9.18.49-1~deb12u3 amd64 [upgradable from: 1:9.18.49-1~deb12u2]\nbind9-host/oldstable-security 1:9.18.49-1~deb12u3 amd64 [upgradable from: 1:9.18.49-1~deb12u2]\nbind9-libs/oldstable-security 1:9.18.49-1~deb12u3 amd64 [upgradable from: 1:9.18.49-1~deb12u2]\ndnsutils/oldstable-security 1:9.18.49-1~deb12u3 all [upgradable from: 1:9.18.49-1~deb12u2]\npython3-protobuf/oldstable 3.21.12-3+deb12u1 amd64 [upgradable from: 3.21.12-3]\n\n=== kept back ===\n\n=== sanity: does PVE still see its repo? ===\npve-manager:\n  Installed: 8.4.21\n  Candidate: 8.4.21\n  Version table:\n *** 8.4.21 900"

## Concepts
- Apt package management

_Importance: 5 · Confidence: 0.9_
