import "./style.css";

import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";

import Divider from "/divider.png";
import Pikachu from "/pikachu-svgrepo-com.svg";

// useState -> mudanças de estados
// useEffect -> observa uma variável e executa um bloco de códico caso haja alguma mudança na variável
// useMemo -> faz a mesma coisa do useEffect só que retorn  aum valor a uma variável
// useCallback -> faz a mesma coisa do useMemo só que permite que sejam passados parêmtros

// useEffect(() => {
//   console.log("mudouaasdasd");
// }, [visibilidade]);

// const calc = useMemo(() => {
//   return 1 + 1;
// }, [currentTab]);

// const funct = useCallback(
//   (param1: number, param2: number) => {
//     return param1 + param2;
//   },[calc]
// );

enum Tab {
  Aparencia,
  Habilidades,
}

// Interface que vai gravar os dados no ue
interface IPokemon {
  nome: string;
  id: number;
  tipo: string[];
  peso: number;
  altura: number;
  habilidades: string[];

  vida: number;
  ataque: number;
  defesa: number;
  defesaEspecial: number;
  velocidade: number;

  defaultFront: string;
  defaultBack: string;
  shinyFront: string;
  shinyBack: string;
}

export function PokemonPage() {

  const navigate = useNavigate();
  const { entradaUsuario } = useParams();
  const [currentTab, setCurrentTab] = useState(Tab.Aparencia);
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [hoverDefault, setHoverDefault] = useState(false);
  const [hoverShiny, setHoverShiny] = useState(false);
  const [loading, setLoading] = useState(false);

  // função assíncrona para buscar os dados
  const requisicao = async () => {
    let rotaAPI = `https://pokeapi.co/api/v2/pokemon/${entradaUsuario}`;
    setLoading(true);

    try {
      const response = await fetch(rotaAPI); // Faz a requisição
      const data = await response.json(); // Transformou a resposta da requisição em json

      if (!response.ok) {
        navigate("/not-found");
        return;
      }

      const delay = new Promise((resolve) => setTimeout(resolve, 1000));
      await delay;

      // helper seguro para stats
      const stat = (name: string) =>
        data.stats?.find((s: any) => s.stat?.name === name)?.base_stat ?? 0;

      // Mapear a resposta da API para o seu tipo IPokemon
      const mapped: IPokemon = {
        nome: (data.name ?? "—").toUpperCase(),

        id: data.id ?? 0,
        tipo: (data.types ?? []).map((t: any) => t.type?.name ?? "desconhecido"),
        peso: (data.weight ?? 0) / 10,
        altura: (data.height ?? 0) * 10,
        habilidades: (data.abilities ?? []).map((a: any) => a.ability?.name ?? "—"),

        vida: stat("hp"),
        ataque: stat("attack"),
        defesa: stat("defense"),
        defesaEspecial: stat("special-defense"),
        velocidade: stat("speed"),

        defaultFront: data.sprites?.front_default ?? Pikachu,
        defaultBack: data.sprites?.back_default ?? Pikachu,
        shinyFront: data.sprites?.front_shiny ?? Pikachu,
        shinyBack: data.sprites?.back_shiny ?? Pikachu,
      };

      setPokemon(mapped); // Atribui essas informações a pokemon

    } catch (error) {
      navigate("/not-found");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requisicao();
    //console.log(entradaUsuario);
  }, [entradaUsuario]);

  return (
    <>
      {/*Renderiza a loading caso o loading seja verdadeiro*/}
      {loading && (
        <div className="loader-overlay">
          <div className="spinner" />
          <b>
            <p>Carregando...</p>
          </b>
        </div>
      )}

      {/*Renderiza a div caso o loading seja false, ou seja, quando não estiver rolando loading*/}
      {loading || (
        <div className="page-pokemon">
          <Header
            texto1="Pokemon Encontrado"
            click={() => navigate("/")}
          ></Header>

          <div className="quadroSegundaPagina">
            <button
              className={`botaoAparencia ${currentTab === Tab.Aparencia ? "ativo" : ""}`}
              onClick={() => setCurrentTab(Tab.Aparencia)}
            >
              <b>Aparência</b>
            </button>

            <button
              className={`botaoHabilidades ${currentTab === Tab.Habilidades ? "ativo" : ""}`}
              onClick={() => setCurrentTab(Tab.Habilidades)}
            >
              <b>Habilidades / Status</b>
            </button>

            {/*Renderiza a tab aparência da Página dos pokemons*/}
            {currentTab === Tab.Aparencia && (
              <div className="aparencia">
                <div id="divPokemonDefault">
                  <img
                    src={
                      hoverDefault ? pokemon?.defaultBack : pokemon?.defaultFront
                    }
                    onClick={() => hoverDefault === true ? setHoverDefault(false) : setHoverDefault(true)}
                    className="imagem-pokemon"
                  />
                  <p id="nomePokemon" className="nomesPokemon">
                    <b>{pokemon?.nome}</b>
                  </p>
                </div>

                <div id="divPokemonShiny">
                  <img
                    src={hoverShiny ? pokemon?.shinyBack : pokemon?.shinyFront}
                    onClick={() => hoverShiny === true ? setHoverShiny(false) : setHoverShiny(true)}
                    className="imagem-pokemon"
                  />
                  <p id="nomePokemonShiny" className="nomesPokemon">
                    <b>{pokemon?.nome} (Shiny)</b>
                  </p>
                </div>
              </div>
            )}

            {/*Renderiza a tab habilidades da Página dos pokemons*/}
            {currentTab === Tab.Habilidades && (
              <>
                <div id="quadroHabilidadesPokemon">
                  <p id="info1">Id: {pokemon?.id}</p>
                  <p id="info2">Tipos: {pokemon?.tipo.join(" / ")}</p>
                  <p id="info3">Peso: {pokemon?.peso} kg</p>
                  <p id="info4">Altura: {pokemon?.altura} cm</p>
                  <p id="info5">Hablidade: {pokemon?.habilidades.join(" / ")}</p>
                </div>

                <div id="quadroStatusPokemon">
                  <p id="status1">Vida: {pokemon?.vida}</p>
                  <p id="status2">Ataque: {pokemon?.ataque}</p>
                  <p id="status3">Defesa: {pokemon?.defesa}</p>
                  <p id="status4">Defesa-especial: {pokemon?.defesaEspecial}</p>
                  <p id="status5">velocidade: {pokemon?.velocidade}</p>
                </div>
              </>
            )}
          </div>

          <img src={Divider} className="linha" />

          <Input></Input>
        </div>
      )}
    </>
  );
}