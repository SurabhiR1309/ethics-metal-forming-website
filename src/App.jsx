import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MachineDetails from "./MachineDetails";
import ClinchingDetails from "./ClinchingDetails";
import SlipDetails from "./SlipDetails";
import PipeDetails from "./PipeDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busbar" element={<MachineDetails />} />
      <Route path="/clinching" element={<ClinchingDetails />} />
      <Route path="/plate-rolling" element={<SlipDetails />} />
      <Route path="/section-bending" element={<PipeDetails />} />
    </Routes>
  );
}

export default App;