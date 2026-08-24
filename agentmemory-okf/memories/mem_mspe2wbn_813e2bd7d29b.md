---
type: Fact
title: # PreviewLayout is ignored in a #Preview macro. Use the `traits` argument of the
description: # PreviewLayout is ignored in a #Preview macro. Use the `traits` argument of the m

source: kilo
session_id: 8a1a1f71-15e3-4033-95ee-796203133103
resource: kilo://task/8a1a1f71-15e3-4033-95ee-79620313
resource: agentmemory://memory/mem_mspe2wbn_813e2bd7d29b
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:59.706Z
source: agentmemory
strength: 7
---
# Content

# PreviewLayout is ignored in a #Preview macro. Use the `traits` argument of the m

source: kilo
session_id: 8a1a1f71-15e3-4033-95ee-796203133103
resource: kilo://task/8a1a1f71-15e3-4033-95ee-796203133103

# Conversation

- **Task ID:** `8a1a1f71-15e3-4033-95ee-796203133103`
- **Source:** kilo
- **Started:** 2025-12-07T11:46:05Z
- **Ended:** 2025-12-07T11:47:07Z
- **Message blocks:** 23
- **Tokens:** 603931 in / 1495 out

---

### 👤 User — 2025-12-07T11:46:05Z

PreviewLayout is ignored in a #Preview macro. Use the `traits` argument of the macro to provide the desired layout, e.g. `.sizeThatFitsLayout. (from macro 'Preview')

### 👤 User — 2025-12-07T11:46:12Z

I'll help you understand and fix the issue with the PreviewLayout being ignored in the #Preview macro. Let me start by exploring the codebase to understand the current implementation and find where the Preview macro is defined and used.

### 🤖 Assistant — 2025-12-07T11:46:13Z

**Tool call: codebaseSearch**

```json
{
  "query": "Preview macro and layout handling",
  "isOutsideWorkspace": false
}
```

### 👤 User — 2025-12-07T11:46:16Z

Let me try a different approach to search for Preview-related code since the semantic search failed. I'll use regex search to find Preview macro usage and definitions.

### 🤖 Assistant — 2025-12-07T11:46:17Z

**Tool call: searchFiles**

```json
{
  "path": "GCodeGen",
  "regex": "#Preview|@Preview|PreviewLayout",
  "filePattern": "*.swift",
  "isOutsideWorkspace": false,
  "content": "Found 23 results.\n\n# Sources/Auxillary/UI.swift\n725 | \n726 | #Preview {\n727 | //    return UI(slider: slider).preferredColorScheme(.dark)\n----\n\n# Sources/Auxillary/AnimationViews.swift\n528 | \n529 | #Preview {\n530 |     AnimationViews()\n----\n\n# Sources/Machine/MachineDetailView.swift\n196 | #if DEBUGOFF\n197 |     #Preview {\n198 |         do {\n----\n\n# Sources/Machine/MachinesView.swift\n101 | #if DEBUG\n102 |     #Preview {\n103 |         do {\n----\n\n# Sources/Gcode/GenerateView.swift\n147 | #if DEBUG\n148 |     #Preview {\n149 |         do {\n----\n\n# Sources/SplashView.swift\n 59 | \n 60 | #Preview {\n 61 |     SplashView()\n----\n\n# Sources/Gcode/GCodeVisualize.swift\n 22 | #if DEBUG\n 23 |     #Preview {\n 24 |         do {\n----\n\n# Sources/Gcode/GCodeLoad.swift\n 67 | \n 68 | #Preview {\n 69 |   GCodeLoadView()\n----\n 77 | \n 78 | #Preview {\n 79 |     GCodeLoad()\n----\n\n# Sources/Gcode/GCodeSave.swift\n 22 | #if DEBUG\n 23 |     #Preview {\n 24 |         do {\n----\n\n# Sources/MainContent.swift\n 24 | \n 25 | #Preview {\n 26 |         return MainContent()\n----\n\n# Sources/Bit/BitDetailView.swift\n107 | #if DEBUGOFF\n108 |     #Preview {\n109 |         do {\n----\n\n# Sources/Gcode/GCodeView.swift\n141 | #if DEBUG\n142 |     #Preview {\n143 |         do {\n----\n\n# Sources/Bit/BitDiameterView.swift\n165 | #if DEBUGOFF\n166 |     #Preview {\n167 |         do {\n----\n\n# Sources/Bit/BitsView.swift\n182 | #if DEBUG\n183 |     #Preview {\n184 |         do {\n----\n\n# Sources/Bit/BitDetailImageView.swift\n191 | #if DEBUGOFF\n192 |     #Preview {\n193 |         do {\n----\n\n# Sources/Bit/BitGeometryView.swift\n216 | #if DEBUGOFF\n217 |     #Preview {\n218 |         do {\n----\n\n# Sources/SurfaceJob/DetailMachineView.swift\n 45 | #if DEBUG\n 46 |     #Preview {\n 47 |         do {\n----\n\n# Sources/SurfaceJob/SurfaceJobsView.swift\n326 | #if DEBUG\n327 |     #Preview {\n328 |         do {\n----\n\n# Sources/CustomUI/CalculatorView.swift\n434 | \n435 | #Preview {\n436 |     CalculatorView()\n----\n\n# Sources/CustomUI/GenerateGCodeButton.swift\n164 | \n165 | #Preview {\n166 |     let job = SurfaceJob(timestamp: Date())\n167 |     return GenerateGCodeButton(job: job)\n168 |         .previewLayout(PreviewLayout.sizeThatFits)\n169 | }\n----\n\n# Sources/CustomUI/ProViews.swift\n 15 | \n 16 | #Preview {\n 17 |     ProViews()\n----\n\n# Sources/Settings/SettingsView.swift\n 93 | \n 94 | #Preview {\n 95 |     @Previewable @State var value: Double = 0\n 96 |     DebugView(value: $value)\n----"
}
```

### 👤 User — 2025-12-07T11:46:19Z

Great! I found some Preview usage. I can see that in `Sources/CustomUI/GenerateGCodeButton.swift` there's
