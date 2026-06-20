export default function MachineDetails() {
  return (
    <div className="machine-page">
      {/* Hero */}
      <section className="machine-hero">
        <div className="machine-left">
          <img src="/clinching/Hydraulic Clinching Machine.png" alt="Hydraulic Clinching Machine"/>
        </div>

        <div className="machine-right">
          <span className="product-tag">
            HYDROMECH ENGINEERS
          </span>
          <h1>
            Hydraulic <br />
            Processing Machine
          </h1>
          <h3>Model: HM-640</h3>
          <ul>
              <li>Hydraulic Force 53KN</li>
              <li>Energy Efficiency of hydraulic system ensures the force repeatability +-2%</li>
              <li>Safety protection system</li>
              <li>Throat Depth 450mm</li>
              <li>Positive stop function is standard with machine</li>
              <li>Ultrasonically & tensile tested IS: 2062 Grade steel C-frame Structure </li>
              <li>Ensures the rigidity & avoids deflection</li>
              <li>Fastener insertion capacity below M8 of steel</li>
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
                    <th>Parameter</th>
                    <th>Specification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Drive Model</td>
                    <td>Hydraulic</td>
                    </tr>

                    <tr>
                    <td>Output Pressure</td>
                    <td>0.5 – 4 T</td>
                    </tr>

                    <tr>
                    <td>Throat Depth</td>
                    <td>400 mm</td>
                    </tr>

                    <tr>
                    <td>Safety Protection</td>
                    <td>Yes</td>
                    </tr>

                    <tr>
                    <td>Clinching Capacity</td>
                    <td>6 mm Nut</td>
                    </tr>

                    <tr>
                    <td>Motor</td>
                    <td>3 HP</td>
                    </tr>

                    <tr>
                    <td>Holding Time</td>
                    <td>1 – 5 Seconds</td>
                    </tr>

                    <tr>
                    <td>Open Height</td>
                    <td>250 mm</td>
                    </tr>

                    <tr>
                    <td>Anti-Rotation Die</td>
                    <td>Yes</td>
                    </tr>

                    <tr>
                    <td>Dimensions (L × W × H)</td>
                    <td>950 mm × 950 mm × 2000 mm</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>
    </div>
  );
}