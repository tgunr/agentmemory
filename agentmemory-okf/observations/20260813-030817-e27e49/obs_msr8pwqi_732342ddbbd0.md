---
type: file_edit
title: Mappings of env keys in `docmost_db_1` container
description: A podman command extracts database environment variables
resource: agentmemory://observation/obs_msr8pwqi_732342ddbbd0
tags: ["PostgreSQL version", "Podman and Docker inspecting containers", "file_edit"]
timestamp: 2026-08-13T08:12:28.022897+00:00
source: agentmemory
session_id: 20260813_030817_e27e49
importance: 6
confidence: 0.9
---
# Summary

The tool inspected the output of a podman command that extracted specific environment variables for PostgreSQL in container `docmost_db`.

## Facts
- PostgreSQL version: PG_MAJOR = <redacted>, PG_VERSION = <redacted>
- Podman used to inspect `docmost_db_1`: podman inspect docmost_db_1 --format {{range .Config.Env}}{{println .}}{{end}}

## Concepts
- PostgreSQL version
- Podman and Docker inspecting containers

_Importance: 6 · Confidence: 0.9_
