import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/home"; 
import Atividade1 from "./Atividade1/atividade1";
import Atividade2 from "./Atividade2/atv2";
import Atividade3 from "./Atividade3/componentes/atv03";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Atividade1" element={<Atividade1 />} />
        <Route path="/Atividade2" element={<Atividade2 />} />
        <Route path="/Atividade3" element={<Atividade3 />} />
      </Routes>
    </BrowserRouter>);
}