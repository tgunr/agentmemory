---
type: Fact
title: # No Models Visible After Creating New User in OpenWebUI

source: claude
session
description: # No Models Visible After Creating New User in OpenWebUI

source: claude
session_id: e8560a48-4376-4522-bf2d-5c89b1cc3033
resource: claude://conversation/e8560a48-4376-4522-bf2d-5c89b1cc3033

# Conver
resource: agentmemory://memory/mem_mti61fmp_2d8008adb77c
tags: ["okf", "okf-claude", "claude", "claude://conversation/e8560a48-4376-4522-bf2d-5c89b1cc3033"]
timestamp: 2026-09-01T04:27:13.514Z
source: agentmemory
strength: 7
---
# Content

# No Models Visible After Creating New User in OpenWebUI

source: claude
session_id: e8560a48-4376-4522-bf2d-5c89b1cc3033
resource: claude://conversation/e8560a48-4376-4522-bf2d-5c89b1cc3033

# Conversation

- **Session ID:** `e8560a48-4376-4522-bf2d-5c89b1cc3033`
- **Source:** claude
- **Started:** 2025-05-18T17:16:21Z
- **Messages:** 20

---

### 👤 User — 2025-05-18T17:16:21Z

In OpenWebUI, after I create a user, I log in as that user, start a new, it says select model but there no models under the popup menu.

---

### 🤖 Assistant — 2025-05-18T17:16:31Z

The person is experiencing an issue with OpenWebUI where after creating a user and logging in, they're unable to select a model because no models appear in the dropdown menu. Let me think about what could be causing this issue and how to resolve it.

OpenWebUI is an open-source web interface for running and interacting with large language models, similar to ChatGPT but for self-hosted or open-source models. It's designed to work with various model backends.

Common issues that might cause models not to appear in the dropdown:

1. The backend server running the models isn't properly connected to OpenWebUI
2. No models have been configured or loaded into the backend
3. There might be permission issues with the user account that was created
4. Configuration issues in the OpenWebUI setup
5. Network connectivity issues between components

To help the person, I should provide some troubleshooting steps that cover these potential issues. I'll focus on helping them verify their setup, check connections, and make sure models are properly configured.I understand you're having an issue with OpenWebUI where no models are appearing in the selection dropdown after creating and logging in as a new user. This is typically a configuration or connection issue. Let me help you troubleshoot:

1. **Check if the backend is running properly**:
   - Verify that whatever backend you're using (like Ollama, LM Studio, or a directly-hosted model) is up and running
   - Confirm the backend server logs don't show any errors

2. **Verify OpenWebUI configuration**:
   - Make sure your OpenWebUI is correctly configured to connect to your model backend
   - Check the `.env` file or environment variables for correct API endpoints and connection details

3. **Check admin settings**:
   - Log in as an admin user
   - Go to the admin panel/settings
   - Verify that models are properly configured and enabled
   - Check if models need to be assigned to specific user roles

4. **Examine Docker setup** (if using Docker):
   - Ensure all containers are running (`docker ps`)
   - Check that network connectivity between containers is working

Could you share more details about your setup? For example:
- How are you running OpenWebUI (Docker, direct installation)?
- Which backend are you using for the models?
- Are you able to log in as an admin and see models there?

---

### 👤 User — 2025-05-18T17:43:06Z

how to sigin forgotten password openweb ui?

---

### 🤖 Assistant — 2025-05-18T17:43:14Z

The user is asking how to sign in with a forgotten password in OpenWebUI. Let me provide instructions on how to reset or recover a forgotten password in OpenWebUI.

OpenWebUI is an open-source web UI for LLM (Large Language Model) interactions, and like many web applications, it should have a password recovery mechanism. However, the specific process might depend on how OpenWebUI is deployed and configured.

Here are the typical approaches for recovering a forgotten password in OpenWebUI:If you've forgotten your password for OpenWebUI, here are the ways to recover access:

## Standard Password Reset

1. On the login page, look for a "Forgot Password" or similar link
2. If available, click it and follow the password reset instructions (typically involves sending a reset link to your email)

## Admin Reset

If the standard reset doesn't work or isn't available:

1. Ask an administrator of your OpenWebUI instance to reset your password
2. The admin can typically do this through the admin panel

## Manual Reset (if you have server access)

If you're the admin or have access to the server running OpenWebUI:

1. Access th
