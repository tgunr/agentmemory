---
type: discovery
title: Explore iii memory engine compression and storage architecture
description: Searching dist bundle for store_method, redis, compression config, and registered functions
resource: agentmemory://observation/obs_mrtcnv8i_df8dd7fbbe81
tags: ["memory compression architecture", "file-based KV storage", "zero-LLM synthetic compression", "mem::compress function registry", "compressionModel configuration", "agent memory cost optimization", "discovery"]
timestamp: 2026-07-20T14:58:41.246994+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 6
confidence: 1
---
# Summary

Searched the agentmemory dist bundle to understand storage and compression architecture. Found that the iii engine is purely file-based with no redis support, compression is off by default (v0.8.8+) with a zero-LLM fallback path, and three core memory functions are registered (compress, index-persistence, consolidate). The compression model is user-configurable but can be expensive at $5+/day.

## Facts
- iii kv adapter only supports store_method: file_based (no redis)
- No redis references found anywhere in iii engine
- Compression model is configurable via compressionModel: provider.model
- Compression is OFF by default as of version 0.8.8
- When compression disabled, observations use synthetic zero-LLM compression path for recall/search
- Active compression can cost $5+/day; cheaper alternatives suggested: deepseek/deepseek-v4-pro
- Registered memory functions: mem::compress, mem::index-persistence, mem::consolidate
- compress function signature: compress(systemPrompt, userPrompt)

## Concepts
- memory compression architecture
- file-based KV storage
- zero-LLM synthetic compression
- mem::compress function registry
- compressionModel configuration
- agent memory cost optimization

## Files
- `/Volumes/AI/agentmemory/dist`

_Importance: 6 · Confidence: 1_
