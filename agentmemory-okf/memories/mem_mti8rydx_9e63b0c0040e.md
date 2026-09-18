---
type: Fact
title: # Gcode Position Analysis Script

source: abacus
session_id: 541f169c4
resource:
description: # Gcode Position Analysis Script

source: abacus
session_id: 541f169c4
resource: abacus://conversation/541f169c4

# Conversation

- **Session ID:** `541f169c4`
- **Source:** abacus.ai
- **Project:** A
resource: agentmemory://memory/mem_mti8rydx_9e63b0c0040e
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/541f169c4"]
timestamp: 2026-09-01T05:43:50.150Z
source: agentmemory
strength: 7
---
# Content

# Gcode Position Analysis Script

source: abacus
session_id: 541f169c4
resource: abacus://conversation/541f169c4

# Conversation

- **Session ID:** `541f169c4`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-04T16:44:10+00:00
- **Messages:** 2

---

### 👤 User

Write code for - create a script to find the largest X,Y, and Z positions in a gcode file like the attachment, show  the starting position, feed rate, and max values found.

---

### 🤖 Assistant

```python
#!/usr/bin/env python3
"""
Find largest X, Y, Z positions in a G‑code file.

For a file like "Cut Line.ngc", this script will:
  - Show the first motion line's start position (X, Y, Z) and feedrate F
  - Show the maximum X, Y, and Z reached anywhere in the file
"""

import re
import sys
from pathlib import Path

# Regex to capture words like X12.34, Y-5, Z0.25, F800, etc.
WORD_RE = re.compile(r'([XYZF])\s*(-?\d+(\.\d*)?)', re.IGNORECASE)


def parse_gcode_line(line, current_state):
    """
    Parse one G‑code line and update the current_state dict in-place.
    current_state keys: X, Y, Z, F (floats or None)
    """
    # Remove comments in parentheses or after ';'
    # Very simple comment stripping; good enough for typical G‑code.
    semicolon_split = line.split(';', 1)[0]
    # Remove ( ... ) comments
    cleaned = ""
    depth = 0
    for ch in semicolon_split:
        if ch == '(':
            depth += 1
        elif ch == ')' and depth > 0:
            depth -= 1
        elif depth == 0:

cleaned += ch

    for axis, value, _ in WORD_RE.findall(cleaned):
        axis = axis.upper()
        val = float(value)
        if axis in current_state:
            current_state[axis] = val


def analyze_gcode(path):
    path = Path(path)
    if not path.is_file():
        raise FileNotFoundError(f"G‑code file not found: {path}")

    # Current modal state (last-seen coordinates / feed)
    state = {"X": None, "Y": None, "Z": None, "F": None}

    start_pos = None          # (X, Y, Z, F) from first motion line
    max_values = {"X": None, "Y": None, "Z": None}

    with path.open("r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            stripped = line.strip().upper()
            if not stripped:
                continue

            # Detect motion commands (G0/G00/G1/G01 etc.)
            is_motion = "G0" in stripped or "G1" in stripped

            # Update modal state from this line
            old_state = state.copy()
            parse_gcode_line(stripped, state)

# When we see the first motion line, capture starting state
            if is_motion and start_pos is None:
                start_pos = (
                    state["X"],
                    state["Y"],
                    state["Z"],
                    state["F"],
                )

            # Update maxima whenever coordinates change
            for axis in ("X", "Y", "Z"):
                if state[axis] is not None:
                    if max_values[axis] is None or state[axis] > max_values[axis]:
                        max_values[axis] = state[axis]

    return start_pos, max_values


def main():
    if len(sys.argv) < 2:
        print("Usage: python find_gcode_extents.py <file.gcode>")
        sys.exit(1)

    fname = sys.argv[1]
    start_pos, max_vals = analyze_gcode(fname)

    print(f"File: {fname}")
    print()

    if start_pos is None:
        print("No motion (G0/G1) commands found.")
        return

    sx, sy, sz, sf = start_pos
    print("Starting position (from first G0/G1

line):")
    print(f"  X: {sx}")
    print(f"  Y: {sy}")
    print(f"  Z: {sz}")
    print(f"  Feedrate F: {sf}")
    print()
    print("Maximum positions found in file:")
    print(f"  Max X: {max_vals['X']}")
    print(f"  Max Y: {max_vals['Y']}")
    print(f"  Max Z: {max_vals['Z']}")


if __name__ == "__main__":
    main()
```

---
