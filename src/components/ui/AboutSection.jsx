import "./PortfolioSections.css";

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">About Me</p>
          <h2>Driving product delivery with calm execution, clear docs, and strong alignment.</h2>
        </div>

        <div className="about-grid">
          <div className="about-card" data-reveal>
            <p>
              I am a Technical Project Manager with 4+ years of experience leading
              cross-functional engineering teams and delivering SaaS products from idea
              to production.
            </p>
            <p>
              My work spans Agile delivery, technical documentation, stakeholder
              management, team coordination, and AI workflow automation that saves hours
              of manual effort every week.
            </p>
          </div>

          <div className="about-card" data-reveal>
            <p>
              I sit at the intersection of engineering, design, and business. That means
              I can translate product goals into executable plans, keep teams aligned,
              and reduce delivery friction before it becomes a problem.
            </p>
            <div className="metric-row">
              <div className="metric-card" data-reveal>
                <strong>4+ Years</strong>
                <span>Technical project leadership</span>
              </div>
              <div className="metric-card" data-reveal>
                <strong>3 Products</strong>
                <span>Concurrent SaaS delivery at Dune Flare</span>
              </div>
              <div className="metric-card" data-reveal>
                <strong>40% Saved</strong>
                <span>Manual work reduced through automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
