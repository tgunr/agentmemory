---
type: Fact
title: # iPhone camera bump and calibration

source: hermes
session_id: 20260728_110446
description: # iPhone camera bump and calibration

source: hermes
session_id: 20260728_110446_9437d4
resource: hermes://session/20260728_110446_9437d4

# Conversation

- **Session ID:** `20260728_110446_9437d4`
- 
resource: agentmemory://memory/mem_mspe02et_d808b3db35e9
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec/Work/tiltpal"]
timestamp: 2026-08-12T01:04:47.620Z
source: agentmemory
strength: 7
---
# Content

# iPhone camera bump and calibration

source: hermes
session_id: 20260728_110446_9437d4
resource: hermes://session/20260728_110446_9437d4

# Conversation

- **Session ID:** `20260728_110446_9437d4`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-28T16:04:46Z
- **Messages:** 21
- **CWD:** `/Volumes/davec/Work/tiltpal`
- **Tokens:** 63053 in / 12463 out

---

### 👤 User — 2026-07-28T16:04:46Z

Is the app taking in account of the camera bump on the back of the iphone? Does the bump affect the calibration?

### 🤖 Assistant — 2026-07-28T16:04:55Z

<details><summary>Reasoning</summary>

The user is asking about the TiltPal app and whether it accounts for the camera bump on the back of the iPhone, and whether the bump affects calibration.

Let me investigate the codebase to understand how the app measures tilt/leveling. The app is a leveling rig / tilt measurement app. Let me look at the code to understand how it uses the device's orientation sensors and whether it places the phone face-down (camera bump resting on surface) or face-up.

Let me explore the repo.

</details>

**Tool call: search_files**

```json
{
  "pattern": "camera|bump|rest|surface|flat|face|down|nani",
  "output_mode": "files_only"
}
```

**Tool call: search_files**

```json
{
  "pattern": "*.swift",
  "target": "files"
}
```

### 🤖 Assistant — 2026-07-28T16:05:01Z

<details><summary>Reasoning</summary>

Let me look at the key files: How the phone is placed, how calibration works, standoff spec (mentions edge inset for standoffs). Let me read SetupGeometry, StandoffSpec, SetupView, ContentView, LevelViewModel, MotionManager.

</details>

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/Sources/TiltPalCore/SetupGeometry.swift"
}
```

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/Sources/TiltPalCore/StandoffSpec.swift"
}
```

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/SetupView.swift"
}
```

### 🤖 Assistant — 2026-07-28T16:05:09Z

<details><summary>Reasoning</summary>

Now I need to understand the physical setup. The key question: how does the iPhone rest during use? Is it placed ON the surface (face down or up) as the leveling reference? Let me look at the ContentView, LevelViewModel, MotionManager, and TiltMeasurement to understand how the device orientation/tilt is measured. The camera bump matters if the phone rests face-down on a surface — then the camera bump raises the phone, and the body doesn't lie flat. But if the phone is used held in hand, or face-up, the bump doesn't matter for resting.

Let me read LevelViewModel, MotionManager, ContentView, TiltMeasurement, and the solver

</details>

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/LevelViewModel.swift"
}
```

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/MotionManager.swift"
}
```

**Tool call: read_file**

```json
{
  "path": "/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/ContentView.swift"
}
```

### 🤖 Assistant — 2026-07-28T16:05:26Z

<details><summary>Reasoning</summary>

Now I have a thorough understanding. Let me analyze the camera bump question.

The app uses CoreMotion gravity vector (device reference frame). The phone is the level reference. Tilt measurements are taken in the phone's own coordinate frame. The key question: does the camera bump affect calibration?

Let me think about the physics:

1. The app measures tilt via device motion gravity vector. This gives tilt of the *phone itself* relative to gravity. It does NOT depend on what the phone rests on — it uses the internal IMU (accelerometer/gyro), which measures the phone's orientation in space, independent of the physical surface it rests on.

2. So the phone is laid on the surface (presumably face up or screen up). The IMU measures the phone's tilt. Whether the phone rests flat on its back glass or is tilted up by a camera bump depends on how the user places it.

Now the camera bump question. The camera bump is a protrusion on the B
