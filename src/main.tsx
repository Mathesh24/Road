import React from "react";
import { createRoot } from "react-dom/client";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Fingerprint,
  Gauge,
  Landmark,
  LocateFixed,
  MapPinned,
  MessageCircle,
  RadioTower,
  Route,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  Upload,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import "./styles.css";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Problem = {
  icon: IconComponent;
  title: string;
  items: string[];
};

type WorkflowStep = {
  icon: IconComponent;
  title: string;
  detail: string;
};

type AiFeature = {
  icon: IconComponent;
  title: string;
  detail: string;
};

const problems: Problem[] = [
  {
    icon: Users,
    title: "Citizen Gaps",
    items: ["No unified reporting channel", "Limited complaint visibility", "Manual follow-up dependency"],
  },
  {
    icon: Landmark,
    title: "Government Gaps",
    items: ["Fragmented maintenance workflows", "Weak defect prioritization", "Limited SLA monitoring"],
  },
  {
    icon: Route,
    title: "Operational Gaps",
    items: ["Duplicate complaint volume", "Contractor coordination delays", "No recurring hotspot intelligence"],
  },
];

const workflowSteps: WorkflowStep[] = [
  { icon: Camera, title: "Report", detail: "Citizen captures photo" },
  { icon: LocateFixed, title: "GPS Tag", detail: "Location auto-mapped" },
  { icon: Bot, title: "AI Classify", detail: "Severity and duplicate check" },
  { icon: RadioTower, title: "Route", detail: "Department mapped" },
  { icon: ClipboardCheck, title: "Assign", detail: "Contractor receives task" },
  { icon: Building2, title: "Repair", detail: "Work proof uploaded" },
  { icon: BadgeCheck, title: "Verify", detail: "AI validates closure" },
  { icon: BarChart3, title: "Analyze", detail: "Executive insights" },
];

const aiFeatures: AiFeature[] = [
  {
    icon: Gauge,
    title: "Severity Classification",
    detail: "Prioritizes critical road hazards, drainage failures, cracks, and minor maintenance.",
  },
  {
    icon: Fingerprint,
    title: "Duplicate Detection",
    detail: "Clusters repeated submissions so teams act on one verified ticket.",
  },
  {
    icon: MapPinned,
    title: "Geo-Hotspot Analytics",
    detail: "Reveals recurring defect corridors across wards and districts.",
  },
  {
    icon: TimerReset,
    title: "Maintenance Forecasting",
    detail: "Turns defect trends into planning signals for preventive maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "Repair Validation",
    detail: "Checks before/after proof, location authenticity, and false closure attempts.",
  },
  {
    icon: Sparkles,
    title: "Executive Summaries",
    detail: "Generates governance-ready updates for leadership reviews and action meetings.",
  },
];

const metrics = [
  ["10,000+", "Citizen downloads"],
  ["2,000+", "Complaints submitted"],
  ["90%", "SLA compliance"],
  ["40%", "Faster resolution"],
  ["4.2/5", "Citizen satisfaction"],
  ["60%", "Duplicate reduction"],
  ["99.5%", "Platform uptime"],
];

