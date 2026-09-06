---
type: workflow
title: To MOVE a Hermes Desktop sidebar project's data (sessions + messages) to another
description: To MOVE a Hermes Desktop sidebar project's data (sessions + messages) to another project: the sidebar PROJECTS list is AUTO-DERIVED from the `cwd` column of rows in ~/.hermes/state.db `sessions` table
resource: agentmemory://memory/mem_mtf7c2ch_6a940af9114e
tags: ["hermes", "desktop", "projects", "sidebar", "sessions", "state.db", "cwd", "migration"]
timestamp: 2026-08-30T02:40:10.592Z
source: agentmemory
strength: 7
---
# Content

To MOVE a Hermes Desktop sidebar project's data (sessions + messages) to another project: the sidebar PROJECTS list is AUTO-DERIVED from the `cwd` column of rows in ~/.hermes/state.db `sessions` table — NOT from projects.db rows, NOT from webui/workspaces.json. A project node appears per distinct (or grouped) cwd. Moving = re-pointing session cwd, not copying files.

Procedure (local, no SAMBA/file moves):
1. Backup: cp -p ~/.hermes/state.db /tmp/state.db.bak-$(date +%Y%m%d_%H%M%S)
2. Survey: sqlite3 ~/.hermes/state.db "SELECT cwd, COUNT(*) FROM sessions GROUP BY cwd ORDER BY COUNT(*) DESC;"
3. Remap source prefix -> dest: sqlite3 ~/.hermes/state.db "UPDATE sessions SET cwd = REPLACE(cwd,'/Volumes/davec','/Users/davec') WHERE cwd LIKE '/Volumes/davec%';"
   - messages stay linked by session_id (no copy/delete needed); the source project node vanishes once 0 sessions point at it; dest node absorbs them.
4. Verify: SELECT cwd, COUNT(*) FROM sessions WHERE cwd LIKE '/Volumes/davec%';  -> 0
5. Quit + relaunch Hermes Desktop (it caches the project tree in memory) for the sidebar to refresh.

Verified 2026-08-29: 'davec' sidebar node = 80 sessions with cwd under /Volumes/davec (76 at root + 4 in /Volumes/davec/Work/tiltpal, all default profile). Remapped to /Users/davec; Home grew 160->236, 0 left on mount. Source SAMBA mount stays mounted (user wants it).

## Files
- `/Users/davec/.hermes/state.db`
