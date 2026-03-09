import React from 'react';
import './style.css';
import Logo from "../../assets/ImagensGeral/Logo.svg";
import Icon from "../../assets/ImagensGeral/icon.png";

interface IHeader{
    texto1: string;
    texto2?: string;
    click: () => void;
}

function Header ({texto1, texto2, click}: IHeader) {
  return (
    
    <div className='divHeader'>
        <button className="botaoIcone" onClick={click}>
        <img src={Icon} className="icone" />
      </button>

      <img src={Logo} />

      <div className="titulo">
        <p>{texto1}</p>
        <p>{texto2}</p>
      </div>
    </div>
  )
}

export { Header }