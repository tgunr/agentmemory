---
type: Fact
title: # Claude project: How to use Claude

source: claude
session_id: 68754df9-9635-47
description: # Claude project: How to use Claude

source: claude
session_id: 68754df9-9635-4704-9751-a70ce53dc8bb
resource: claude://project/68754df9-9635-4704-9751-a70ce53dc8bb

# Claude project: How to use Claud
resource: agentmemory://memory/mem_mtj6dvt8_b54863312e8a
tags: ["okf", "okf-claude", "claude", "claude://project/68754df9-9635-4704-9751-a70ce53dc8bb"]
timestamp: 2026-09-01T21:24:40.539Z
source: agentmemory
strength: 7
---
# Content

# Claude project: How to use Claude

source: claude
session_id: 68754df9-9635-4704-9751-a70ce53dc8bb
resource: claude://project/68754df9-9635-4704-9751-a70ce53dc8bb

# Claude project: How to use Claude

- **Project ID:** `68754df9-9635-4704-9751-a70ce53dc8bb`
- **Created:** 2024-06-25T18:18:46Z
- **Description:** An example project that also doubles as a how-to guide for using Claude. Chat with it to learn more about how to get the most out of chatting with Claude!

## Doc: Claude prompting guide.md

# Claude prompting guide

## General tips for effective prompting

### 1. Be clear and specific
   - Clearly state your task or question at the beginning of your message.
   - Provide context and details to help Claude understand your needs.
   - Break complex tasks into smaller, manageable steps.

   Bad prompt:
   <prompt>
   "Help me with a presentation."
   </prompt>

   Good prompt:
   <prompt>
   "I need help creating a 10-slide presentation for our quarterly sales meeting. The presentation should cover our Q2 sales performance, top-selling products, and sales targets for Q3. Please provide an outline with key points for each slide."
   </prompt>

   Why it's better: The good prompt provides specific details about the task, including the number of slides, the purpose of the presentation, and the key topics to be covered.

### 2. Use examples
   - Provide examples of the kind of output you're looking for.
   - If you want a specific format or style, show Claude an example.

   Bad prompt:
   <prompt>
   "Write a professional email."
   </prompt>

   Good prompt:
   <prompt>
   "I need to write a professional email to a client about a project delay. Here's a similar email I've sent before:

   'Dear [Client],
   I hope this email finds you well. I wanted to update you on the progress of [Project Name]. Unfortunately, we've encountered an unexpected issue that will delay our completion date by approximately two weeks. We're working diligently to resolve this and will keep you updated on our progress.
   Please let me know if you have any questions or concerns.
   Best regards,
   [Your Name]'

   Help me draft a new email following a similar tone and structure, but for our current situation where we're delayed by a month due to supply chain issues."
   </prompt>

   Why it's better: The good prompt provides a concrete example of the desired style and tone, giving Claude a clear reference point for the new email.

### 3. Encourage thinking
   - For complex tasks, ask Claude to "think step-by-step" or "explain your reasoning."
   - This can lead to more accurate and detailed responses.

   Bad prompt:
   <prompt>
   "How can I improve team productivity?"
   </prompt>

   Good prompt:
   <prompt>
   "I'm looking to improve my team's productivity. Think through this step-by-step, considering the following factors:
   1. Current productivity blockers (e.g., too many meetings, unclear priorities)
   2. Potential solutions (e.g., time management techniques, project management tools)
   3. Implementation challenges
   4. Methods to measure improvement

   For each step, please provide a brief explanation of your reasoning. Then summarize your ideas at the end."
   </prompt>

   Why it's better: The good prompt asks Claude to think through the problem systematically, providing a guided structure for the response and asking for explanations of the reasoning process. It also prompts Claude to create a summary at the end for easier reading.

### 4. Iterative refinement
   - If Claude's first response isn't quite right, ask for clarifications or modifications.
   - You can always say "That's close, but can you adjust X to be more like Y?"

   Bad prompt:
   <prompt>
   "Make it better."
   </prompt>

   Good prompt:
   <prompt>
   "That’s a good start, but please refine it further. Make the following adjustments:
   1. Make the tone more casual and friendly
   2. Add a specific example of how our product has helped a customer
   3. Shorten the second paragraph to focus more on the benefits rather than the features"
   </prompt>

   Why it's better: The good prompt provides specific feedback and clear in
