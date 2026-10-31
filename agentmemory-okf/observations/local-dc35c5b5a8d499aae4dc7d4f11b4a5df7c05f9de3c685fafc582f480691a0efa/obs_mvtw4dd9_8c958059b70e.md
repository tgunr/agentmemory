---
type: file_write
title: writing a file
description: writing a file for testing purposes
resource: agentmemory://observation/obs_mvtw4dd9_8c958059b70e
tags: ["testing", "file writing", "file_write"]
timestamp: 2026-10-29T18:42:13.288106+00:00
source: agentmemory
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
importance: 7
confidence: 1
---
# Summary

wrote a file for testing purposes. The file content is in the \"Offline tests for the Business adapter: real aiogram router, fake transport.\"\"\" string. A test for a connection using this file is currently being run. The file was found to be necessary for this test, and its modifications were verified.

## Facts
- file content: \"\"\"Offline tests for the Business adapter: real aiogram router, fake transport.\"\"\"\nfrom __future__ import annotations\n\nimport asyncio\nfrom datetime import datetime, timezone\n\nimport pytest\n\nfrom aiogram import Bot, Dispatcher\nfrom aiogram.types import (BusinessConnection, Chat, Message, Update, User,\n                           DeletedBusinessMessages)\n\nfrom warden.adapters import business as bz\nfrom warden.engine import Engine\nfrom warden.policy import PolicyConfig\nfrom warden.store import Store\n\nOWNER = User(id=777000, is_bot=False, first_name=\"Owner\")\nOWNER_CHAT = 777000\n\n\nclass FakeSession:\n    \"\"\"Records outgoing Bot API methods instead of calling Telegram.\"\"\"\n\n    def __init__(self) -> None:\n        self.calls: list = []\n\n    async def make_request(self, bot, method, timeout=None):\n        self.calls.append(method)\n        name = type(method).__name__\n        if name == \"SendMessage\":\n            return Message(\n                message_id=1, date=datetime.now(timezone.utc),\n                chat=Chat(id=method.chat_id, type=\"private\"),\n                text=method.text,\n            )\n        if name == \"GetUserProfilePhotos\":\n            return type(\"P\", (), {\"total_count\": 0, \"photos\": []})()\n        return True\n\n    async def close(self) -> None:\n        return None\n\n    def stream_content(self, *a, **k):  # pragma: no cover\n        raise NotImplementedError\n\n    # helpers\n    def of(self, name: str) -> list:\n        return [c for c in self.calls if type(c).__name__ == name]\n\n\ndef cfg(**kw) -> PolicyConfig:\n    kw.setdefault(\"quiet_hours\", None)   # deterministic regardless of wall clock\n    return PolicyConfig(**kw)\n\n\ndef make(tmp_path, *, allow=(), dry_run=False):\n    store = Store(tmp_path / \"w.db\")\n    engine = Engine(store, cfg(allowlist=set(allow)), dry_run=dry_run, use_llm=False)\n    session = FakeSession()\n    bot = Bot(token=\"42:TEST\", session=session)\n    dp = Dispatcher()\n    warden = bz.Warden(engine, bot)\n    bz.register(warden, dp)\n    return engine, store, bot, dp, session\n\n\ndef connection(bcid=\"bc-1\", *, enabled=True, can_reply=True) -> Update:\n    return Update(update_id=1, business_connection=BusinessConnection(\n        id=bcid, user=OWNER, user_chat_id=OWNER_CHAT,\n        date=datetime.now(timezone.utc), can_reply=can_reply, is_enabled=enabled,\n    ))\n\n\ndef message(bcid=\"bc-1\", *, text=\"hi\", user_id=5001, sender_bot=None) -> Update:\n    return Update(update_id=2, business_message=Message(\n        message_id=10, date=datetime.now(timezone.utc),\n        chat=Chat(id=user_id, type=\"private\"),\n        from_user=User(id=user_id, is_bot=False, first_name=\"Crypto\",\n                       last_name=\"Signals\", username=\"signal_pro912345\"),\n        text=text, business_connection_id=bcid, sender_business_bot=sender_bot,\n    ))\n\n\ndef run(coro):\n    return asyncio.run(coro)\n\n\ndef test_connection_is_persisted_with_rights(tmp_path):
    """
    Test to ensure a connection is persisted with its rights.
    """
    _, store, bot, dp, session = make(tmp_path)
    run(dp.feed_update(bot, connection()))
    rec = store.get_connection(\"bc-1`)
    assert rec == {\"connection_id\": \"bc-1\", \"user_id\": 777000, \"user_chat_id\": OWNER_CHAT,\n                   \"is_enabled\": True, \"can_reply\": True, \"can_read_messages\": False}
    assert session.of(\"SendMessage\") == []
- file path: /Users/davec/Desktop/telegram-warden/tests/test_business.py
- resolved path: /Users/davec/Desktop/telegram-warden/tests/test_business.py
- files modified: [/Users/davec/Desktop/telegram-warden/tests/test_business.py]
- lint status: ok
- lint output:

## Concepts
- testing
- file writing

## Files
- `/Users/davec/Desktop/telegram-warden/tests/test_business.py`

_Importance: 7 · Confidence: 1_
