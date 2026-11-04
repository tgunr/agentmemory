---
type: file_edit
title: Extracting subaccounts from VoIP.ms API
description: Using curl and Python to fetch account information
resource: agentmemory://observation/obs_mw0mjb00_767fb3f81a0a
tags: ["Python scripts", "CURL command line", "VoIP.ms API", "file_edit"]
timestamp: 2026-11-03T11:48:17.131201+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 8
confidence: 1
---
# Summary

The code extracts subaccount information from the VoIP.ms API and prints the count and individual account details.

## Facts
- Tool: terminal
- Command: U='davec@polymicro.net'; P='mowses-deqcep-9teGni'; curl -s -m20 \"https://voip.ms/api/v1/rest.php?api_username=$U&api_password=$P&method=getSubAccounts&format=json\"
- Command: | python3 -c \"\nimport sys,json;d=json.load(sys.stdin)\nprint('count',len(d.get('accounts',[])))\nfor a in d.get('accounts',[]): print(a['id'],a['account'],a['username'],'pw=',a['password'],'desc=',a['description'])\"

## Concepts
- Python scripts
- CURL command line
- VoIP.ms API

## Files
- `/dev/null`

_Importance: 8 · Confidence: 1_
