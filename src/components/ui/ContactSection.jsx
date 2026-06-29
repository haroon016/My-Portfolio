import "./PortfolioSections.css";

export default function ContactSection() {
  return (
    <section id="contact" className="portfolio-section portfolio-section--contact">
      <div className="section-shell contact-panel" data-reveal>
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Let’s build cleaner delivery systems and better product operations.</h2>
        </div>

        <p className="contact-copy" data-reveal>
          If you are looking for someone who can connect product thinking, delivery
          structure, stakeholder alignment, and AI automation, I would love to connect.
        </p>

        <div className="contact-actions" data-reveal>
          <a href="mailto:haroonjut2001@gmail.com">
            Email
          </a>
          <a href="https://pk.linkedin.com/in/haroon-bajwa-1891b7242" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/923404676016" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+923404676016">+92 340 4676016</a>
        </div>
      </div>
    </section>
  );
}
