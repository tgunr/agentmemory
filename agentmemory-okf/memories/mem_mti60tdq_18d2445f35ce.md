---
type: Fact
title: # Buildbotics API Public Implementations

source: claude
session_id: a141f6b7-c2
description: # Buildbotics API Public Implementations

source: claude
session_id: a141f6b7-c253-4b50-b586-ed1cbe88f5aa
resource: claude://conversation/a141f6b7-c253-4b50-b586-ed1cbe88f5aa

# Conversation

- **Sess
resource: agentmemory://memory/mem_mti60tdq_18d2445f35ce
tags: ["okf", "okf-claude", "claude", "claude://conversation/a141f6b7-c253-4b50-b586-ed1cbe88f5aa"]
timestamp: 2026-09-01T04:26:44.712Z
source: agentmemory
strength: 7
---
# Content

# Buildbotics API Public Implementations

source: claude
session_id: a141f6b7-c253-4b50-b586-ed1cbe88f5aa
resource: claude://conversation/a141f6b7-c253-4b50-b586-ed1cbe88f5aa

# Conversation

- **Session ID:** `a141f6b7-c253-4b50-b586-ed1cbe88f5aa`
- **Source:** claude
- **Started:** 2025-07-05T21:14:46Z
- **Messages:** 6

---

### 👤 User — 2025-07-05T21:14:55Z

Are there any public implementations that use the Buildbotics API to control the controller?

---

### 🤖 Assistant — 2025-07-05T21:15:39Z

I'll search for information about public implementations using the Buildbotics API to control their CNC controllers.
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

Based on my search results, I can provide you with information about public implementations that use the Buildbotics API to control the controller:

## Public Implementations Using Buildbotics API

Yes, there are several public implementations that use the Buildbotics API:

### 1. **CAMotics (Primary Example)**
CAMotics is the most prominent example - it's an open-source CNC simulator that can connect directly to the Buildbotics controller over the network and provide real-time simulation as the machine is cutting. The connection is implemented using Qt and websockets.

The specific implementation can be found in the CAMotics source code at: https://github.com/CauldronDevelopmentLLC/CAMotics, particularly in the file that handles the controller API connection using Qt.

### 2. **Python Implementations**
There are Python implementations mentioned in the Buildbotics forum where users have created scripts for remote upload and job starting. One user specifically mentioned having "straightforward remote upload and job starting working in python."

### 3. **API Structure**
The Buildbotics controller exposes its API through:
- HTTP endpoints (found in Web.py in the source code)
- WebSocket connections at `/websocket` or `/sockjs` for real-time status information

### 4. **Basic API Usage Examples**
From the forum discussions, here are some basic API calls that have been successfully used:
- Upload GCode: `curl -X PUT -F gcode=@hello.nc http://bbctrl.local/api/file/`
- Start program: `curl -X PUT http://bbctrl.local/api/start`
- Connect to websocket for status: Connection to `/websocket` or `/sockjs` for JSON status messages

### 5. **Home Assistant Integration**
There's also mention of users attempting to integrate Buildbotics controllers with Home Assistant (a home automation platform) to get information like current program status, time remaining, and emergency stop functionality.

### 6. **Open Source Nature**
Since Buildbotics is completely open source, all the firmware, hardware schematics, and software are available on GitHub at https://github.com/buildbotics, making it possible for developers to create their own implementations.

However, it's worth noting that while the API exists and is used by the web frontend and CAMotics, it's not officially documented yet. The developers have mentioned they will document the API eventually and have opened GitHub issues to track this.

The most complete and mature implementation is CAMotics, which serves as a good reference for anyone wanting to build their own integration with the Buildbotics controller.

`[tool_use: web_search]` Buildbotics API public implementations open source controller
`[tool_result]` ... The Buildbotics controller is a fully enclosed, smart CNC machine controller with built-in Web interface and advanced GCode processor. It can drive up to 4 stepper motors and many different tools such as a CNC spindle, LASER cutter or plasma torch. You can buy it now in our store.  Welcome, software and hardware developers. We’ve already implemented a lot of cool features but we have not even 
`[tool_use: web_search]` Buildbotics API documentation REST HTTP
