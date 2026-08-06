import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateLocally } from "../src/lib/drift-engine.ts";
import cases from "../evaluation/cases.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function workspace(guardrails) {
  return {
    id: "externalization-benchmark",
    name: "Externalization benchmark",
    purpose: "Evaluate explicit constraints without converting missing proof into approval",
    workflow: "Define → submit → evaluate → correct",
    target: "An operator reviewing consequential work",
    successDefinition: "Every passing result is supported by satisfied active constraints",
    inputMode: "prompt",
    evaluationCadence: "manual",
    guardrails,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  };
}

// Transparent proxy for an unstructured review with no explicit constraint gate.
// This is not an LLM or expert-review comparison.
function ungatedReviewBaseline() {
  return "pass";
}

const rows = cases.map((fixture) => {
  const guardrails = fixture.rules ?? [fixture.rule];
  const result = evaluateLocally(workspace(guardrails), {
    text: fixture.text ?? "Review the submitted work.",
    evidence: fixture.evidence ?? "",
    structured: fixture.structured,
  });
  const baseline = ungatedReviewBaseline();
  return {
    id: fixture.id,
    name: fixture.name,
    expected: fixture.expected,
    driftguard: result.verdict,
    baseline,
    driftguardCorrect: result.verdict === fixture.expected,
    baselineCorrect: baseline === fixture.expected,
    criticalFalsePass: result.verdict === "pass" && fixture.expected === "block",
    falseBlock: result.verdict === "block" && fixture.expected !== "block",
    unsupportedPassPrevented:
      baseline === "pass" && fixture.expected !== "pass" && result.verdict !== "pass",
  };
});

const summary = {
  generatedAt: new Date().toISOString(),
  evidenceType: "locally measured deterministic benchmark",
  sampleSize: rows.length,
  driftguardAgreement: rows.filter((row) => row.driftguardCorrect).length,
  baselineAgreement: rows.filter((row) => row.baselineCorrect).length,
  criticalFalsePasses: rows.filter((row) => row.criticalFalsePass).length,
  falseBlocks: rows.filter((row) => row.falseBlock).length,
  unsupportedPassesPrevented: rows.filter((row) => row.unsupportedPassPrevented).length,
  limitations: [
    "Fixtures are authored scenarios, not observed user tasks.",
    "The baseline is an ungated deterministic proxy, not a model or expert-review comparison.",
    "Semantic preview is intentionally conservative and cannot earn Pass.",
    "The benchmark does not establish adoption, ROI, latency, scale, or production reliability.",
  ],
};

const output = { summary, rows };
fs.writeFileSync(path.join(root, "evaluation/results.json"), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify(summary, null, 2));

if (
  summary.driftguardAgreement !== summary.sampleSize ||
  summary.criticalFalsePasses !== 0 ||
  summary.falseBlocks !== 0
) {
  process.exitCode = 1;
}
