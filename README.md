# Nurds Insights

Standalone CopilotKit v2 application for the Nurds agentic business intelligence product.

The first release intentionally uses illustrative dashboard data. The CopilotKit built-in agent is live, but it has no business-data tools until governed query contracts are added through Nurds API.

## Local development

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

## Ownership

- Insights owns the analysis workspace and agent UI.
- Nurds CRM is the primary customer launch point.
- Nurds Connect owns third-party data connections.
- Nurds API will own authorization, governed query tools, audit, and tenant isolation.
- Nurds Flows owns scheduled or downstream actions.
