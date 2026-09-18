---
type: file_edit
title: Read Local Storage directory and check existence
description: Verify LevelDB log files and desktop app storage usage
resource: agentmemory://observation/obs_msbx18iu_3fcde386db5e
tags: ["Python glob and os libraries", "Node.js file system API", "LevelDB log files analysis", "file_edit"]
timestamp: 2026-08-02T14:48:48.482486+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 5
confidence: 0.9
---
# Summary

The script reads the Local Storage directory and checks its existence. It also attempts to read LevelDB log files and desktop app storage usage.

## Facts
- Command: cd /Users/davec/.hermes/hermes-agent && python3 -c \"\nimport json,glob,os\np=os.path.expanduser('~/Library/Application Support/Hermes/Local Storage')\nls=glob.glob(p+'/*.json')+glob.glob(p+'/leveldb/*.log') if os.path.isdir(p) else []\nprint('local storage dir:',p, 'exists',os.path.isdir(p))\n\"
- Command: cd /Users/davec/.hermes/hermes-agent/apps/desktop && node -e \"\nconst fs=require('fs');\nconst p=process.env.HOME+'/Library/Application Support/Hermes/Local Storage';\ntry{const files=fs.readdirSync(p);console.log(files);}catch(e){console.log('err',e.message)}\n\"

## Concepts
- Python glob and os libraries
- Node.js file system API
- LevelDB log files analysis

## Files
- `/Users/davec/.hermes/hermes-agent/Local Storage/*.json`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/leveldb/*.log`

_Importance: 5 · Confidence: 0.9_
