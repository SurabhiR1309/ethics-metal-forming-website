import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-section">

      <div className="why-header">
        <span className="why-subtitle">
          WHY CHOOSE ETHICS
        </span>

        <h2>
          Reliable Engineering.
          <br />
          Exceptional Performance.
        </h2>
      </div>

      <div className="why-content">

        {/* Left Side Content */}

        <div className="why-text">

          <p>
            We are a young and dynamic sheet metal machinery company
            committed to providing reliable, economical, and innovative
            sheet metal solutions. Our vision is to deliver high-quality
            machinery that helps industries achieve greater productivity,
            precision, and efficiency.
          </p>

          <p>
            We take pride in the quality of our machines and the service
            we provide. Every machine is manufactured using premium-grade
            materials and components to ensure durability, reliability,
            and long-term performance in demanding industrial environments.
          </p>

          <p>
            We continuously improve our products, specifications, and
            manufacturing processes to provide the best possible solutions
            to our customers. Our commitment extends beyond machinery,
            with dedicated after-sales support and long-term customer
            relationships built on trust and performance.
          </p>

        </div>

        {/* Right Side Cards */}

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">⚙️</div>
            <h3>Precision Manufacturing</h3>
            <p>
              Engineered with high accuracy and strict quality standards.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🏭</div>
            <h3>Industrial Grade Machines</h3>
            <p>
              Built to withstand demanding industrial operations.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🔧</div>
            <h3>Low Maintenance</h3>
            <p>
              Reliable designs that minimize downtime and servicing.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🚀</div>
            <h3>High Productivity</h3>
            <p>
              Optimized for faster operations and greater efficiency.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">💎</div>
            <h3>Premium Components</h3>
            <p>
              Manufactured using quality materials and trusted components.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">🤝</div>
            <h3>Excellent After-Sales Support</h3>
            <p>
              Dedicated support and long-term customer relationships.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}