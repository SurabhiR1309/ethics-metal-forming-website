export default function About() {
  return (
    <section id="about" className="about section">

      <div className="left">
        <div className="about-machine-layout">
          <div className="machine-card top-left">
            <img src="public/images/product1.png" alt="Hydraulic Pushbar" />
          </div>

          <div className="machine-card top-right">
            <img src="/images/product2.png" alt="Plate Rolling Machine" />
          </div>

          <div className="machine-card bottom-center">
            <img src="/images/product3.png" alt="Clinching Machine" />
          </div>
        </div>
      </div>

      <div className="right">
        <span className="section-tag">ABOUT ETHICS</span>

        <h2 className="about-title">
          Engineering Excellence in <br />
          Metal Forming Solutions
        </h2>

        <p className="about-text">
          We specialize in durable and efficient sheet metal solutions tailored to
          meet industrial demands. Our commitment to innovation, precision
          engineering, and uncompromising quality enables us to manufacture reliable,
          economical, and high-performance machines that deliver long-term value.
          Backed by exceptional customer support and continuous product improvement,
          we strive to be a trusted partner for industries across diverse sectors.
        </p>

        <h3 className="vision-title">Our Vision</h3>

        <p className="vision-text">
          To deliver innovative products with superior quality, advanced engineering,
          and unmatched customer support while building lasting relationships with
          our clients worldwide.
        </p>

        <div className="stats">
          <div className="stat-card">
            <h3>Premium</h3>
            <span>Engineering</span>
          </div>

          <div className="stat-card">
            <h3>Reliable</h3>
            <span>Machines</span>
          </div>

          <div className="stat-card">
            <h3>24×7</h3>
            <span>Support</span>
          </div>
        </div>
      </div>

    </section>
  );
}