---
type: CommandRun
title: Check Anker Net versions on multiple hosts
description: Run bash command to fetch net versions and retrieve download links for various hosts.
resource: agentmemory://observation/obs_mrv3laih_5346051c667c
tags: ["curl requests with authentication", "bash scripting with file inputs", "commandrun"]
timestamp: 2026-07-21T20:20:16.882519+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 0.9
---
# Summary

The agent successfully ran a bash command to fetch Anker Net versions on multiple hosts, retrieving download links for each host. This is an important operation as it ensures the correct version of Anker Net is used across different environments.

## Facts
- The command ran successfully with exit code 0, indicating no errors.
- The curl -X POST requests were made to three different host URLs: make-app.ankermake.com, make-app-eu.ankermake.com, and make-app-us-qa.eufylife.com.

## Concepts
- curl requests with authentication
- bash scripting with file inputs

## Files
- `/home/user/tools/ankermake.sh`

_Importance: 6 · Confidence: 0.9_
