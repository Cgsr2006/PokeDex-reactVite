import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { PokemonPage } from "./PokemonPage";
import { ErrorPage } from "./ErrorPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokemon/:entradaUsuario" element={<PokemonPage />} />
        <Route path="/not-found" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
