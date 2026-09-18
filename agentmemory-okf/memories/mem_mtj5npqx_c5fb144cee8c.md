---
type: Fact
title: # Get Mouse Coordinates: macOS

source: chatgpt
session_id: 9d2e31cc-ed51-4480-8
description: # Get Mouse Coordinates: macOS

source: chatgpt
session_id: 9d2e31cc-ed51-4480-840a-e8335a6a45f5
resource: chatgpt://conversation/9d2e31cc-ed51-4480-840a-e8335a6a45f5

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mtj5npqx_c5fb144cee8c
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/9d2e31cc-ed51-4480-840a-e8335a6a45f5"]
timestamp: 2026-09-01T21:04:19.634Z
source: agentmemory
strength: 7
---
# Content

# Get Mouse Coordinates: macOS

source: chatgpt
session_id: 9d2e31cc-ed51-4480-840a-e8335a6a45f5
resource: chatgpt://conversation/9d2e31cc-ed51-4480-840a-e8335a6a45f5

# Conversation

- **Session ID:** `9d2e31cc-ed51-4480-840a-e8335a6a45f5`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-07T22:03:28.594324+00:00
- **Messages:** 10

---

### 👤 User

In macOS, how can I find the mouse coordinates from the relative window location?

---

### 🤖 Assistant

To get the mouse coordinates relative to a window in macOS, you can use the AppKit framework, specifically the `NSWindow` and `NSEvent` classes. Here's a step-by-step guide on how to achieve this:

1. **Get the Current Mouse Location:**
   Use `NSEvent.mouseLocation` to get the current mouse location in the screen coordinate system.

2. **Convert Screen Coordinates to Window Coordinates:**
   Use the `convertPoint(fromScreen:)` method of `NSWindow` to convert the screen coordinates to window coordinates.

Here's a sample code snippet to illustrate this process in Swift:

```swift
import Cocoa

// Assuming you have a reference to your NSWindow instance
let window: NSWindow = ...

// Get the current mouse location in screen coordinates
let mouseLocationInScreen = NSEvent.mouseLocation

// Convert the screen coordinates to window coordinates
let mouseLocationInWindow = window.convertPoint(fromScreen: mouseLocationInScreen)

// If you need the coordinates relative to a specific view in the window
if let contentView = window.contentView {
    let mouseLocationInView = contentView.convert(mouseLocationInWindow, from: nil)
    print("Mouse location in view: \(mouseLocationInView)")
} else {
    print("Mouse location in window: \(mouseLocationInWindow)")
}
```

### Explanation:

1. `NSEvent.mouseLocation`: This provides the current mouse location in the screen coordinate system, where the origin is at the bottom-left of the main screen.

2. `window.convertPoint(fromScreen:)`: Converts the point from the screen coordinate system to the window's coordinate system. The window's coordinate

---

### 👤 User

Using macOS application or command line, how do I get the mouse coordinates in relative location to the current acting screen?

---

### 🤖 Assistant

To get the mouse coordinates relative to the current screen on macOS, you can use the command line or write a small macOS application using Swift. Here's how you can achieve this in both ways:

### Using Command Line (with `cliclick`)

`cliclick` is a command-line tool for macOS that allows you to simulate mouse and keyboard events. You can install it using Homebrew and then use it to get the mouse coordinates.

1. **Install `cliclick`:**
   ```bash
   brew install cliclick
   ```

2. **Get the Mouse Coordinates:**
   ```bash
   cliclick p
   ```

This command will print the current mouse position in the format `x,y`.

### Using Swift in a macOS Application

You can create a small macOS application to get the mouse coordinates relative to the current screen using the `NSScreen` and `NSEvent` classes.

Here's a Swift code snippet to illustrate this:

```swift
import Cocoa

// Get the current mouse location in screen coordinates
let mouseLocationInScreen = NSEvent.mouseLocation

// Iterate through all screens to find the screen containing the mouse pointer
if let screen = NSScreen.screens.first(where: { $0.frame.contains(mouseLocationInScreen) }) {
    // Convert the mouse location to the coordinate system of the found screen
    let mouseLocationInScreenRelative = mouseLocationInScreen
    let screenOrigin = screen.frame.origin
    
    let mouseLocationRelativeToScreen = CGPoint(
        x: mouseLocationInScreenRelative.x - screenOrigin.x,
        y: mouseLocationInScreenRelative.y - screenOrigin.y
    )
    
    print("Mouse location relative to the current screen: \(mouseLocationRelativeToScreen)")
} else {
    print("Mouse is not on any screen (this should not happen)")
}
```

### Explanation:

1. `NSEvent.mouseLocation`: Gets the current mouse location in screen coordinates (global coordinates).

2. `NSScreen.screens`: An array of all available screens.

3. `screen.frame.contains(mouseLocationInS
