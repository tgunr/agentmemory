---
type: file_edit
title: Patch tool update
description: Update of `providers.md`
resource: agentmemory://observation/obs_mvw8vpvv_3f94c153cb21
tags: ["Momentary bug in tool", "file_edit"]
timestamp: 2026-10-31T10:14:56.968965+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 8
confidence: 1
---
# Summary

The patch tool updated the `providers.md` file by changing the value of `model.ollama_num_ctx` from `only automatic detection behind it uses Ollama's /api/show` to include the value of `model.ollama_num_ctx` on every local endpoint.

## Facts
- <key>hook</key>
      <value>post_tool_call</value>
- <key>tool</key>
      <value>patch</value>
- <key>files_modified</key>
      <value>/Users/davec/.hermes/hermes-agent/website/docs/integrations/providers.md</value>
- <key>original_string</key>
      <value>
        "`model.ollama_num_ctx` is honoured on every local endpoint; only the automatic detection behind it uses Ollama's `/api/show`."
      </value>
- <key>new_string</key>
      <value>
        "`model.ollama_num_ctx` is honoured on every local endpoint; only the automatic detection behind it uses Ollama's `/api/show`. On a hosted route (`https://…`) the key is ignored — `num_ctx` is a local-server knob, so a value left over from a local model never clamps a remote provider's request or its compaction trigger."
      </value>

## Concepts
- Momentary bug in tool

_Importance: 8 · Confidence: 1_
