---
type: Fact
title: # Updating currentFolder in ScrollView

source: hermes
session_id: claude__e8d29
description: # Updating currentFolder in ScrollView

source: hermes
session_id: claude__e8d292a5-a204-4930-bc66-eb171876a5b9
resource: hermes://session/claude__e8d292a5-a204-4930-bc66-eb171876a5b9

# Conversation

resource: agentmemory://memory/mem_mtj63bs4_ba772d7cb457
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:27.975Z
source: agentmemory
strength: 7
---
# Content

# Updating currentFolder in ScrollView

source: hermes
session_id: claude__e8d292a5-a204-4930-bc66-eb171876a5b9
resource: hermes://session/claude__e8d292a5-a204-4930-bc66-eb171876a5b9

# Conversation

- **Session ID:** `claude__e8d292a5-a204-4930-bc66-eb171876a5b9`
- **Source:** claude
- **Model:** None
- **Started:** 2024-09-23T21:51:18Z
- **Ended:** 2024-09-23T22:06:14Z
- **Messages:** 8
- **CWD:** `/Users/davec`

---

### 👤 User — 2024-09-23T21:51:33Z

In the ScrollViw I need to compare the current entry.appURL with currentFolder and if different reset currentFolder = appEntry.entryURL

_Attachments: AppFoldersView.swift_

_Attachments: AppFoldersView.swift_

### 🤖 Assistant — 2024-09-23T21:51:33Z

Certainly, I can help you modify the ScrollView to compare the current entry's appURL with currentFolder and update currentFolder when they're different. Here's how we can modify the code:

<antThinking>This request involves modifying existing code, which is a good use case for an artifact. We'll update the existing "AppFoldersView" artifact to include the requested changes. This is substantial, self-contained code that the user is likely to modify further.</antThinking>

<antArtifact identifier="app-folders-view" type="application/vnd.ant.code" language="swift" title="Updated AppFoldersView with currentFolder comparison">
struct AppFoldersView: View {
    @ObservedObject var appData = AppData.shared
    @State var appEntries: [AppEntry] = []
    @State var selectedItem: String? = nil
    @State private var currentFolder: URL = URL(fileURLWithPath: "/")
    @State private var showPlain: Bool = false
    
    var body: some View {
        let _ = symlog.debug("AppFoldersViews")
        VStack {
            if appEntries.isEmpty {
                ProgressView("Gathering Apps")
            } else {
                let url = URL(string: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678084-folder-128.png")!
                
                Button {
                    showPlain.toggle()
                } label: {
                    VStack {
                        RemoteImageView(url: url)
                            .frame(width: 32, height: 32)
                        Text("Show Plain")
                    }
                }
                .padding(.bottom, 10)
                
                ScrollView {
                    LazyVGrid(columns: [GridItem(.adaptive(minimum: 150))], spacing: 20) {
                        ForEach($appEntries, id: \.self) { $entry in
                            // Compare the current entry's appURL with currentFolder
                            if entry.appURL != currentFolder {
                                // If they're different, update currentFolder
                                let _ = { currentFolder = entry.appURL }()
                                
                                if !entry.isApp && !entry.hasCustomIcon {
                                    AppFolderView(entry: $entry)
                                }
                            }
                        }
                        if showPlain {
                            ForEach($appEntries, id: \.self) { $entry in
                                if entry.isFolder && !entry.hasCustomIcon && !entry.isApp {
                                    AppFolderView(entry: $entry)
                                }
                            }
                        } else {
                            ForEach($appEntries, id: \.self) { $entry in
                                AppFolderView(entry: $entry)
                            }
                        }
                    }
                }
                .padding()
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .animation(.default, value: selectedItem)
        .task {
            symlog.info("Fetching Apps")
            await fetchApps()
        }
    }

    private func fetchApps() async {
        for folder in AppData.shared.folders {
            let entries = AppEntry.scanApplications(atPath: folder.url.path, currentDirectory: nil)
            DispatchQueue.main.async {
                appEntrie
