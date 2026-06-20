export default function MachineDetails() {
  return (
    <div className="machine-page">

      {/* Hero */}
      <section className="machine-hero">

        <div className="machine-left">
          <img src="/busbar/Hydraulic Busbar Processing machine (3 in 1).jpg"
            alt="Hydraulic Bus Bar Processing Machine"
          />
        </div>

        <div className="machine-right">
          <span className="product-tag">
            HYDROMECH ENGINEERS
          </span>
          <h1>
            Hydraulic Bus Bar
            <br />
            Processing Machine
          </h1>
          <h3>Model: HMB-303 / HMB-303M / HMB-303NC</h3>
          <p>
            Designed to provide an effective solution for
            punching, bending and shearing copper and
            aluminium bus bars with high precision,
            reliability and production efficiency.
          </p>

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

      {/* Features */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            ⚙️
            <h3 >3-in-1 Processing</h3><br/>
            <p>Punching, Bending & Cutting.</p>
          </div>
          <div className="feature-card">
            🎯
            <h3>High Accuracy</h3><br/>
            <p>Accurate punching and bending.</p>
          </div>
          <div className="feature-card">
            🚀
            <h3>Fast Production</h3><br/>
            <p>Improves production efficiency.</p>
          </div>
          <div className="feature-card">
            🔧
            <h3>Low Maintenance</h3><br/>
            <p>Easy to operate and maintain.</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="operations">
        <h2>Machine Operations</h2>
        <div className="operation-box">
          Punching
        </div>
        <div className="operation-box">
          Bending
        </div>
        <div className="operation-box">
          Shearing
        </div>
      </section>

      {/* Specifications */}
      <section className="specifications">
        <h2>Technical Specifications</h2>

        <div className="table-container">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Operation</th>
                <th>Material</th>
                <th>Thickness × Width</th>
                <th>Stroke</th>
                <th>Motor</th>
              </tr>
            </thead>

            <tbody>
              {/* HMB-303M */}
              <tr>
                <td rowSpan="6">HMB-303M</td>
                <td rowSpan="2">Punching</td>
                <td>Copper</td>
                <td>Ø 18 × 16T</td>
                <td rowSpan="2">60 mm</td>
                <td rowSpan="6">5 HP</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>Ø 20 × 16T</td>
              </tr>

              <tr>
                <td rowSpan="2">Bending</td>
                <td>Copper</td>
                <td>12T × W200 mm</td>
                <td rowSpan="2">80 mm</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>16T × W200 mm</td>
              </tr>

              <tr>
                <td rowSpan="2">Shearing</td>
                <td>Copper</td>
                <td>16T × W200 mm</td>
                <td rowSpan="2">40 mm</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>16T × W200 mm</td>
              </tr>

              {/* HMB-303C */}
              <tr>
                <td rowSpan="6">HMB-303C</td>
                <td rowSpan="2">Punching</td>
                <td>Copper</td>
                <td>Ø 20 × 16T</td>
                <td rowSpan="2">60 mm</td>
                <td rowSpan="6">5 HP</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>Ø 20 × 16T</td>
              </tr>

              <tr>
                <td rowSpan="2">Bending</td>
                <td>Copper</td>
                <td>16T × W200 mm</td>
                <td rowSpan="2">80 mm</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>16T × W200 mm</td>
              </tr>

              <tr>
                <td rowSpan="2">Shearing</td>
                <td>Copper</td>
                <td>16T × W200 mm</td>
                <td rowSpan="2">40 mm</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>16T × W200 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="busbar-info">
        <h2>Bus Bar Processing Machine</h2>
        <p className="busbar-description">
          These series of Bus Bar Processing Machines are designed to provide an
          effective solution for punching, bending, and cutting bus bars. Each unit
          is engineered for easy adjustment, reducing setup time and improving
          production efficiency. The machine enables quick and accurate processing of
          copper and aluminium bus bars, including shearing, punching, and bending
          operations. Its robust construction, ease of movement, and low maintenance
          requirements make it an ideal solution for modern manufacturing
          environments.
        </p>
        <div className="feature-boxes">
          <div className="feature-panel">
            <h3>Features – HMB-303M</h3>
            <ul>
              <li>Squaring arm for shearing and bending station.</li>
              <li>Fine stroke manual adjustment for bending station.</li>
              <li>
                Manual gauge stopper for punching station with faster working speed.
              </li>
            </ul>
          </div>

          <div className="feature-panel">
            <h3>Features – HMB-303NC</h3>

            <ul>
              <li>Fine adjusting squaring arm for bending and shearing station.</li>
              <li>Vertical axis adjustment based on bus bar size (width).</li>
              <li>
                Bending angle is numerically controlled through a digital input unit
                (NC).
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bm20-section">
        <div className="bm20-top">
          <div className="bm20-image-card">
            <img src="/busbar/Hydraulic Busbar Bending.png"
              alt="HM-BM20 Bus Bar Bending Machine"
            />
          </div>
          <div className="bm20-content">
            <span className="product-label">
              COMPACT SERIES
            </span>
            <h2>HM-BM20 Bus Bar Bending Machine</h2>
            <p>
              The HM-BM20 is a compact and portable Bus Bar Bending Machine designed
              for user-friendly operation and enhanced control. Its robust design
              enables precise bending while remaining easy to transport and maintain,
              making it ideal for industrial and workshop applications.
            </p>
            <div className="bm20-features">
              <div className="feature-chip">
                ✓ Speedy and accurate bends
              </div>
              <div className="feature-chip">
                ✓ Inexpensive tooling
              </div>
              <div className="feature-chip">
                ✓ Stroke control for pre-set bending angle
              </div>
              <div className="feature-chip">
                ✓ Compact and lightweight design
              </div>
              <div className="feature-chip">
                ✓ Low maintenance requirements
              </div>
            </div>
          </div>
        </div>
        <div className="bm20-specs">
          <h3>Technical Specifications</h3>
          <table className="bm20-table">
            <thead>
              <tr>
                <th>Capacity</th>
                <th>Material</th>
                <th>Thickness × Width</th>
                <th>Cylinder Stroke</th>
                <th>Motor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">HM-BM20 (Max 16T × W200)</td>
                <td>Copper</td>
                <td>10T × W200 mm</td>
                <td rowSpan="2">80 mm</td>
                <td rowSpan="2">2 HP</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>14T × W200 mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="bm20-section">
        <div className="bm20-top">
          <div className="bm20-image-card">
            <img src="/busbar/Hydraulic Busbar Punching.png" alt="HM-BM20 Bus Bar Punching Machine"/>
          </div>
          <div className="bm20-content">
            <span className="product-label">
              COMPACT SERIES
            </span>
            <h2>HM-PM20 Bus Bar Punching Machine</h2>
            <p>
              The HM-PM20 is a compact and portable Bus Bar Punching Machine designed
              for user-friendly operation and enhanced control. Its robust design
              enables precise bending while remaining easy to transport and maintain,
              making it ideal for industrial and workshop applications.
            </p>
            <div className="bm20-features">
              <div className="feature-chip">
                ✓ Speedy and accurate Punch
              </div>
              <div className="feature-chip">
                ✓ Inexpensive tooling
              </div>
              <div className="feature-chip">
                ✓ Manual gauge bar stoppers for positioning
              </div>
              <div className="feature-chip">
                ✓ Low maintenance requirements
              </div>
            </div>
          </div>
        </div>
        <div className="bm20-specs">
          <h3>Technical Specifications</h3>
          <table className="bm20-table">
            <thead>
              <tr>
                <th>Capacity</th>
                <th>Material</th>
                <th>Thickness × Width</th>
                <th>Cylinder Stroke</th>
                <th>Motor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="2">HM-PM20 (Max 16T × W200)</td>
                <td>Copper</td>
                <td>Ø14 X 12T</td>
                <td rowSpan="2">60 mm</td>
                <td rowSpan="2">2 HP</td>
              </tr>
              <tr>
                <td>Aluminium</td>
                <td>Ø16 X 14T</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}