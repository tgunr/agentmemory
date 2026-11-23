---
type: file_edit
title: Python 3.14.9 installed and pip module issue
description: Success with tool run, but unexpected module error
resource: agentmemory://observation/obs_mwsc2g5i_924d2d27a205
tags: ["eZdxf", "file_edit"]
timestamp: 2026-11-22T21:12:47.424474+00:00
source: agentmemory
session_id: 20260806_084129_e170ed
importance: 6
confidence: 1
---
# Summary

The tool execution of installing ezdxf using pip resulted in a module not found error, despite successfully running a version check with Python.

## Facts
- Command attempted: which python3 && python3 --version && python3 -m pip install ezdxf
- Command ended with exit code 0 and output:
- Command ended with output: /Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3
- Command ended with output: Python 3.14.9
- Command ended with output: /Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3: No module named pip

## Concepts
- eZdxf

## Files
- `/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3`

_Importance: 6 · Confidence: 1_
