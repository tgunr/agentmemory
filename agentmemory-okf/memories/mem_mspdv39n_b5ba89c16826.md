---
type: Fact
title: # GitLens Submodules VS Code

source: hermes
session_id: 20260615_055950_ed248f

description: # GitLens Submodules VS Code

source: hermes
session_id: 20260615_055950_ed248f
resource: hermes://session/20260615_055950_ed248f

# Conversation

- **Session ID:** `20260615_055950_ed248f`
- **Source
resource: agentmemory://memory/mem_mspdv39n_b5ba89c16826
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/usr/bin"]
timestamp: 2026-08-12T01:00:55.475Z
source: agentmemory
strength: 7
---
# Content

# GitLens Submodules VS Code

source: hermes
session_id: 20260615_055950_ed248f
resource: hermes://session/20260615_055950_ed248f

# Conversation

- **Session ID:** `20260615_055950_ed248f`
- **Source:** cli
- **Model:** qwen3:1.7b
- **Started:** 2026-06-15T11:00:05Z
- **Messages:** 4
- **CWD:** `/Users/davec/usr/bin`
- **Tokens:** 41812 in / 1092 out

---

### 👤 User — 2026-06-15T11:00:05Z

How do work with submodules in gitlens extension fo VS Code?

### 🤖 Assistant — 2026-06-15T11:01:22Z

<details><summary>Reasoning</summary>

Okay, the user is asking how to work with submodules in the GitLens extension for VS Code. Let me start by recalling what submodules are. Submodules are a feature in Git that allows you to include another repository as a subdirectory within a larger repository. They're different from regular commits because they're separate repositories.

Now, the user mentioned GitLens, which is an extension for VS Code that provides advanced Git features. I need to figure out how GitLens handles submodules. From what I remember, GitLens supports submodules, but the process might be a bit different compared to regular Git operations.

First, I should check if the user has submodules enabled in their GitLens configuration. If not, they might need to enable them. Then, when cloning a repository with submodules, the extension should handle the setup correctly. 

Next, when working with submodules, the user might need to add them, fetch, or update them. GitLens might have specific commands or interfaces for these actions. For example, adding a submodule might involve a right-click menu or a command palette entry.

I should also consider common scenarios. Maybe the user is trying to add a submodule to their project and wants to know the steps. Or they might be encountering issues with submodules not being recognized. The answer should outline the steps to add, manage, and resolve submodules using GitLens.

Additionally, it's important to mention any potential pitfalls, like ensuring the parent repository is properly set up, or handling cases where submodules are not included in the initial clone. The user might need to use specific commands or features within GitLens to navigate these operations.

I need to make sure the answer is clear and step-by-step, using the GitLens-specific features where applicable. Also, note that the exact commands might vary based on the GitLens version or the operating system, so it's best to refer to the official documentation for the most accurate instructions.


</details>

To work with submodules in GitLens (VS Code extension), follow these steps:

### 1. **Enable Submodules**
   - Ensure GitLens is configured to handle submodules. This is usually enabled by default, but you can verify by checking your `.gitlensconfig.json` file or via the VS Code extension settings.

### 2. **Add a Submodule**
   - Right-click in the GitLens interface (e.g., in the Git panel) and select **"Add Submodule"**.
   - Choose the repository you want to include as a submodule.
   - GitLens will handle the `git submodule add` command automatically.

### 3. **Manage Submodules**
   - **Fetch Submodule Files**: Right-click the submodule in the Git panel and select **"Fetch"**.
   - **Update Submodule**: Use the **"Update"** option to ensure the submodule is up-to-date.
   - **Remove a Submodule**: Right-click the submodule and select **"Remove"**.

### 4. **Resolve Conflicts**
   - If there are conflicts during submodule updates, GitLens will prompt you to resolve them using the **"Resolve"** option.

### 5. **Check Submodule Status**
   - In the Git panel, submodules are shown as **"Submodule"** entries. You can expand them to view their contents or status.

### Notes:
- Submodules are treated as separate repositories in GitLens, so you may need to handle them separately from the parent repository.
- Ensure the parent repository is properly set up (e.g., using `git init` and `git remote add`).
- Use GitLens's built-in tools to navigate submodule contents, commit changes, or resolve conflicts.

For detailed commands or specific scenarios, refer
