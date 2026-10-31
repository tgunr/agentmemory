---
type: file_edit
title: SSH Login Tool Usage
description: Executed command on PVE local host
resource: agentmemory://observation/obs_mvudffsy_b6a9af6dcb40
tags: ["SSH", "PostgreSQL", "file_edit"]
timestamp: 2026-10-30T02:46:43.134582+00:00
source: agentmemory
session_id: 20261029_214447_b74594
importance: 8
confidence: 1
---
# Summary

The tool executed an SSH command with login functionality to connect to a PVE local host. The command was successful but had an error when connecting to the authentication API.

## Facts
- Tool: terminal
- Input command: ssh -o BatchMode=yes -o ConnectTimeout=8 root@pve.local 'echo ---LOGINTEST; curl -s -o /tmp/lr.json -w \"%{http_code}\\n\" -X POST http://localhost:4000/api/auth/login -H \"Content-Type: application/json\" -d \"{\\\"email\\\":\\\"nobody@example.com\\\",\\\"password\\\":\\\"x\\\"}\"; cat /tmp/lr.json; echo; echo ---USERS; podman exec docmost_db_1 psql -U docmost -d docmost -tAc \"select u.email, u.\\\"isActive\\\", w.name, w.hostname from users u join workspaces w on w.id=u.\\\"workspaceId\\\" order by u.\\\"createdAt\\\";\" 2>&1; echo ---ENVFULL; podman inspect docmost_docmost_1 --format \"{{range .Config.Env}}{{println .}}{{end}}\" | sort' 2>&1 | tail -40
- Output: {\"output\":\"---LOGINTEST\n401\n\":{\"message\":\"Email or password does not match\",\"error\":\"Unauthorized\",\"statusCode\":401}\n---USERS\nERROR:  column u.workspaceId does not exist\nLINE 1: ...w.hostname from users u join workspaces w on w.id=u.\"workspa...\n                                                             ^\nHINT:  Perhaps you meant to reference the column \"u.workspace_id\".\n---ENVFULL\n\nAPP_[REDACTED_SECRET]\ncontainer=podman\nDATABASE_URL=postgresql://docmost:***@db:5432/docmost\nHOME=/home/node\nHOSTNAME=733f4c2d0ab7\nNODE_VERSION=22.22.2\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\nREDIS_URL=redis://redis:6379\nTERM=xterm\nYARN_VERSION=1.22.22", "exit_code": 0, "error": null}

## Concepts
- SSH
- PostgreSQL

_Importance: 8 · Confidence: 1_
