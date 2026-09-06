---
type: Fact
title: # Ollama Image Text Extraction Models

source: hermes
session_id: claude__28841d
description: # Ollama Image Text Extraction Models

source: hermes
session_id: claude__28841d11-48c3-4e4c-82da-42ae328c819d
resource: hermes://session/claude__28841d11-48c3-4e4c-82da-42ae328c819d

# Conversation


resource: agentmemory://memory/mem_mtj61jae_d1a7929d010f
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:04.351Z
source: agentmemory
strength: 7
---
# Content

# Ollama Image Text Extraction Models

source: hermes
session_id: claude__28841d11-48c3-4e4c-82da-42ae328c819d
resource: hermes://session/claude__28841d11-48c3-4e4c-82da-42ae328c819d

# Conversation

- **Session ID:** `claude__28841d11-48c3-4e4c-82da-42ae328c819d`
- **Source:** claude
- **Model:** None
- **Started:** 2025-06-13T16:26:13Z
- **Ended:** 2025-06-13T16:27:03Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-06-13T16:26:14Z

what ollama models can examine an image and extract text

### 🤖 Assistant — 2025-06-13T16:27:03Z

The user is asking about Ollama models that can examine images and extract text. This is asking about OCR (Optical Character Recognition) capabilities in Ollama models. I need to search for current information about this since Ollama models and their capabilities may have changed since my knowledge cutoff.

Let me search for information about Ollama models with vision/OCR capabilities.
```
This block is not supported on your current device yet.
```

Great! I have good information about Ollama models that can examine images and extract text. Let me search for some additional specific models to provide a more comprehensive answer.
```
This block is not supported on your current device yet.
```

Perfect! I now have comprehensive information about Ollama models that can examine images and extract text. Let me provide a detailed answer covering the main vision models available in Ollama for OCR and text extraction tasks.Based on my search, here are the main Ollama models that can examine images and extract text:

## Top Performing Models for OCR/Text Extraction

**Llama 3.2-Vision (11B and 90B)** - The most recommended model
- Advanced model with high accuracy for complex documents
- Available in 11B and 90B parameter sizes
- High accuracy text recognition using Llama 3.2-Vision model
- Install with: `ollama pull llama3.2-vision:11b`

**MiniCPM-V 2.6** - Excellent OCR capabilities
- Strong OCR Capability: MiniCPM-V 2.6 can process images with any aspect ratio and up to 1.8 million pixels (e.g., 1344x1344). It achieves state-of-the-art performance on OCRBench, surpassing proprietary models such as GPT-4o, GPT-4V, and Gemini 1.5 Pro
- MiniCPM-V 2.6 can process images with any aspect ratio and up to 1.8 million pixels
- Install with: `ollama pull minicpm-v`

**Granite3.2-vision** - Specialized for document understanding
- A compact and efficient vision-language model, specifically designed for visual document understanding, enabling automated content extraction from tables, charts, infographics, plots, diagrams, and more
- Install with: `ollama pull granite3.2-vision`

## Other Capable Models

**LLaVA 1.6** - Available in multiple sizes
- These models support higher resolution images, improved text recognition and logical reasoning
- Available in 7B, 13B, and 34B parameter sizes
- LLaVA: Efficient vision-language model for real-time processing (LLaVa model can generate wrong output sometimes)
- Install with: `ollama pull llava`

**Moondream2** - Lightweight option
- moondream2 is a small vision language model designed to run efficiently on edge devices
- Small vision language model designed to run efficiently on edge devices
- Install with: `ollama pull moondream`

**LLaVA-Phi3** - Compact alternative
- A new small LLaVA model fine-tuned from Phi 3 Mini
- Install with: `ollama pull llava-phi3`

## Usage Example

You can use these models directly with Ollama's Python client:

```python
import ollama

response = ollama.chat(
    model='llama3.2-vision',
    messages=[{
        'role': 'user',
        'content': 'Extract all text from this image',
        'images': ['path/to/your/image.jpg']
    }]
)
print(response['message']['content'])
```

## OCR Libraries

For more advanced OCR functionality, there are specialized OCR packages like Ollama-OCR that use these vision models and support:
- Multiple output formats (markdown, text, json, structured, key_value)
- Batch processing capabilities
- Custom prompts for specific text extraction needs

**Recommendation**: Start with **Llama 3.2-Vision 11B** for the best balance of accuracy and performance, or **MiniCPM-V** if you ne
