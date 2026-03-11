export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">Blade & Ember</h3>
            <p className="footer-tagline">
              Where craftsmanship meets style. Premium grooming for the modern
              gentleman.
            </p>
          </div>
          <div className="footer-hours">
            <h4>Hours</h4>
            <ul>
              <li>Mon–Fri: 9am–8pm</li>
              <li>Sat: 9am–6pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>123 Main Street Downtown</li>
              <li>(555) 012-3456</li>
              <li>hello@bladeandember.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Blade & Ember. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
