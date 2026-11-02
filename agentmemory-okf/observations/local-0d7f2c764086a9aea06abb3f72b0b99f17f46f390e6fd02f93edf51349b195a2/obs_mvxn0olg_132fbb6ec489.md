---
type: file_write
title: Retrieve Client Metadata
description: Curl command to fetch client metadata
resource: agentmemory://observation/obs_mvxn0olg_132fbb6ec489
tags: ["API client metadata", "file_write"]
timestamp: 2026-11-01T09:38:29.376396+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 8
confidence: 1
---
# Summary

The tool ran the curl command to retrieve client metadata from a file. The operation was successful and the metadata was received.

## Facts
- Command executed: curl -s -m 15 -w '\\n[%{http_code}]\\n' https://nousresearch.github.io/hermes-agent/docs/oauth/client-metadata.json
- Client metadata retrieved from https://nousresearch.github.io/hermes-agent/docs/oauth/client-metadata.json
- HTTP response code: 200
- exit_code: 0 (no errors)

## Concepts
- API client metadata

## Files
- `https://nousresearch.github.io/hermes-agent/docs/oauth/client-metadata.json`

_Importance: 8 · Confidence: 1_
