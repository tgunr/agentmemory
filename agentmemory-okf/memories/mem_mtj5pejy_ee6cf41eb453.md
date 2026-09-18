---
type: Fact
title: # User Request Summary: Title 4 Words

source: chatgpt
session_id: 1c0dc318-b2fb
description: # User Request Summary: Title 4 Words

source: chatgpt
session_id: 1c0dc318-b2fb-4cd8-8322-75d5659001ae
resource: chatgpt://conversation/1c0dc318-b2fb-4cd8-8322-75d5659001ae

# Conversation

- **Sessi
resource: agentmemory://memory/mem_mtj5pejy_ee6cf41eb453
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/1c0dc318-b2fb-4cd8-8322-75d5659001ae"]
timestamp: 2026-09-01T21:05:38.419Z
source: agentmemory
strength: 7
---
# Content

# User Request Summary: Title 4 Words

source: chatgpt
session_id: 1c0dc318-b2fb-4cd8-8322-75d5659001ae
resource: chatgpt://conversation/1c0dc318-b2fb-4cd8-8322-75d5659001ae

# Conversation

- **Session ID:** `1c0dc318-b2fb-4cd8-8322-75d5659001ae`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-03T19:03:56.261683+00:00
- **Messages:** 8

---

### 👤 User

Hello.

---

### 🤖 Assistant

Hi there! How's it going?

---

### 👤 User

I need some help with a SWIFT programming problem.

---

### 🤖 Assistant

Sure, I'd be happy to help! What's the problem you're facing with Swift?

---

### 👤 User

I need to parse a G-code file that's created for a CNC router. Basically, I need to match each line or, excuse me, I need to collect each line and then gather its parameters into a structure that I can test for certain conditions. So I need an array of G-code lines that is parsed by using a regular expression parser that obeys the rules for G-code files.

---

### 🤖 Assistant

Got it. You want to parse G-code lines from a file and extract the parameters into a structure. Here's a simple way to do this in Swift using regular expressions.

First, define a structure to hold the G-code parameters:

```swift
import Foundation

struct GCodeLine {
    let command: String
    let parameters: [String: Double]
}
```

Next, create a function to parse the G-code lines:

```swift
func parseGCodeLine(_ line: String) -> GCodeLine? {
    let pattern = #"([GMT][0-9]+)(\s*([A-Z])([0-9.]+))*"#
    let regex = try! NSRegularExpression(pattern: pattern)
    let matches = regex.matches(in: line, range: NSRange(line.startIndex..., in: line))
    
    guard let match = matches.first else { return nil }
    
    var command = ""
    var parameters = [String: Double]()
    
    for rangeIndex in 0..<match.numberOfRanges {
        let range = match.range(at: rangeIndex)
        if let substringRange = Range(range, in: line) {
            let matchString = String(line[substringRange])
            if rangeIndex == 1 {
                command = matchString
            } else if rangeIndex > 1, rangeIndex % 2 == 1 {
                let key = String(matchString)
                if let valueRange = Range(match.range(at: rangeIndex + 1), in: line) {
                    let valueString = String(line[valueRange])
                    if let value = Double(valueString) {
                        parameters[key] = value
                    }
                }
            }
        }
    }
    
    return GCodeLine(command: command, parameters: parameters)
}

func parseGCodeFile(_ content: String) -> [GCodeLine] {
    let lines = content.split(separator: "\n")
    var gcodeLines = [GCodeLine]()
    
    for line in lines {
        if let gcodeLine = parseGCodeLine(String(line)) {
            gcodeLines.append(gcodeLine)
        }
    }
    
    return gcodeLines
}
```

This function `parseGCodeLine` uses a regular expression to match G-code commands and their parameters, then it collects these into a `GCodeLine` structure. The `parseGCodeFile` function processes the entire file content line by line.

You can use it like this:

```swift
let gcodeContent = """
G01 X10 Y20 Z30
G02 X5 Y10
M03 S1000
"""

let gcodeLines = parseGCodeFile(gcodeContent)
for line in gcodeLines {
    print("Command: \(line.command), Parameters: \(line.parameters)")
}
```

This should give you a starting point. You can refine the regular expression and parsing logic as needed to handle more complex G-code variations.

---

### 👤 User

This code is skipping over even range value parameters

---

### 🤖 Assistant

I see the issue. Let's refine the regular expression and parsing logic to ensure that we capture all the parameters correctly. We'll adjust the pattern and the loop to correctly extract all key-value pairs.

Here's the revised code:

```swift
import Foundation

struct GCodeLine {
    let command: String
    let parameters: [String: Double]
}

func parseGCodeLine(_ line: String) -> GCodeLine? {
    let pattern = #"([GMT]\d+)((?:\s*[A-Z]\d+(\.\d*)?)*)"#
    let regex = try! NSRegularExpression(pattern: pattern)
    let matches = regex.matches(in: line, range: NSRange(line
