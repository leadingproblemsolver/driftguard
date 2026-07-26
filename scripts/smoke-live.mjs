import process from "node:process";

const baseUrl = String(process.env.DRIFTGUARD_BASE_URL ?? "").replace(/\/$/, "");
if (!baseUrl) {
  console.error("DRIFTGUARD_BASE_URL is required");
  process.exit(2);
}

const timeoutMs = Number(process.env.SMOKE_TIMEOUT_MS ?? 15_000);
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), timeoutMs);

try {
  const response = await fetch(baseUrl, {
    redirect: "follow",
    signal: controller.signal,
    headers: { "User-Agent": "driftguard-release-smoke/1.0" },
  });
  const body = await response.text();
  const failures = [];
  if (!response.ok) failures.push(`root returned HTTP ${response.status}`);
  if (!/DriftGuard/i.test(body)) failures.push("root response does not identify DriftGuard");
  if (!/Pass|Watch|Block/i.test(body)) failures.push("judgment vocabulary is absent");
  if (failures.length) {
    console.error(JSON.stringify({ status: "FAIL", failures }, null, 2));
    process.exit(1);
  }
  console.log(
    JSON.stringify(
      {
        status: "PASS",
        url: response.url,
        httpStatus: response.status,
        bytes: Buffer.byteLength(body),
      },
      null,
      2,
    ),
  );
} catch (error) {
  console.error(
    JSON.stringify(
      { status: "FAIL", error: error instanceof Error ? error.message : String(error) },
      null,
      2,
    ),
  );
  process.exit(1);
} finally {
  clearTimeout(timeout);
}
