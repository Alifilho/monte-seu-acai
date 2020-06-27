import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

//import { IHistoryParams } from "../Customize";

interface IHistoryParams extends Location {
  flavor: string;
  size: string;
}

const FinishOrder = () => {
  const history = useHistory();
  const location = useLocation<IHistoryParams>();

  useEffect(() => {
    if (location.state === undefined) {
      return history.push("/");
    }

    console.log(location.state);
  });

  return (
    <div className="home">
      <h2>Resumo do pedido</h2>

      <div className="size-info">
        <h4>TAMANHO:</h4>
        <div className="size-p">
          <p>-{/*size*/}</p>
          <p>R$ {/*initialValue*/}</p>
        </div>
      </div>
      <div className="flavor-info">
        <h4>SABOR:</h4>
        <div className="flavor-p">
          <p>-{/*flavor*/}</p>
          <p>R$ 0.00</p>
        </div>
      </div>
      <div className="customizations-info">
        <h4>PERSONALIZAÇÕES:</h4>
        <div className="customizations-p">
          <ul>
            {/*customizations.map((item) => {
              switch (item) {
                case "granola":
                  setFinalValue(finalValue + 0);
                  break;
                case "pacoca":
                  setFinalValue(finalValue + 3);
                  break;
                case "powdered-milk":
                  setFinalValue(finalValue + 3);
                  break;
              }
            })*/}
            /*
          </ul>
        </div>
      </div>

      <div className="final-info">
        <p>Valor total: R$ {/*finalValue*/}</p>
        <p>Tempo de preparo: {/*waitTime*/}min</p>
      </div>
      <Link to="/">Refazer pedido</Link>
    </div>
  );
};
export default FinishOrder;
