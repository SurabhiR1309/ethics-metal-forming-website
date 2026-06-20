export default function MachineDetails() {
  return (
    <div className="machine-page">
      <section className="machine-hero">
        <div className="machine-left">
          <img src="/sectionbending/Hydraulic Section Bending Machine.png"
            alt="Hydraulic Section Bending Machine"
          />
        </div>

        <div className="machine-right">
          <span className="product-tag">
            HYDROMECH ENGINEERS
          </span>
          <h1>
            Hydraulic Section 
            <br />
            Bending Machine
          </h1>
          <h3>Model: HM-SB50H</h3>
          <ul>
              <li>Horizontal And Vertical Operation ( For Hv Series )</li>
              <li>Standard Roll Set</li>
              <li>Manual Adjustment Of Upperroll</li>
              <li>Hardened Rolls For standard profile</li>
              <li>Foot Switch Control/reverse Forwardstarter</li>
              <li>Easy & Quick Roll Change</li>
              <li>Scale For Clear Adjustment Of top roll</li>
              <li>Hardened & Grinded shafts</li>
              <li>All Shafts Runs In Roller Bearing</li>
              <li>The Machine Frame Is Weldedsteel Construction</li>
              <li>Machine Can Be Operartedbysemi-skilled or Unskilled Operator</li>
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
              <th>Max Rolling Thickness</th>
              <th>Max Rolling Width</th>
              <th>Roll Diameter</th>
              <th>Min Rolling Diameter</th>
              <th>Motor</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HM-SR212</td>
              <td>2 mm</td>
              <td>1200 mm</td>
              <td>90 mm</td>
              <td>110 mm</td>
              <td>2 HP</td>
            </tr>

            <tr>
              <td>HM-SR312</td>
              <td>3 mm</td>
              <td>1200 mm</td>
              <td>100 mm</td>
              <td>120 mm</td>
              <td>3 HP</td>
            </tr>

            <tr>
              <td>HM-SR315</td>
              <td>3 mm</td>
              <td>1500 mm</td>
              <td>115 mm</td>
              <td>145 mm</td>
              <td>3 HP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    </div>
  );
}