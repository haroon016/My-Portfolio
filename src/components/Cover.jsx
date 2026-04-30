import cover from "../assets/cover.avif";
import "./Cover.css";

export default function Cover() {
  return (
    <section
      id="home"
      className="cover"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="cover__content" data-reveal="hero">
        <p className="cover__eyebrow" data-reveal-child>
          Projects and Operations Manager | Manual QA Lead
        </p>

        <h1 className="cover__title" data-reveal-child>
          Haroon Zahid Bajwa
        </h1>

        <p className="cover__lead" data-reveal-child>
          Creating reliable systems, smoother operations, and quality-driven digital
          experiences with more than 4 years of leadership across projects and delivery.
        </p>

        <p className="cover__text" data-reveal-child>
          My work brings together project management, operations leadership, manual QA,
          and AI automation workflows to help teams stay aligned, move faster, and deliver
          with confidence.
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
            href="https://wa.me/923404676016"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="cover__secondary" href="tel:+923404676016">
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
}
