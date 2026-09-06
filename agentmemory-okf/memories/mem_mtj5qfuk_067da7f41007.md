---
type: Fact
title: # Models Stored in Linux

source: chatgpt
session_id: 2aaa9746-89ca-44e4-a423-f6
description: # Models Stored in Linux

source: chatgpt
session_id: 2aaa9746-89ca-44e4-a423-f6c7726cf323
resource: chatgpt://conversation/2aaa9746-89ca-44e4-a423-f6c7726cf323

# Conversation

- **Session ID:** `2aa
resource: agentmemory://memory/mem_mtj5qfuk_067da7f41007
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/2aaa9746-89ca-44e4-a423-f6c7726cf323"]
timestamp: 2026-09-01T21:06:26.745Z
source: agentmemory
strength: 7
---
# Content

# Models Stored in Linux

source: chatgpt
session_id: 2aaa9746-89ca-44e4-a423-f6c7726cf323
resource: chatgpt://conversation/2aaa9746-89ca-44e4-a423-f6c7726cf323

# Conversation

- **Session ID:** `2aaa9746-89ca-44e4-a423-f6c7726cf323`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-26T18:35:18.733434+00:00
- **Messages:** 4

---

### 👤 User

Where are models stored in Linux or LLAMA?

---

### 🤖 Assistant

Models in Linux or on systems running LLAMA (Large Language Model architectures) are typically stored in specific directories depending on the framework or application being used. For instance, if you are using a machine learning framework like TensorFlow, PyTorch, or similar, the models are generally stored in a directory specified by you when you save the model.

Common locations include:
- In the user's home directory, often under a subdirectory like `~/models`.
- Within a project directory, such as `~/my_project/models`.
- In system directories, if the model is shared system-wide, like `/usr/local/models` or `/var/models`.

If you're referring to a specific tool or application, such as an LLAMA-based tool, it would usually have documentation specifying where it stores its models. Would you like more detailed information on a specific tool or framework?

---

### 👤 User

When I execute ollama pull model on linux debian where is the model stored?

---

### 🤖 Assistant

When you execute `ollama pull model` on a Linux Debian system, the model is stored in a directory within your home directory by default. Specifically, it is usually stored in the `~/.ollama` directory.

Here's how you can locate it:

1. **Open a terminal.**
2. **Navigate to the `.ollama` directory:**
   ```bash
   cd ~/.ollama
   ```
3. **List the contents:**
   ```bash
   ls
   ```
   You should see the pulled model stored in this directory.

If you want to change the default storage location, you can usually configure this in the application's settings or configuration files. Refer to the documentation of the specific version of `ollama` you are using for more detailed instructions on customizing the storage path.

---
