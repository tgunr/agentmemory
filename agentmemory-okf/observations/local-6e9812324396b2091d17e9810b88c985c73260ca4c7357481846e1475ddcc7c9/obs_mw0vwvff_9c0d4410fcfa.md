---
type: file_edit
title: Asterisk command execution
description: Executing custom MySQL script and restart of Asterisk service
resource: agentmemory://observation/obs_mw0vwvff_9c0d4410fcfa
tags: ["Asterisk", "MySQL", "file_edit"]
timestamp: 2026-11-03T16:10:46.678160+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 8
confidence: 1
---
# Summary

The tool terminal was used to execute a custom MySQL script on the server 192.168.88.230. The execution timed out and generated an error, but the Asterisk service was successfully restarted.

## Facts
- Tool: terminal
- Command: ssh root@192.168.88.230 'mysql asterisk -e \"update pjsip set keyword=\\\"send_pai\\\" where id=1 and keyword=\\\"sendrpid\\\"; insert into pjsip (id,keyword,data,flags) values (1,\\\"send_pai\\\",\\\"yes\\\",1) on duplicate key update data=\\\"yes\\\";\"; fwconsole reload >/dev/null 2>&1; grep -A20 \"^\\[voipms\\]\" /etc/asterisk/pjsip.endpoint.conf | grep -E \"send_pai|send_rpid|from_user\"' ; cd /tmp/voipboot && python3 -c \"\nimport sys;sys.path.insert(0,'/tmp/voipboot');import vapi\ntry: print(vapi.call('setSubAccount',id='859050',username='fpbx',[REDACTED_SECRET],protocol='1',auth_type='1',device_type='1',callerid_number='17269991835',allowed_codecs='ulaw;g722',dtmf_mode='rfc2833',nat='yes',canada_routing='1',lock_international='1',international_route='1',music_on_hold='default',language='en',max_expiry='3600',rtp_timeout='60',rtp_hold_timeout='600',enable_ip_restriction='0',enable_pop_restriction='0'))\nexcept Exception as e: print('ERR',e)\"\n
- Output: Warning: Permanently added '192.168.88.230' (ED25519) to the list of known hosts.\r\nfrom_user=581289_fpbx\r\nERR The read operation timed out
- Exit code: 0

## Concepts
- Asterisk
- MySQL

## Files
- `/etc/asterisk/pjsip.endpoint.conf`

_Importance: 8 · Confidence: 1_
