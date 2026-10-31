---
type: file_edit
title: syncoid-runner command line parsing
description: This command parses the command line arguments for a syncoid-runner
resource: agentmemory://observation/obs_mvtmfnzx_a37e3435058e
tags: ["file_edit"]
timestamp: 2026-10-29T14:11:04.119780+00:00
source: agentmemory
session_id: local-09876df4a88c5b9dfba8b1b47f3088057f950b91426018d01ae7dc74f61ede38
importance: 6
confidence: 0.75
---
# Summary

The syncoid-runner command is executed with the following command line arguments:
 
 The `--no-privilege-elevation` flag is used.
 
 Options for the `destination` are set with various values, including `/root/syncoid/syncoid.conf`.
 
 The `destinations` variable is populated with values for each destination. A `template_` value is used to define a template for the `base_dataset`.
 
 Command building logic is executed on lines 375-440 of the syncoid-runner program.
 
 The `generate_commands` method is called to generate syncoid commands for all datasets.

## Facts
- Running the syncoid-runner command
- The command is defined as follows:

## Files
- `/usr/local/bin/syncoid-runner`

_Importance: 6 · Confidence: 0.75_
