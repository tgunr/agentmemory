---
type: Fact
title: # Prusaslicer G-code Error

source: abacus
session_id: 8c4dd7340
resource: abacu
description: # Prusaslicer G-code Error

source: abacus
session_id: 8c4dd7340
resource: abacus://conversation/8c4dd7340

# Conversation

- **Session ID:** `8c4dd7340`
- **Source:** abacus.ai
- **Project:** AI Vaul
resource: agentmemory://memory/mem_mti8sied_a87871f9e01f
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/8c4dd7340"]
timestamp: 2026-09-01T05:44:16.064Z
source: agentmemory
strength: 7
---
# Content

# Prusaslicer G-code Error

source: abacus
session_id: 8c4dd7340
resource: abacus://conversation/8c4dd7340

# Conversation

- **Session ID:** `8c4dd7340`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-04-20T15:06:59+00:00
- **Messages:** 2

---

### 👤 User

In Prusaslicer:
G-code export to /var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/.68308_0.gcode failed due to invalid custom G-code sections:
start_gcode
Parsing error at line 27. Expecting tag literal-char
M104 T{initial_tool} S{((filament_notes[initial_tool]=~/.*MBL160.*/) ? 160 : (filament_notes[initial_tool]=~/HTTP://_MBL10.*/) ? (first_layer_temperature[initial_tool] - 10) : (filament_type[initial_tool] == "PC" or filament_type[initial_tool] == "PA") ? (first_layer_temperature[initial_tool] - 25) : (filament_type[initial_tool] == "FLEX") ? 210 : (filament_type[initial_tool]=~/.*PET.*/) ? 175 : 170)} ; set temp
                                                                                                                   ^

---

### 🤖 Assistant

The error is a parsing issue with the regex pattern in your G-code. The problem is the `HTTP://` inside the regex — the `//` is being interpreted as a comment or delimiter by PrusaSlicer's expression parser.

**The offending part:**
```
filament_notes[initial_tool]=~/HTTP://_MBL10.*/
```

The `://` in `HTTP://` is confusing the parser. You need to escape the slashes or restructure the condition.

**Fix — escape the forward slashes:**
```gcode
M104 T{initial_tool} S{((filament_notes[initial_tool]=~/.*MBL160.*/) ? 160 : (filament_notes[initial_tool]=~/HTTP:\/\/_MBL10.*/) ? (first_layer_temperature[initial_tool] - 10) : (filament_type[initial_tool] == "PC" or filament_type[initial_tool] == "PA") ? (first_layer_temperature[initial_tool] - 25) : (filament_type[initial_tool] == "FLEX") ? 210 : (filament_type[initial_tool]=~/.*PET.*/) ? 175 : 170)} ; set temp
```

**Or better — change the pattern to avoid `://` entirely**, since you're just checking for `_MBL10` anyway:
```gcode
M104 T{initial_tool}

S{((filament_notes[initial_tool]=~/.*MBL160.*/) ? 160 : (filament_notes[initial_tool]=~/.*_MBL10.*/) ? (first_layer_temperature[initial_tool] - 10) : (filament_type[initial_tool] == "PC" or filament_type[initial_tool] == "PA") ? (first_layer_temperature[initial_tool] - 25) : (filament_type[initial_tool] == "FLEX") ? 210 : (filament_type[initial_tool]=~/.*PET.*/) ? 175 : 170)} ; set temp
```

The second option (using `.*_MBL10.*`) is cleaner and avoids the `://` issue entirely — it will still match any filament note containing `_MBL10`. Use whichever matches your actual filament note format.

---
