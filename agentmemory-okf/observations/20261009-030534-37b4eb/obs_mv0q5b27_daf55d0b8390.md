---
type: file_edit
title: Hermes Plugin Management
description: Enable/disable Hermes plugins
resource: agentmemory://observation/obs_mv0q5b27_daf55d0b8390
tags: ["plugin registration resolution", "plugin doctor path-resolution bug fixes", "file_edit"]
timestamp: 2026-10-09T08:49:40.155536+00:00
source: agentmemory
session_id: 20261009_030534_37b4eb
importance: 6
confidence: 0.9
---
# Summary

The observation contains information about the usage of `hermes plugins doctor` and `hermes plugins enable`/`disable` commands as part of Hermes plugin management. It may indicate a new plugin is misidentified, and verifying with `hermes plugins list` and manually enabling/disabling using `hermes plugins enable`/`disable` commands is necessary.

## Facts
- a Hermes plugin shows as `disabled` in `hermes plugins list`, a tool not backed by a plugin isn't available, or `hermes plugins doctor <plugin>` reports

## Concepts
- plugin registration resolution
- plugin doctor path-resolution bug fixes

## Files
- `/Users/davec/.hermes/skills/devops/hermes-plugin-management/SKILL.md`
- `/home/davec/plugins/browser/browser-use`

_Importance: 6 · Confidence: 0.9_
