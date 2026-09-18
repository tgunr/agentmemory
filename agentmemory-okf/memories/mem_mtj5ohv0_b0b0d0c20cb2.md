---
type: Fact
title: # Resize Images Using Sips

source: chatgpt
session_id: 45996e97-c88d-41c5-92e8-
description: # Resize Images Using Sips

source: chatgpt
session_id: 45996e97-c88d-41c5-92e8-59d14652ee1e
resource: chatgpt://conversation/45996e97-c88d-41c5-92e8-59d14652ee1e

# Conversation

- **Session ID:** `4
resource: agentmemory://memory/mem_mtj5ohv0_b0b0d0c20cb2
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/45996e97-c88d-41c5-92e8-59d14652ee1e"]
timestamp: 2026-09-01T21:04:56.070Z
source: agentmemory
strength: 7
---
# Content

# Resize Images Using Sips

source: chatgpt
session_id: 45996e97-c88d-41c5-92e8-59d14652ee1e
resource: chatgpt://conversation/45996e97-c88d-41c5-92e8-59d14652ee1e

# Conversation

- **Session ID:** `45996e97-c88d-41c5-92e8-59d14652ee1e`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-05-18T18:18:42.333543+00:00
- **Messages:** 2

---

### 👤 User

On macOS on the command line, how do I resize an image to a smaller size?

---

### 🤖 Assistant

You can use the `sips` command on macOS to resize images from the command line. Here’s how you can do it:

1. Open Terminal.
2. Run the following command:

```
sips -Z <desired-width> <path-to-your-image>
```

For example, if you want to resize an image to have a width of 800 pixels, you can use:

```
sips -Z 800 /path/to/your/image.jpg
```

This command will maintain the aspect ratio while resizing the image to the specified width.

---
