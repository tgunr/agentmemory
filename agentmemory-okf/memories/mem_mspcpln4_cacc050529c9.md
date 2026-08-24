---
type: Fact
title: # Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

source: ki
description: # Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

source: kilo
session_id: cd9d6613-fad9-4512-bafd-04bce7f4a4e3
resource: kilo://task/cd9d6613-fad9-4512-bafd-04bce7f4a4e3

# Conver
resource: agentmemory://memory/mem_mspcpln4_cacc050529c9
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:28:39.674Z
source: agentmemory
strength: 7
---
# Content

# Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

source: kilo
session_id: cd9d6613-fad9-4512-bafd-04bce7f4a4e3
resource: kilo://task/cd9d6613-fad9-4512-bafd-04bce7f4a4e3

# Conversation

- **Task ID:** `cd9d6613-fad9-4512-bafd-04bce7f4a4e3`
- **Source:** kilo
- **Started:** 2025-12-19T20:28:28Z
- **Ended:** 2025-12-19T21:48:56Z
- **Message blocks:** 40
- **Tokens:** 2422548 in / 18804 out

---

### 👤 User — 2025-12-19T20:28:28Z

Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

### 🤖 Assistant — 2025-12-19T20:28:34Z

<details><summary>Reasoning</summary>

The error is "Thread 1: Fatal error: did not find a _$backingData for SurfaceJob". This seems like a Swift runtime error related to ObservableObject or @Published properties.


## Investigating the Error  
- The error message is "Thread 1: Fatal error: did not find a _$backingData for SurfaceJob," indicating a Swift runtime issue.

</details>

### 🤖 Assistant — 2025-12-19T20:28:36Z

**Tool call: readFile**

```json
{
  "path": "Sources/SurfaceJob/SurfaceJobV1.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/SurfaceJob/SurfaceJobV1.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T20:28:38Z

<details><summary>Reasoning</summary>

The SurfaceJob class is empty, just inheriting from Job. The error is about _$backingData, which is related to ObservableObject. So SurfaceJob inherits from Job, and Job is probably an ObservableObject.


</details>

### 🤖 Assistant — 2025-12-19T20:28:39Z

**Tool call: readFile**

```json
{
  "path": "Sources/Data/Job.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/Data/Job.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T20:28:41Z

<details><summary>Reasoning</summary>

The Job class is a @Model class, not an ObservableObject. The error is about _$backingData for SurfaceJob, but SurfaceJob inherits from Job, which is a @Model.


</details>

### 🤖 Assistant — 2025-12-19T20:28:42Z

**Tool call: readFile**

```json
{
  "path": "Sources/GCodeGenApp.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/GCodeGenApp.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T20:28:45Z

<details><summary>Reasoning</summary>

In the app, there's `let sjd = SurfaceJobData()`, and it's used as `.environmentObject(sjd)`. So SurfaceJobData is an ObservableObject.


</details>

### 🤖 Assistant — 2025-12-19T20:28:46Z

**Tool call: readFile**

```json
{
  "path": "Sources/Data/JobData.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/Data/JobData.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T20:28:48Z

<details><summary>Reasoning</summary>

The JobData class is an ObservableObject with many @Published properties. But the error is about SurfaceJob, not JobData.


</details>

### 🤖 Assistant — 2025-12-19T20:28:50Z

**Tool call: searchFiles**

```json
{
  "path": "GCodeGen",
  "regex": "SurfaceJob",
  "filePattern": "*.swift",
  "isOutsideWorkspace": false,
  "content": "Found 101 results.\n\n# Sources/GCodeGenApp.swift\n 54 |         let schema = Schema([\n 55 |             SurfaceJob.self\n 56 |                 //            Machine.self,\n----\n144 |             return try ModelContainer(for: schema, configurations: [modelConfiguration])\n145 |             //          return try ModelContainer(for: schema, migrationPlan: SurfaceJobMigrationPlan.self, configurations: [modelConfiguration])\n146 |         } catch {\n----\n150 | \n151 |     let sjd = SurfaceJobData()\n152 |     let mjd = MachineJobData()\n----\n185 |             let modelContext = sharedModelContainer.mainContext\n186 |             try modelContext.delete(model: SurfaceJob.self)\n187 |             //            try modelContext.delete(model: Machine.self)\n----\n\n# Sources/Auxillary/SymLog.swift\n 33 |     private static var subsystem = \"com.resurface\"\n 34 |     static let customCategory = OSLog(subsystem: subsystem, category: \"SurfaceJobDetailView\")\n 35 |     enum logColor {\n----\n\n# Sources/Data/Job.swift\n  1 | //\n  2 | //  SurfaceJobV1.swift\n  3 | //  GCodeGen\n----\n  8 | //
