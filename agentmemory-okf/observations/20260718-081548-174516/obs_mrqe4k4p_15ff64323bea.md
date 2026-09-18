---
type: FileRead
title: Read Eagle Plaque project context
description: Production details, source-of-truth files, and reorganized repository map
resource: agentmemory://observation/obs_mrqe4k4p_15ff64323bea
tags: ["CNC plaque production", "UV printing", "Aspire CAM", "source-of-truth assets", "repository reorganization", "batch manufacturing", "fileread"]
timestamp: 2026-07-18T13:16:21.093194+00:00
source: agentmemory
session_id: 20260718_081548_174516
importance: 3
confidence: 1
---
# Summary

The project context documents an active batch-production order and identifies the locked production inputs for CNC machining and UV printing. It also warns that the post-commit repository reorganization remains uncommitted, so current git deletions and untracked files represent moves rather than intentional content loss.

## Facts
- The project produces 15 commemorative USPIS Houston Division plaques at $205 each, totaling $3,075.
- Plaques are UV-printed hard maple panels with CNC-chamfered edges and an epoxy flood coat; artwork is printed rather than carved.
- `USPIS.crv3d` is the current Aspire CAM file using a 60° V-bit edge chamfer; `USPIS UV.crv3d` is superseded and used carved lettering.
- `USPIS Trans.png` is the production print image used by Eufy Make Studio.
- `designs/text.text` contains canonical plaque copy, while `designs/16X20/` contains final composite artwork.
- The repository has one “Epoch” commit, and a later uncommitted folder reorganization causes many deletions and untracked files in git status.
- `Aspire/`, `Mouldings/`, and root `USPSI Design.png` contain superseded or legacy assets.
- Business documents were moved into `quote/`; `Final/` became `designs/16X20/`, and root `text.text` became `designs/text.text`.

## Concepts
- CNC plaque production
- UV printing
- Aspire CAM
- source-of-truth assets
- repository reorganization
- batch manufacturing

## Files
- `/Volumes/projects/CNC/Eagle Plaque/PROJECT.md`
- `USPIS.crv3d`
- `USPIS UV.crv3d`
- `USPIS Trans.png`
- `designs/text.text`
- `designs/16X20/`
- `Aspire/`
- `Images/`
- `USPIS Logo/`
- `Mouldings/`
- `quote/`
- `USPSI Design.png`

_Importance: 3 · Confidence: 1_
