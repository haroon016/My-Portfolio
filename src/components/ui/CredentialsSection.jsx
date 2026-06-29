import "./PortfolioSections.css";

const education = [
  {
    title: "BSc in Information Technology",
    detail: "University of Management and Technology, Lahore",
    meta: "2019 - 2023",
  },
  {
    title: "Google Project Management Certificate",
    detail: "Google",
    meta: "2025",
  },
];

const certifications = [
  "Google Cloud Platform (2023)",
  "Operations Management Foundation (2024)",
  "Full-Stack Development (2026)",
];

export default function CredentialsSection() {
  return (
    <section className="portfolio-section portfolio-section--credentials">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Education & Certifications</p>
          <h2>Foundational training that supports the project, product, and technical work.</h2>
        </div>

        <div className="credentials-grid">
          <article className="credential-card" data-reveal>
            <p className="credential-card__title">Education</p>
            <ul className="credential-list">
              {education.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                  <em>{item.meta}</em>
                </li>
              ))}
            </ul>
          </article>

          <article className="credential-card" data-reveal>
            <p className="credential-card__title">Certifications</p>
            <ul className="credential-tags">
              {certifications.map((item, index) => (
                <li
                  key={item}
                  className="stack-pill"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 50}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
