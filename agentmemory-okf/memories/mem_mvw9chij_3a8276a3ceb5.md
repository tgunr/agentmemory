---
type: Fact
title: Hermes auxiliary compression model on this host: kilo-auto/small (kilocode) pinn
description: Hermes auxiliary compression model on this host: kilo-auto/small (kilocode) pinned to context_length 262144 (its true catalog window; the old 128000 pin was stale and forced a 128K compaction trigger 
resource: agentmemory://memory/mem_mvw9chij_3a8276a3ceb5
tags: ["compression", "aux model", "kilocode", "context window", "gemini-3.6-flash", "kilo-auto/small", "threshold clamp"]
timestamp: 2026-10-31T10:27:58.569Z
source: agentmemory
strength: 7
---
# Content

Hermes auxiliary compression model on this host: kilo-auto/small (kilocode) pinned to context_length 262144 (its true catalog window; the old 128000 pin was stale and forced a 128K compaction trigger vs the 500K the main model kilo-auto/efficient allows). When you actually need a compaction trigger above ~262K, the escalation path on kilocode is google/gemini-3.6-flash (provider profile default_aux_model): catalog window 1,048,576, pricing $0.375/M in, $1.875/M out, $0.0375/M cache-read. Its output is 4.7x and input 7.5x kilo-auto/small ($0.05/M in, $0.40/M out) => ~5.0x compression spend for the same token volume (~$0.11 vs $0.02 per compressed session on measured history). The aux window only needs to be >= the compaction trigger (main window x compression.threshold); if it is smaller Hermes silently lowers the trigger to the aux window (_lower_threshold_to_aux_context in agent/conversation_compression.py). Raise auxiliary.compression.context_length or the model, never lower compression.threshold to force it.

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/hermes-agent/agent/conversation_compression.py`
- `~/.hermes/hermes-agent/agent/context_compressor.py`
