---
type: Fact
title: # Claude project: unsub-mail

source: claude
session_id: 01988af8-acf9-761d-a6f0
description: # Claude project: unsub-mail

source: claude
session_id: 01988af8-acf9-761d-a6f0-1217b0f11657
resource: claude://project/01988af8-acf9-761d-a6f0-1217b0f11657

# Claude project: unsub-mail

- **Project
resource: agentmemory://memory/mem_mtj6dv2d_80af12ab72ac
tags: ["okf", "okf-claude", "claude", "claude://project/01988af8-acf9-761d-a6f0-1217b0f11657"]
timestamp: 2026-09-01T21:24:39.572Z
source: agentmemory
strength: 7
---
# Content

# Claude project: unsub-mail

source: claude
session_id: 01988af8-acf9-761d-a6f0-1217b0f11657
resource: claude://project/01988af8-acf9-761d-a6f0-1217b0f11657

# Claude project: unsub-mail

- **Project ID:** `01988af8-acf9-761d-a6f0-1217b0f11657`
- **Created:** 2025-08-08T18:36:49Z
- **Description:** _(none)_

## Prompt template

The project is at /Volumes/Work/unsub-mail. 
Read the .md files for context and keep them updated as changes are made.

## Doc: IMPLEMENTATION_NOTES.md

# Implementation Notes & Technical Details

## Development Session Summary

**Date**: August 6, 2025
**Duration**: Complete implementation from planning to deployment-ready
**Approach**: Used MCP Zen planner for systematic implementation planning

## Technical Architecture Decisions

### 1. AppleScript + Python Hybrid Approach
**Decision**: Use AppleScript for Mail.app access, Python for processing
**Reasoning**: 
- AppleScript provides native macOS Mail.app integration
- Python offers superior parsing, database, and HTTP capabilities
- JSON interface provides clean separation of concerns

**Alternative Considered**: Pure AppleScript approach rejected due to limited HTTP and database capabilities

### 2. Three-Category Email Classification
**Categories**:
1. **Unsubscribable**: Has List-Unsubscribe header or detected unsubscribe links
2. **Desired**: User explicitly marked as wanted subscription
3. **Other**: Regular emails without unsubscribe mechanisms

**Decision Logic**: Eliminates manual email selection by automatically filtering to actionable emails only

### 3. RFC 8058 Compliance Implementation
**Standards Followed**:
- List-Unsubscribe header parsing
- List-Unsubscribe-Post detection for one-click
- HTTP POST with `List-Unsubscribe=One-Click` payload
- DKIM signature awareness (logged but not validated)

**Fallback Strategy**: Content scanning for unsubscribe links when headers missing

### 4. Database Schema Design
**SQLite Choice**: Local storage, no external dependencies, adequate performance
**Key Tables**:
- `emails`: Core email data with categorization
- `senders`: User preferences per email address
- `unsubscribe_attempts`: Audit trail with retry tracking

**Performance Optimizations**: Indexes on sender_email, category, status fields

### 5. Error Handling Strategy
**Levels**:
- **AppleScript**: Try/catch blocks, graceful email skipping
- **Python Processing**: Individual email error isolation
- **HTTP Requests**: Timeout, retry logic, status code validation
- **Database**: Transaction rollback, constraint validation

**Logging**: Separate log files per component with configurable levels

## Code Quality Decisions

### AppleScript Best Practices
- JSON escaping for special characters
- Error isolation per email to prevent batch failures
- Timeout handling for large inboxes
- Memory management for large datasets

### Python Architecture
- **Single Responsibility**: Each module has one clear purpose
- **Dependency Injection**: Database passed to components
- **Error Propagation**: Exceptions bubble up with context
- **Configuration**: CLI arguments for behavioral control

### User Interface Design
- **Rich Library**: Professional terminal formatting
- **Interactive Selection**: Multiple selection methods (ranges, individual, bulk)
- **Confirmation Steps**: Safety prompts before destructive actions
- **Real-time Feedback**: Progress indicators and status updates

## Security Considerations Implemented

### Data Privacy
- All email data stored locally (SQLite)
- No external service communication except unsubscribe URLs
- User email only used for mailto unsubscribe method

### Request Safety
- User-Agent header to appear as legitimate browser
- Rate limiting (2-second delays between requests)
- Timeout prevention for hanging requests (10-second limit)
- Dry-run mode for testing without side effects

### Permission Model
- AppleScript requires explicit Mail.app automation permission
- Database files created with standard user permissions
- No elevated privileges required

## Performance Optimizations

### AppleScript Efficiency
- Batch processing of all messages in single Mail.app session
- Minima
