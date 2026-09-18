---
type: file_write
title: Project Relocation with Divergent Trees — worked example.
description: Relocated project with divergent trees using git.
resource: agentmemory://observation/obs_mskskqsx_86567d993e66
tags: ["git relocation", "divergent code maintenance", "file_write"]
timestamp: 2026-08-08T19:53:56.114557+00:00
source: agentmemory
session_id: 20260808_125857_de0ebf
importance: 8
confidence: 0.9
---
# Summary

During a git relocation with divergent trees, the project was moved from '/Volumes/projects/uv/Camera Grid' to '~/Camera Grid'. The process involved: copying files, checking for divergence, creating a backup, moving repo metadata over, and restoring untracked paths. An example diverged file 'perforated_mask_app.py' demonstrated two trees with different contents.

## Facts
- The NEW tree had 'build_app.sh' + portable 'CameraGrid.spec', while the OLD tree had 'lens_optics.py' + 'mask_calculator.py' (untracked, on the feature branch).

## Concepts
- git relocation
- divergent code maintenance

_Importance: 8 · Confidence: 0.9_
