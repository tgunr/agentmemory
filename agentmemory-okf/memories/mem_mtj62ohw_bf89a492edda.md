---
type: Fact
title: # Proximity Limit Switches for Onefinity CNC X50

source: hermes
session_id: cla
description: # Proximity Limit Switches for Onefinity CNC X50

source: hermes
session_id: claude__aa6c46ec-c934-4b94-85ba-33b52329e200
resource: hermes://session/claude__aa6c46ec-c934-4b94-85ba-33b52329e200

# Con
resource: agentmemory://memory/mem_mtj62ohw_bf89a492edda
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:57.782Z
source: agentmemory
strength: 7
---
# Content

# Proximity Limit Switches for Onefinity CNC X50

source: hermes
session_id: claude__aa6c46ec-c934-4b94-85ba-33b52329e200
resource: hermes://session/claude__aa6c46ec-c934-4b94-85ba-33b52329e200

# Conversation

- **Session ID:** `claude__aa6c46ec-c934-4b94-85ba-33b52329e200`
- **Source:** claude
- **Model:** None
- **Started:** 2025-06-09T23:10:54Z
- **Ended:** 2025-06-10T13:55:16Z
- **Messages:** 6
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-06-09T23:10:54Z

research and create installation document on how to install proximity limit switches on a onefinity cnc x50 machine. What are best switches to use, their costs and resource url's. These will be connected to a buildbotics cnc controller.

### 🤖 Assistant — 2025-06-09T23:12:34Z

I'll research proximity limit switches for the Onefinity CNC X50 machine with Buildbotics controller and create a comprehensive installation document. Let me gather information about compatible switches, costs, and installation procedures.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now I'll create a comprehensive installation document for proximity limit switches on the Onefinity CNC X50 with Buildbotics controller. Based on my research, I'll compile all the information into a structured guide.
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

I've created a comprehensive installation guide for proximity limit switches on the Onefinity CNC X50 machine with Buildbotics controller. Here are the key highlights:

## **Best Proximity Sensors Recommended:**

1. **Budget Choice: SN04-N Series** ($8-15 each)
   - Great value for performance
   - NPN output, compatible with Buildbotics
   - 4mm detection distance

2. **Mid-Range: LJ12A3-4-Z Series** ($6-10 each) 
   - Popular CNC choice
   - Available from CNC specialists like ZYLtech

3. **Professional: Omron E2B Series** ($25-40 each)
   - Industrial grade, IP67 rated
   - Superior reliability and precision

## **Key Technical Points:**

**Critical Power Requirement**: The Buildbotics controller only supplies 5V on the I/O breakout connector, so proximity sensors must be wired directly to the 24V power supply.

**Wiring Configuration**: For limit switches, wire COM to ground pin and signal to appropriate motor input pin on the DB25 breakout board.

## **Cost Estimate:**
- **Total project cost**: $83-380 depending on sensor choice
- **6 sensors needed**: X-min/max, Y-min/max, Z-min/max  
- **Additional costs**: Mounting brackets, shielded cable, hardware

## **Installation Benefits:**
Users report achieving repeatability of less than 0.1mm on linear axes using inductive proximity sensors, which is significantly better than stall homing.

The guide covers everything from component selection and wiring diagrams to Buildbotics controller configuration and troubleshooting. The Onefinity X50 actually comes with pre-drilled mounting holes specifically designed for limit switches, making this a manufacturer-supported upgrade path.

`[tool_use: web_search]` Onefinity CNC X50 proximity limit switches installation
`[tool_result]` Hi all, I want to add limit switches to my X50 and I noticed that it came with some bolts that I can’t see any function for. I am hoping someone can support my idea of using them to mount the limit switches. They appear on all of the mounts in the right place, so . . . . . . (see pic) The BOB has connections to wire them up and they are listed but I have not seen anyone else show them fitted. Is t
`[tool_use: web_search]` Buildbotics CNC controller limit switch wiring proximity sensors
`[tool_result]` The diagram below shows how to connect a proximity sensor such as the SN04-N to the Buildbotics CNC controller. Because the Buildbotics controller only supplies 
