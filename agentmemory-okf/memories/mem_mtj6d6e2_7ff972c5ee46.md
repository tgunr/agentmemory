---
type: Fact
title: # STL/3MF Edge Reference Techniques

source: claude
session_id: c156c0ab-882d-4a
description: # STL/3MF Edge Reference Techniques

source: claude
session_id: c156c0ab-882d-4a07-8b75-a6e73e7b779b
resource: claude://conversation/c156c0ab-882d-4a07-8b75-a6e73e7b779b

# Conversation

- **Session I
resource: agentmemory://memory/mem_mtj6d6e2_7ff972c5ee46
tags: ["okf", "okf-claude", "claude", "claude://conversation/c156c0ab-882d-4a07-8b75-a6e73e7b779b"]
timestamp: 2026-09-01T21:24:07.562Z
source: agentmemory
strength: 7
---
# Content

# STL/3MF Edge Reference Techniques

source: claude
session_id: c156c0ab-882d-4a07-8b75-a6e73e7b779b
resource: claude://conversation/c156c0ab-882d-4a07-8b75-a6e73e7b779b

# Conversation

- **Session ID:** `c156c0ab-882d-4a07-8b75-a6e73e7b779b`
- **Source:** claude
- **Started:** 2025-06-10T12:37:10Z
- **Messages:** 2

---

### 👤 User — 2025-06-10T12:37:11Z

How do i reference edges and intersections of an imported STL or 3MF file object.

---

### 🤖 Assistant — 2025-06-10T12:37:23Z

When working with imported STL or 3MF files in Shapr3D, you'll encounter some limitations compared to native Shapr3D geometry, but there are several approaches to reference edges and intersections:

**Direct Edge Selection:**
- Imported mesh geometry often allows direct selection of visible edges by simply tapping on them
- Look for edge highlighting when you hover over or tap near mesh edges
- Some imported files may have edges that aren't perfectly defined due to mesh tessellation

**Converting to Native Geometry:**
The most effective approach is often to convert the imported mesh to native Shapr3D geometry:
- Use the "Mesh to BRep" conversion tool if available in your version
- This converts the mesh surface into proper geometric faces and edges that Shapr3D can fully recognize
- Once converted, all standard edge selection and referencing methods work normally

**Creating Reference Geometry:**
If direct edge selection isn't working well:
- Create construction planes that align with key faces of the imported object
- Project edges onto these planes to create 2D sketches you can reference
- Use the "Intersect" tool to create curves where planes cut through the imported geometry

**Intersection Techniques:**
- Place construction planes or other geometry to intersect with the imported object
- The intersection curves become referenceable geometry
- Use these intersection curves as guidelines for new sketches or features

**Workaround for Complex Cases:**
- Sometimes it's easier to use the imported object as a visual reference while rebuilding key features as native Shapr3D geometry
- Trace critical edges and intersections with new sketches positioned relative to the imported mesh

The key limitation is that mesh geometry doesn't always provide the precise mathematical edge definitions that parametric CAD operations expect, so conversion or reconstruction is often the most reliable path forward.

---
