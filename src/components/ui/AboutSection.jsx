import "./PortfolioSections.css";

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">About Me</p>
          <h2>Driving product delivery with calm execution and strong cross-team alignment.</h2>
        </div>

        <div className="about-grid">
          <div className="about-card" data-reveal>
            <p>
              I am a results-driven Project and Operations Manager with 4+ years of
              experience delivering SaaS products end-to-end, from PRD to production.
            </p>
            <p>
              I have scaled teams from 5 to 30+ people, owned QA processes solo, and
              built AI-powered automation workflows that save hours every week.
            </p>
          </div>

          <div className="about-card" data-reveal>
            <p>
              My strength sits at the intersection of engineering, design, and business.
              I help teams stay aligned, reduce delivery friction, and ship with more
              clarity and confidence.
            </p>
            <div className="metric-row">
              <div className="metric-card" data-reveal>
                <strong>4+ Years</strong>
                <span>Project and operations leadership</span>
              </div>
              <div className="metric-card" data-reveal>
                <strong>30+ People</strong>
                <span>Teams scaled and coordinated</span>
              </div>
              <div className="metric-card" data-reveal>
                <strong>End-to-End</strong>
                <span>From product docs to release readiness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
