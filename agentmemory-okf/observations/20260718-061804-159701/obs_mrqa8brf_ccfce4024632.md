---
type: CommandRun
title: Verify agentmemory_observer fallback across Hermes profiles
description: Audit script checks all plugin copies for .env secret fallback and runs live API smoke test
resource: agentmemory://observation/obs_mrqa8brf_ccfce4024632
tags: ["plugin deployment verification", "secret fallback mechanism", ".env file parsing", "Hermes profiles", "API smoke testing", "orphan file detection", "commandrun"]
timestamp: 2026-07-18T11:27:18.407736+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 6
confidence: 1
---
# Summary

Executed verification script to confirm all Hermes plugin directories contain the updated agentmemory_observer with .env secret fallback. All 10 profile-based copies pass validation, but one orphan flat file at ~/.hermes/plugins/agentmemory_observer.py lacks the fallback mechanism. Live API test confirms .env fallback authentication works (HTTP 200), though observe endpoint returned HTTP 400.

## Facts
- 10/10 directory-based agentmemory_observer/__init__.py copies have _get_secret fallback (fn=True, parse=True, pathlib=True)
- Orphan flat file ~/.hermes/plugins/agentmemory_observer.py lacks fallback (fn=False, parse=False, pathlib=False), mtime=1781665548
- Live smoke test: secret resolved from ~/.agentmemory/.env (len=64)
- API endpoint http://127.0.0.1:3111 returned HTTP 200 for /agentmemory/session/start
- API endpoint returned HTTP 400 Bad Request for /agentmemory/observe
- Profiles verified: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop

## Concepts
- plugin deployment verification
- secret fallback mechanism
- .env file parsing
- Hermes profiles
- API smoke testing
- orphan file detection

## Files
- `~/.hermes/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/ai/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/cc/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/default/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/develop/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/ollama/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/personal/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/pveroot/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/ranch/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/profiles/shop/plugins/agentmemory_observer/__init__.py`
- `~/.hermes/plugins/agentmemory_observer.py`
- `~/.agentmemory/.env`

_Importance: 6 · Confidence: 1_
