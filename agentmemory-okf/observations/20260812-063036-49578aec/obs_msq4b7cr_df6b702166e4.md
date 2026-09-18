---
type: file_edit
title: patched skill 'parked-session-behavior' failed
description: background curator patch refused due to unloaded SKILL.md content
resource: agentmemory://observation/obs_msq4b7cr_df6b702166e4
tags: ["file_edit"]
timestamp: 2026-08-12T13:21:17.303300+00:00
source: agentmemory
session_id: 20260812_063036_49578aec
importance: 5
confidence: 0.85
---
# Summary

The background curator patch for skill 'parked-session-behavior' was refused due to unloaded SKILL.md content. A successful update calls should use tool skill_view(name) before retrying.

## Facts
- Error message: "Refusing background curator patch for skill 'parked-session-behavior': the current SKILL.md content has not been loaded in this review turn. Call skill_view(name) for SKILL.md, or skill_view(name, file_path=...) for a supporting file, then retry the write using the content just returned."
- old string: "- Interruption markers can repeat or NEST within a single turn (e.g. several\n  \"[This response was interrupted by a user correction.]\" blocks, or one\n  wrapped inside another \"correction\"). Each copy is still a non-instruction\n  artifact. Count them as zero tasks."
- new string: "- Interruption markers can repeat or NEST within a single turn (e.g. several\n  \"[This response was interrupted by a user correction.]\" blocks, or one\n  wrapped inside another \"correction\"). Each copy is still a non-instruction\n  artifact. Count them as zero tasks.\n- Markers can FRAGMENT and self-replicate across turns: a turn may arrive as a\n  bare token like `correction.]` or a run may stack HUNDREDS of identical\n  \"[This response was interrupted by a user correction.]\" blocks. This is still\n  zero tasks — do NOT try to \"catch up,\" summarize the stack, or \"process\" the\n  backlog. Hold the park for the entire run; the marker count has no meaning.\n- DO NOT echo the scaffolding token back into your acknowledgment. Mirroring\n  the fragment (e.g. replying \"Parked. Still 'correction.]' scaffolding\") makes\n  your turn look like part of the loop and compounds the noise. Keep the parked\n  line clean, self-contained, and free of the marker's literal text — vary the\n  wording, never the artifact."

_Importance: 5 · Confidence: 0.85_
