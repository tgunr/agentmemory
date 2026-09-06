---
type: Fact
title: # Adjusting Rapid Change ATC Cups

source: abacus
session_id: 156c6ba73d
resourc
description: # Adjusting Rapid Change ATC Cups

source: abacus
session_id: 156c6ba73d
resource: abacus://conversation/156c6ba73d

# Conversation

- **Session ID:** `156c6ba73d`
- **Source:** abacus.ai
- **Project:
resource: agentmemory://memory/mem_mti8r42d_fb92f30e4041
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/156c6ba73d"]
timestamp: 2026-09-01T05:43:10.814Z
source: agentmemory
strength: 7
---
# Content

# Adjusting Rapid Change ATC Cups

source: abacus
session_id: 156c6ba73d
resource: abacus://conversation/156c6ba73d

# Conversation

- **Session ID:** `156c6ba73d`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** Team Chat (chatllm-teams)
- **Started:** 2026-04-26T18:58:55+00:00
- **Messages:** 14

---

### 👤 User

I am not understanding how the cups need to be adjusted on the rapid change ATC tool changer

---

### 🤖 Assistant

I'll help you figure out the cup adjustments for the rapid change ATC tool changer!

I'll help you understand how to adjust the cups on a rapid change ATC tool changer. Let me search for technical information and resources on this topic.

Based on my research, I can help you understand the cup adjustment for RapidChange ATC tool changers. Let me create a detailed guide explaining the key adjustment points.

[ARTIFACT: rapidchange_atc_cup_adjustment_guide.md]

```markdown
# RapidChange ATC Tool Changer - Cup/Socket Adjustment Guide

## Overview
The "cups" on a RapidChange ATC system refer to the **tool holder sockets/pockets** in the magazine where your collet nuts and tools sit. Proper adjustment is critical for reliable automatic tool changes.

---

## Key Components

### 1. **Sockets (Cups)**
- Made from 3D-printed ABS material for durability and shock absorption
- Hold the collet nut when tool is not in use
- Must be precisely aligned with spindle centerline

### 2. **Center Puck**
- Inserted into the swing arm during alignment
- Used to establish the rotational center point

### 3. **Magazine**
- Holds multiple tool pockets/cups
- Must be aligned to the machine axes first

---

## Critical Adjustment Parameters

### **Alignment Tolerance**
⚠️ **CRITICAL**: Misalignment exceeding **0.2mm (0.008 inches)** will cause threading failures!

If your cups are misaligned by more than this amount, the collet nut may:
- Not thread completely
- Cross-thread (u
```

I've created a comprehensive guide explaining cup adjustment for your RapidChange ATC tool changer. Here are the **key points** you need to understand:

## What Are the "Cups"?
The cups are the **tool holder sockets/pockets** in the magazine where your collet nuts and tools sit when not in the spindle. They're made from 3D-printed ABS material.

## The Most Critical Adjustment: Z-Engage Height

This is what most people struggle with:

1. **Lower the spindle** with a collet nut and tool into the cup
2. Find where the nut sits **freely** in the pocket (no forcing)
3. **Go down an additional 0.5mm** from that point
4. **Save this as your Z-Engage Height** in your controller

## Critical Tolerance
⚠️ **Alignment must be within 0.2mm (0.008")** - anything more will cause the collet nut to fail threading or not engage properly.

## Quick Troubleshooting

**If tools won't load/unload:**
- Check your Z-engage height (most common issue)
- Verify spindle RPM is ~1500 for loading, ~1600 for unloading
- Ensure magazine

is level and aligned

**If collet nut gets stuck:**
- Z-engage might be too deep - raise it 0.1-0.2mm
- Check if cup is worn or damaged

The full guide I created includes detailed procedures, controller settings, and visual references. Would you like me to:
1. Create a video tutorial search for your specific machine type?
2. Explain any particular adjustment step in more detail?
3. Help you troubleshoot a specific problem you're experiencing?

[ARTIFACT: rapidchange_atc_cup_adjustment_guide.md]

```markdown

```

---

### 👤 User

Find where the nut sits freely in the pocket (no forcing) What do you mean?

---

### 🤖 Assistant

Good question - let me clarify that more practically:

## "Sitting Freely" Explanation

When you **lower the spindle with the collet nut down toward the cup**:

1. **Starting position**: Spindle is high, nut is far above the cup
2. **Lower gradually**: Nut gets closer and eventually makes contact with the cup pocket
3. **Continue lowering**: The nut now rests IN the cup, supported by the cup walls
4. **The "free sitting" point**: This is where:
   - The nut is resting in the pocket
   - The cup is supporting the nut's we
