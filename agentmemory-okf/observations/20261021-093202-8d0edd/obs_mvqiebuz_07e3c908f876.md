---
type: file_edit
title: Nextcloud database maintenance
description: 
resource: agentmemory://observation/obs_mvqiebuz_07e3c908f876
tags: ["index maintenance", "Maintenance scripts", "file_edit"]
timestamp: 2026-10-27T09:54:44.744157+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

The tool calls skill_view to perform Nextcloud database maintenance. This includes deleting and maintaining large data sets. The command includes different steps, such as deleting orphaned rows, rebuilding tables, and removing broken properties.

    The expert uses the built-in tools to identify the issues, including a large number of blocked jobs due to a cron script causing issues. Another approach would focus on maintaining indexes, such as the <db>.oc_jobs table.

    If the issue is not resolved during a short downtime for a short maintenance window, then the task will be repeated after 1 minute. Otherwise, the script will use the "loop this in a script with a pause between batches" script.

    It will also continue to look at some very small issues of the process's transaction and its size, and use those to identify and fix issues.

## Facts
- Applies to large instances with runaway job queues and bloated lock tables.
- The tool performs diagnoses for before deleting anything and provides a list of indexes to maintain.

## Concepts
- index maintenance
- Maintenance scripts

## Files
- `references/db-maintenance.md`

_Importance: 8 · Confidence: 0.9_
