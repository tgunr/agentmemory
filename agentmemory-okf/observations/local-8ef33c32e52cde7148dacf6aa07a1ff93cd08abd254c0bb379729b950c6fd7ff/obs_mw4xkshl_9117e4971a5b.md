---
type: file_write
title: Podman overlay graphdriver switch
description: Migrate to overlay graphdriver on a fresh dataset
resource: agentmemory://observation/obs_mw4xkshl_9117e4971a5b
tags: ["Podman overlay graphdriver migration", "file_write"]
timestamp: 2026-11-06T12:08:26.935180+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 5
confidence: 1
---
# Summary

The script upgrades the podman driver to overlay graphdriver on a fresh dataset, keeping all data intact, while preserving the old tree as a fallback. It creates a new dataset, points storage.conf at the new graphroot, verifies the driver, and performs smoke tests. Finally, it restores named volumes, lists volumes in the new store, and provides the updated script path.

## Facts
- Script size: 2301 bytes
- Directories created: true
- Command verified: true
- Linter skipped: no linter for .sh files
- Resolved path: /private/tmp/podman-overlay-migrate.sh
- Files modified: <a href=\"file:/private/tmp/podman-overlay-migrate.sh\">/private/tmp/podman-overlay-migrate.sh</a>

## Concepts
- Podman overlay graphdriver migration

_Importance: 5 · Confidence: 1_
