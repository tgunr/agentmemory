---
type: Fact
title: # Debugging Python in Zed

source: claude
session_id: d7549b39-3181-4576-8e1a-a7
description: # Debugging Python in Zed

source: claude
session_id: d7549b39-3181-4576-8e1a-a7980b0af1a3
resource: claude://conversation/d7549b39-3181-4576-8e1a-a7980b0af1a3

# Conversation

- **Session ID:** `d754
resource: agentmemory://memory/mem_mtj6dfq5_e2bc02b85d2e
tags: ["okf", "okf-claude", "claude", "claude://conversation/d7549b39-3181-4576-8e1a-a7980b0af1a3"]
timestamp: 2026-09-01T21:24:19.664Z
source: agentmemory
strength: 7
---
# Content

# Debugging Python in Zed

source: claude
session_id: d7549b39-3181-4576-8e1a-a7980b0af1a3
resource: claude://conversation/d7549b39-3181-4576-8e1a-a7980b0af1a3

# Conversation

- **Session ID:** `d7549b39-3181-4576-8e1a-a7980b0af1a3`
- **Source:** claude
- **Started:** 2025-08-01T11:42:01Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user requested a comprehensive step-by-step guide for debugging Python projects using Zed on macOS. Claude provided detailed instructions covering the complete debugging workflow, from initial setup through active debugging sessions. The explanation included prerequisite installations (Python and debugpy), configuring Zed with the Python extension, setting up the Python interpreter, and creating debug configurations using VS Code's launch.json format that Zed supports. Claude documented specific debugging techniques including setting breakpoints, using debug controls (F5 for continue, F10 for step over, F11 for step into), inspecting variables through hover and watch panels, utilizing the debug console for expression evaluation, and navigating the call stack. The guide also covered advanced scenarios like debugging scripts with command-line arguments and working within virtual environments. Claude provided concrete JSON configuration examples for different debugging scenarios including current file debugging and main module debugging, along with the exact keyboard shortcuts and command palette operations needed to execute each step effectively in Zed's interface.

---

### 👤 User — 2025-08-01T11:42:03Z

Explain step by step how to debug a python project using Zed on macos

---

### 🤖 Assistant — 2025-08-01T11:42:26Z

Here's a step-by-step guide to debug a Python project using Zed on macOS:

## Prerequisites
First, ensure you have Python and the Python debugger installed:
```bash
# Install Python if not already installed
brew install python

# Install debugpy (Python debug adapter)
pip install debugpy
```

## Setting up Zed for Python Debugging

1. **Install Python Extension**
   - Open Zed
   - Press `Cmd + Shift + P` to open command palette
   - Type "Extensions" and select "Extensions: Open Extensions"
   - Search for and install the Python extension

2. **Configure Python Interpreter**
   - Open your Python project in Zed
   - Press `Cmd + Shift + P` and type "Python: Select Interpreter"
   - Choose your Python interpreter (system Python, virtual environment, etc.)

## Creating Debug Configuration

3. **Create launch.json**
   - In your project root, create a `.vscode` folder (Zed uses VS Code's debug configuration format)
   - Inside `.vscode`, create a `launch.json` file:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Current File",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "cwd": "${workspaceFolder}"
        },
        {
            "name": "Python: Main Module",
            "type": "python",
            "request": "launch",
            "program": "${workspaceFolder}/main.py",
            "console": "integratedTerminal",
            "cwd": "${workspaceFolder}"
        }
    ]
}
```

## Debugging Your Code

4. **Set Breakpoints**
   - Click in the gutter (left margin) next to line numbers where you want to pause execution
   - A red dot will appear indicating a breakpoint

5. **Start Debugging**
   - Press `F5` or use `Cmd + Shift + P` and search for "Debug: Start Debugging"
   - Select your debug configuration from the dropdown
   - The debugger will start and pause at your first breakpoint

6. **Debug Controls**
   - **Continue** (`F5`): Resume execution until next breakpoint
   - **Step Over** (`F10`): Execute current line and move to next
   - **Step Into** (`F11`): Enter function calls
   - **Step Out** (`Shift + F11`): Exit current function
   - **Stop** (`Shift + F5`): End debugging session

## Using Debug Features

7. **Inspect Variables**
   - The debug panel shows local and global variables
   - Hover over variables in your code to see their values
   - Use the 
