---
type: FileRead
title: Read Hermes config.yaml (TTS, STT, Voice settings)
description: Lines 420-454 of 879-line YAML configuration file
resource: agentmemory://observation/obs_mrqcg8wn_99e635c31d53
tags: ["YAML configuration", "Text-to-Speech (TTS)", "Speech-to-Text (STT)", "Voice recording settings", "Hermes agent config", "fileread"]
timestamp: 2026-07-18T12:29:27.187205+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Read a section of the Hermes configuration file detailing audio and voice interaction settings. The config outlines TTS engines, STT providers, voice recording shortcuts, and parameters for simulating human delays.

## Facts
- File path: /Users/davec/.hermes/config.yaml (879 total lines, 21309 bytes)
- TTS providers: neutts (neuphonic/neutts-air-q4-gguf on cpu) and piper (en_US-lessac-medium with gateway)
- STT is disabled; configured for openai (whisper-1), local (base), mistral (mistral-nemo), elevenlabs (scribe_v2)
- Voice settings: record_key=ctrl+b, max_recording_seconds=120, auto_tts=false, silence_threshold=200, silence_duration=3
- Human delay simulation is off (min_ms=800, max_ms=2500)

## Concepts
- YAML configuration
- Text-to-Speech (TTS)
- Speech-to-Text (STT)
- Voice recording settings
- Hermes agent config

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 3 · Confidence: 1_
