import "./Contact.css";

export default function ContactUs() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-title">
        <span>CONTACT US</span>
        <h2>We're Ready to Power Your Next Project</h2>
        <p>
          Reach out to our team for product inquiries, quotations, technical
          assistance, or after-sales support.
        </p>
      </div>

      <div className="contact-grid">

        {/* Left Column */}
        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Office Address</h3>
            <p>
              #10, 1st Main, 1st Cross,<br />
              Doddanekundi Industrial Area,<br />
              Opp. NGEF Ancillary,<br />
              Mahadevapura Post,<br />
              Bangalore – 560048
            </p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>hydromechengineer@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 973 837 1651</p>
          </div>

          <div className="info-box">
            <h3>🌐 Website</h3>
            <a
              href="https://www.hydromech.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.hydromech.co.in
            </a>
          </div>

        </div>

        {/* Right Column */}
        <div className="contact-highlight">

          <div className="badge">ETHICS</div>

          <h3>Trusted Sheet Metal Machinery Manufacturer</h3>

          <p>
            We specialize in high-quality, durable, and efficient sheet metal
            machinery designed for industrial applications. From bus bar
            processing to section bending and plate rolling, our solutions are
            built for precision and long-term performance.
          </p>

          <div className="highlight-list">
            <div>✔ Premium Quality Manufacturing</div>
            <div>✔ Reliable Industrial Performance</div>
            <div>✔ Economical & Durable Machines</div>
            <div>✔ Excellent After-Sales Support</div>
          </div>

          <button className="quote-btn">
            Request a Quote
          </button>

        </div>

      </div>

    </section>
  );
}