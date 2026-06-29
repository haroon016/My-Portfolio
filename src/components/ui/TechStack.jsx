import "./PortfolioSections.css";

const skillGroups = [
  {
    title: "Project Management",
    items: [
      "Agile",
      "Scrum",
      "Sprint Planning",
      "Risk Management",
      "PRD / BRD / FRD / FRS Writing",
      "Stakeholder Communication",
    ],
  },
  {
    title: "AI & Automation",
    items: ["Make.com", "n8n", "Claude", "Fathom AI", "Cursor AI", "ChatGPT"],
  },
  {
    title: "Technical",
    items: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Full-Stack Development",
      "Swagger",
      "Postman",
    ],
  },
  {
    title: "PM Tools",
    items: [
      "Jira",
      "Linear",
      "Notion",
      "ClickUp",
      "GitHub",
      "Miro",
      "Slack",
      "Looker Studio",
      "Sanity",
      "Strapi",
      "G-Suite",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="portfolio-section">
      <div className="section-shell">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Skills & Tools</p>
          <h2>Enough technical depth to keep execution sharp and collaboration practical.</h2>
        </div>

        <div className="stack-panel" data-reveal>
          <p className="stack-copy">
            I work comfortably around product and engineering teams, using the right
            mix of process, technical context, and automation to support better
            decisions, cleaner requirements, and smoother delivery.
          </p>

          <div className="skill-groups">
            {skillGroups.map((group, groupIndex) => (
              <div className="skill-group" key={group.title}>
                <p className="skill-group__title" data-reveal style={{ "--reveal-delay": `${groupIndex * 70}ms` }}>
                  {group.title}
                </p>
                <div className="stack-list">
                  {group.items.map((item, index) => (
                    <span
                      key={item}
                      className="stack-pill"
                      data-reveal
                      style={{ "--reveal-delay": `${groupIndex * 70 + index * 45}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
