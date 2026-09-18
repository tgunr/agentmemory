---
type: CommandRun
title: Diagnosed agentmemory_observer plugin consistency across profiles
description: Scan found 7 broken and 3 OK copies of the plugin
resource: agentmemory://observation/obs_mrq78suc_99fd383e558d
tags: ["plugin consistency scan", "profile-specific plugin drift", "secret loading pattern", "Hermes plugin management", "commandrun"]
timestamp: 2026-07-18T10:03:41.696836+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 5
confidence: 1
---
# Summary

A terminal scan was run across all copies of the agentmemory_observer plugin to detect an inconsistent secret-loading pattern.
    Seven profile-specific copies were flagged as broken because they still reference os.environ.get("AGENTMEMORY_SECRET") but no longer define the helper _get_secret.
    The result indicates a partial or incomplete update across the Hermes profile installations.

## Facts
- Scanned all agentmemory_observer/__init__.py files under /Users/davec/.hermes
- Broken files contain os.environ.get("AGENTMEMORY_SECRET") but lack def _get_secret
- OK copies: /Users/davec/.hermes/plugins/agentmemory_observer/__init__.py, /Users/davec/.hermes/profiles/default/plugins/agentmemory_observer/__init__.py, /Users/davec/.hermes/profiles/ai/plugins/agentmemory_observer/__init__.py
- Broken copies: personal, develop, ranch, shop, pveroot, cc, ollama profiles

## Concepts
- plugin consistency scan
- profile-specific plugin drift
- secret loading pattern
- Hermes plugin management

## Files
- `/Users/davec/.hermes/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/personal/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/develop/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/ranch/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/shop/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/pveroot/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/default/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/ai/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/cc/plugins/agentmemory_observer/__init__.py`
- `/Users/davec/.hermes/profiles/ollama/plugins/agentmemory_observer/__init__.py`

_Importance: 5 · Confidence: 1_
