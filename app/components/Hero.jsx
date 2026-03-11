export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-decoration">
        <span className="scissors-icon">✂</span>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">The Cut You Deserve.</h1>
        <p className="hero-subtitle">
          Experience premium grooming in a refined atmosphere. Where craftsmanship
          meets style, and every detail matters.
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary">Book Your Cut</a>
          <a href="#services" className="btn btn-secondary">See Services</a>
        </div>
      </div>
    </section>
  );
}
