import cover from "../../assets/cover.avif";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="cover"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="cover__content" data-reveal="hero">
        <p className="cover__eyebrow" data-reveal-child>
          Technical Project Manager | AI Automation & Operations Specialist
        </p>

        <h1 className="cover__title" data-reveal-child>
          Haroon Zahid Bajwa
        </h1>

        <p className="cover__lead" data-reveal-child>
          Leading cross-functional engineering teams, delivery operations, and AI-driven
          workflows across SaaS products from idea to production.
        </p>

        <p className="cover__text" data-reveal-child>
          I bring together Agile delivery, technical documentation, stakeholder
          management, and workflow automation to help teams stay aligned, ship cleanly,
          and remove manual work wherever possible.
        </p>

        <div className="cover__actions" data-reveal-child>
          <a
            className="cover__primary"
            href="https://pk.linkedin.com/in/haroon-bajwa-1891b7242"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="cover__secondary"
            href="mailto:haroonjut2001@gmail.com"
          >
            Email
          </a>
          <a
            className="cover__secondary"
            href="https://wa.me/923404676016"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="cover__secondary" href="tel:+923404676016">
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
