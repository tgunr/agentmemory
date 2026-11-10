---
type: FileRead
title: Download GitHub contents
description: Extract structure class from GitHub repository
resource: agentmemory://observation/obs_mw9h6fvp_04ca6d020049
tags: ["GitHub repository", "fileread"]
timestamp: 2026-11-09T16:28:14.433315+00:00
source: agentmemory
session_id: local-e3cbd7229303962af78cb914386621d02b7671f2fea2f0180697c2dcb4adfbcc
importance: 4
confidence: 0.9
---
# Summary

Executed a command to download contents from a GitHub repository and extracted the structure class from the downloaded data.

## Facts
- Command executed in the terminal: cd /tmp && curl -sL \"https://api.github.com/repos/factor/factor\" | head -c 400; echo; curl -sL \"https://api.github.com/repos/factor/factor/contents/basis/classes\" | head -c 400
- Output response from GitHub API: {{"id": 157985, "node_id": "MDEwOlJlcG9zaXRvcnkxNTc5ODU=", "name": "factor", "full_name": "factor/factor", "private": false, "owner": {"login": "factor", "id": 232051, "node_id": "MDEyOk9yZ2FuaXphdGlvbjIzMjA1MQ==", "avatar_url": "https://avatars.githubusercontent.com/u/232051?v=4", "gravatar_id": "", "url": "https://api.github.com/users/factor", "html_url": [["name": "struct", "path": "basis/classes/struct", "sha": "032c3a59d4934d430b6733da4266c259853d3a4a", "size": 0, "url": "https://api.github.com/repos/factor/factor/contents/basis/classes/struct?ref=master", "html_url": "https://github.com/factor/factor/tree/master/basis/classes/struct", "git_url": "https://api.github.com/repos/factor/factor/git/trees/032c3a59d4934d"}}}}

## Concepts
- GitHub repository

## Files
- `/tmp`

_Importance: 4 · Confidence: 0.9_
