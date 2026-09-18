---
type: file_edit
title: hermes-agent web package.json inspection
description: This is where we verify the name of the 'web' subpackage in package.json
resource: agentmemory://observation/obs_msf1j69n_2db4407071ec
tags: ["package.json structure", "file_edit"]
timestamp: 2026-08-04T19:18:02.359623+00:00
source: agentmemory
session_id: 20260804_141612_969e2e
importance: 7
confidence: 0.9
---
# Summary

While inspecting hermes-agent/web and ~/(Local)hermes-webui/, we compared top-level contents using the diff command

## Facts
- Running `sed -n '1,40p' ~/.hermes/hermes-agent/web/package.json` shows module version details
- Running `sed -n '1,40p' ~/hermes-webui/package.json` shows devtool module metadata

## Concepts
- package.json structure

## Files
- `~/.hermes/hermes-agent/.gitmodules`
- `~/hermes-webui/package.json`
- `~/static/*.js`

_Importance: 7 · Confidence: 0.9_
