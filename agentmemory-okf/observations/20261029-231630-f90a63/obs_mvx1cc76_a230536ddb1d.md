---
type: file_edit
title: Output of hermes restart script
description: Restart pending details and UI preferences
resource: agentmemory://observation/obs_mvx1cc76_a230536ddb1d
tags: ["hermes restart script", "file_edit"]
timestamp: 2026-10-31T23:31:41.630245+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 7
confidence: 0.9
---
# Summary

The script restarted pending details and printed them along with UI preferences.
This is a routine step to maintain the Hermes desktop environment.

## Facts
- <human_readable>File path: ~/.hermes/. restarted_pending.json</human_readable>
      <binary_data>
        <string>
          --- restart_pending:
{
  "requested_at": 1793489226.439242, 
  "via_service": true, 
  "detached": false, 
  "delivered_targets": [[
  "worker:telegram", 
  "7451734548", 
  null]]
}
--- ui-preferences (statusbar keys):
values.hermes.desktop.sidebarRowMeta = "[\"preview\", \"updated\"]"
values.hermes.desktop.sidebarAgentsGrouped.allProfiles = "false"
values.hermes.desktop.sidebarShowArchived = "false"
values.hermes.desktop.sidebarSortKey = "updated"
values.hermes.desktop.sidebarGrouping = "date"
values.hermes.desktop.sidebarGrouping.allProfiles = "date"
values.hermes.desktop.sidebarCardRows = "false"
values.hermes.desktop.agentsGroupedByWorkspace = "false"
values.hermes.desktop.sidebarShowAllSessions = "false"
values.hermes.desktop.statusbarHidden.v2 = "[\"agents\", \"cron\", \"session-timer\", \"system-resources\", \"terminal\", \"tokens-per-second\", \"webhooks\")"
top keys: ['version', 'generation', 'revision', 'values']

        </string>
      </binary_data>

## Concepts
- hermes restart script

## Files
- `~/.hermes/.restart_pending.json`

_Importance: 7 · Confidence: 0.9_
