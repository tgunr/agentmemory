---
type: CommandRun
title: Fixed Hack to Load WikiText-2 Parquet
description: The datasets library and huggingface_hub had a breaking change.
resource: agentmemory://observation/obs_msurwvan_40778654c795
tags: ["Python patches for old libraries", "commandrun"]
timestamp: 2026-08-15T19:33:03.947587+00:00
source: agentmemory
session_id: 20260815_120838_c6e364
importance: 5
confidence: 0.9
---
# Summary

Fixed hack using `hf_hub_download` to bypass breaking change.

## Facts
- TurboQuant quantizers use wikiText-2 for perplexity math.
- `_load_wikitext2` in `turboquant_mlx.evaluate` relies on datasets lib 3.6.0, broken at 1.27.0.

## Concepts
- Python patches for old libraries

## Files
- `/Users/davec/MCP_Local/turboquant_mlx/evaluate.py`

_Importance: 5 · Confidence: 0.9_
