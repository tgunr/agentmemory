---
type: file_edit
title: Hermes config set profile targeting?
description: No output from --help
resource: agentmemory://observation/obs_msaxre0i_4aec107f277c
tags: ["profile management", "file_edit"]
timestamp: 2026-08-01T22:21:22.444630+00:00
source: agentmemory
session_id: 20260801_110155_a90f10
importance: 4
confidence: 0.9
---
# Summary

The user ran `hermes config set profile targeting?` to check for available profile settings. The output showed a list of supported profiles and their descriptions.

## Facts
- Command issued: echo "=== hermes config set profile targeting? ==="; ~/.local/bin/hermes config set --help 2>&1 | grep -iE 'profile|p ';
- Profile setting output: {chat,model,moa,fallback,secrets,egress,migrate,gateway,proxy,lsp,setup,whatsapp,whatsapp-cloud,slack,send,login,logout,auth,status,cron,sync,webhook,portal,kanban,project,hooks,doctor,security,approvals,dump,debug,backup,checkpoints,import,import-agent,config,skin,console,pairing,skills,bundles,plugins,curator,pets,journey,learning,memory-graph,memory,tools,computer-use,mcp,sessions,insights,monitoring,claw,version,update,uninstall,acp,profile,completion,dashboard,serve,desktop,gui,logs,prompt-size}

## Concepts
- profile management

_Importance: 4 · Confidence: 0.9_
