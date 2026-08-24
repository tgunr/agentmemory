---
type: Fact
title: # Explain what happens when the user activates the "Pause" button.

source: kilo
description: # Explain what happens when the user activates the "Pause" button.

source: kilo
session_id: ff8f0025-876f-4049-bcb9-7087189c3c47
resource: kilo://task/ff8f0025-876f-4049-bcb9-7087189c3c47

# Conversa
resource: agentmemory://memory/mem_mspcpun2_4f52ff299e2a
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:28:51.327Z
source: agentmemory
strength: 7
---
# Content

# Explain what happens when the user activates the "Pause" button.

source: kilo
session_id: ff8f0025-876f-4049-bcb9-7087189c3c47
resource: kilo://task/ff8f0025-876f-4049-bcb9-7087189c3c47

# Conversation

- **Task ID:** `ff8f0025-876f-4049-bcb9-7087189c3c47`
- **Source:** kilo
- **Started:** 2025-12-18T13:21:14Z
- **Ended:** 2025-12-18T14:45:06Z
- **Message blocks:** 96
- **Tokens:** 5968145 in / 10983 out

---

### 👤 User — 2025-12-18T13:21:14Z

Explain what happens when the user activates the "Pause" button.

### 🤖 Assistant — 2025-12-18T13:21:19Z

<details><summary>Reasoning</summary>

First, the task is: "Explain what happens when the user activates the 'Pause' button."


## Investigating pause functionality  
- The task is to explain what happens when the user activates the 'Pause' button in the BBCTRL firmware.

</details>

### 🤖 Assistant — 2025-12-18T13:21:21Z

**Tool call: codebaseSearch**

```json
{
  "query": "pause",
  "path": ".",
  "isOutsideWorkspace": false
}
```

### 🤖 Assistant — 2025-12-18T13:21:24Z

<details><summary>Reasoning</summary>

The codebase_search failed because indexing isn't complete. I need to use search_files instead for regex search.


</details>

### 🤖 Assistant — 2025-12-18T13:21:25Z

**Tool call: searchFiles**

```json
{
  "path": "src/py/bbctrl",
  "regex": "pause",
  "filePattern": "*.py",
  "isOutsideWorkspace": false,
  "content": "Found 15 results.\n\n# src/py/bbctrl/Mach.py\n 73 |     def _is_ready(self): return self._get_state() == 'READY'\n 74 |     def _get_pause_reason(self): return self.ctrl.state.get('pr', '')\n 75 |     def _get_cycle(self): return self.ctrl.state.get('cycle', 'idle')\n----\n 78 | \n 79 |     def _is_paused(self):\n 80 |         if not self._is_holding() or self.unpausing: return False\n 81 |         return self._get_pause_reason() in (\n 82 |             'User pause', 'Program pause', 'Optional pause')\n 83 | \n----\n110 | \n111 |         # Unpause sync\n112 |         if state_changed and state != 'HOLDING': self.unpausing = False\n----\n115 |         if state_changed and state == 'HOLDING':\n116 |             # Always flush queue after pause\n117 |             super().i2c_command(Cmd.FLUSH)\n----\n119 | \n120 |         # Automatically unpause after seek or stop hold\n121 |         # Must be after holding commands above\n122 |         op = self.ctrl.state.get('optional_pause', False)\n123 |         pr = self._get_pause_reason()\n124 |         if ((state_changed or 'pr' in update) and self._is_holding()):\n125 |             if ((pr in ('Switch found', 'User stop') or\n126 |                  (pr == 'Optional pause' and not op))):\n127 |                 self._unpause()\n128 | \n----\n133 | \n134 |     def _unpause(self):\n135 |         pause_reason = self._get_pause_reason()\n136 |         self.mlog.info('Unpause: ' + pause_reason)\n137 | \n138 |         if pause_reason == 'User stop':\n139 |             self.planner.stop()\n----\n217 | \n218 |     def pause(self): super().pause()\n219 | \n220 | \n221 |     def unpause(self):\n222 |         if self._is_paused():\n223 |             self.ctrl.state.set('optional_pause', False)\n224 |             self._unpause()\n225 | \n226 | \n227 |     def optional_pause(self, enable = True):\n228 |         self.ctrl.state.set('optional_pause', enable)\n229 | \n----\n\n# src/py/bbctrl/Comm.py\n271 | \n272 |     def pause(self):\n273 |         self.i2c_command(Cmd.PAUSE, byte = ord('0')) # User pause\n274 | \n----\n\n# src/py/bbctrl/Cmd.py\n180 | \n181 | def _get_pause_type(type):\n182 |     if type == 'program':       return 1\n----\n184 |     if type == 'pallet-change': return 1\n185 |     raise Exception('Unknown pause type \"%s\"' % type)\n186 | \n187 | \n188 | def pause(type): return '%s%d' % (PAUSE, _get_pause_type(type))\n189 | def jog(id, axes): return JOG + ('%04x' % id) + encode_axes(axes)\n----\n266 |     elif cmd[0] == REPORT:   data['type'] = 'report'\n267 |     elif cmd[0] == PAUSE:    data['type'] = 'pause'\n268 |     elif cmd[0] == UNPAUSE:  data['type'] = 'unpause'\n269 |     elif cmd[0] == ESTOP:    data['type'] = 'estop'\n----\n\n# src/py/bbctrl/Planner.py\n298 | \n299 |         if type == 'pause
