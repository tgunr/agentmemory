---
type: Fact
title: # Update Tool Number Query

source: abacus
session_id: e892a7eb4
resource: abacu
description: # Update Tool Number Query

source: abacus
session_id: e892a7eb4
resource: abacus://conversation/e892a7eb4

# Conversation

- **Session ID:** `e892a7eb4`
- **Source:** abacus.ai
- **Project:** AI Vaul
resource: agentmemory://memory/mem_mti8tbn7_c370d3e972d3
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/e892a7eb4"]
timestamp: 2026-09-01T05:44:53.966Z
source: agentmemory
strength: 7
---
# Content

# Update Tool Number Query

source: abacus
session_id: e892a7eb4
resource: abacus://conversation/e892a7eb4

# Conversation

- **Session ID:** `e892a7eb4`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-10-27T15:02:51+00:00
- **Messages:** 8

---

### 👤 User

Given this selection 
SELECT *
FROM tool_cutting_data tcd
JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
WHERE tcd.tool_number IS 1;

create query that changes tool_number to 1001

---

### 🤖 Assistant

Here's the query to change the tool_number from 1 to 1001:

```sql
UPDATE tool_cutting_data
SET tool_number = 1001
WHERE tool_number = 1;
```

**Note:** Your original SELECT query has a small syntax error - it should be `WHERE tcd.tool_number = 1` (not `IS 1`). The UPDATE query above uses the correct `=` operator.

---

### 👤 User

Using the selection 
SELECT *
FROM tool_cutting_data tcd
JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
WHERE tg.name_format LIKE '%Compression%';

change the tool_number to be incrementing starting from 1001

---

### 🤖 Assistant

Here's the query to update the tool_number to be incrementing starting from 1001:

```sql
UPDATE tool_cutting_data tcd
JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
SET tcd.tool_number = 1000 + (
    SELECT COUNT(*) + 1
    FROM tool_cutting_data tcd2
    JOIN tool_entity te2 ON tcd2.id = te2.tool_cutting_data_id
    JOIN tool_geometry tg2 ON te2.tool_geometry_id = tg2.id
    WHERE tg2.name_format LIKE '%Compression%'
    AND tcd2.id <= tcd.id
)
WHERE tg.name_format LIKE '%Compression%';
```

**Alternative approach using a variable (MySQL):**

```sql
SET @row_number = 1000;

UPDATE tool_cutting_data tcd
JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
SET tcd.tool_number = (@row_number := @row_number + 1)
WHERE tg.name_format LIKE '%Compression%'
ORDER BY tcd.id;
```

The second approach is simpler and more efficient. It uses a variable to increment the tool_number sequentially starting

from 1001, ordered by the `tool_cutting_data` ID.

---

### 👤 User

Query 1 ERROR at Line 1: : near "tcd": syntax error 
This is sqlite3

---

### 🤖 Assistant

Here's the correct SQLite3 syntax for updating with incrementing numbers:

```sql
WITH numbered_tools AS (
    SELECT tcd.id,
           ROW_NUMBER() OVER (ORDER BY tcd.id) + 1000 AS new_tool_number
    FROM tool_cutting_data tcd
    JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
    JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
    WHERE tg.name_format LIKE '%Compression%'
)
UPDATE tool_cutting_data
SET tool_number = (
    SELECT new_tool_number
    FROM numbered_tools
    WHERE numbered_tools.id = tool_cutting_data.id
)
WHERE id IN (SELECT id FROM numbered_tools);
```

This uses a CTE (Common Table Expression) with `ROW_NUMBER()` to assign incrementing numbers starting from 1001, then updates the matching records in the `tool_cutting_data` table.

---

### 👤 User

In 

WITH numbered_tools AS (
    SELECT tcd.id,
           ROW_NUMBER() OVER (ORDER BY tcd.id) + 1000 AS new_tool_number
    FROM tool_cutting_data tcd
    JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
    JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
    WHERE tg.name_format LIKE '%Compression%'
)
UPDATE tool_cutting_data
SET tool_number = (
    SELECT new_tool_number
    FROM numbered_tools
    WHERE numbered_tools.id = tool_cutting_data.id
)
WHERE id IN (SELECT id FROM numbered_tools);
“Compression” should be case insensitive

---

### 🤖 Assistant

Here's the query with case-insensitive matching:

```sql
WITH numbered_tools AS (
    SELECT tcd.id,
           ROW_NUMBER() OVER (ORDER BY tcd.id) + 1000 AS new_tool_number
    FROM tool_cutting_data tcd
    JOIN tool_entity te ON tcd.id = te.tool_cutting_data_id
    JOIN tool_geometry tg ON te.tool_geometry_id = tg.id
    WHERE tg.name_format LIKE '%co
