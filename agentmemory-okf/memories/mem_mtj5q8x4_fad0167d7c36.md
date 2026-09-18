---
type: Fact
title: # TRAMP Remote Connection Issues

source: chatgpt
session_id: 67103bf2-51f8-800e
description: # TRAMP Remote Connection Issues

source: chatgpt
session_id: 67103bf2-51f8-800e-a4c0-8817787b56db
resource: chatgpt://conversation/67103bf2-51f8-800e-a4c0-8817787b56db

# Conversation

- **Session ID
resource: agentmemory://memory/mem_mtj5q8x4_fad0167d7c36
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/67103bf2-51f8-800e-a4c0-8817787b56db"]
timestamp: 2026-09-01T21:06:17.773Z
source: agentmemory
strength: 7
---
# Content

# TRAMP Remote Connection Issues

source: chatgpt
session_id: 67103bf2-51f8-800e-a4c0-8817787b56db
resource: chatgpt://conversation/67103bf2-51f8-800e-a4c0-8817787b56db

# Conversation

- **Session ID:** `67103bf2-51f8-800e-a4c0-8817787b56db`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-10-16T22:19:30.532669+00:00
- **Messages:** 4

---

### 👤 User

[MEDIA: image_asset_pointer file-service://file-e8pfOZriQG5xj7Mo4o9ClL9P]

What is causing this and how to fix it when trying to connect to remote server using tramp

---

### 🤖 Assistant

The issue you're encountering while trying to connect to the remote server using Emacs TRAMP is likely due to TRAMP's inability to correctly identify or interact with the remote shell prompt. In the image, it mentions "Couldn't find remote shell prompt for /bin/sh," which suggests that TRAMP is having trouble recognizing the shell prompt on the remote server.

Here are some steps to fix it:

1. **Ensure Remote Shell Compatibility:**
   Check if the remote shell on the server is `/bin/sh`. TRAMP expects certain standard shells like `/bin/bash` or `/bin/sh`. If the remote server uses a different shell (e.g., `fish` or `zsh`), TRAMP might have trouble detecting the prompt.

   You can force TRAMP to use a specific shell by adding this to your Emacs configuration (`~/.emacs.d/init.el` or `~/.emacs`):

   ```emacs-lisp
   (setq tramp-default-method "ssh")
   (setq tramp-shell-prompt-pattern "^[^#$%>\n]*[#$%>] *")
   ```

   If you're using `zsh`, you might need to adjust the shell prompt pattern to match the one used by your remote shell.

2. **Check and Correct Zsh Autocorrect:**
   In the image, it looks like `zsh` is trying to correct your input (`correct 'env' to 'venv'`). This autocorrection feature of `zsh` could interfere with TRAMP's ability to recognize the prompt.

   You can disable `zsh` autocorrect by adding this to the `.zshrc` file on the remote server:

   ```bash
   unsetopt correct_all
   ```

   After making this change, reload your `.zshrc`:

   ```bash
   source ~/.zshrc
   ```

3. **Test SSH Connection Separately:**
   Try connecting to the remote server via SSH outside of Emacs to check if the shell is functioning as expected. This will help determine if the issue is with the shell prompt or something else.

4. **TRAMP Debugging:**
   You can enable TRAMP debugging to get more detailed information about what is going wrong. In Emacs, you can set the TRAMP debug level:

   ```emacs-lisp
   (setq tramp-verbose 10)
   ```

   Then, retry the connection and check the `*tramp/ssh root@...*` buffer for more detailed logs.

By following these steps, you should be able to address the problem with TRAMP not recognizing the remote shell prompt. Let me know how it goes or if you need further assistance!

---

### 👤 User

17:24:54.187428 tramp-flush-connection-property (7) # locked
17:24:54.187541 tramp-wait-for-regexp (6) # 
#$ 
17:24:54.187769 tramp-wait-for-regexp (1) # File error: [[Regexp ‘\(?:^[^#$%>
]*[#$%>] *\|^[^#$%>
]*[#$%>] *\)\(?:\[[0-?]*[ -/]*[@-~]\)?\'’ not found in 10 secs]]
#$ 
17:24:54.187907 tramp-get-connection-property (7) # prompt nil; cache used: nil
17:24:54.187997 tramp-process-sentinel (5) # Sentinel called: ‘#<process *tramp/ssh root@10.1.1.1*>’ ‘killed: 9
’
17:24:54.188130 tramp-flush-connection-properties (7) # *tramp/ssh root@10.1.1.1* nil
17:24:54.194682 tramp-barf-if-no-shell-prompt (1) # , Could not find node executable
#$

---

### 🤖 Assistant

The log indicates that TRAMP is not able to match the expected shell prompt using the default regular expression. It’s expecting a prompt that ends with `#$%>`, but it looks like the prompt on your remote server may not fit that pattern. Additionally, there’s a message about the missing "node executable," but this appears secondary to the shell prompt issue.

Here’s how to resolve the prompt issue:

### 1. **Customize TRAMP Shell Prompt Regex**
The regular expression for detecting the shell prompt is not matching the actual prompt on your remote server. You can customize the shell prompt pattern to better fit the prompt you are seeing. In your Emacs configuration, try specifyin
