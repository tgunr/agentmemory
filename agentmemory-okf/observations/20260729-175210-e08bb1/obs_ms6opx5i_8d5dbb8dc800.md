---
type: file_edit
title: Error with git command
description: No matching file found for commit
resource: agentmemory://observation/obs_ms6opx5i_8d5dbb8dc800
tags: ["Git command errors", "file_edit"]
timestamp: 2026-07-29T22:57:12.722523+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 6
confidence: 1
---
# Summary

The git command failed because it couldn't find a matching file for the specified commit.

## Facts
- <key>Pipeline Step</key>
      <value>cd ~/.hermes/hermes-agent/apps/desktop && git show 25c7900fb:src/app/desktop-controller-utils.ts 2>&1</value>
- <key>Error Message</key>
      <value>fatal: path 'apps/desktop/src/app/desktop-controller-utils.ts' exists, but not 'src/app/desktop-controller-utils.ts'</value>
- <key>System Output</key>
      <value>
        fatal: path 'apps/desktop/src/app/desktop-controller-utils.ts' exists, but not 'src/app/desktop-controller-utils.ts'
        hint: Did you mean '25c7900fb.apps/desktop/src/app-desktop-controller-utils.ts' aka '25c7900fb.:./src/app/desktop_controller_utils.ts'
      </value>

## Concepts
- Git command errors

_Importance: 6 · Confidence: 1_
