---
type: file_edit
title: Triaging SAS failing disk behind HBA + expander
description: Applies to fleet's storage hosts onboard Broadcom SAS3008 + SMC expander backplanes, ZFS on every pool
resource: agentmemory://observation/obs_mvtnlf3r_6e181c7dd31a
tags: ["SAS HBA + expander backplanes", "Storage hosts (ZFS on every pool)", "file_edit"]
timestamp: 2026-10-29T14:43:32.145895+00:00
source: agentmemory
session_id: local-da010cd1ff0767b269c13670d8ec208cf7305685b59cd89aff152388bdfd0dbe
importance: 8
confidence: 0.9
---
# Summary

Triage process involves checking SAS address and enclosure slot, never on `sdX`.
    Stability checks require dmesg -T | grep -E "scsi target.*handle\\(0x|transport_port_remove|enclosure logical id" and mpt3sas_cm0.
    Protocol-layer open failure indicates controller cannot reach target, while device block/device unblock indicate reset loop.
    Read capacity failed when link came up to try a command and then died mid-protocol.

## Facts
- Reassigned device letters and SCSI target IDs every boot
- Flapping drive re-discovered under different target within the same boot with stable identity "sas_address" + enclosure slot

## Concepts
- SAS HBA + expander backplanes
- Storage hosts (ZFS on every pool)

## Files
- `references/sas-disk-triage.md`

_Importance: 8 · Confidence: 0.9_
