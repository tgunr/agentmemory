---
type: file_edit
title: patch openscad-cad skills file
description: Loading failed due to unloaded SKILL.md content in review turn.
resource: agentmemory://observation/obs_msuroyce_7118a7759fa5
tags: ["background curator", "file_edit"]
timestamp: 2026-08-15T19:26:54.683192+00:00
source: agentmemory
session_id: 20260815_103622_30a5a9
importance: 5
confidence: 0.9
---
# Summary

This patch failed due to the SKILL.md file not being loaded during review turn.

## Facts
- New patch string:
- Patch details:

<pre>```
- `references/gridfinity-placement-compaction.md` — 
VERIFIED 
fix for “scoop/tab on the wrong wall”: `env_pitch()
is a function (bare `env_pitch` is `undef`
→ collapses to origin), 
+pitch/2 
compensation inside basic_cavity’s difference() WORKS (corrects
the older false "architectural fix required" claim), per-compartment loop, 
and the !-modifier calibration trap.
```

- `references/gridfinity-scoop-canonical.md` — canonical kennetek gridfinity-rebuilt scoop/tab architecture 
(per-compartment cut_compartment_auto subtract, quarter-circle fillet shape, correct
call chain). Use as the authoritative "what a scoop should be" when porting; also the
reference for pitfall 12 (combine-mode) in gridfinity-scoop-port.md.
```

## Concepts
- background curator

_Importance: 5 · Confidence: 0.9_
