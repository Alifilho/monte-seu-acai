import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

//Importing interfaces
import Customizations from "../../@types/customizations";
import HistoryParams from "../../@types/historyParams";

import "./styles.css";

const FinishOrder = () => {
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [customizations, setCustomizations] = useState<Customizations[]>([]);
  const [waitTime, setWaitTime] = useState(0);
  const [sizeCost, setSizeCost] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const history = useHistory();
  const location = useLocation<HistoryParams>();

  //Checks if the order data has been entered in the Location and sends it to Home if not
  useEffect(() => {
    if (location.state === undefined) {
      return history.push("/");
    }
    return setStates();
  });

  //Add the order data to component state
  function setStates() {
    setFlavor(location.state.flavor);
    setSize(location.state.size);
    setWaitTime(location.state.waitTime);
    setSizeCost(location.state.sizeCost);
    setFinalValue(location.state.finalValue);
    setCustomizations(location.state.customizations);
  }

  return (
    <div className="home">
      <div className="title">Resumo do pedido</div>

      <div className="info-block">
        <div className="subtitle">TAMANHO:</div>
        <div className="content-span">
          <span>- {size}</span>
          <span className="left-span">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(sizeCost)}
          </span>
        </div>
      </div>
      <div className="info-block">
        <div className="subtitle">SABOR:</div>
        <div className="content-span">
          <span>- {flavor}</span>
          <span className="left-span">R$ 0,00</span>
        </div>
      </div>
      <div className="info-block">
        <div className="subtitle">PERSONALIZAÇÕES:</div>
        <div className="content-span">
          {customizations.map((item) => (
            <li key={item.name}>
              <span>- {item.name}</span>
              <span className="left-span">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.value)}
              </span>
            </li>
          ))}
        </div>
        <div className="final-info">
          <div>
            Valor total:{" "}
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(finalValue)}
          </div>
          <div>Tempo de preparo: {waitTime}min</div>
        </div>
      </div>

      <div className="footer-block">
        <Link className="end-button" to="/">
          Refazer pedido
        </Link>
      </div>
    </div>
  );
};

export default FinishOrder;
