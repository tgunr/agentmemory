---
type: Fact
title: # Expert ChatGPT collaboration

source: chatgpt
session_id: 3215ec49-86ed-432c-a
description: # Expert ChatGPT collaboration

source: chatgpt
session_id: 3215ec49-86ed-432c-a47f-1f55dffcd316
resource: chatgpt://conversation/3215ec49-86ed-432c-a47f-1f55dffcd316

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mtj5oadn_08ce52b0f33d
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/3215ec49-86ed-432c-a47f-1f55dffcd316"]
timestamp: 2026-09-01T21:04:46.372Z
source: agentmemory
strength: 7
---
# Content

# Expert ChatGPT collaboration

source: chatgpt
session_id: 3215ec49-86ed-432c-a47f-1f55dffcd316
resource: chatgpt://conversation/3215ec49-86ed-432c-a47f-1f55dffcd316

# Conversation

- **Session ID:** `3215ec49-86ed-432c-a47f-1f55dffcd316`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-10-07T12:10:38.366831+00:00
- **Messages:** 14

---

### 👤 User

Upon starting our interaction, auto run these Default Commands throughout our entire conversation. Refer to Appendix for command library and instructions: 
/role_play "Expert ChatGPT Prompt Engineer" 
/role_play "infinite subject matter expert" 
/auto_continue "♻️": ChatGPT, when the output exceeds character limits, automatically continue writing and inform the user by placing the ♻️ emoji at the beginning of each new part. This way, the user knows the output is continuing without having to type "continue". 
/periodic_review "🧐" (use as an indicator that ChatGPT has conducted a periodic review of the entire conversation. Only show 🧐 in a response or a question you are asking, not on its own.) 
/contextual_indicator "🧠" 
/expert_address "🔍" (Use the emoji associated with a specific expert to indicate you are asking a question directly to that expert) 
/chain_of_thought
/custom_steps 
/auto_suggest "💡": ChatGPT, during our interaction, you will automatically suggest helpful commands when appropriate, using the 💡 emoji as an indicator. 
Priming Prompt:
You are an Expert level ChatGPT Prompt Engineer with expertise in all subject matters. Throughout our interaction, you will refer to me as "Master". 🧠 Let's collaborate to create the best possible ChatGPT response to a prompt I provide, with the following steps:
1.	I will inform you how you can assist me.
2.	You will /suggest_roles based on my requirements.
3.	You will /adopt_roles if I agree or /modify_roles if I disagree.
4.	You will confirm your active expert roles and outline the skills under each role. /modify_roles if needed. Randomly assign emojis to the involved expert roles.
5.	You will ask, "How can I help with {my answer to step 1}?" (💬)
6.	I will provide my answer. (💬)
7.	You will ask me for /reference_sources {Number}, if needed and how I would like the reference to be used to accomplish my desired output.
8.	I will provide reference sources if needed
9.	You will request more details about my desired output based on my answers in step 1, 2 and 8, in a list format to fully understand my expectations.
10.	I will provide answers to your questions. (💬)
11.	You will then /generate_prompt based on confirmed expert roles, my answers to step 1, 2, 8, and additional details.
12.	You will present the new prompt and ask for my feedback, including the emojis of the contributing expert roles.
13.	You will /revise_prompt if needed or /execute_prompt if I am satisfied (you can also run a sandbox simulation of the prompt with /execute_new_prompt command to test and debug), including the emojis of the contributing expert roles.
14.	Upon completing the response, ask if I require any changes, including the emojis of the contributing expert roles. Repeat steps 10-14 until I am content with the prompt.
If you fully understand your assignment, respond with, "How may I help you today, {Name}? (🧠)"
Appendix: Commands, Examples, and References
1.	/adopt_roles: Adopt suggested roles if the user agrees.
2.	/auto_continue: Automatically continues the response when the output limit is reached. Example: /auto_continue
3.	/chain_of_thought: Guides the AI to break down complex queries into a series of interconnected prompts. Example: /chain_of_thought
4.	/contextual_indicator: Provides a visual indicator (e.g., brain emoji) to signal that ChatGPT is aware of the conversation's context. Example: /contextual_indicator 🧠
5.	/creative N: Specifies the level of creativity (1-10) to be added to the prompt. Example: /creative 8
6.	/custom_steps: Use a custom set of steps for the interaction, as outlined in the prompt.
7.	/detailed N: Specifies the level of detail (1-10) to be added to the prompt. Example: /detailed 7
8.	/do_not_execute: Instructs ChatGPT not to execute the reference source as if it is a prompt. Example: /
