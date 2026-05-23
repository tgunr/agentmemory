import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../src/logger.js", () => ({
  logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

const mockHomedir = "/mock/home";
const mockPlatform = "darwin";

vi.mock("os", () => ({
  homedir: () => mockHomedir,
  platform: () => mockPlatform,
}));

vi.mock("fs/promises", () => ({
  access: vi.fn(async () => {
    throw new Error("not found");
  }),
  readFile: vi.fn(async () => {
    throw new Error("not found");
  }),
  readdir: vi.fn(async () => []),
  stat: vi.fn(async () => ({ isDirectory: () => false })),
}));

import * as fs from "fs/promises";
import { listLocalSessions, previewLocalSession, listCloudSessions, previewCloudSession } from "../src/functions/kilo-sessions.js";

const accessMock = vi.mocked(fs.access);
const readFileMock = vi.mocked(fs.readFile);

describe("kilo-sessions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("listLocalSessions", () => {
    it("returns error when Kilo data directory has no global-state.json", async () => {
      accessMock.mockRejectedValue(new Error("not found"));
      const result = await listLocalSessions();
      expect(result.success).toBe(false);
    });

    it("returns sessions from global-state.json", async () => {
      const mockGlobalState = {
        taskHistory: [
          {
            id: "session-1",
            number: 1,
            ts: Date.now() - 1000,
            task: "Fix bug in auth",
            tokensIn: 1000,
            tokensOut: 500,
            cacheWrites: 0,
            cacheReads: 100,
            totalCost: 0.01,
            size: 50000,
            workspace: "/path/to/project",
            mode: "code",
          },
          {
            id: "session-2",
            number: 2,
            ts: Date.now(),
            task: "Add new feature",
            tokensIn: 2000,
            tokensOut: 1000,
            cacheWrites: 0,
            cacheReads: 200,
            totalCost: 0.02,
            size: 100000,
            workspace: "/path/to/project",
            mode: "architect",
          },
        ],
      };

      accessMock.mockResolvedValue(undefined);
      readFileMock.mockResolvedValue(JSON.stringify(mockGlobalState));

      const result = await listLocalSessions();
      expect(result.success).toBe(true);
      expect(result.sessions).toHaveLength(2);
      expect(result.sessions[0].id).toBe("session-2");
      expect(result.sessions[1].id).toBe("session-1");
    });

    it("respects limit parameter", async () => {
      const mockGlobalState = {
        taskHistory: [
          { id: "s1", number: 1, ts: 1000, task: "a", tokensIn: 0, tokensOut: 0, cacheWrites: 0, cacheReads: 0, totalCost: 0, size: 0, workspace: "/p", mode: "code" },
          { id: "s2", number: 2, ts: 2000, task: "b", tokensIn: 0, tokensOut: 0, cacheWrites: 0, cacheReads: 0, totalCost: 0, size: 0, workspace: "/p", mode: "code" },
          { id: "s3", number: 3, ts: 3000, task: "c", tokensIn: 0, tokensOut: 0, cacheWrites: 0, cacheReads: 0, totalCost: 0, size: 0, workspace: "/p", mode: "code" },
        ],
      };

      accessMock.mockResolvedValue(undefined);
      readFileMock.mockResolvedValue(JSON.stringify(mockGlobalState));

      const result = await listLocalSessions({ limit: 2 });
      expect(result.success).toBe(true);
      expect(result.sessions).toHaveLength(2);
    });

    it("filters by workspace", async () => {
      const mockGlobalState = {
        taskHistory: [
          { id: "s1", number: 1, ts: 1000, task: "a", tokensIn: 0, tokensOut: 0, cacheWrites: 0, cacheReads: 0, totalCost: 0, size: 0, workspace: "/project-a", mode: "code" },
          { id: "s2", number: 2, ts: 2000, task: "b", tokensIn: 0, tokensOut: 0, cacheWrites: 0, cacheReads: 0, totalCost: 0, size: 0, workspace: "/project-b", mode: "code" },
        ],
      };

      accessMock.mockResolvedValue(undefined);
      readFileMock.mockResolvedValue(JSON.stringify(mockGlobalState));

      const result = await listLocalSessions({ workspace: "project-a" });
      expect(result.success).toBe(true);
      expect(result.sessions).toHaveLength(1);
      expect(result.sessions[0].workspace).toBe("/project-a");
    });
  });

  describe("previewLocalSession", () => {
    it("returns error when session directory does not exist", async () => {
      accessMock.mockRejectedValue(new Error("not found"));
      const result = await previewLocalSession("nonexistent");
      expect(result.success).toBe(false);
    });
  });

  describe("listCloudSessions", () => {
    it("returns error when no cloud token found", async () => {
      accessMock.mockResolvedValue(undefined);
      readFileMock.mockResolvedValue(JSON.stringify({}));

      const result = await listCloudSessions();
      expect(result.success).toBe(false);
      expect(result.error).toContain("token");
    });
  });

  describe("previewCloudSession", () => {
    it("returns error when no cloud token found", async () => {
      accessMock.mockResolvedValue(undefined);
      readFileMock.mockResolvedValue(JSON.stringify({}));

      const result = await previewCloudSession("some-id");
      expect(result.success).toBe(false);
    });
  });
});
