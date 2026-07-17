import type { ISdk } from "iii-sdk";
import { StateKV } from "../state/kv.js";
import { MetricsStore } from "../eval/metrics-store.js";
import { recordAudit } from "./audit.js";

export function registerMetricsFunctions(
  sdk: ISdk,
  kv: StateKV,
  metricsStore: MetricsStore,
): void {
  sdk.registerFunction(
    "mem::reset-metrics",
    async (data: { functionId?: string }): Promise<{ success: true; cleared: string[] }> => {
      const functionId =
        typeof data?.functionId === "string" && data.functionId.trim()
          ? data.functionId.trim()
          : undefined;

      const { cleared } = await metricsStore.reset(functionId);

      await recordAudit(kv, "metrics_reset", "mem::reset-metrics", cleared, {
        scope: functionId ? "single" : "all",
        functionId: functionId ?? "*",
      });

      return { success: true, cleared };
    },
  );
}
