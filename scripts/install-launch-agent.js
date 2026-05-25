#!/usr/bin/env node
// Install the macOS LaunchAgent for agentmemory.
// Copies the template plist to ~/Library/LaunchAgents/ with user-specific paths filled in.
// Usage: node scripts/install-launch-agent.js [--uninstall]

import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir, platform } from "node:os";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const isUninstall = process.argv.includes("--uninstall");

function findAgentmemoryBin() {
  try {
    const out = execFileSync("which", ["agentmemory"], { encoding: "utf-8" }).trim();
    if (existsSync(out)) return out;
  } catch {
    // fall through
  }
  const homeBin = join(homedir(), ".local", "bin", "agentmemory");
  if (existsSync(homeBin)) return homeBin;
  const globalNpmBin = join("/opt", "homebrew", "bin", "agentmemory");
  if (existsSync(globalNpmBin)) return globalNpmBin;
  const npmGlobalFallback = execFileSync("npm", ["root", "-g"], { encoding: "utf-8" }).trim();
  const candidate = join(npmGlobalFallback, "@agentmemory", "agentmemory", "dist", "cli.mjs");
  if (existsSync(candidate)) return candidate;
  return null;
}

async function install() {
  const os = platform();
  if (os !== "darwin") {
    console.log("LaunchAgent installation is only supported on macOS.");
    process.exit(0);
  }

  const bin = findAgentmemoryBin();
  if (!bin) {
    console.error("Error: agentmemory binary not found on PATH or common locations.");
    console.error("Install globally first: npm install -g @agentmemory/agentmemory");
    process.exit(1);
  }

  const templatePath = join(root, "deploy", "macos", "com.github.agentmemory.plist");
  if (!existsSync(templatePath)) {
    console.error(`Error: Template plist not found at ${templatePath}`);
    process.exit(1);
  }

  let template = readFileSync(templatePath, "utf-8");
  const home = homedir();
  const dataDir = process.env["AGENTMEMORY_DATA_DIR"] || home;

  template = template.replaceAll("{{AGENTMEMORY_BIN}}", bin);
  template = template.replaceAll("{{AGENTMEMORY_DATA_DIR}}", dataDir);
  template = template.replaceAll("{{HOME}}", home);

  const launchAgentsDir = join(home, "Library", "LaunchAgents");
  if (!existsSync(launchAgentsDir)) mkdirSync(launchAgentsDir, { recursive: true });

  const destPath = join(launchAgentsDir, "com.github.agentmemory.plist");
  writeFileSync(destPath, template, { mode: 0o644 });

  console.log(`LaunchAgent plist installed to: ${destPath}`);
  console.log(`Binary: ${bin}`);
  console.log(`Data dir: ${dataDir}`);

  // Bootstrap into launchd if not already loaded
  try {
    execFileSync("launchctl", ["list", "com.github.agentmemory"], { stdio: "pipe" });
    console.log("LaunchAgent is already loaded. Restarting...");
    execFileSync("launchctl", ["bootout", `gui/${process.getuid()}`, destPath]);
    // Brief pause for teardown
    const { sleep } = await import("node:timers/promises");
    await sleep(500);
  } catch {
    // Not loaded yet
  }
  execFileSync("launchctl", ["bootstrap", `gui/${process.getuid()}`, destPath]);
  console.log("LaunchAgent bootstrapped and started.");

  console.log("View logs: cat /tmp/agentmemory.stdout.log");
  console.log("Stop: launchctl stop com.github.agentmemory");
  console.log("Uninstall: agentmemory remove-launch-agent  OR  node scripts/install-launch-agent.js --uninstall");
}

function uninstall() {
  const home = homedir();
  const destPath = join(home, "Library", "LaunchAgents", "com.github.agentmemory.plist");

  // Unload from launchd first
  try {
    execFileSync("launchctl", ["list", "com.github.agentmemory"], { stdio: "pipe" });
    execFileSync("launchctl", ["bootout", `gui/${process.getuid()}/com.github.agentmemory`]);
    console.log("LaunchAgent unloaded.");
  } catch {
    // Not loaded, that's fine
  }

  if (existsSync(destPath)) {
    unlinkSync(destPath);
    console.log(`Removed: ${destPath}`);
  } else {
    console.log("LaunchAgent plist not found. Already uninstalled?");
  }

  console.log("Done. agentmemory will no longer start automatically on login.");
}

if (isUninstall) {
  uninstall();
} else {
  install();
}
