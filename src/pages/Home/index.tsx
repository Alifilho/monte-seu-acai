import React from "react";

import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Escolha seu açaí</h2>
      <div className="opt-block">
        <div className="flavor-block">
          <h4>SABOR:</h4>
          <button>Morango</button>
          <button>Banana</button>
          <button>Kiwi</button>
        </div>

        <div className="size-block">
          <h4>TAMANHO:</h4>
          <button>Pequeno (300ml)</button>
          <button>Médio (500ml)</button>
          <button>Grande (700ml)</button>
        </div>
      </div>
      <button>Avançar</button>
    </div>
  );
};

export default Home;
