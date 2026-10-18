---
type: Fact
title: # Count 220 V pump on-off cycles

source: hermes
session_id: 20261011_094115_c4f
description: # Count 220 V pump on-off cycles

source: hermes
session_id: 20261011_094115_c4f147
resource: hermes://session/20261011_094115_c4f147

# Conversation

- **Session ID:** `20261011_094115_c4f147`
- **So
resource: agentmemory://memory/mem_mvc4jn30_b2199bad3e40
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-17T08:18:11.283Z
source: agentmemory
strength: 7
---
# Content

# Count 220 V pump on-off cycles

source: hermes
session_id: 20261011_094115_c4f147
resource: hermes://session/20261011_094115_c4f147

# Conversation

- **Session ID:** `20261011_094115_c4f147`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-11T14:41:15Z
- **Ended:** 2026-10-16T10:28:06Z
- **Messages:** 47
- **CWD:** `/Volumes/davec`
- **Tokens:** 311127 in / 12409 out
- **Est. cost:** $-59711.0000

---

### 👤 User — 2026-10-11T14:41:15Z

I'm looking for a counter that will count how many times my water wheel pump turns on. It's 220 V so I want it to detect every time 220 V is applied.

### 🤖 Assistant — 2026-10-11T14:41:23Z

**Tool call: web_search**

```json
{
  "query": "AC voltage presence counter module DIN rail count pump cycles 220V",
  "limit": 8
}
```

**Tool call: web_search**

```json
{
  "query": "current sensing relay pump cycle counter 220V hour meter run time counter",
  "limit": 8
}
```

### 🤖 Assistant — 2026-10-11T14:41:30Z

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "\"pulse counter\" 230V AC DIN rail mechanical tally counter count pump starts"
}
```

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "voltage presence cycle counter \"counts\" power on off transitions 230V module"
}
```

### 🤖 Assistant — 2026-10-11T14:41:44Z

Here are the main options, from simplest to most capable:

**1. 230 V AC pulse counter (simplest, exactly what you described)**
A small electromechanical counter wired directly across the pump's switched 220–230 V feed. It energizes with the voltage and steps once per application:
- Kübler SK07 / K06 micro counters (230 V AC, 6–7 digit mechanical rollers, DIN-rail or surface, value retained on power loss)
- Hengstler 0.300.1xx AC impulse counters (230 V AC/VAC, DIN rail)
- Bauser 663.6 (230 V AC, 7 digits, DIN rail)

One caution: many "impulse counters" count each energization of the coil, so if the supply can chatter (float switch bounce, short interruptions), you can get extra counts. If the pump cycle is clean on/off, this is fine and dead simple.

**2. Current-sensing pump cycle counter (more accurate "pump actually ran")**
Instead of voltage, sense the current through the load wire — this ignores voltage-present-but-pump-off situations:
- Waterstone Pump Tracker 7404 — event counter with a split-core current sensor, 230 VAC 15 A, 6-digit non-resettable, DIN-rail or surface. Purpose-built for pump on/off cycle counting.

**3. Current monitoring relay with cycle counter (industrial)**
Siemens SIRIUS 3UG4/3UG5 load monitors have built-in operating-cycle counters (counts on each drop of current flow). Overkill for pure counting but useful if you also want overload/underload protection.

**4. Smart/digital (if you want logging, not just a display)**
A 230 V AC voltage-presence input feeding a counter module with memory — e.g., Wiren Board WB-MCM8HV (8-channel 230 V presence detection with pulse counters in non-volatile memory, Modbus RS-485) or a Shelly/Sonoff relay flashed for counting, plus a small PLC counter like the IMO LD timer/counter (85–250 VAC, cycle counter) if you want a panel display.

**Recommendation:** For "just tell me how many times it turned on," get a 230 V AC electromechanical pulse counter (Kübler SK07 or Hengstler) and wire it in parallel with the pump's switched feed — no extra power supply, survives outages, permanent tally. If you want to count only actual pumping (and get a longer life/precision), go with the Waterstone Pump Tracker's current-sensor model.

Want me to find specific vendors/pricing for any of these?

### 👤 User — 2026-10-11T14:49:43Z

Create some vendors and URLs.

### 🤖 Assistant — 2026-10-11T14:49:51Z

**Tool call: web_search**

```json
{
  "limit": 8,
  "query": "Kübler SK07 230V pulse counter buy shop"
}
```

**Tool call: web_search**

```json
{
  "limit": 8,
  "query": "Hengstler 0.300 electromechanical counter 230V AC buy distributor"
}
```

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "Waterstone Pump Tracker 7404 event counter buy"
}
```

### 🤖 Assistant — 2026-10-11T14:50:00Z

**Tool call: w
