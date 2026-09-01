# 🔴 PokéDex (React + Vite)

Evolução do projeto **Pokémon Finder / PokéDex**, refatorado de Vanilla JS para **React** com **TypeScript** e **Vite**. A aplicação mantém a consulta dinâmica de dados da [PokéAPI](https://pokeapi.co/), incorporando conceitos de **componentização**, **gerenciamento de estado** e **divisão clara de views/páginas**.

## 🚀 O que mudou nesta versão?

- **Componentização:** Isolamento de elementos visuais e lógicos reutilizáveis na pasta `components`.
- **Arquitetura Modular de Páginas:** Divisão explícita das telas em views dedicadas:
  - `Home`: Tela inicial de busca por nome ou número da PokéDex.
  - `PokemonPage`: Exibição detalhada de sprites (Default/Shiny), tipos, habilidades e atributos.
  - `ErrorPage`: View de tratamento para pesquisas não encontradas.
- **Ambiente de Desenvolvimento Rápido:** Migração para **Vite** com **TypeScript**, garantindo tipagem estática e *Hot Module Replacement (HMR)* instantâneo.

## ✨ Funcionalidades

- **Busca por Nome ou ID:** Pesquisa direta de Pokémons integrando a PokéAPI.
- **Visualização de Sprites Interativos:** Alternância entre versões normais e *Shiny*, além de efeito visual ao passar o mouse.
- **Alternância de Abas de Dados:** Troca fluida entre visualização de aparência/informações gerais e habilidades/status base.
- **Tratamento de Erros:** Redirecionamento para a `ErrorPage` quando a busca não retorna resultados válidos.

## 🛠️ Tecnologias Utilizadas

- **React 18** (Biblioteca para construção de interfaces declarativas e componentizadas)
- **TypeScript** (Tipagem estática para maior previsibilidade e segurança no código)
- **Vite** (Ferramenta de build e dev server de alta performance)
- **CSS3** (Estilização da interface)
- **PokéAPI** (API REST de dados climatológicos/Pokémon)
