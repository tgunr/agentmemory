---
type: Fact
title: # list_collections

source: kilo
session_id: 13105b3d-c10a-4ac9-98c0-17ee14bc0d6
description: # list_collections

source: kilo
session_id: 13105b3d-c10a-4ac9-98c0-17ee14bc0d6a
resource: kilo://task/13105b3d-c10a-4ac9-98c0-17ee14bc0d6a

# Conversation

- **Task ID:** `13105b3d-c10a-4ac9-98c0-17
resource: agentmemory://memory/mem_mspdy7ae_62282d4af738
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:20.643Z
source: agentmemory
strength: 7
---
# Content

# list_collections

source: kilo
session_id: 13105b3d-c10a-4ac9-98c0-17ee14bc0d6a
resource: kilo://task/13105b3d-c10a-4ac9-98c0-17ee14bc0d6a

# Conversation

- **Task ID:** `13105b3d-c10a-4ac9-98c0-17ee14bc0d6a`
- **Source:** kilo
- **Started:** 2025-11-17T21:39:45Z
- **Ended:** 2025-11-17T21:42:08Z
- **Message blocks:** 11
- **Tokens:** 80802 in / 1549 out

---

### 👤 User — 2025-11-17T21:39:45Z

list_collections

### 🤖 Assistant — 2025-11-17T21:39:47Z

<details><summary>Reasoning</summary>

The user wants me to list collections. Based on the available tools, I can see there are qdrant tools available including `use_mcp_tool___qdrant___list_collections`. This appears to be a request to list Qdrant collections using the Qdrant MCP server.

Looking at the tool definition:
```json
{"description": "List all available Qdrant collections", "name": "use_mcp_tool___qdrant___list_collections", "parameters": {"properties": {}, "required": [], "type": "object"}}
```

The parameters section is empty, meaning this tool doesn't require any specific parameters. I need to call this tool to list the available Qdrant collections.

I need to provide:
- server_name: "qdrant"
- tool_name: "list_collections"  
- toolInputProps: {} (empty object since no parameters are required)

Let me call this tool to list the collections.

</details>

### 👤 User — 2025-11-17T21:39:50Z

I'll list the available Qdrant collections for you using the Qdrant MCP server.

### 🤖 Assistant — 2025-11-17T21:39:53Z

<details><summary>Reasoning</summary>

The user asked me to list_collections and I did so using the Qdrant MCP server. I can see that the response returned a list of 21 collections in the Qdrant database. The collections are:

1. troubleshooting
2. memory
3. credentials
4. general
5. darwin_minipolymicronet_collection
6. cnc
7. buildbotics-cnc
8. ws-66782acb553851dc
9. project-docs
10. darwin_minilocal_collection
11. ws-94a6b447580330f9
12. mcp-servers
13. ws-2824684de3d1a193
14. projects
15. pve_collection
16. linux_pve_collection
17. terraforming
18. basic-memory-migration
19. servers
20. ai-prompts
21. ws-af2f1280b18af31f

The task has been completed successfully. I should use the attempt_completion tool to present the results to the user in a clear and organized format.

</details>

### 🤖 Assistant — 2025-11-17T21:40:00Z

## Qdrant Collections List

I successfully retrieved the list of collections from your Qdrant vector database. Here are the 21 available collections:

### Complete Collection List:
1. **ai-prompts** - AI prompts and templates
2. **basic-memory-migration** - Memory migration data
3. **buildbotics-cnc** - CNC machine related data
4. **cnc** - General CNC content
5. **credentials** - Credential storage
6. **darwin_minilocal_collection** - Darwin mini local data
7. **darwin_minipolymicronet_collection** - Darwin mini polymicro network data
8. **general** - General purpose content
9. **linux_pve_collection** - Linux PVE (Proxmox VE) related data
10. **memory** - Memory/knowledge base content
11. **mcp-servers** - MCP server configurations and data
12. **projects** - Project-related documentation
13. **project-docs** - Project documentation
14. **pve_collection** - Proxmox VE data
15. **servers** - Server configuration data
16. **terraforming** - Infrastructure as code/terraform data
17. **troubleshooting** - Troubleshooting guides and solutions
18. **ws-66782acb553851dc** - Workspace collection (ID-based)
19. **ws-94a6b447580330f9** - Workspace collection (ID-based)
20. **ws-2824684de3d1a193** - Workspace collection (ID-based)
21. **ws-af2f1280b18af31f** - Workspace collection (ID-based)

### Collection Categories:
- **Infrastructure**: `linux_pve_collection`, `pve_collection`, `servers`, `terraforming`
- **CNC/Manufacturing**: `cnc`, `buildbotics-cnc`
- **Projects/Docs**: `projects`, `project-docs`
- **System**: `memory`, `troubleshooting`, `credentials`
- **Development**: `mcp-servers`, `ai-prompts`
- **Network/Collections**: `darwin_minilocal_collection`, `darwin_minipolymicronet_collection`
- **Workspaces**: Multiple workspace collections with hash IDs

Your Qdrant instance conta
