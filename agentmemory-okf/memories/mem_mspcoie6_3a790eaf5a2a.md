---
type: Fact
title: # This EXO is not connecting to the other clients on the local network. I have a
description: # This EXO is not connecting to the other clients on the local network. I have ano

source: kilo
session_id: 019d206c-f0b7-72e7-8356-f6f5ad57b897
resource: kilo://task/019d206c-f0b7-72e7-8356-f6f5ad57
resource: agentmemory://memory/mem_mspcoie6_3a790eaf5a2a
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:27:48.822Z
source: agentmemory
strength: 7
---
# Content

# This EXO is not connecting to the other clients on the local network. I have ano

source: kilo
session_id: 019d206c-f0b7-72e7-8356-f6f5ad57b897
resource: kilo://task/019d206c-f0b7-72e7-8356-f6f5ad57b897

# Conversation

- **Task ID:** `019d206c-f0b7-72e7-8356-f6f5ad57b897`
- **Source:** kilo
- **Started:** 2026-03-24T15:18:23Z
- **Ended:** 2026-03-24T16:44:34Z
- **Message blocks:** 231
- **Tokens:** 8747378 in / 24249 out

---

### 👤 User — 2026-03-24T15:18:23Z

This EXO is not connecting to the other clients on the local network. I have another EXO running on the MacBook Pro, and it's not being detected.

### 🤖 Assistant — 2026-03-24T15:18:31Z

<details><summary>Reasoning</summary>

The user is reporting that their EXO instance is not connecting to other clients on the local network. They have another EXO running on a MacBook Pro, and it's not being detected.

Let me think about the possible sources of this problem:

1. **Network discovery/mDNS issues**: EXO uses libp2p for peer-to-peer networking, which relies on mDNS for local network discovery. If mDNS is blocked or not working, peers won't discover each other.

2. **Firewall blocking**: The Mac firewall could be blocking the libp2p ports that EXO uses for communication.

3. **Different network segments**: The two Macs might be on different network segments or VLANs that prevent broadcast/multicast traffic from reaching each other.

4. **Port conflicts**: EXO uses specific ports for communication, and if they're already in use or blocked, discovery won't work.

5. **Configuration issues**: There might be configuration settings that restrict peer discovery to specific interfaces or networks.

6. **Rust networking bindings issues**: The libp2p Rust bindings might have issues with the network interface selection.

7. **Timing/race conditions**: Sometimes peers take time to discover each other, and if one starts much later, it might miss initial announcements.

Let me start by examining the codebase to understand how peer discovery works, particularly focusing on:
1. The routing/libp2p networking code
2. How peers discover each other
3. Any configuration related to network discovery
4. Logging around peer connection attempts

I should look at the routing code and the Rust networking components.

</details>

### 👤 User — 2026-03-24T15:18:40Z

I'll help you debug why EXO isn't connecting to other clients on your local network. Let me start by examining the networking and discovery code to understand potential causes.

### 🤖 Assistant — 2026-03-24T15:18:41Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "src/exo/routing/topics.py",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "src/exo/routing/topics.py",
      "content": "/Users/davec/AI/exo/src/exo/routing/topics.py"
    },
    {
      "path": "src/exo/main.py",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "src/exo/main.py",
      "content": "/Users/davec/AI/exo/src/exo/main.py"
    },
    {
      "path": "rust/exo_pyo3_bindings/src/lib.rs",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "rust/exo_pyo3_bindings/src/lib.rs",
      "content": "/Users/davec/AI/exo/rust/exo_pyo3_bindings/src/lib.rs"
    }
  ]
}
```

### 🤖 Assistant — 2026-03-24T15:18:49Z

<details><summary>Reasoning</summary>

Let me look at the Rust networking code to understand how peer discovery works, particularly the mDNS and libp2p configuration.

</details>

### 🤖 Assistant — 2026-03-24T15:18:49Z

**Tool call: listFilesRecursive**

```json
{
  "path": "rust",
  "isOutsideWorkspace": false,
  "content": "parts.nix  # 4142 chars\nexo_pyo3_bindings/\nexo_pyo3_bindings/Cargo.toml  # 1918 chars\nexo_pyo3_bindings/exo_pyo3_bindings.pyi  # 3149 chars\nexo_pyo3_bindings/pyproject.toml  # 714 chars\nexo_pyo3_bindings/README.md  # 28 chars\nexo_pyo3_bindings/src/\nexo_pyo3_bindings/src/allow_threading.rs  # 843 chars\nexo_pyo3_bindings/src/ident.rs  # 1440 chars\nexo_pyo3_bindings/src/lib.rs  # 5721 chars\nexo_pyo3_bindings/src/networking.rs  # 10081 chars\nexo_pyo3_bindings/src/bin/\nexo_pyo3_bindings/src/bin/stub_gen.rs  # 237 chars\nexo_pyo3_bindings/tests/\n
