---
type: Fact
title: # Ollama Models for TTS and STT

source: abacus
session_id: 40e9b0e28
resource: 
description: # Ollama Models for TTS and STT

source: abacus
session_id: 40e9b0e28
resource: abacus://conversation/40e9b0e28

# Conversation

- **Session ID:** `40e9b0e28`
- **Source:** abacus.ai
- **Project:** AI
resource: agentmemory://memory/mem_mti8rqzg_5b60b8f39238
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/40e9b0e28"]
timestamp: 2026-09-01T05:43:40.492Z
source: agentmemory
strength: 7
---
# Content

# Ollama Models for TTS and STT

source: abacus
session_id: 40e9b0e28
resource: abacus://conversation/40e9b0e28

# Conversation

- **Session ID:** `40e9b0e28`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-12-30T13:44:02+00:00
- **Messages:** 2

---

### 👤 User

Which ollama models are suitable for text to speech and speech to text

---

### 🤖 Assistant

Here’s how things look today with Ollama and audio:

### 1. Speech‑to‑Text (STT) models on Ollama

These are the ones that are actually suitable for **speech → text** inside Ollama:

1. **Whisper variants (ASR)**
   - Example: **`dimavz/whisper-tiny`** – a lightweight Whisper model for fast transcription and simple speech translation.  
     - Pull: `ollama pull dimavz/whisper-tiny`  
     - Good if you want something small and fast for local STT.  
     - Ref: [dimavz/whisper-tiny](https://ollama.com/dimavz/whisper-tiny)
   - There may be other Whisper sizes/ports in the library; search for “whisper” in the [Ollama Library](https://ollama.com/library).

2. **Multimodal ASR‑capable models**
   - **`openbmb/minicpm-o2.6:8b`**  
     - Multimodal (audio/image/text) model with strong **ASR/speech‑to‑text** capabilities, designed for real‑time bilingual speech (Chinese/English).  
     - Benchmarks show it doing very well on audio tasks compared to cloud models.  
     - Ref: [openbmb/minicpm-o2.6:8b](https://

ollama.com/openbmb/minicpm-o2.6:8b)

**Practical pattern for STT:**
- Use Whisper (e.g., `whisper-tiny`) for transcription → then hand the text to your main LLM (Llama 3, Qwen, etc.) in Ollama for reasoning, chat, tools, etc.

---

### 2. Text‑to‑Speech (TTS) models “on” Ollama

Ollama is primarily text‑first, so TTS is less standardized. There *are* TTS models packaged or integrated around Ollama, but most production setups still use **external TTS engines** (Coqui XTTS, Bark, Silero, etc.) driven by an Ollama LLM.

Key options:

1. **Orpheus (TTS)**
   - **`legraphista/orpheus`** – a 3B‑parameter neural TTS model with multiple voices and expressive controls.  
   - Features: multiple male/female voices, emotional tags like `<laugh>`, `<sigh>`, etc.  
   - Pull: `ollama pull legraphista/orpheus`  
   - Ref: [Orpheus on Ollama](https://ollama.com/legraphista/Orpheus)

2. **ChatTTS integrations**
   - Not an official Ollama core model, but there are wrappers like **ChatTTS‑Ollama** which let you run

[ChatTTS](https://github.com/linmaobang/ChatTTS-Ollama) side‑by‑side with Ollama.  
   - Good for dialogue‑style, controllable prosody (pauses, laughter, etc.).  
   - Ref: [ChatTTS‑Ollama GitHub](https://github.com/linmaobang/ChatTTS-Ollama)

3. **External TTS commonly paired with Ollama**
   - Many guides show setups where:
     - Ollama LLM (e.g., Llama 3) → text  
     - External TTS (Coqui XTTS, Bark, or similar) → audio  
   - Example tutorials: [Give Your Ollama a Voice](https://www.arsturn.com/blog/give-your-ollama-a-voice-a-guide-to-local-asr-tts).

---

### 3. Pipelines that handle both STT and TTS

There is currently **no single Ollama model that does “full voice assistant” (both STT & TTS) end‑to‑end** out of the box. Instead, you typically use a *pipeline*:

- **Typical local voice assistant stack:**
  1. **STT**: Whisper (`dimavz/whisper-tiny` or faster‑whisper/whisper.cpp)  
  2. **LLM (via Ollama)**: Llama 3 / Qwen / Phi / etc.  
  3. **TTS**: Orpheus, ChatTTS, XTTSv2, Bark, etc.

- Example

open‑source projects that wire this all together with Ollama:
  - [maudoin/ollama-voice](https://github.com/maudoin/ollama-voice) – integrates local ASR + Ollama + TTS.
  - [n1ceh4t/Ollama-STT-TTS](https://github.com/n1ceh4t/Ollama-STT-TTS) – another end‑to‑end STT → LLM → TTS demo.

- **Multimodal models with stronger audio:**  
  - **`openbmb/minicpm-o2.6:8b`** is notable because it directly supports audio input and has been used in real‑time setups, but you still often combine it with a dedicated TTS model for output.  
  - Ref: [openbmb/minicpm-o2.6:8b](https://ollama.com/openbmb/minicpm-o2.6:8b)

---

### 4. Concrete recommendations


