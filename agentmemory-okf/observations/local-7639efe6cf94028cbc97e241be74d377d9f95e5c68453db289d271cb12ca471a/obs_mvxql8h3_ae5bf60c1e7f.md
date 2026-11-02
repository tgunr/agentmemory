---
type: FileRead
title: tool_describe
description: 
resource: agentmemory://observation/obs_mvxql8h3_ae5bf60c1e7f
tags: ["tool description", "tool parameters", "fileread"]
timestamp: 2026-11-01T11:18:27.107566+00:00
source: agentmemory
session_id: local-7639efe6cf94028cbc97e241be74d377d9f95e5c68453db289d271cb12ca471a
importance: 6
confidence: 1
---
# Summary

The tool describe was called with one tool: desktop_project. It outputs a string describing the tool's description and parameters. The input to the tool is a JSON object containing the tools: desktop_project.

## Facts
- output:
- Input:
{
  "tools": {"desktop_project": {"description": "Create or switch desktop Projects (named workspaces). create: one and switch this chat into it — pass path to anchor it to a repo/folder (the chat's workspace moves there, the sidebar follows). switch: move this chat into an existing project by name/slug/id — the intentional way to move the session, not `cd`. list: all projects + which one this chat is in.", "parameters": {"type": "object", "properties": {"action": {"type": "string", "enum": ["create", "switch", "list"]}, "name": {"type": "string", "description": "create: human name. switch: name, slug, or id."}, "path": {"type": "string", "description": "create: repo/folder to anchor to."}}, "required": ["action"]}}}}
- Input:{"names": ["desktop_project"]}
- Timestamp: 2026-11-01T11:18:27.107566+00:00

## Concepts
- tool description
- tool parameters

_Importance: 6 · Confidence: 1_
