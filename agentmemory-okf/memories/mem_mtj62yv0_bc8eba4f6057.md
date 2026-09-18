---
type: Fact
title: # Copying CNC Toolpaths in Vectric Aspire

source: hermes
session_id: claude__c4
description: # Copying CNC Toolpaths in Vectric Aspire

source: hermes
session_id: claude__c453f695-c438-486f-90a6-a4a51e814472
resource: hermes://session/claude__c453f695-c438-486f-90a6-a4a51e814472

# Conversati
resource: agentmemory://memory/mem_mtj62yv0_bc8eba4f6057
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:11.246Z
source: agentmemory
strength: 7
---
# Content

# Copying CNC Toolpaths in Vectric Aspire

source: hermes
session_id: claude__c453f695-c438-486f-90a6-a4a51e814472
resource: hermes://session/claude__c453f695-c438-486f-90a6-a4a51e814472

# Conversation

- **Session ID:** `claude__c453f695-c438-486f-90a6-a4a51e814472`
- **Source:** claude
- **Model:** None
- **Started:** 2025-05-27T21:25:32Z
- **Ended:** 2025-05-27T21:25:48Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-05-27T21:25:33Z

In Vectric Expire, how do I copy a toolpath from one sheet to another?

### 🤖 Assistant — 2025-05-27T21:25:48Z

I don't have specific information about "Vectric Expire" in my knowledge base. You might be referring to Vectric Aspire, which is a popular CNC design and toolpath software.

Let me search for current information about copying toolpaths between sheets in Vectric software:
```
This block is not supported on your current device yet.
```



Based on the search results, here are the main methods to copy toolpaths from one sheet to another in Vectric Aspire (which I believe is what you're referring to):

## Method 1: Using Layer-Based Toolpaths (Recommended)

The most efficient way is to set up your toolpaths to use layers with automatic vector selection:

1. **Assign vectors to layers** - Put your vectors on specific layers
2. **Create toolpaths with layer association** - When creating toolpaths, associate them with layers rather than manually selecting vectors
3. **Use "Recalculate All"** - When you switch to a new sheet, simply click the "Recalculate All" button and the toolpaths will automatically apply to the vectors on the corresponding layers of that sheet

## Method 2: Using Toolpath Templates

1. **Save toolpaths as templates**:
   - Select the toolpaths you want to copy
   - Go to "Save Toolpaths as Template" (available in Pro versions and Aspire)
   - Make sure the toolpaths are associated with layers for this to work properly

2. **Load template on new sheet**:
   - Switch to your target sheet
   - Load the saved toolpath template
   - The toolpaths will automatically apply to vectors on the corresponding layers

## Method 3: Options Setting

Check your **"Select toolpaths when edit sheet"** setting in Options:
- Set it to **"No"** if you want toolpaths to apply to all sheets
- With this setting, you create toolpaths once and use "Recalculate All" to apply them to the current sheet

## Method 4: Manual Duplication

If the above methods don't work for your workflow:
1. Duplicate the existing toolpaths
2. Move the duplicated toolpaths to the new sheet
3. Recalculate as needed

The layer-based approach (Method 1) is generally the most efficient for production work, as it allows you to create toolpaths once and automatically apply them to multiple sheets containing similar vector arrangements.

`[tool_use: web_search]` Vectric Aspire copy toolpath between sheets
`[tool_result]` This forum is for general discussion about Aspire · Post Reply · Print view · 4 posts • Page 1 of 1 · matth1978 · Posts: 5 · Joined: Sun Sep 05, 2021 4:24 pm · Model of CNC Machine: Teckel V series · Quote · Post by matth1978 » Mon Sep 13, 2021 9:56 am · Is there a way to copy all my toolpaths to a new sheet? Every night I next hundreds of separate vectors to multiple sheets. Pre v11 I then saved
