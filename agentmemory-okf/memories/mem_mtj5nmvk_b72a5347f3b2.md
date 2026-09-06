---
type: Fact
title: # Test models for coding

source: chatgpt
session_id: 689b7b72-3c6c-8321-9464-20
description: # Test models for coding

source: chatgpt
session_id: 689b7b72-3c6c-8321-9464-205eed87faa7
resource: chatgpt://conversation/689b7b72-3c6c-8321-9464-205eed87faa7

# Conversation

- **Session ID:** `689
resource: agentmemory://memory/mem_mtj5nmvk_b72a5347f3b2
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689b7b72-3c6c-8321-9464-205eed87faa7"]
timestamp: 2026-09-01T21:04:15.912Z
source: agentmemory
strength: 7
---
# Content

# Test models for coding

source: chatgpt
session_id: 689b7b72-3c6c-8321-9464-205eed87faa7
resource: chatgpt://conversation/689b7b72-3c6c-8321-9464-205eed87faa7

# Conversation

- **Session ID:** `689b7b72-3c6c-8321-9464-205eed87faa7`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-12T17:35:47.204598+00:00
- **Messages:** 2

---

### 👤 User

Using the models from `ollama list` test each model suitable for coding to use the context files for a solution. The file ~/ollamatests/terminal.txt contains the result of a run and the open files are the suspect code. For each model time the the response time from the time the prompt is issued. Save the response in a folder ~/ollamatests/ with each file named after the ollma model. Include the response time at the head of each file.

---

### 🤖 Assistant

Alright—let’s wire this up cleanly.

### Plan (pseudocode)
1. Parse CLI args: `--files ...`, `--terminal ~/ollamatests/terminal.txt`, `--output-dir ~/ollamatests`, `--models ...`, `--max-chars`, `--timeout-sec`, `--prompt-title`.
2. Resolve/expand paths; validate existence; create output dir.
3. If models not provided:
   - Run `ollama list --format json`.
   - Filter “coding-suitable” models by name using allowlist regexes: `code`, `coder`, `codellama`, `starcoder`, `wizardcoder`, `qwen2[- ]?coder`, `deepseek[- ]?coder`, `replit`, `phind`, `mistral(-instruct)?`, `llama(-code)?`, `granite-code`, `codegemma`, `xcode`.
4. Read terminal.txt; read each `--files` content.
   - Truncate each file to `max_chars_per_file` (keep head and tail) to avoid huge prompts; note truncation markers.
5. Build a single prompt:
   - Short task header (what to do).
   - Embed terminal log under a fenced block.
   - Embed each file as: `### FILE: <path>` then fenced block with contents.
   - Explicit requested output from the model (succinct fix plan + diff/patch + reason).
6. For each model:
   - Start `t0 = perf_counter()`.
   - Invoke `ollama run <model>` with `stdin` as built prompt. (Use `subprocess.run` with `text=True`.)
   - Stop timer `t1`; compute elapsed.
   - Save response to `<output_dir>/<sanitized-model-name>.txt`:
     - First lines: `Response time: X.XXXs` then `Model: <name>`, `Timestamp: ...`.
     - Then the raw model response.
   - On error, write `<name>.err.txt`.
7. Print a summary table with per-model timings and output file paths.
8. Exit non-zero if any model failed (optional).

### Full code
```python
# /usr/local/bin/run_ollama_coding_bench.py
"""
Benchmark coding-capable Ollama models against your local context.

Usage examples:
  python run_ollama_coding_bench.py \
    --files /Volumes/Work/unsub-mail/UnsubMail.spec \
    --terminal ~/ollamatests/terminal.txt \
    --output-dir ~/ollamatests

  python run_ollama_coding_bench.py \
    --files path/to/a.py path/to/b.py \
    --models "qwen2.5-coder:7b,deepseek-coder-v2:lite" \
    --prompt-title "Fix the build and propose a patch"
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import re
import shutil
import subprocess
import sys
import textwrap
from pathlib import Path
from time import perf_counter
from typing import Iterable, List, Tuple


CODING_MODEL_PATTERNS = [
    r"code", r"coder", r"codellama", r"starcoder", r"wizardcoder",
    r"qwen[- ]?coder", r"qwen2[- ]?coder", r"deepseek[- ]?coder",
    r"replit", r"phind", r"codegemma", r"granite[- ]?code", r"xcode",
    # common generalists that handle code well
    r"mistral(?:-instruct)?", r"llama.*(?:code|instruct)?",
]


def is_exe_available(cmd: str) -> bool:
    """Why: Fail fast if Ollama is unavailable."""
    return shutil.which(cmd) is not None


def discover_models() -> List[str]:
    """Return coding-suitable model names from `ollama list --format json`."""
    try:
        out = subprocess.check_output(
            ["ollama", "list", "--format", "json"], text=True
        )
        items = json.loads(out)
    except Exception as exc:  # noqa: BLE001
        raise RuntimeError(
            "Failed to run `ollama list --format json`"
        ) from exc

    names = [it.get("name") for it in items if isinstance(it, dict) an
