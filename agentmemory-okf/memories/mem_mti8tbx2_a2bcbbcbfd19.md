---
type: Fact
title: # Combine Scenes in OBS

source: abacus
session_id: e8a60a0d7
resource: abacus:/
description: # Combine Scenes in OBS

source: abacus
session_id: e8a60a0d7
resource: abacus://conversation/e8a60a0d7

# Conversation

- **Session ID:** `e8a60a0d7`
- **Source:** abacus.ai
- **Project:** AI Vault
-
resource: agentmemory://memory/mem_mti8tbx2_a2bcbbcbfd19
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/e8a60a0d7"]
timestamp: 2026-09-01T05:44:54.307Z
source: agentmemory
strength: 7
---
# Content

# Combine Scenes in OBS

source: abacus
session_id: e8a60a0d7
resource: abacus://conversation/e8a60a0d7

# Conversation

- **Session ID:** `e8a60a0d7`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** Team Chat (chatllm-teams)
- **Started:** 2026-05-01T14:11:27+00:00
- **Messages:** 6

---

### 👤 User

In OBS how do you combine two scenes into a view? I want to combine a USB camera with a browser window

---

### 🤖 Assistant

I'll help you set that up in OBS!

In OBS, you don't combine scenes—instead, you add **multiple sources to a single scene**. Here's how to combine a USB camera with a browser window:

### Step-by-Step Instructions

1. **Create or open a scene**
   - In the "Scenes" panel (left side), click the **+** button to create a new scene
   - Or click on an existing scene to edit it

2. **Add your USB camera as a source**
   - In the "Sources" panel (below Scenes), click the **+** button
   - Select **Video Capture Device**
   - Name it (e.g., "USB Camera")
   - Choose your USB camera from the dropdown
   - Click **Create New**
   - Adjust the size and position in the preview window

3. **Add the browser window as another source**
   - Click the **+** button in Sources again
   - Select **Window Capture** (or **Browser Source** if you want to embed a webpage)
   - Name it (e.g., "Browser Window")
   - Choose your browser window from the dropdown
   - Click **Create New**
   - Adjust its size and position

4. **Arrange and resize sources**
   - In the

preview, click and drag sources to reposition them
   - Use the corner handles to resize
   - Reorder sources in the panel by dragging (top = front layer)

### Layout Options

- **Side-by-side**: Resize camera to half-width on left, browser to half-width on right
- **Picture-in-picture**: Shrink one source and overlap it in a corner
- **Stacked**: Stack vertically with one above the other

### Useful adjustments

- **Right-click a source** for options like "Scale to Screen Size" or "Fit to Screen"
- **Adjust opacity** by selecting a source and using the opacity slider
- **Crop sources** by right-clicking → Transform → Crop

This creates one scene with both sources visible together. Is there a specific layout arrangement you'd prefer?

---

### 👤 User

The program view only shows a single source. I don't see most sources

---

### 🤖 Assistant

This is a common issue in OBS. The sources are likely there but not visible. Here's how to fix it:

### Quick Fixes

1. **Check if sources are hidden**
   - In the **Sources** panel, look for an **eye icon** next to each source
   - If the eye is closed/grayed out, click it to make the source visible
   - Make sure all sources you want to see have the eye icon open

2. **Sources might be positioned outside the canvas**
   - Click a source in the Sources list to select it
   - In the preview window, you should see it highlighted with a red border
   - If you don't see it in the preview, it's likely outside the viewable area
   - Right-click the source → **Transform** → **Fit to Screen** or **Center on Screen**

3. **Stacking/layering issue**
   - Sources might be stacked on top of each other
   - In the Sources panel, drag sources up/down to reorder the layers
   - The bottom source in the list appears in front

4. **Opacity is set to 0**
   - Select a source
   - Check the **opacity slider** at the bottom of

the Sources panel
   - Make sure it's set to 100%

5. **Source is cropped**
   - Right-click the source → **Transform** → **Reset Transform**
   - This resets any cropping or scaling

### If sources still don't appear:

- **Verify sources are actually added**: Expand the scene in the Sources panel (there should be a dropdown arrow)
- **Resize your preview window**: Sometimes the preview is too small; drag the panel border to expand it
- **Check scene properties**: Right-click the scene → **Duplicate** to create a fresh test scene and re-add sources

Does enabling the eye icons or running "Fit to Screen" on hidden sources fix it?

---

### 👤 User

The preview screen shows correctly. The program window only shows 
