---
type: file_write
title: Skin the old project systems
description: Add a parent_id column to projects.db schema and update API responses
resource: agentmemory://observation/obs_ms61tlnt_a31ddd05f624
tags: ["Mercure (GraphQL & Pub/Sub)", "Skipper (streaming & caching)", "file_write"]
timestamp: 2026-07-29T12:16:13.279724+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 7
confidence: 0.9
---
# Summary

Update `hermes_cli/projects_db.py` to include a `parent_id` column and update API responses to pass `parent_id` to the React frontend, which will enable nested tree representation in the Desktop sidebar.

## Facts
- Two independent project systems in Hermes: CLI registry (projects.yaml) vs Desktop first-class projects (projects.db)
- The old system doesn’t support hierarchical projects because project_tree.py only looks at folder containment, not parent relationships

## Concepts
- Mercure (GraphQL & Pub/Sub)
- Skipper (streaming & caching)

_Importance: 7 · Confidence: 0.9_
