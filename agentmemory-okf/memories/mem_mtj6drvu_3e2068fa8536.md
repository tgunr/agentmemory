---
type: Fact
title: # Stall-Sample-Time Configuration

source: claude
session_id: fa588799-772f-4c49
description: # Stall-Sample-Time Configuration

source: claude
session_id: fa588799-772f-4c49-9ce8-5d88c9ee1b10
resource: claude://conversation/fa588799-772f-4c49-9ce8-5d88c9ee1b10

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj6drvu_3e2068fa8536
tags: ["okf", "okf-claude", "claude", "claude://conversation/fa588799-772f-4c49-9ce8-5d88c9ee1b10"]
timestamp: 2026-09-01T21:24:35.451Z
source: agentmemory
strength: 7
---
# Content

# Stall-Sample-Time Configuration

source: claude
session_id: fa588799-772f-4c49-9ce8-5d88c9ee1b10
resource: claude://conversation/fa588799-772f-4c49-9ce8-5d88c9ee1b10

# Conversation

- **Session ID:** `fa588799-772f-4c49-9ce8-5d88c9ee1b10`
- **Source:** claude
- **Started:** 2025-06-10T21:34:11Z
- **Messages:** 10

---

### 👤 User — 2025-06-10T21:34:12Z

With these value in the image except stall-sample-time which is what i need to know from  Using the information at `https://forum.buildbotics.com/viewtopic.php?f=6&t=199&p=523&hilit=stall#p523`

_Attachments: Screenshot 20250610 at 16.30.37.png_

---

### 🤖 Assistant — 2025-06-10T21:34:36Z

The user is showing me a "Homing" configuration interface with various stepper motor settings. They want to know what the stall-sample-time should be set to, and they've given me a specific URL to reference: https://forum.buildbotics.com/viewtopic.php?f=6&t=199&p=523&hilit=stall#p523

I can see the current settings:
- homing-mode: stall-min
- stall-microstep: 8 per full step (2.5k μstep/sec)
- search-velocity: 1.5 m/min (94 RPM)
- stall-volts: 2 V
- stall-sample-time: 200 μsec (this is what they want to determine)
- stall-current: 1 amps
- zero-backoff: 1.5 mm

I need to fetch the content from that URL to see what guidance it provides about setting the stall-sample-time parameter.I'll fetch the information from that Buildbotics forum post to help you determine the correct stall-sample-time setting.
```
This block is not supported on your current device yet.
```

Perfect! I found the specific guidance for setting the stall-sample-time. According to the forum post, here's the key information:

The user's current settings show:
- stall-microstep: 8 per full step (2.5k μstep/sec)
- stall-sample-time: 200 μsec (currently set)

According to the forum post:
"'stall-sample-time' - This value should be set to cause the system to measure the voltage during the last half of the zero-current microstep. The field to the right of the 'stall-microstep' field reports how many microsteps per second occur at the 'search-velocity'. Use the reciprocal of this number to determine the length of a microstep. For instance, if the field reads '(10.7k usteps/sec)', then the microstep duration is 93 microseconds. In this case, you should select 50 from the 'stall-sample-time' pull-down menu."

So the calculation is:
1. Look at the microsteps per second: 2.5k μstep/sec (2,500 μstep/sec)
2. Calculate the reciprocal: 1/2,500 = 0.0004 seconds = 400 microseconds per microstep
3. Set stall-sample-time to roughly half of that: 400/2 = 200 microseconds

The user currently has it set to 200 μsec, which appears to be correct based on this calculation!

Let me double-check this math:
- 2.5k μstep/sec = 2,500 μstep/sec
- Duration of one microstep = 1/2,500 = 0.0004 seconds = 400 microseconds
- Half of that (for measuring during the last half) = 200 microseconds

Yes, that's correct!Based on the information from the Buildbotics forum post, your current **stall-sample-time of 200 μsec is correct**.

Here's how to calculate it according to the forum guidance:

1. **Look at your microsteps per second**: Your interface shows **(2.5k μstep/sec)**

2. **Calculate microstep duration**: 
   - 2.5k μstep/sec = 2,500 μstep/sec
   - Duration of one microstep = 1/2,500 = 400 microseconds

3. **Set stall-sample-time to half the microstep duration**:
   - 400 μsec ÷ 2 = **200 μsec**

The forum explains that the stall-sample-time should be set to measure voltage during the "last half of the zero-current microstep" when back EMF detection occurs. Your current setting of 200 μsec aligns perfectly with this recommendation for your 2.5k μstep/sec rate.

So you can keep your stall-sample-time at **200 μsec** - it's already optimally configured for your current search velocity and microstep settings.

`[tool_use: web_fetch]` https://forum.buildbotics.com/viewtopic.php?f=6&t=199&p=523&hilit=stall#p523
`[tool_result]` Overview Before attempting to explain the individual configuration settings, it will be helpful to provide an overview of how it stall detect homing works. Here are the highlights: - Traditionally, hom
