---
type: file_edit
title: NPM installation and vulnerabilities found
description: Auditing and updating dependencies in the Eviction project
resource: agentmemory://observation/obs_muzv3lag_03401fcfd2e7
tags: ["NPM vulnerabilities", "NPM installation", "file_edit"]
timestamp: 2026-10-08T18:20:32.005823+00:00
source: agentmemory
session_id: 20261008_110608_ccc00a
importance: 6
confidence: 1
---
# Summary

The terminal tool was used to install Node.js version 20 or higher (or 22 or 24) and run the `npm installation` command with some warning about `EBADEngine`. Additionally, there were some vulnerabilities found and the output recommends using `npm audit` and `npm audit fix --force` to address them.

## Facts
- Output: npm warn EBADENGINE required: { node: '^20 || ^22 || ^24' },npm warn EBADENGINE current: { node: 'v26.7.0', npm: '11.19.0' }
- Output: 26 packages are looking for funding run `npm fund` for details
- Output: 3 high severity vulnerabilities

## Concepts
- NPM vulnerabilities
- NPM installation

## Files
- `/Users/davec/Downloads/Eviction`

_Importance: 6 · Confidence: 1_