function App() {
  return (
    <>
      <main>
        <Nav />
        <Hero />
        <ProblemSection />
        <WorkflowSection />
        <ModelsSection />
        <CitizenSection />
        <DashboardSection />
        <AiSection />
        <AccountabilitySection />
        <PilotSection />
        <MetricsSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function Nav() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="RoadSnap TN home">
        <span className="brand-mark">RS</span>
        <span>
          <strong>RoadSnap TN</strong>
          <small>Government Pitch Microsite</small>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#workflow">Workflow</a>
        <a href="#governance">Dashboard</a>
        <a href="#pilot">20-Day Pilot</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Start Pilot
        <ChevronRight aria-hidden="true" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="identity-stripes" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="hero-content">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            AI-enabled citizen infrastructure governance
          </div>
          <p className="hero-sector">Government Road Defect Reporting App</p>
          <h1>RoadSnap TN</h1>
          <p className="hero-kicker">Click. Tag. Fix.</p>
          <p className="hero-text">
            AI-enabled citizen infrastructure monitoring and road maintenance
            governance platform for Tamil Nadu.
          </p>
          <p className="hero-message">
            Every citizen road complaint becomes verified, AI-prioritized,
            SLA-tracked governance action within a 20-day pilot path.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#pilot">
              Launch 20-Day Pilot
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button secondary" href="#workflow">
              View Workflow
            </a>
          </div>
          <div className="hero-proof" aria-label="Pilot readiness highlights">
            <span>
              <Clock3 aria-hidden="true" />
              Pilot-ready in 20 days
            </span>
            <span>
              <ShieldCheck aria-hidden="true" />
              SLA + audit governance
            </span>
          </div>
        </div>
        <div className="hero-visual reveal delay-1" aria-label="RoadSnap TN platform preview">
          <PhoneMockup />
          <DashboardMini />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-frame">
      <div className="phone-top">
        <span>9:41</span>
        <span className="phone-pill" />
      </div>
      <div className="phone-title">
        <div>
          <small>சாலை புகார்</small>
          <strong>Report Road Issue</strong>
        </div>
        <Camera aria-hidden="true" />
      </div>
      <div className="photo-preview">
        <div className="road-line" />
        <span className="damage-marker">
          <AlertTriangle aria-hidden="true" />
        </span>
      </div>
      <div className="phone-card compact">
        <span className="label">Auto GPS</span>
        <strong>Ward 142, Chennai</strong>
        <small>13.0827 N, 80.2707 E</small>
      </div>
      <div className="status-list">
        <span className="status active">Submitted</span>
        <span className="status">AI: Critical</span>
        <span className="status">நிலை: Assigned</span>
      </div>
      <button className="phone-submit">
        Submit Report
        <Send aria-hidden="true" />
      </button>
    </div>
  );
}

