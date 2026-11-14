---
type: FileRead
title: Retrieve project details from YAML profile
description: Fetch project information from default profile
resource: agentmemory://observation/obs_mwfdvvfz_37d5ca03b6a8
tags: ["YAML parsing", "fileread"]
timestamp: 2026-11-13T19:42:39.594027+00:00
source: agentmemory
session_id: local-e055b50b8fefc44196799d577b70813517e72a93d6f09b674597fdf0d3e07181
importance: 7
confidence: 1
---
# Summary

Retrieved project details from YAML profile using a custom Python script, sorted directory listings provided.

## Facts
- Command executed: python3 -c \"import yaml;d=yaml.safe_load(open('/Users/davec/.hermes/profiles/default/projects.yaml'));print([p['name'] for p in d['projects']][-2:], d['project_order'][-1])\"
- Output format: list and project information
- Sorted directory listings

## Concepts
- YAML parsing

_Importance: 7 · Confidence: 1_
