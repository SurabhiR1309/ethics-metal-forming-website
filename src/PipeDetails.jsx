export default function MachineDetails() {
  return (
    <div className="machine-page">
      <section className="machine-hero">
        <div className="machine-left">
          <img src="/rolling/Hydro-Mechanical Plate Rolling Machine.png"
            alt="Hydro-Mechanical Plate Rolling Machine"
          />
        </div>

        <div className="machine-right">
          <span className="product-tag">
            HYDROMECH ENGINEERS
          </span>
          <h1>
            Hydro-Mechanical 
            <br />
            Plate Rolling Machine
          </h1>
          <h3>Model: HM-SR 312 / 315</h3>
          <ul>
              <li>It’s easy to operated for thin steel sheet bending</li>
              <li>Motor driven for bending</li>
              <li>The upper roller can be moved up and down in</li>
              <li>Manual to discharge the workpiece.</li>
              <li>Asymmetrical roll bending machine with 3 rolls</li>
              <li>High Strength steel rolls</li>
              <li>Fixed top roller, adjustable lower and rear rollers</li>
              <li>Worm gear and motor for pre-bending</li>
              <li>Quick release top roller</li>
            </ul>
          <div className="hero-buttons">
            <button className="primary-btn">
              Get Quote
            </button>
            <button className="secondary-btn">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      {/* Table */}
      <section className="specifications">
        <h2>Technical Specifications</h2>
        <div className="table-container">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Round Pipe</th>
                <th>Square Pipe</th>
                <th>Rectangular Pipe</th>
                <th>Angle</th>
                <th>Flat Bar</th>
                <th>Motor</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>HM-SB50</td>
                <td>Ø50 × 3 mm</td>
                <td>50 × 50 × 3 mm</td>
                <td>60 × 40 × 3 mm</td>
                <td>50 × 5 mm</td>
                <td>50 × 10 mm</td>
                <td>3 HP</td>
              </tr>

              <tr>
                <td>HM-SB50</td>
                <td>Ø50 × 3 mm</td>
                <td>50 × 50 × 3 mm</td>
                <td>60 × 40 × 3 mm</td>
                <td>50 × 5 mm</td>
                <td>50 × 10 mm</td>
                <td>3 HP &amp; 1 HP</td>
              </tr>

              <tr>
                <td>HM-SB75</td>
                <td>Ø75 × 5 mm</td>
                <td>75 × 75 × 5 mm</td>
                <td>80 × 60 × 5 mm</td>
                <td>50 × 6 mm</td>
                <td>60 × 10 mm</td>
                <td>5 HP &amp; 1 HP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}