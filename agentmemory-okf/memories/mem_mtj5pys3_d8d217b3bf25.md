---
type: Fact
title: # Convert mcpServers to YAML

source: chatgpt
session_id: 6899f854-0204-8328-bc0
description: # Convert mcpServers to YAML

source: chatgpt
session_id: 6899f854-0204-8328-bc06-65d2dfec1e10
resource: chatgpt://conversation/6899f854-0204-8328-bc06-65d2dfec1e10

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mtj5pys3_d8d217b3bf25
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/6899f854-0204-8328-bc06-65d2dfec1e10"]
timestamp: 2026-09-01T21:06:04.662Z
source: agentmemory
strength: 7
---
# Content

# Convert mcpServers to YAML

source: chatgpt
session_id: 6899f854-0204-8328-bc06-65d2dfec1e10
resource: chatgpt://conversation/6899f854-0204-8328-bc06-65d2dfec1e10

# Conversation

- **Session ID:** `6899f854-0204-8328-bc06-65d2dfec1e10`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-11T14:04:06.145138+00:00
- **Messages:** 4

---

### 👤 User

Convert the .claude.json mcpServers to YAML for use in config.yaml

---

### 🤖 Assistant

Here’s the `mcpServers` section from your `.claude.json` rewritten as valid YAML for inclusion in `config.yaml`:  

```yaml
mcpServers:
  - name: brave-search
    command: npx
    args:
      - -y
      - "@modelcontextprotocol/server-brave-search"
    env:
      BRAVE_API_KEY: "BSAypBBMb1m4f1QupIQ7unxdQl9IMh1"

  - name: mcp-unified-registry
    command: /Users/davec/.pyenv/shims/python3
    args:
      - /Volumes/AI/Servers/unified-registry-manager/mcp_server/mcp_wrapper.py

  - name: mcp-zen
    command: /Volumes/AI/Servers/MCP/zen-mcp-server/.zen_venv/bin/python
    args:
      - /Volumes/AI/Servers/MCP/zen-mcp-server/server.py

  - name: desktop-commander-mcp
    command: npx
    args:
      - -y
      - "@wonderwhy-er/desktop-commander"

  - name: context7
    command: npx
    args:
      - -y
      - "@upstash/context7-mcp@latest"

  - name: git
    command: uvx
    args:
      - mcp-server-git

  - name: mcp-brew
    command: brew
    args:
      - mcp-server

  - name: basic-memory
    command: uvx
    args:
      - basic-memory
      - mcp

  - name: apple-mcp
    command: bunx
    args:
      - "@dhravya/apple-mcp@latest"

  - name: ssh-exec
    command: uvx
    args:
      - --from
      - "git+https://github.com/pathintegral-institute/mcp.science#subdirectory=servers/ssh-exec"
      - mcp-ssh-exec
    env:
      SSH_HOST: "pve.root"
      SSH_PORT: "22"
      SSH_USERNAME: "root"
      SSH_PRIVATE_KEY: |-
        -----BEGIN RSA PRIVATE KEY-----
        MIIEpAIBAAKCAQEA00ZcUe89UqFnZTnfJxsdGAmOwh7aMPdbCGRp3/CvFfU9A6FU
        zIsJR+KZQKqFLshrzlBmsKHYWuVAMHaXnX7yVlVLtY1RAQraDxuxBIzS0ltR8vU+
        BTc4Bt1k7hVlwTJHsKsIT2q5D55b9JHFRQexT6Mo/YMInpsHCZhMSz3lDjyUKNvr
        6d9HI33YF5ykpXrT/unc694tcL63dgVZtqrwwp9cIdPrb0QsjZL3hoDm3MFdXcNW
        jcsNqAlpTUeEZaafQ5H2ZxUwTgY2wAas6W+3gL3tOjLj2Ke60BLlay+3xMWvIlN1
        gokysq2B7DugfMVjxKRU7xYzO6v75+wjHJUAQwIDAQABAoIBAHQyYlv9xDBJ7N/T
        cFPFqb6qowVIiqAbqsl20HQFn4XoFuKEPGsynKwYiEj0f8M3H3Oc7J2Apcl4BFGj
        J8fLJeUtjDIRwtdb7IoapMTn3psq9ms1TiL4N6wu32/B/PDAgoU7y5pCC/33DoP4
        GBLbJD20crra8kao5Ln2NR+8rtmgn34p8GPgJn/cYqm9pLt7vRxuMKvzirL70g/A
        RK+wE64mj7zJLH1iBN7AbG0D917iJOv05DXUhhoGzlHVToijt4/bLF+GWim813U/
        rVTlYxZMiigaXQD1DJDdsRSTlqJNfP772s2uaqmQsqyNmqYcF4neZAXa4O144fV4
        1emm26ECgYEA9UhYNSU/KSaxoLVtWBIiTh7D3uwO1/JFFYH5UBGFker9bWF3GBHA
        SfI2BOMEkxGiE8rSUJmMMR/NvgZqkcDxdFs2JUNomf4ry55Fihh3ib9ilpAMPJdo
        xUG7lrY+HG7vDEPaRiF70+vJ3EgoBnfaBX3ozZUfIfyNeTAgkZC6a7UCgYEA3IGd
        qYtuzzUOkEMwBSyHFQ8zKp2f162IOlFT983aCEpdDdYW7b1hUq2B+LVEcVG+wKcS
        NGJ4VbW9L78uT4eD0Yige0tfIVk1AjMs/UhxAWGs7ZKRNdkcFvPGsCoZyKKoThAK
        1DrVHdUZQSWYMgqqyADb/NLpwHmopImGOYsx5xcCgYEAzlgPBJ6R9O99TQJzuzx+
        KZQOGVIi5p4EaiSOdUJYSLoUetkclF4SkuK1eQT2SzbxT483wOB7pLPppGvHaViU
        h9tXwJ9ltu6xLzm1rIgKwBIGQT1rXenOFOvIgPBNbiQQ7BOE46y1fEGG7s6xBUf8
        XNRgbdp+d1v8NDA9pdfITGUCgYEA2N9eeqdZd9A+H6MFMsGFpi/J6isXT+Ar8PeW
        N04uGCNTfE1JRdASTWe7Qiq+QxncG8z2ObFzmxDhHnnRCYVGH6pZ9Im/6aO8YAqH
        QCGki3BOzWZvDWAYoXZnv1HZBBz+nbBnhi7K9sllSk64btdQ+t7lfrbOEnFVbWaZ
        LjV6AkcCgYAXbmvQK5kuWkfBwxUomgfIIt5eUrmrkXf6nTyCM6NrdDyM+O27COSN
        onGkLCYbsPV8HL+msXmh6EqciTM0tFEsR6m/z422+UCbkoNnWcQ/+zm5aLzItJmX
        Heb7cyS9ih49CcRvio806IOnq+4ZJyf+pUl/dubepreWVrm81yortg==
        -----END RSA PRIVATE KEY-----
      SSH_ALLOWED_COMMANDS: "ls,ps,cat,mv,rm,git,diff"
      SSH_ALLOWED_PATHS: "/tmp,/home,/root,/etc,/var"
      SSH_COMMANDS_BLACKLIST: "dd,mkfs,fdisk,format"
      SSH_ARGUMENTS_BLACKLIST: ""

  - name: mcp-macos
    command: npx
    args:
      - -y
      - "@mcp-get-community/server-macos"
```

This preserves:

- The **same order** as in `.claude.json`
- All `env` variables in
