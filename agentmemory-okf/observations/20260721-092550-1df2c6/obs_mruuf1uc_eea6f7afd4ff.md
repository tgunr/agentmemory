---
type: decision
title: Patched SKILL.md in skill 'hermes-desktop'
description: Analyzed tool usage logged
resource: agentmemory://observation/obs_mruuf1uc_eea6f7afd4ff
tags: ["electron-builder", "decision"]
timestamp: 2026-07-21T16:03:29.168444+00:00
source: agentmemory
session_id: 20260721_092550_1df2c6
importance: 5
confidence: 1
---
# Summary

The skill_manage tool performed a patch on the hermes-desktop skill, updating the Skill.md file with a new string. The change improves the user experience by providing more accurate guidance for debugging desktop UI symptoms.

## Facts
- Last run tool: skill_manage, action: patch, name: hermes-desktop, old_string: "## When to load\n- Debugging a desktop UI symptom (duplicate sidebar entries, wrong counts,\n  stale project tree, zoom not persisting).\n- Building or shipping a renderer fix without a full `electron-builder` run.\n- Need to know what data the running app actually receives from the gateway."
- New string: "## When to load\n- Debugging a desktop UI symptom (duplicate sidebar entries, wrong counts,\n  stale project tree, zoom not persisting, active-session indicator showing on\n  more rows than expected).\n- A user describes a UI anomaly but does not name the app. Confirm the surface first: **Hermes Desktop** sidebar/renderer (`apps/desktop/...`), **Hermes WebUI** (`static/*.js` + `static/style.css`), or **AgentMemory viewer** (`http://localhost:3113`). Asking \"is this in Hermes Desktop / WebUI /\n  AgentMemory viewer?\" avoids wasted fixes against the wrong repo.\n- Building or shipping a renderer fix without a full `electron-builder` run.\n- Need to know what data the running app actually receives from the gateway."
- Change: 1 replacement

## Concepts
- electron-builder

_Importance: 5 · Confidence: 1_
