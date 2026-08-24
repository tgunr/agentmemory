---
type: Fact
title: # Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

source: ki
description: # Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

source: kilo
session_id: 0360684d-5217-4c00-a004-257aa764573e
resource: kilo://task/0360684d-5217-4c00-a004-257aa764573e

# Conver
resource: agentmemory://memory/mem_mspconrt_3140ecb6843d
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:27:55.790Z
source: agentmemory
strength: 7
---
# Content

# Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

source: kilo
session_id: 0360684d-5217-4c00-a004-257aa764573e
resource: kilo://task/0360684d-5217-4c00-a004-257aa764573e

# Conversation

- **Task ID:** `0360684d-5217-4c00-a004-257aa764573e`
- **Source:** kilo
- **Started:** 2025-12-19T21:49:19Z
- **Ended:** 2025-12-19T22:28:17Z
- **Message blocks:** 35
- **Tokens:** 1110382 in / 4348 out

---

### 👤 User — 2025-12-19T21:49:19Z

Thread 1: Fatal error: did not find a _$backingData for SurfaceJob

### 🤖 Assistant — 2025-12-19T21:49:26Z

<details><summary>Reasoning</summary>

The error is "Thread 1: Fatal error: did not find a _$backingData for SurfaceJob". This is a Swift runtime error, likely related to SwiftUI's @Observable or @StateObject not finding the backing data for a SurfaceJob object.


## Investigating the error  
- The error message is "Thread 1: Fatal error: did not find a _$backingData for SurfaceJob," indicating a Swift runtime issue.

</details>

### 🤖 Assistant — 2025-12-19T21:49:28Z

**Tool call: readFile**

```json
{
  "path": "Sources/SurfaceJob/SurfaceJobV1.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/SurfaceJob/SurfaceJobV1.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T21:49:30Z

<details><summary>Reasoning</summary>

The SurfaceJob is defined as a class that inherits from Job. Let me check the Job class to see if it's Observable.

</details>

### 🤖 Assistant — 2025-12-19T21:49:31Z

**Tool call: readFile**

```json
{
  "path": "Sources/Data/Job.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/Data/Job.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T21:49:33Z

<details><summary>Reasoning</summary>

The Job class is marked with @Model, which is for SwiftData, not for SwiftUI's @Observable. The error is about _$backingData, which is related to SwiftUI's @Observable macro.


</details>

### 🤖 Assistant — 2025-12-19T21:49:34Z

**Tool call: readFile**

```json
{
  "path": "Sources/SurfaceJob/SurfaceJobsView.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/SurfaceJob/SurfaceJobsView.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T21:49:40Z

<details><summary>Reasoning</summary>

The error is "Fatal error: did not find a _$backingData for SurfaceJob". This is a SwiftData error. In SwiftData, models need to be properly set up with backing data.


## Investigating the Error
- Encountered a "Fatal error: did not find a _$backingData for SurfaceJob," indicating a SwiftData issue.
- The error suggests SurfaceJob lacks proper backing data setup in the SwiftData model.

## Investigating the Error
- SurfaceJobV1.swift defines SurfaceJob as a class inheriting from Job, a @Model class in Job.swift.

</details>

### 🤖 Assistant — 2025-12-19T21:49:43Z

**Tool call: readFile**

```json
{
  "path": "Sources/MachineJob/MachineJobV1.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/MachineJob/MachineJobV1.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T21:49:46Z

<details><summary>Reasoning</summary>

Now I see the pattern. Both SurfaceJob and MachineJob inherit from Job, and Job is a @Model class for SwiftData. The error is about _$backingData, which is related to SwiftUI's @Observable.


</details>

### 🤖 Assistant — 2025-12-19T21:49:47Z

**Tool call: readFile**

```json
{
  "path": "Sources/SurfaceJob/SurfaceJobDetailView.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/SurfaceJob/SurfaceJobDetailView.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T21:49:50Z

<details><summary>Reasoning</summary>

Now I see the issue clearly. In SurfaceJobDetailView, line 20 shows:


## Identifying the issue  
- In SurfaceJobDetailView, line 20 uses @Binding var job: SurfaceJob, expecting an external binding.

</details>

### 🤖 Assistant — 2025-12-19T21:49:51Z

**Tool call: readFile**

```json
{
  "path": "Sources/Data/JobData.swift",
  "isOutsideWorkspace": false,
  "content": "/Volumes/Work/GCodeGen/Sources/Data/JobData.swift",
  "reason": ""
}
```

### 🤖 Assistant — 2025-12-19T21
