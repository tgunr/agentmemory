---
type: file_edit
title: patch
description: {"mode":"replace","new_string":"# 3. commit + push only if something changed\ncd \"$OUT\"\nif [ -n \"$(git status --por…
resource: agentmemory://observation/obs_mrtfomsv_2114bcf4690c
tags: ["file_edit"]
timestamp: 2026-07-20T16:23:15.818695+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"mode":"replace","new_string":"# 3. commit + push only if something changed\ncd \"$OUT\"\nif [ -n \"$(git status --porcelain)\" ]; then\n  git add -A\n  git -c user.email=\"hermes@local\" -c user.name=\"Hermes\" commit -qm \"okf mirror: $(date -u +%Y-%m-%dT%H:%M:%SZ)\"\n  if git push -q 2>/dev/null; then\n    echo \"COMMITTED_AND_PUSHED\"\n  else\n    echo \"COMMITTED_LOCAL_ONLY\"\n  fi\nelse\n …

## Files
- `/Volumes/AI/Servers/agentmemory-kilo-hooks/okf_mirror.sh`

_Importance: 5 · Confidence: 0.3_
