---
type: file_edit
title: SG Tools
description: Command output and enclosure devices information
resource: agentmemory://observation/obs_mvs7fbc5_45cbf7d692ca
tags: ["SG Tools", "file_edit"]
timestamp: 2026-10-28T14:23:07.298500+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 4
confidence: 0.9
---
# Summary

Executed SSH command to display sg tools and enclosure devices information. Output included.

## Facts
- Tool: terminal
- Command: ssh pve.root 'echo \"=== sg tools ===\"; for t in sg_ses sg_inq sg_senddiag sg_map sg_scan; do printf \"%-12s %s\\n\" \"$t\" \"$(command -v $t || echo -)\"; done; echo; echo \"=== enclosure devices ===\"; lsscsi -g | grep -i enclosu; echo; for e in /dev/sg18 /dev/sg19; do echo \"--- $e ---\"; sg_inq $e 2>/dev/null | grep -E \"Vendor|Product|Revision|Serial\" | head -3; done'

## Concepts
- SG Tools

## Files
- `/dev/sg18`
- `/dev/sg19`

_Importance: 4 · Confidence: 0.9_
