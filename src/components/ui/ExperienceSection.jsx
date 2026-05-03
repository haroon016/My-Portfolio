import "./PortfolioSections.css";

const responsibilities = [
  "Lead sprint planning, backlog grooming, and stakeholder alignment across concurrent projects.",
  "Serve as the sole QA engineer for manual testing, API testing, and structured bug reporting.",
  "Author PRDs, BRDs, FRS, and FRDs from scratch to give teams clarity before execution.",
  "Design AI automations in Make.com to remove repetitive work and improve operational flow.",
  "Own hiring across job descriptions, screening, interviews, and onboarding.",
  "Bridge communication between CEOs and technical and design teams on a daily basis.",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section portfolio-section--muted">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">What I Do</p>
          <h2>Execution, quality, operations, and communication all in one place.</h2>
        </div>

        <div className="responsibility-grid">
          {responsibilities.map((item, index) => (
            <article
              key={item}
              className="responsibility-card"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
