---
type: CommandRun
title: Git Mirror Tool
description: Mirror Git repositories from Bitbucket to GitHub
resource: agentmemory://observation/obs_mwb0nliq_0257a406cbb1
tags: ["git mirroring", "commandrun"]
timestamp: 2026-11-10T18:21:13.773900+00:00
source: agentmemory
session_id: local-e1125060688edc01601a1c41bbcd4927aa4a0634cda8b94c012c878353651b60
importance: 5
confidence: 0.9
---
# Summary

Executing a script to mirror Git repositories from Bitbucket to GitHub resulted in successfully pushing 85 branches for one mirror and 1 branch for another, indicating a routine read for the tool execution.

## Facts
- Command executed: cd /tmp && for pair in &quot;atom atom-bb&quot; &quot;loginatlaunch loginatlaunch&quot; do set -- $pair; slug=$1; name=$2; d=/tmp/ghmirror/gh_$name; [ -d \&quot;$d\&quot; ] || git clone --mirror -q &quot;https://bitbucket.org/tgunr/$slug.git&quot; \&quot;$d\&quot; ; gh repo view tgunr/$name >/dev/null 2>&1 || gh repo create tgunr/$name --public --description &quot;$name — mirrored from bitbucket.org/tgunr/$slug&quot; >/dev/null; git -C \&quot;$d\&quot; push -q --mirror git@github.com:tgunr/$name.git 2>&1 | grep -E &quot;error|exceeds&quot; | head -2; echo &quot;$slug -> $name: $(git -C $d for-each-ref refs/heads | wc -l) branches pushed&quot; ; done
- Output result: atom -> atom-bb: 85 branches pushed\nloginatlaunch -> loginatlaunch: 1 branches pushed

## Concepts
- git mirroring

## Files
- `/private/tmp`

_Importance: 5 · Confidence: 0.9_
