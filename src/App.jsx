import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Pag1 from "./pages/Pag1Musica";
import Pag2 from "./pages/Pag2Computacao";
import Pag3 from "./pages/Pag3Disparidade";
import Pag4 from "./pages/Pag4Historicas";
import Pag5 from "./pages/Pag5Esporte";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pag1" element={<Pag1 />} />
        <Route path="/pag2" element={<Pag2 />} />
        <Route path="/pag3" element={<Pag3 />} />
        <Route path="/pag4" element={<Pag4 />} />
        <Route path="/pag5" element={<Pag5 />} />
      </Routes>
    </Layout>
  );
}

export default App;