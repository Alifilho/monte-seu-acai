import React from "react";

import "./styles.css";

const Customize = () => {
  return (
    <div className="home">
      <h2>Personalize seu açaí</h2>
      <div className="opt-block">
        <div className="flavor-block">
          <h4>PERSONALIZAÇÃO:</h4>
          <button>Granola</button>
          <button>Paçoca</button>
          <button>Leite ninho</button>
        </div>
      </div>
      <button>Finalizar pedido</button>
    </div>
  );
};

export default Customize;
