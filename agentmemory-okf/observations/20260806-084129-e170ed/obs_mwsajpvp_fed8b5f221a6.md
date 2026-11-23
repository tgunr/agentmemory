---
type: file_edit
title: Python 3.9 install failure
description: Install ezdxf library via pip.
resource: agentmemory://observation/obs_mwsajpvp_fed8b5f221a6
tags: ["pip install issues", "file_edit"]
timestamp: 2026-11-22T20:30:13.953959+00:00
source: agentmemory
session_id: 20260806_084129_e170ed
importance: 5
confidence: 1
---
# Summary

The Python 3.9 installation via pip failed due to a missing pip module.

## Facts
- Command: which python3 && python3 -m pip install ezdxf -q && python3 -c "import ezdxf; print('ok', ezdxf.__version__)"
- Exit Code: 1
- Output:
- Output: /Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3
                     Output: /Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3: No module named pip
                     Error: Null
                     Error: null
                     Approval: Command was flagged and auto-approved by an 'always' approval the user saved earlier.

## Concepts
- pip install issues

## Files
- `/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3`
- `/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/3d614f72838a4827a38ecd222d3bba3c/venv/bin/python3: No module named pip`

_Importance: 5 · Confidence: 1_
