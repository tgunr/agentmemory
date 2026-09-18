---
type: Fact
title: # Navigating to GenerateView with SwiftUI

source: hermes
session_id: claude__59
description: # Navigating to GenerateView with SwiftUI

source: hermes
session_id: claude__59626625-fa78-4144-9963-39e2a415f19a
resource: hermes://session/claude__59626625-fa78-4144-9963-39e2a415f19a

# Conversati
resource: agentmemory://memory/mem_mtj61zmd_e916cb61265d
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:25.575Z
source: agentmemory
strength: 7
---
# Content

# Navigating to GenerateView with SwiftUI

source: hermes
session_id: claude__59626625-fa78-4144-9963-39e2a415f19a
resource: hermes://session/claude__59626625-fa78-4144-9963-39e2a415f19a

# Conversation

- **Session ID:** `claude__59626625-fa78-4144-9963-39e2a415f19a`
- **Source:** claude
- **Model:** None
- **Started:** 2024-07-05T12:18:56Z
- **Ended:** 2024-07-05T12:45:54Z
- **Messages:** 4
- **CWD:** `/Users/davec`

---

### 👤 User — 2024-07-05T12:19:10Z

In this code when I click on GenerateGCodeButton it is supposed to open GenerateView. However, I get an error 
A `navigationDestination(isPresented:content:)` is misplaced. It's outside of an explicit NavigationStack, but inside the detail column of a NavigationSplitView, so it attempts to target the next column. There is no next column after the detail column.

Did you mean to put the navigationDestination inside a NavigationStack or else in a prior column?

_Attachments: DetailActionView.swift, SurfaceJobsView.swift, SurfaceJobDetailView.swift, GenerateView.swift, GenerateGCodeButton.swift_

_Attachments: DetailActionView.swift, SurfaceJobsView.swift, SurfaceJobDetailView.swift, GenerateView.swift, GenerateGCodeButton.swift_

### 🤖 Assistant — 2024-07-05T12:19:10Z

Thank you for providing the context and the error message. I understand the issue now. The problem is that the `navigationDestination` modifier is being used in a context where it can't properly function. Let's modify the `GenerateGCodeButton` to work correctly within the existing navigation structure.

Here's how we can refactor the `GenerateGCodeButton`:

1. Instead of using `navigationDestination`, we'll use a sheet presentation.
2. We'll modify the button to present the `GenerateView` as a sheet.

Here's the updated `GenerateGCodeButton` code:

```swift
struct GenerateGCodeButton: View {
    @EnvironmentObject var jd: JobData
    @Bindable var job: SurfaceJob
    @State private var isGenerateViewPresented = false

    var body: some View {
        if job.saveAs > 0 {
            Button("Generate GCode File") {
                uiview.entry("GenerateGCodeButton: Generate GCode")
                generate(job: job)
                isGenerateViewPresented = true
            }
            .onAppear {
                uiview.entry("GenerateGCodeButton: Generate job.saveAs \(job.saveAs)")
            }
            .buttonStyle(SFSymbolButtonStyle(sfIconString: "hand.tap.fill"))
            .padding(24)
            .sheet(isPresented: $isGenerateViewPresented) {
                GenerateView(job: job)
            }
        } else if job.saveAs == 0 {
            Button("Select GCode Creation(s)") {
                uiview.entry("GenerateGCodeButton: Select GCode Creation")
                jd.highlightSaveAs = true
            }
            .onAppear {
                uiview.entry("GenerateGCodeButton: Select job.saveAs \(job.saveAs)")
            }
            .buttonStyle(SFSymbolButtonStyle(sfIconString: "exclamationmark.triangle"))
            .foregroundColor(.white)
            .padding(4)
        }
    }
}
```

Key changes:

1. Renamed `isGenerateViewActive` to `isGenerateViewPresented` for clarity.
2. Replaced `navigationDestination` with `.sheet(isPresented:)`.

This modification will present the `GenerateView` as a sheet instead of trying to navigate to it. This approach should work regardless of whether the button is in a `NavigationStack`, `NavigationSplitView`, or any other container.

To further improve the user experience, you might want to add a way to dismiss the sheet from within the `GenerateView`. You can do this by passing a binding to control the sheet's presentation:

```swift
struct GenerateView: View {
    @Environment(\.dismiss) private var dismiss
    @Bindable var job: SurfaceJob

    var body: some View {
        NavigationView {
            mainBody
                .navigationBarItems(trailing: Button("Done") {
                    dismiss()
                })
        }
    }

    // ... rest of the GenerateView implementation
}
```

This change adds a "Done" button to the `GenerateView` that allows the user to dismiss the sheet.

These modifications should resolve the navig
