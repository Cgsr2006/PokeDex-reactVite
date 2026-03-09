import React, { useState } from "react";
import "./style.css";
import Logo from "../assets/ImagensGeral/Logo.svg";
import Icon from "../assets/ImagensGeral/icon.png";
import Pikachu from "../assets/ImagensGeral/Group.png";
import Divider from "../assets/ImagensGeral/divider.png";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="page error">
      <Header 
        texto1="Digite o nome do Pokémon ou o" 
        texto2="número da PokéDex válido" 
        click={() => navigate("/")}>
      </Header>

      <div className="divPikachuConfuso">
        <p>
          Infelizmente não encontramos nenhum resultado para sua pesquisa :(
        </p>
        <img src={Pikachu} className="pikachuConfuso" />
      </div>
      <img src={Divider} className="linha" />

      <Input></Input>
    </div>
  );
}
