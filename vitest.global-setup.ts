import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

let sandboxHome: string;

export default function setup(): () => void {
  sandboxHome = mkdtempSync(join(tmpdir(), "agentmemory-test-"));
  process.env.HOME = sandboxHome;
  process.env.USERPROFILE = sandboxHome;
  return () => {
    rmSync(sandboxHome, { recursive: true, force: true });
  };
}
