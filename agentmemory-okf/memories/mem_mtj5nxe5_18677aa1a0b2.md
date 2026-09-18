---
type: Fact
title: # Xcode Extension: Edit Braces

source: chatgpt
session_id: 5758339f-3abb-4744-8
description: # Xcode Extension: Edit Braces

source: chatgpt
session_id: 5758339f-3abb-4744-8c4f-2d0775f964cf
resource: chatgpt://conversation/5758339f-3abb-4744-8c4f-2d0775f964cf

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mtj5nxe5_18677aa1a0b2
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/5758339f-3abb-4744-8c4f-2d0775f964cf"]
timestamp: 2026-09-01T21:04:29.565Z
source: agentmemory
strength: 7
---
# Content

# Xcode Extension: Edit Braces

source: chatgpt
session_id: 5758339f-3abb-4744-8c4f-2d0775f964cf
resource: chatgpt://conversation/5758339f-3abb-4744-8c4f-2d0775f964cf

# Conversation

- **Session ID:** `5758339f-3abb-4744-8c4f-2d0775f964cf`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-12-26T14:44:03.899212+00:00
- **Messages:** 20

---

### 👤 User

I need an extension in Xcode that will delete or comment out a line with a brace along with is matching brace leaving the other code within intact

---

### 🤖 Assistant

Creating an Xcode extension to delete or comment out a line with a brace and its matching brace involves working with Xcode Source Editor extensions, which are written in Swift. Below is a basic example of how you might achieve this. Note that building Xcode extensions requires Xcode 8 or later.

1. Open Xcode and create a new macOS project using the "Xcode Source Editor Extension" template.

2. In the `Extension` folder, locate `SourceEditorCommand.swift` and replace its content with the following:

```swift
import Foundation
import XcodeKit

class SourceEditorCommand: NSObject, XCSourceEditorCommand {

    func perform(with invocation: XCSourceEditorCommandInvocation, completionHandler: @escaping (Error?) -> Void) {
        guard let selection = invocation.buffer.selections.firstObject as? XCSourceTextRange else {
            completionHandler(nil)
            return
        }

        let startLine = selection.start.line
        let endLine = selection.end.line

        // Ensure that the selection is valid
        guard startLine < invocation.buffer.lines.count && endLine < invocation.buffer.lines.count else {
            completionHandler(nil)
            return
        }

        // Find the matching brace
        var braceStack: [Character] = []
        var currentLine = startLine
        var matchingLine: Int?

        while currentLine <= endLine {
            let line = invocation.buffer.lines[currentLine] as! String

            for char in line {
                if char == "{" {
                    braceStack.append(char)
                } else if char == "}" {
                    if braceStack.isEmpty {
                        matchingLine = currentLine
                        break
                    } else {
                        braceStack.removeLast()
                    }
                }
            }

            if matchingLine != nil {
                break
            }

            currentLine += 1
        }

        // Delete or comment out the lines
        if let matchingLine = matchingLine {
            for i in stride(from: endLine, through: startLine, by: -1) {
                invocation.buffer.lines.removeObject(at: i)
            }

            // If you want to comment out the removed code, you can uncomment the next line
            // invocation.buffer.lines.insert("//", at: startLine)

            // Adjust the selection to the line after the removed code
            selection.start.line = startLine
            selection.end.line = startLine
        }

        completionHandler(nil)
    }
}
```

This example assumes that the braces are on their own lines and do not contain any other code. It's a simple starting point that you can customize based on your specific requirements.

3. Build and run your Xcode extension. This will install the extension in Xcode.

4. Open Xcode and select some lines containing a pair of braces.

5. Go to Editor > Xcode Source Editor > YourCommandName to execute your extension.

Remember that working with Xcode extensions can be a bit tricky due to the constraints and limitations imposed by Apple. You may need to adjust the code based on your specific use case and handle additional scenarios or edge cases.

---

### 👤 User

There is no Xcode Source Editor Extension

---

### 🤖 Assistant

I apologize for the confusion. You're correct, and I appreciate your patience. As of my last knowledge update in January 2022, Xcode Source Editor Extensions have been deprecated, and there is no direct support for creating source editor extensions in recent versions of Xcode.

If you want to achieve similar functionality, you
