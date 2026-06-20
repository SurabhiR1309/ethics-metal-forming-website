import { useNavigate } from "react-router-dom";

const machines = [
  {
    id: "pushbar",
    title: "Hydraulic Bus Bar",
    image: "/busbar/Hydraulic Busbar Processing machine (3 in 1).png",
    route: "/busbar",
  },
  {
    id: "clinching",
    title: "Hydraulic Clinching",
    image: "/clinching/Hydraulic Clinching Machine.png",
    route: "/clinching",
  },
  {
    id: "section-bending",
    title: "Section Bending",
    image: "/sectionbending/Hydraulic Section Bending Machine.png",
    route: "/plate-rolling",
  },
  {
    id: "plate-rolling",
    title: "Mechanical Plate Rolling",
    image: "/rolling/Hydro-Mechanical Plate Rolling Machine.png",
    route: "/section-bending",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section id="products" className="section products">
      <h3 className="vision-title2">Our Machines</h3>

      <div className="grid">
        {machines.map((machine) => (
          <div className="card" key={machine.title}>
            <img src={machine.image} alt={machine.title} />

            <h3>{machine.title}</h3>

            <button onClick={() => navigate(machine.route)}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}