function DashboardMini() {
  return (
    <div className="dashboard-mini">
      <div className="dash-header">
        <div>
          <small>Executive Dashboard</small>
          <strong>Tamil Nadu Road Intelligence</strong>
        </div>
        <span className="live-chip">Live</span>
      </div>
      <div className="map-card" aria-hidden="true">
        <span className="map-road a" />
        <span className="map-road b" />
        <span className="map-road c" />
        <span className="map-pulse p1" />
        <span className="map-pulse p2" />
        <span className="map-pulse p3" />
      </div>
      <div className="dash-grid">
        <div>
          <small>Critical</small>
          <strong>248</strong>
        </div>
        <div>
          <small>SLA</small>
          <strong>91%</strong>
        </div>
        <div>
          <small>Resolved</small>
          <strong>1,482</strong>
        </div>
      </div>
      <div className="severity-queue">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="section problem">
      <div className="section-heading reveal">
        <span className="section-label">The governance gap</span>
        <h2>Road maintenance needs a single source of truth.</h2>
        <p>
          Citizens need a simple way to report. Departments need accountable routing.
          Leadership needs real-time infrastructure intelligence.
        </p>
      </div>
      <div className="problem-grid">
        {problems.map((problem, index) => (
          <article className="problem-card reveal" style={{ "--delay": `${index * 80}ms` } as React.CSSProperties} key={problem.title}>
            <problem.icon aria-hidden="true" />
            <h3>{problem.title}</h3>
            <ul>
              {problem.items.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="section workflow-section" id="workflow">
      <div className="section-heading narrow reveal">
        <span className="section-label">Platform flow</span>
        <h2>One complaint becomes one governed action.</h2>
      </div>
      <div className="workflow-rail">
        {workflowSteps.map((step, index) => (
          <article className="workflow-step reveal" style={{ "--delay": `${index * 45}ms` } as React.CSSProperties} key={step.title}>
            <div className="step-icon">
              <step.icon aria-hidden="true" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ModelsSection() {
  return (
    <section className="section models">
      <div className="split-layout">
        <div className="section-heading align-left reveal">
          <span className="section-label">Two access models</span>
          <h2>Designed for statewide adoption from day one.</h2>
          <p>
            RoadSnap TN supports lightweight channels for immediate reach and an
            advanced app experience for full lifecycle tracking.
          </p>
        </div>
        <div className="model-cards">
          <article className="model-card lite reveal delay-1">
            <div className="model-icon">
              <MessageCircle aria-hidden="true" />
            </div>
            <small>RoadSnap Lite</small>
            <h3>WhatsApp / SMS / Telegram reporting</h3>
            <p>No app installation, low training requirement, and rapid adoption across urban and rural citizens.</p>
            <div className="channel-row">
              <span>WhatsApp</span>
              <span>SMS</span>
              <span>Telegram</span>
            </div>
          </article>
          <article className="model-card app reveal delay-2">
            <div className="model-icon">
              <Smartphone aria-hidden="true" />
            </div>
            <small>RoadSnap App</small>
            <h3>Full citizen complaint lifecycle</h3>
            <p>Profile, report category, GPS proof, status tracking, notifications, and citizen feedback in one app.</p>
            <div className="lifecycle-row">
              <span>Submitted</span>
              <span>Assigned</span>
              <span>Fixed</span>
              <span>சரி செய்யப்பட்டது</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function CitizenSection() {
  return (
    <section className="section citizen">
      <div className="citizen-visual reveal">
        <div className="phone-frame citizen-phone">
          <div className="phone-top">
            <span>10:18</span>
            <span className="phone-pill" />
          </div>
          <div className="phone-title">
            <div>
              <small>Complaint Status</small>
              <strong>Ticket RS-2048</strong>
            </div>
            <BadgeCheck aria-hidden="true" />
          </div>
          <div className="ticket-card">
            <span className="ticket-severity">Critical</span>
            <h3>Pothole near bus stop</h3>
            <p>Anna Salai, Guindy Industrial Estate</p>
          </div>
          <div className="timeline">
            <span className="done">Submitted</span>
            <span className="done">AI Verified</span>
            <span className="current">Work Scheduled</span>
            <span>Fixed</span>
          </div>
          <div className="rating-card">
            <small>Citizen feedback</small>
            <strong>Rate after verification</strong>
            <div className="stars" aria-hidden="true">★★★★★</div>
          </div>
        </div>
      </div>
      <div className="section-heading align-left reveal delay-1">
        <span className="section-label">Citizen experience</span>
        <h2>Simple enough for any citizen. Structured enough for governance.</h2>
        <p>
          Citizens capture a photo, GPS is tagged automatically, and every report
          receives lifecycle visibility from submission to verified closure.
        </p>
        <div className="feature-list">
          <span><Upload aria-hidden="true" /> Photo upload</span>
          <span><LocateFixed aria-hidden="true" /> GPS tagging</span>
          <span><Zap aria-hidden="true" /> AI categorization</span>
          <span><CheckCircle2 aria-hidden="true" /> Feedback loop</span>
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section className="section governance" id="governance">
      <div className="section-heading reveal">
        <span className="section-label">Government command dashboard</span>
        <h2>Real-time visibility for wards, districts, contractors, and leadership.</h2>
      </div>
      <div className="command-dashboard reveal delay-1">
        <div className="command-sidebar">
          <strong>RoadSnap TN</strong>
          <span className="active">Overview</span>
          <span>Ward Heatmap</span>
          <span>SLA Queue</span>
          <span>Contractors</span>
          <span>Reports</span>
        </div>
        <div className="command-main">
          <div className="command-top">
            <div>
              <small>Zone: Chennai Corporation</small>
              <h3>Infrastructure Operations</h3>
            </div>
            <div className="filter-chip">Ward / District Filter</div>
          </div>
          <div className="command-grid">
            <div className="command-map">
              <span className="map-road a" />
              <span className="map-road b" />
              <span className="map-road c" />
              <span className="map-pulse p1" />
              <span className="map-pulse p2" />
              <span className="map-pulse p3" />
              <span className="map-pulse p4" />
            </div>
            <div className="queue-panel">
              <h4>Severity Queue</h4>
              <QueueItem label="Critical pothole" value="2h SLA" tone="critical" />
              <QueueItem label="Drainage failure" value="6h SLA" tone="high" />
              <QueueItem label="Surface cracks" value="24h SLA" tone="medium" />
            </div>
            <div className="sla-panel">
              <h4>SLA Health</h4>
              <div className="ring">91%</div>
              <p>On-track resolution compliance</p>
            </div>
            <div className="contractor-panel">
              <h4>Contractor Assignments</h4>
              <span>North Zone Team <strong>42</strong></span>
              <span>South Zone Team <strong>36</strong></span>
              <span>Emergency Crew <strong>18</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QueueItem({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className={`queue-item ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function AiSection() {
  return (
    <section className="section ai">
      <div className="section-heading reveal">
        <span className="section-label">EXtream.AI intelligence layer</span>
        <h2>Practical AI for prioritization, validation, and planning.</h2>
      </div>
      <div className="ai-grid">
        {aiFeatures.map((feature, index) => (
          <article className="ai-card reveal" style={{ "--delay": `${index * 60}ms` } as React.CSSProperties} key={feature.title}>
            <feature.icon aria-hidden="true" />
            <h3>{feature.title}</h3>
            <p>{feature.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AccountabilitySection() {
  return (
    <section className="section accountability">
      <div className="accountability-panel reveal">
        <div className="section-heading align-left">
          <span className="section-label">Accountability engine</span>
          <h2>Every complaint has ownership, status, and evidence.</h2>
          <p>
            Department routing, contractor assignment, SLA escalation, audit logs,
            and before/after geo-tagged proof keep the system action-oriented.
          </p>
        </div>
        <div className="evidence-grid">
          <div className="evidence-card before">
            <small>Before Repair</small>
            <span className="crack" />
          </div>
          <div className="evidence-card after">
            <small>After Repair</small>
            <CheckCircle2 aria-hidden="true" />
          </div>
          <div className="audit-card">
            <Workflow aria-hidden="true" />
            <h3>Immutable Audit Trail</h3>
            <p>Timestamp, GPS, department owner, contractor proof, and AI validation recorded for each action.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PilotSection() {
  const weeks = [
    ["Week 1", "Discovery, branding, GIS integration", "BRD + UI mockups"],
    ["Week 2", "Mobile/reporting workflow build", "Internal testing build"],
    ["Week 3", "AI + dashboard integration", "UAT environment"],
    ["Week 4", "Security testing and pilot launch", "Pilot go-live"],
  ];

  return (
    <section className="section pilot" id="pilot">
      <div className="section-heading reveal">
        <span className="section-label">Pilot roadmap</span>
        <h2>Approve pilot. Launch in 20 days.</h2>
        <p>Recommended pilot zone: Chennai Corporation zone or one district municipality.</p>
      </div>
      <div className="pilot-timeline">
        {weeks.map(([week, activity, deliverable], index) => (
          <article className="week-card reveal" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={week}>
            <span>{week}</span>
            <h3>{activity}</h3>
            <p>{deliverable}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="section metrics">
      <div className="section-heading reveal">
        <span className="section-label">Pilot success metrics</span>
        <h2>Clear targets for adoption, speed, trust, and platform readiness.</h2>
      </div>
      <div className="metrics-grid">
        {metrics.map(([value, label], index) => (
          <article className="metric-card reveal" style={{ "--delay": `${index * 45}ms` } as React.CSSProperties} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section final-cta" id="contact">
      <div className="cta-panel reveal">
        <span className="section-label">Next step</span>
        <h2>Approve Pilot. Launch in 20 Days. Scale Across Tamil Nadu.</h2>
        <p>
          Delivered by Vectro Digital Services Private Limited + EXtream.AI for
          AI-enabled citizen infrastructure governance.
        </p>
        <div className="hero-actions center">
          <a className="button primary" href="mailto:ask@vectroconsulting.com">
            Start Pilot Discussion
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="button secondary light" href={`${import.meta.env.BASE_URL}roadsnap-tn-proposal.pdf`} download>
            Download Proposal
          </a>
          <a className="button secondary light" href="https://vectroconsulting.com/">
            Contact Vectro
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Partner cards row */}
        <div className="footer-partners">
          {/* Left — Vectro */}
          <div className="partner-card vectro-card">
            <span className="partner-label">DELIVERED BY</span>
            <div className="partner-logo-box vectro-logo-box">
              <span className="vectro-wordmark">Vectro</span>
            </div>
            <p className="partner-name">VECTRO Digital Services Private Limited</p>
          </div>

          {/* Centre divider */}
          <div className="footer-center-divider">
            <div className="divider-rail" />
            <span className="powered-by-pill">POWERED BY</span>
            <div className="divider-rail" />
          </div>

          {/* Right — EXtream.AI */}
          <div className="partner-card exai-card">
            <span className="partner-label">AI INTELLIGENCE BY</span>
            <div className="partner-logo-box exai-logo-box">
              <span className="exai-wordmark">
                eX<span className="exai-caret">&#x039B;</span>i
              </span>
            </div>
            <p className="partner-name">EXtream.AI – EAP AI Agent Platform</p>
          </div>
        </div>

        {/* Bottom tagline + links */}
        <div className="footer-bottom">
          <p className="footer-tagline">
            Together delivering Tamil Nadu's AI-enabled citizen governance and digital
            participation platform.
          </p>
          <div className="footer-cta-links">
            <a
              className="footer-link-btn"
              href="https://vectroconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vectroconsulting.com
            </a>
            <a
              className="footer-link-btn"
              href="mailto:ask@vectroconsulting.com"
            >
              ask@vectroconsulting.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
