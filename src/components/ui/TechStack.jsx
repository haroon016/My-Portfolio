import "./PortfolioSections.css";

const stack = [
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Swagger",
  "Postman",
  "Jam.dev",
  "Make.com",
];

export default function TechStack() {
  return (
    <section className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Tech Comfort Zone</p>
          <h2>Technical enough to speak the engineers’ language and catch issues early.</h2>
        </div>

        <div className="stack-panel" data-reveal>
          <p className="stack-copy">
            I work comfortably around product and engineering teams with enough technical
            depth to support better decisions, cleaner requirements, and smoother delivery.
          </p>

          <div className="stack-list">
            {stack.map((item, index) => (
              <span
                key={item}
                className="stack-pill"
                data-reveal
                style={{ "--reveal-delay": `${index * 45}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
