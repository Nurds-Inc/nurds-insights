"use client";

import { CopilotSidebar } from "@copilotkit/react-core/v2";
import Image from "next/image";
import {
  BarChart3,
  BrainCircuit,
  ChevronDown,
  CircleDollarSign,
  Gauge,
  LayoutDashboard,
  LineChart,
  MessageSquareText,
  PlugZap,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const weekly = [44, 52, 48, 64, 72, 68, 84, 78, 91, 96, 89, 104];

export default function InsightsHome() {
  return (
    <main className="insights-shell">
      <aside className="app-sidebar">
        <div className="workspace-switcher">
          <Image src="https://branding.nurds.com/img/icon-app.png" alt="Nurds" width={34} height={34} />
          <span><strong>Nurds</strong><small>Primary workspace</small></span>
          <ChevronDown size={15} />
        </div>

        <nav aria-label="Insights navigation">
          <p>Workspace</p>
          <a className="active" href="#overview"><LayoutDashboard size={17} />Overview</a>
          <a href="#investigations"><BrainCircuit size={17} />Investigations</a>
          <a href="#reports"><BarChart3 size={17} />Saved reports</a>
          <a href="#metrics"><Gauge size={17} />Metrics</a>
          <p>Data</p>
          <a href="https://connect.sandbox.nurds.com/connections"><PlugZap size={17} />Connections</a>
          <a href="https://new.crm.nurds.dev/"><Users size={17} />CRM</a>
        </nav>

        <div className="sidebar-footer">
          <a href="#settings"><Settings size={17} />Settings</a>
          <span className="avatar">DK</span>
          <div><strong>Dustin King</strong><small>dustin@nurds.com</small></div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p>Intelligence workspace</p>
            <h1>Insights</h1>
          </div>
          <label className="global-search">
            <Search size={16} />
            <input placeholder="Search metrics, reports, and investigations" aria-label="Search insights" />
            <kbd>⌘ K</kbd>
          </label>
          <span className="preview-pill">Preview</span>
        </header>

        <div className="content">
          <section className="hero" id="overview">
            <div>
              <span className="eyebrow"><Sparkles size={13} />Agentic business intelligence</span>
              <h2>What deserves your attention today?</h2>
              <p>Ask across CRM, operations, finance, and connected systems. Insights will show its work and keep every conclusion tied to evidence.</p>
            </div>
            <button type="button" onClick={() => document.querySelector<HTMLTextAreaElement>("textarea")?.focus()}>
              <MessageSquareText size={17} /> Ask Insights
            </button>
          </section>

          <section className="metric-grid" aria-label="Illustrative metrics">
            <MetricCard icon={<CircleDollarSign size={18} />} label="Pipeline value" value="$428.6k" change="+12.4%" note="Illustrative data" />
            <MetricCard icon={<TrendingUp size={18} />} label="Qualified opportunities" value="184" change="+8.1%" note="Illustrative data" />
            <MetricCard icon={<Users size={18} />} label="Active accounts" value="1,248" change="+3.7%" note="Illustrative data" />
            <MetricCard icon={<Gauge size={18} />} label="Average sales cycle" value="28 days" change="-4 days" note="Illustrative data" good />
          </section>

          <section className="analysis-grid">
            <article className="panel performance-panel">
              <header>
                <div><p>Revenue performance</p><h3>Weekly qualified pipeline</h3></div>
                <button type="button">Last 12 weeks <ChevronDown size={14} /></button>
              </header>
              <div className="chart-wrap">
                <div className="chart-axis"><span>$120k</span><span>$80k</span><span>$40k</span><span>$0</span></div>
                <div className="bar-chart">
                  {weekly.map((value, index) => <span key={index} style={{ height: `${value / 1.2}%` }} />)}
                </div>
              </div>
              <footer><span><i className="legend-dot" />Qualified pipeline</span><small>Sample visualization · connect data to replace</small></footer>
            </article>

            <article className="panel focus-panel">
              <header><div><p>Agent briefing</p><h3>Suggested investigations</h3></div><BrainCircuit size={20} /></header>
              <button type="button"><span>01</span><div><strong>Which opportunities changed risk this week?</strong><small>Compare stage movement, activity, and expected close dates.</small></div></button>
              <button type="button"><span>02</span><div><strong>Where is pipeline conversion slowing?</strong><small>Break down performance by source, owner, and segment.</small></div></button>
              <button type="button"><span>03</span><div><strong>What should leadership review tomorrow?</strong><small>Build an evidence-backed operating brief.</small></div></button>
            </article>
          </section>

          <div className="preview-notice">
            <LineChart size={17} />
            <p><strong>This is the CopilotKit foundation.</strong> The assistant is live; cards are intentionally illustrative until governed data tools are connected.</p>
          </div>
        </div>
      </section>

      <CopilotSidebar
        defaultOpen
        labels={{
          modalHeaderTitle: "Ask Insights",
          welcomeMessageText: "I’m your Nurds business intelligence copilot. Ask me to frame an analysis, define a metric, or plan the first data connection.",
          chatInputPlaceholder: "Ask a business question…",
        }}
      />
    </main>
  );
}

function MetricCard({ icon, label, value, change, note, good = false }: { icon: React.ReactNode; label: string; value: string; change: string; note: string; good?: boolean }) {
  return (
    <article className="metric-card">
      <header><span>{icon}</span><small>{note}</small></header>
      <p>{label}</p>
      <div><strong>{value}</strong><em className={good ? "good" : ""}>{change}</em></div>
    </article>
  );
}
