import React, { useState } from "react";
import "./style.css";
import ImagemPokemons from "../assets/ImagensGeral/image 1.png";
import Divider from "../assets/ImagensGeral/divider.png";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home">
      <Header 
        texto1="Digite o nome do Pokémon ou o" 
        texto2="número da PokéDex"
        click={() => navigate("/")}>
      </Header>

      <img src={ImagemPokemons} />
      <img src={Divider} className="linha" />

      <Input></Input>
    </div>
  );
}
