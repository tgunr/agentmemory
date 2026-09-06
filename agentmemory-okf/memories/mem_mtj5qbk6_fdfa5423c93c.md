---
type: Fact
title: # G-code Parsing: State Diagram

source: chatgpt
session_id: cb952030-6cba-4a4d-
description: # G-code Parsing: State Diagram

source: chatgpt
session_id: cb952030-6cba-4a4d-b9f7-5c28fd967dcf
resource: chatgpt://conversation/cb952030-6cba-4a4d-b9f7-5c28fd967dcf

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj5qbk6_fdfa5423c93c
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/cb952030-6cba-4a4d-b9f7-5c28fd967dcf"]
timestamp: 2026-09-01T21:06:21.207Z
source: agentmemory
strength: 7
---
# Content

# G-code Parsing: State Diagram

source: chatgpt
session_id: cb952030-6cba-4a4d-b9f7-5c28fd967dcf
resource: chatgpt://conversation/cb952030-6cba-4a4d-b9f7-5c28fd967dcf

# Conversation

- **Session ID:** `cb952030-6cba-4a4d-b9f7-5c28fd967dcf`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-05-25T17:18:29.006828+00:00
- **Messages:** 4

---

### 👤 User

write Factor programming language  code for parsing gcode using Marlin

---

### 🤖 Assistant

Writing a G-code parser in the Factor programming language is a complex task. Here's a simple example of how you might start to structure such a parser. This code will parse a G-code file line by line and print out the commands.

Please note that this is a very basic example and doesn't handle all possible G-code commands or formats. It also doesn't interact with Marlin or any other 3D printer firmware. You would need to write additional code to handle that interaction.

```factor
USING: io.files.lines sequences kernel math.parser ;

: gcode-command ( line -- command )
    " " split1 drop ;

: gcode-parameters ( line -- parameters )
    " " split1 swap drop
    [ " " split [ string>number ] map ] when* ;

: parse-gcode-line ( line -- command parameters )
    [ gcode-command ] [ gcode-parameters ] bi ;

: parse-gcode-file ( filename -- seq )
    [ [ parse-gcode-line ] map ] with-file-lines ;

: print-gcode ( filename -- )
    parse-gcode-file [ . ] each ;

"example.gcode" print-gcode
```

This code defines several words:

- `gcode-command` takes a line of G-code and returns the command (the first word on the line).
- `gcode-parameters` takes a line of G-code and returns a sequence of parameters (the rest of the words on the line, converted to numbers).
- `parse-gcode-line` combines `gcode-command` and `gcode-parameters` to parse a complete line of G-code.
- `parse-gcode-file` reads a file line by line and parses each line as G-code.
- `print-gcode` parses a G-code file and prints out the commands and parameters.

You would run this code by calling `print-gcode` with the name of a G-code file. For example, `"example.gcode" print-gcode`.

Please note that this is a very basic example and doesn't handle all possible G-code commands or formats. It also doesn't interact with Marlin or any other 3D printer firmware. You would need to write additional code to handle that interaction.

---

### 👤 User

Show an example of gcode parser using EBNF

---

### 🤖 Assistant

EBNF (Extended Backus-Naur Form) is a notation used to formally describe the grammar of a language. Here's a simple example of how you might define a grammar for G-code using EBNF. This is a very basic example and doesn't cover all possible G-code commands or formats.

```
gcode_file = {line}, EOF ;
line = command, {parameter}, EOL ;
command = letter, digit, digit ;
parameter = letter, real_number ;
letter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" ;
digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
real_number = ["-"], digit, {digit}, [".", digit, {digit}] ;
```

In this grammar:

- A `gcode_file` is a sequence of `line`s followed by an end-of-file marker (`EOF`).
- A `line` consists of a `command` followed by zero or more `parameter`s, and ends with an end-of-line marker (`EOL`).
- A `command` is a `letter` followed by two `digit`s.
- A `parameter` is a `letter` followed by a `real_number`.
- A `letter` is any uppercase letter from A to Z.
- A `digit` is any digit from 0 to 9.
- A `real_number` is an optional minus sign (`-`), followed by one or more `digit`s, optionally followed by a decimal point (`.`) and one or more additional `digit`s.

This grammar would parse G-code commands like `G01 X1.0 Y2.0 Z3.0` into a command (`G01`) and three parameters (`X1.0`, `Y2.0`, `Z3.0`).

---
