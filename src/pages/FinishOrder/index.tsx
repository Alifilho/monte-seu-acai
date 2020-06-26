import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

const FinishOrder = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  return (
    <div className="home">
      <h2>Resumo do pedido</h2>

      <div className="size-info">
        <h4>TAMANHO:</h4>
        <div className="size-p">
          <p>-Grande (700ml)</p>
          <p>R$ 15.00</p>
        </div>
      </div>
      <div className="flavor-info">
        <h4>SABOR:</h4>
        <div className="flavor-p">
          <p>-Kiwi</p>
          <p>R$ 0.00</p>
        </div>
      </div>
      <div className="customizations-info">
        <h4>PERSONALIZAÇÕES:</h4>
        <div className="customizations-p">
          <p>- Leite ninho</p>
          <p>R$ 3.00</p>
        </div>
      </div>

      <div className="final-info">
        <p>Valor total: R$ 18.00</p>
        <p>Tempo de preparo: 15min</p>
      </div>
      <button>Refazer pedido</button>
    </div>
  );
};

export default FinishOrder;
