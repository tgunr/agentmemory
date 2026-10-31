---
type: file_edit
title: Scrape eBay and Craigslist
description: No-line context
resource: agentmemory://observation/obs_mvtme418_ec86f38ad291
tags: ["Browser Scripting", "file_edit"]
timestamp: 2026-10-29T14:09:51.593254+00:00
source: agentmemory
session_id: local-f6a0f6f638a2cbebc6857fe6f4c5e48159fc16c64173a5d76e8c8e2c7a0f7506
importance: 7
confidence: 1
---
# Summary

This script failed to scrape eBay and Craigslist due to a ModuleNotFoundError. The error message indicates that the Python interpreter failed to find the &#39;browser_use&#39; module.

## Facts
- Failed to execute script
- Workspace path: /Users/davec/.hermes/profiles/ollama/cache/browser-use/workspace/cron_b99b9d2f2fcd_eb844c61674d4645aad919c0280c019b
- Exit code: 1
- Output: ''
- Error message: Traceback (most recent call last): File &lt;&quot;frozen runpy&gt;,&quot; line 203, in _run_module_as_main File &quot;&quot;frozen runpy&gt;, line 88, in _run_code File &quot;&quot;/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/0d29233e11384443a7e76879b0e0b575/venv/lib/python3.14/site-packages/browser_harness/run.py&quot;, line 410, in &lt;&gt;main&lt;/main&gt; ~~~~/~~~^^ File &quot;/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/0d29233e11384443a7e76879b0e0b575/venv/lib/python3.14/site-packages/browser_harness/run.py&quot;, line 255, in main _run(args) ~~~~^^^^^^ File &quot;/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/0d29233e11384443a7e76879b0e0b575/venv/lib/python3.14/site-packages/browser_harness/run.py&quot;, line 406, in _run exec(code, globals()) ~~~~^^^^^^^^^^^^^^^^^ ModuleNotFoundError: No module named &#39;browser_use&#39;)

## Concepts
- Browser Scripting

## Files
- `/Users/davec/.hermes/profiles/ollama/cache/browser-use/workspace/cron_b99b9d2f2fcd_eb844c61674d4645aad919c0280c019b`

_Importance: 7 · Confidence: 1_
