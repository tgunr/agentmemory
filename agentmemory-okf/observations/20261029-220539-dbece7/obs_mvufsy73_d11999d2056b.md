---
type: CommandRun
title: Move redmine attachments off source tree onto a ZFS dataset
description: On pve.local (10.1.2.1), redmine-app bind-mounts /root/src/redmine-selfhost/redmine/files -> /usr/src/redmine/files, so uploaded attachments live inside the source tree on rpool instead of a data pool
resource: agentmemory://observation/obs_mvufsy73_d11999d2056b
tags: ["Sanoid/PBS coverage", "commandrun"]
timestamp: 2026-10-30T03:53:12.732965+00:00
source: agentmemory
session_id: 20261029_220539_dbece7
importance: 8
confidence: 1
---
# Summary

This action verifies that attachments/downloads still work after repointing the compose bind mount and restarting. Prior to this action, uploaded attachments would live on rpool instead of a data pool. This ensures sanoid/PBS coverage.

## Facts
- <key>action.createdAt</key>
      <value>2026-10-30T03:53:12.727Z</value>
- <key>action.createdBy</key>
      <value>unknown</value>
- <key>action.description</key>
      <value>On pve.local (10.1.2.1), redmine-app bind-mounts /root/src/redmine-selfhost/redmine/files -> /usr/src/redmine/files, so uploaded attachments live inside the source tree on rpool instead of a data pool. Create a dataset (e.g. alpha/data/redmine), move existing files, repoint the compose bind mount, restart, verify attachments/downloads still work, and confirm sanoid/PBS coverage.</value>
- <key>action.id</key>
      <value>act_mvufsy6v_e6f69aadf4d3</value>
- <key>action.priority</key>
      <value>4</value>
- <key>action.project</key>
      <value>/root/src</value>
- <key>action.sourceMemoryIds</key>
      <value></value>
- <key>action.sourceObservationIds</key>
      <value></value>
- <key>action.status</key>
      <value>pending</value>
- <key>action.tags</key>
      <value>pve,podman,zfs,backup,deferred</value>
- <key>action.title</key>
      <value>Move redmine attachments off source tree onto a ZFS dataset</value>
- <key>action.updatedAt</key>
      <value>2026-10-30T03:53:12.727Z</value>

## Concepts
- Sanoid/PBS coverage

_Importance: 8 · Confidence: 1_
