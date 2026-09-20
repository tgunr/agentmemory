---
type: Fact
title: Cross-machine Hermes slash-command sync (mini/pro/pve), built 2026-09-20. Source
description: Cross-machine Hermes slash-command sync (mini/pro/pve), built 2026-09-20. Source of truth: shared repo ~/sources/hermes-knowledge (= /alpha/sources/hermes-knowledge on pve, which owns the filesystem; 
resource: agentmemory://memory/mem_mu9i6ntd_0f4d8707da4a
tags: ["okf", "hermes", "manual"]
timestamp: 2026-09-20T07:36:59.405Z
source: agentmemory
strength: 7
---
# Content

Cross-machine Hermes slash-command sync (mini/pro/pve), built 2026-09-20. Source of truth: shared repo ~/sources/hermes-knowledge (= /alpha/sources/hermes-knowledge on pve, which owns the filesystem; Samba mount on mini/pro). config/quick-commands.yaml = 18 shared commands using portable ~/sources/hermes-knowledge paths; config/shared-commands.txt = the command set (read by sync-quick-commands.py + export whitelist). Hub flow: edit on mini -> /sync-to-external (whitelisted export + git commit; git push only works from pve). Consumer flow: /sync-external (ruamel round-trip merge into root config + profile propagation via scripts/sync-quick-commands.py). Skills shared via skills.external_dirs; /skill-to-external <name> now has update mode (replaces existing copy). pro/pve scripts must run with ~/.hermes/hermes-agent/venv/bin/python (system python lacks yaml/ruamel there). Desktop/TUI dispatch re-reads config per slash dispatch (no restart needed); messaging gateways cache config at boot -> restart needed after import: pro = launchctl kickstart -k gui/501/ai.hermes.gateway, pve = systemctl --user restart hermes-gateway. mini needs no restart. pro/pve have no profiles dir (root-only machines). Repo commits cc92ed9 + 4335796 pushed; vectric-cam + affinity-2 WIP left uncommitted in working tree.
