---
type: Fact
title: # Set up FreePBX VOIP on Debian VM #2

source: hermes
session_id: local-6e981232
description: # Set up FreePBX VOIP on Debian VM #2

source: hermes
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
resource: hermes://session/local-6e9812324396b2091d17e9810b88c9
resource: agentmemory://memory/mem_mw3c1ylt_757d2c3df00c
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Library/CloudStorage/Nextcloud-cloud.polymicro.net-Dave/CTC"]
timestamp: 2026-11-05T09:18:10.137Z
source: agentmemory
strength: 7
---
# Content

# Set up FreePBX VOIP on Debian VM #2

source: hermes
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
resource: hermes://session/local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9

# Conversation

- **Session ID:** `local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-03T13:23:19Z
- **Ended:** 2026-11-04T19:58:30Z
- **Messages:** 641
- **CWD:** `/Users/davec/Library/CloudStorage/Nextcloud-cloud.polymicro.net-Dave/CTC`
- **Tokens:** 524100 in / 116843 out
- **Est. cost:** $-71091.0000

---

### 👤 User — 2026-11-02T20:58:46Z

Setting up VOIP for carltontc.com using voip.ms. API creds are:
API Password
mowses-deqcep-9teGni

API Token
dHJYaGxVdTROOHprdXVHbWVTbGtIVTlQajN6OFRiemNHVGRNUkJBTU5xaz0=

Need to setup a skill to control the Asterix software on VM on pve.root running debian12. 
Need to install FreePBX onto the VM.
Reference grok.com/share/bGVnYWN5_9b39466b-9071-4025-bb52-36c24a4469d0

### 🤖 Assistant — 2026-11-03T11:55:43Z

<details><summary>Reasoning</summary>

"Updating Hooks...Done" — that regenerates module hooks. Maybe that fixes bulkimport + GUI. Test both quickly:
1. curl extensions page size (in-browser content? size alone won't tell; check for "Add Extension" marker text).
2. rerun bulkimport and check DB rows.

Do both in one call.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp/voipboot && curl -s -b cj.txt -H \"Host: voip.polymicro.net\" \"http://192.168.88.230/admin/config.php?display=extensions\" | grep -oiE \"Add Extension|extension/routing|No Extensions defined\" | head -3; echo \"--- import:\"; ssh root@192.168.88.230 'fwconsole bulkimport -t extensions --replace /root/ext.csv 2>&1 | tail -3; mysql -N asterisk -e \"select extension,name from users\"'",
  "timeout": 300
}
```

### 🤖 Assistant — 2026-11-03T11:56:05Z

<details><summary>Reasoning</summary>

Still nothing. GUI still blank. Hooks didn't help.

Time to stop diagnosing FreePBX internals and go direct-to-DB for extensions, then verify via Asterisk. I know FreePBX 17 tables well enough, and Asterisk will tell me if it's wrong.

Actually — better idea that avoids FreePBX entirely for the extension→cell mapping: **Asterisk-native dialplan custom file**. FreePBX includes /etc/asterisk/extensions_custom.conf, and custom contexts survive reloads. I can implement the whole call flow with plain Asterisk dialplan in extensions_custom.conf:

[from-pstn] → FreePBX handles DID routing; but I can override by editing FreePBX inbound route (needs DB row 'incoming' table) OR bypass: create inbound route via Core::addDID PHP (that function exists! addDID($settings) — official). Then destination can be "app-blackhole"? Simpler: set destination to a **custom destination**: 'custom' destinations are 'custom:<target>' (Custom Destinations module). Is it installed? "customdestinations" module likely installed.

Plan B (clean, minimal FreePBX dependency):
1. Inbound route: use Core::addDID with extension=7269991835, cidnum='', destination='custom:dialbusiness'? Hmm Custom Destination needs module entry.

Even simpler: skip FreePBX inbound routes entirely. Point voip.ms DID → account:581289_fpbx, and in Asterisk, calls from the trunk land in context from-pstn (FreePBX's). FreePBX's from-pstn with no matching inbound route → goes to "bad destination"? FreePBX has default behavior: no route → terminate or "from-did-direct"? Unpredictable.

Cleanest native approach: set the trunk's context to a CUSTOM context (e.g. context=from-voipms) in the pjsip trunk config! Then Asterisk routes inbound calls into my own context in extensions_custom.conf, which I fully control:

[from-voipms]
exten => _X.,1,NoOp(Inbound from ${CALLERID(num)} to ${EXTEN})
 same => n,Dial(PJSIP/581289_fpbx... no, dial out to cells via trunk: Dial(PJSIP/${EXTEN}@voipms))
 Actually to ring the cells: Dial(PJSIP/19364420811@voipms&...) — but voip.ms outbound requires dialing the number through the trunk; the sub-account must be permitted to call those numbers (it is, US calls).

Wait: ringing cells through voip.ms trunk uses our DID as caller ID → good ("caller ID publish 
