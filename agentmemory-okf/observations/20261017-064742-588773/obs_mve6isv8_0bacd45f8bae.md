---
type: file_edit
title: Syncoid logs processing
description: Incremental log processing for alpha sources
resource: agentmemory://observation/obs_mve6isv8_0bacd45f8bae
tags: ["zfs send", "file_edit"]
timestamp: 2026-10-18T18:49:03.897013+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 7
confidence: 1
---
# Summary

The tool executed a shell command to process syncoid logs in the alpha sources directory.
    During the execution, several errors occurred, including attempts to resume and receive a partially completed data transfer.

## Facts
- HOME environment variable not set
- The --exclude option is deprecated and should be replaced with --exclude-datasets
- Failed to resume send: 'alpha/sources@autosnap_2026-05-31_04:03:29_hourly'
- Failed to read from stream
- zfs send  -t 1-13778ffc36-108-789c636064000310a501c49c50360710a715e5e7a69766a630404144f2bba6dd121b172900d9ec48eaf293b252934b1818721ebe07abc3904f4b2b4e2d01c908393141e5d990e4932a4b528b817445cbabb72258f497e4435cb13176c211fbea4f960148f29c60f9bcc4dc540686c49c828c44fde2fcd2a2e4d46287c4d292fce2bcc48278230323335d43035d438b7803532b03032b4393f80ca0a29c4a06040000c3442f30 failed

## Concepts
- zfs send

## Files
- `/var/log/syncoid/alpha/sources.log`

_Importance: 7 · Confidence: 1_
