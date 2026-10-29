---
type: file_edit
title: DVD Rip Script
description: Auto-rips DVDs for Plex Media Server
resource: agentmemory://observation/obs_mvt3xvle_0b7bb337fab3
tags: ["HandBrakeCLI", "dvdbackup", "file_edit"]
timestamp: 2026-10-29T05:33:21.069970+00:00
source: agentmemory
session_id: 20261029_000838_cbf46d
importance: 8
confidence: 0.9
---
# Summary

The DVD rip script is used to auto-rip DVDs for Plex Media Server. The script uses HandBrakeCLI for DVD ripping and dvdbackup for DVD backup. It formats the DVD and saves the rip output to the Plex directory.

## Facts
- Uses HandBrakeCLI for DVD ripping
- Uses dvdbackup for DVD backup

## Concepts
- HandBrakeCLI
- dvdbackup

## Files
- `/alpha/media/newmovie/dvd-monitor.sh`
- `/alpha/media/newmovie/dvd-monitor.state`
- `/alpha/media/newmovie/dvd-monitor.log`
- `/alpha/media/newmovie/dvd-monitor.lock`
- `/var/log/dvd-monitor.log`

_Importance: 8 · Confidence: 0.9_
