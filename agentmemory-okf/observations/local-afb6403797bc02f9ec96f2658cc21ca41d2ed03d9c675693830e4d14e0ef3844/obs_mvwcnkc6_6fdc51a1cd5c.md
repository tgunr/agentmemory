---
type: file_edit
title: Extracting ProjectInfo from gateway-events.ts
description: No context provided
resource: agentmemory://observation/obs_mvwcnkc6_6fdc51a1cd5c
tags: ["grep command, project info, interfaces, python classes", "file_edit"]
timestamp: 2026-10-31T12:00:34.993627+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 5
confidence: 1
---
# Summary

The observation is about extracting and extracting ProjectInfo interface from gateway-events.ts using grep command.

## Facts
- Command executed: cd &quot;/Users/davec/.hermes/hermes-agent/apps/shared/src&quot; && grep -rn &quot;ProjectInfo&quot; gateway-events.ts | head; echo ---; grep -n &quot;interface ProjectInfo&quot; -A 15 \*.ts | head -30; echo ---; grep -rn &quot;session_key&quot; gateway-events.ts | head&quot;
- Output:
    <pre>
gateway-contract.generated.ts:2413:export interface ProjectInfo {
gateway-contract.generated.ts-2414-  id: string
gateway-contract.generated.ts-2415-  slug: string
gateway-contract.generated.ts-2416-  name: string
gateway-contract.generated.ts-2417-  description?: string | null
gateway-contract.generated.ts-2418-  icon?: string | null
gateway-contract.generated.ts-2419-  color?: string | null
gateway-contract.generated.ts-2420-  board_slug?: string | null
gateway-contract.generated.ts-2421-  primary_path?: string | null
gateway-contract.generated.ts-2422-  archived?: boolean
gateway-contract.generated.ts-2423-  created_at: number
gateway-contract.generated.ts-2424-  folders?: ProjectFolder[]
gateway-contract.generated.ts-2425-}
gateway-contract.generated.ts-2426-/** \\
hermes_cli/projects_db.py::ProjectFolder.to_dict\\. \\
/
gateway-contract.generated.ts-2427-exports interface ProjectFolder {
gateway-contract.generated.ts-2428-  path: string
---,
</pre>
- Importance: 5 (modifying code)

## Concepts
- grep command, project info, interfaces, python classes

## Files
- `/Users/davec/.hermes/hermes-agent/apps/shared/src/gateway-events.ts`

_Importance: 5 · Confidence: 1_
