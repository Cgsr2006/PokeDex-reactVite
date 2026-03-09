import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
  const [valor, setValor] = useState("");
  const navigate = useNavigate();

  const mandaInput = () => {
    const termo = String(valor).trim().toLowerCase(); // padronização da entrada do usuário para previnir erros

    navigate(`/pokemon/${termo}`);
    setValor(""); // limpa o campo depois
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // impede o reload da página
          mandaInput();
        }}
      >
        <input
          placeholder="Pesquise por Pokemons ou pelo número Pokedex"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="input"
          required
        />

        <button type="submit" className="botao">
          <b>Pesquisar</b>
        </button>
      </form>
    </div>
  );
}

export { Input };
