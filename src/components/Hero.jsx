export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <h3>ENGINEERED FOR EXCELLENCE</h3>

        <h1>
          Premium Sheet Metal
          <br />
          Forming Machines
        </h1>

        <p>
          Delivering reliable and economical sheet metal
          solutions with precision engineering and
          industrial-grade performance.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Products
          </button>
          <button
            className="outline"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </button>
        </div>

      </div>

    </section>
  );
}