---
type: Fact
title: # Pip Features and Usage

source: chatgpt
session_id: d6f6fa43-6091-4f64-80db-97
description: # Pip Features and Usage

source: chatgpt
session_id: d6f6fa43-6091-4f64-80db-97806a0ec325
resource: chatgpt://conversation/d6f6fa43-6091-4f64-80db-97806a0ec325

# Conversation

- **Session ID:** `d6f
resource: agentmemory://memory/mem_mtj5o3io_0cc4eb5b5abc
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/d6f6fa43-6091-4f64-80db-97806a0ec325"]
timestamp: 2026-09-01T21:04:37.472Z
source: agentmemory
strength: 7
---
# Content

# Pip Features and Usage

source: chatgpt
session_id: d6f6fa43-6091-4f64-80db-97806a0ec325
resource: chatgpt://conversation/d6f6fa43-6091-4f64-80db-97806a0ec325

# Conversation

- **Session ID:** `d6f6fa43-6091-4f64-80db-97806a0ec325`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-06-21T13:18:31.548206+00:00
- **Messages:** 8

---

### 👤 User

Using turocreate I get + /Users/davec/work/turicreate/deps/env/bin/python -m pip install -r scripts/requirements.txt --prefer-binary --use-feature=2020-resolver

Usage:
  /Users/davec/Work/turicreate/deps/env/bin/python -m pip install [options] <requirement specifier> [package-index-options] ...
  /Users/davec/Work/turicreate/deps/env/bin/python -m pip install [options] -r <requirements file> [package-index-options] ...
  /Users/davec/Work/turicreate/deps/env/bin/python -m pip install [options] [-e] <vcs project url> ...
  /Users/davec/Work/turicreate/deps/env/bin/python -m pip install [options] [-e] <local project path> ...
  /Users/davec/Work/turicreate/deps/env/bin/python -m pip install [options] <archive url/path> ...

option --use-feature: invalid choice: '2020-resolver' (choose from 'fast-deps', 'truststore', 'no-binary-enable-wheel-cache’) what are these options and which one would be best?

---

### 🤖 Assistant

The options you're seeing are features that can be enabled or disabled in pip, the package installer for Python. Here's a brief explanation of each:

1. `fast-deps`: This is an experimental feature that changes the resolution process in pip. Normally, pip downloads all packages before starting to install them. With `fast-deps`, pip only downloads the package you specified and then starts the installation process. While installing, pip downloads the next package, and so on. This can make the installation process faster.

2. `truststore`: This is an experimental feature that changes how pip trusts SSL certificates. By default, pip uses its own set of trusted certificates, but with `truststore` enabled, pip will use the certificates from your system's trust store instead. This can be useful if you're installing packages from a private index that uses a certificate issued by a CA not included in pip's default set.

3. `no-binary-enable-wheel-cache`: This is an experimental feature that enables caching of wheel packages even when the `--no-binary` option is used. Normally, pip does not cache packages when `--no-binary` is used, but with this feature enabled, it will.

As for which one would be best, it depends on your specific needs:

- If you're trying to install packages as quickly as possible, `fast-deps` might be the best option.
- If you're dealing with SSL certificate issues, `truststore` might be helpful.
- If you're frequently installing packages with the `--no-binary` option and want to speed up future installations, `no-binary-enable-wheel-cache` could be beneficial.

The `2020-resolver` feature you were trying to use was a temporary feature flag used in pip version 20.2 to test the new dependency resolver before it became the default in pip version 20.3. As of pip version 21.0, this feature flag is no longer available, which is why you're seeing an error message. If you're using a version of pip that's 21.0 or later, you're already using the new resolver, so you don't need to specify any feature flags.

---

### 👤 User

IS there any macOS app or service that can send selected text from a contextual menu to chatgpt

---

### 🤖 Assistant

As of my knowledge cutoff in September 2021, there isn't a specific macOS app or service that can send selected text from a contextual menu directly to ChatGPT. However, you can use a combination of tools and services to achieve something similar.

One approach is to use a service like Zapier or IFTTT, which can automate tasks between different apps and services. For example, you could set up a "Zap" in Zapier that triggers when you add a new note in a specific Apple Notes folder, and then sends that note's content to ChatGPT via the OpenAI API.

Here's a rough outline of how you could set this up:

1. Select some text and use the "Share" or "Send to" option in the contextual menu to send
