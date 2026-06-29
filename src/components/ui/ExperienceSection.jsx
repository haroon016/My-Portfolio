import "./PortfolioSections.css";

const experienceHighlights = [
  {
    role: "Technical Project Manager & Automation Lead",
    company: "Dune Flare, Canada (Remote)",
    details: [
      "Managed 3 concurrent SaaS products and consistently hit 90%+ sprint completion rates.",
      "Acted as the primary liaison between the CEO and a 15-person engineering, design, and operations team.",
      "Built Make.com automations that cut manual work by 40% and saved the team hours every week.",
    ],
  },
  {
    role: "Project Manager",
    company: "U2 Ventures, Remote",
    details: [
      "Delivered 5+ web and 2 mobile app projects across SaaS, fintech, e-commerce, booking, and CMS domains.",
      "Managed a 7-person engineering team and a 4-person design team across 2 to 3 concurrent projects.",
      "Gathered requirements, translated them into technical specs, and maintained stakeholder alignment end to end.",
    ],
  },
  {
    role: "Associate Project Manager & Business Analyst",
    company: "Programmers Force, Lahore",
    details: [
      "Promoted within 6 months for driving measurable process improvements.",
      "Facilitated sprint planning, retrospectives, and backlog grooming across multiple Agile teams.",
      "Built the foundation for stronger delivery rituals and cleaner cross-team execution.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section portfolio-section--muted">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Experience</p>
          <h2>Delivery leadership across SaaS, operations, and product execution.</h2>
        </div>

        <div className="experience-grid">
          {experienceHighlights.map((item, index) => (
            <article
              key={item.role}
              className="experience-card"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <p className="experience-card__role">{item.role}</p>
              <p className="experience-card__company">{item.company}</p>
              <ul className="experience-card__list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
