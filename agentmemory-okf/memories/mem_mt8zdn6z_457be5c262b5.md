---
type: workflow
title: ACTION: Rename Hermes profile ollama -> local. WHY: optional cleanup; the profil
description: ACTION: Rename Hermes profile ollama -> local. WHY: optional cleanup; the profile no longer runs Ollama (serves local TurboQuant MLX on :8080/:8083). STEPS: 1) stop its gateway on mini.local: launchct
resource: agentmemory://memory/mem_mt8zdn6z_457be5c262b5
tags: ["hermes", "profile-rename", "ollama", "local", "gateway", "launchagent", "tq_switch"]
timestamp: 2026-08-25T18:10:50.300Z
source: agentmemory
strength: 7
---
# Content

ACTION: Rename Hermes profile ollama -> local. WHY: optional cleanup; the profile no longer runs Ollama (serves local TurboQuant MLX on :8080/:8083). STEPS: 1) stop its gateway on mini.local: launchctl unload ~/Library/LaunchAgents/ai.hermes.gateway-ollama.plist (use real plist path; unload can I/O-error over SSH). Confirm no hermes gateway process holds hermes_home=.../profiles/ollama. 2) mv ~/.hermes/profiles/ollama ~/.hermes/profiles/local. 3) edit plist: update --profile, hermes_home, log paths ollama->local; optionally rename to ai.hermes.gateway-local.plist. 4) update hardcoded refs in ~/.hermes/scripts/unfinished_session_audit.py (SUBPROFILES), ~/.hermes/skills/configuration/hermes-config-layering/SKILL.md, memory note about gateway-ollama. 5) load renamed plist; verify gateway_state.json hermes_home=.../profiles/local and real :8080 generation works. CAUTION: do not rename while 14B serve wedged.

## Files
- `~/Library/LaunchAgents/ai.hermes.gateway-ollama.plist`
- `~/.hermes/scripts/unfinished_session_audit.py`
- `~/.hermes/skills/configuration/hermes-config-layering/SKILL.md`
