---
type: Fact
title: # SwiftUI bug debugging tips

source: chatgpt
session_id: 68acb0e1-e7ec-8322-abe
description: # SwiftUI bug debugging tips

source: chatgpt
session_id: 68acb0e1-e7ec-8322-abe3-db5227accce0
resource: chatgpt://conversation/68acb0e1-e7ec-8322-abe3-db5227accce0

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mtj5p13k_7e55aade2103
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/68acb0e1-e7ec-8322-abe3-db5227accce0"]
timestamp: 2026-09-01T21:05:21.000Z
source: agentmemory
strength: 7
---
# Content

# SwiftUI bug debugging tips

source: chatgpt
session_id: 68acb0e1-e7ec-8322-abe3-db5227accce0
resource: chatgpt://conversation/68acb0e1-e7ec-8322-abe3-db5227accce0

# Conversation

- **Session ID:** `68acb0e1-e7ec-8322-abe3-db5227accce0`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-25T18:52:21.794656+00:00
- **Messages:** 2

---

### 👤 User

There's a SwiftUI bug in my Xcode project that's causing unexpected behavior. What are the best debugging techniques to track it down?

---

### 🤖 Assistant

Here’s a compact, battle-tested playbook I use for pesky SwiftUI bugs. Pick a few that fit your symptom and work down.

# 1) Reproduce fast & shrink it
- Make a **minimal repro view**: copy the problematic view into a fresh SwiftUI app and delete code until the bug disappears—then add pieces back (binary search).
- Lock versions: same iOS / macOS target, same device type, and disable animations (`.transaction { $0.disablesAnimations = true }`) to remove timing noise.

# 2) Inspect state flow (most SwiftUI “weirdness” = state)
- Check you’re using the right wrappers:
  - **@State** for simple, view-local.
  - **@StateObject** for owning an ObservableObject (created here).
  - **@ObservedObject** when the parent owns it.
  - **@EnvironmentObject** only for app-wide dependencies.
- Verify there’s **one source of truth** for each piece of data.
- Ensure stable identity:
  - Lists/ForEach: use a **stable `id:`** (not `\ .self` on value types that change).
  - Avoid unnecessary `.id(someChangingValue)` which resets view state.
- Watch for **mutation during view updates** (classic runtime warning). Never set state inside your `body` or synchronous property observers that run while the body is computing.

# 3) Log what actually changes
Drop these in the view you suspect:

```swift
struct DebuggableView: View {
    @State private var count = 0
    var body: some View {
        Self._printChanges()   // shows which @State / deps triggered a refresh
        return VStack {
            Text("Count \(count)")
            Button("Inc") { count += 1 }
        }
    }
}
```

Also log state transitions:

```swift
.onChange(of: viewModel.status) { old, new in
    print("status: \(old) → \(new)")
}
```

For Combine pipelines, add:

```swift
publisher
    .handleEvents(receiveSubscription: { _ in print("subscribed") },
                  receiveOutput: { print("value:", $0) },
                  receiveCompletion: { print("done:", $0) })
    .sink { _ in } receiveValue: { _ in }
```

# 4) Use breakpoints that catch “SwiftUI runtime issues”
- Add an **Exception Breakpoint** (All) to stop where things *go* wrong, not where they *crash*.
- Add a **Debugger Output breakpoint** with the text:
  - `Modifying state during view update`
  - `Publishing changes from within view updates is not allowed`
This halts at the offending line the moment the message appears in the console.

# 5) Xcode’s visual debuggers
- **Debug View Hierarchy**: confirms which view is on screen, hit-testing, clipping, and layout constraints for representables.
- **Memory Graph Debugger**: catch retain cycles (e.g., `@StateObject` referencing something that captures the view).
- **Instruments**
  - **Time Profiler** + **SwiftUI** template: spot expensive `body` recomputes or thrashy layout.
  - **Points of Interest** with `os.signpost` to see user actions and async phases on a timeline.

# 6) Structured logging & signposts (better than `print`)
```swift
import OSLog

private let log = Logger(subsystem: "com.yourapp", category: "ui")

log.debug("Tapped Save, draftID=\(self.draft.id)")
log.error("Unexpected nil model for screen=\(self.screenName)")

// Timeline signposts for Instruments
import os.signpost
let sp = OSSignpostID(log: .pointsOfInterest)
os_signpost(.begin, log: .pointsOfInterest, name: "LoadDetail", signpostID: sp)
// …work…
os_signpost(.end, log: .pointsOfInterest, name: "LoadDetail", signpostID: sp)
```

# 7) Layout & rendering checks
- Temporarily **outline** views to see size/alignment issues:
```swift
.overlay(RoundedRectangle(cornerRadius: 2).stroke())
```
- Use a **GeometryReader** or the `.background(GeometryReader…)` trick 
