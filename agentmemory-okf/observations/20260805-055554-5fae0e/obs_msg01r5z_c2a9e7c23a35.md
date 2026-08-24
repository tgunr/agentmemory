---
type: file_edit
title: Skills: reverse proxy debugging
description: To perform subdomain/reverse-proxy outages (503/502) diagnosis, diagnose frontend answers but backend is down.
resource: agentmemory://observation/obs_msg01r5z_c2a9e7c23a35
tags: ["React hooks", "Apache vhosts", "Hermes terminal guard", "file_edit"]
timestamp: 2026-08-05T11:24:16.196300+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 8
confidence: 0.9
---
# Summary

A tool was called 'skill_manage' with action type 'create', category 'devops', to create a new skill. The created skill name is 'reverse proxy-debug', with description for diagnosing subdomain/reverse-proxy outages, including diagnosis steps using DNS/proxy/router and local/through-proxy health check.

## Facts
- Diagnose public subdomains almost always resolve to frontend host via DNS/proxy/router
- This skill provides steps to verify each hop in the chain - local health through-proxy public DNS

## Concepts
- React hooks
- Apache vhosts
- Hermes terminal guard

## Files
- `/Users/davec/.hermes/skills/devops/reverse-proxy-debug/SKILL.md`
- `/Users/davec/.hermes/reference/pve-apache-vhosts.md`

_Importance: 8 · Confidence: 0.9_
