import {
  BuiltInAgent,
  CopilotRuntime,
  createCopilotRuntimeHandler,
} from "@copilotkit/runtime/v2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const insightsAgent = new BuiltInAgent({
  model: process.env.COPILOTKIT_MODEL || "openai:gpt-5.4-mini",
  prompt: [
    "You are Nurds Insights, a careful business intelligence analyst.",
    "This first preview has no live business data tools attached.",
    "Explain that sample metrics are illustrative whenever a question depends on real data.",
    "Help the user refine questions, define metrics, and decide which data sources should be connected next.",
    "Be concise, identify assumptions, and never invent query results or claim access to a data source.",
  ].join(" "),
});

const copilotRuntime = new CopilotRuntime({
  agents: { default: insightsAgent },
});

const handler = createCopilotRuntimeHandler({
  runtime: copilotRuntime,
  basePath: "/api/copilotkit",
});

export const GET = handler;
export const POST = handler;
