import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

import { IHistoryParams, ICustomizations } from "../Customize";

import "./styles.css";

const FinishOrder = () => {
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [customizations, setCustomizations] = useState<ICustomizations[]>([]);
  const [waitTime, setWaitTime] = useState(0);
  const [sizeCost, setSizeCost] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const history = useHistory();
  const location = useLocation<IHistoryParams>();

  useEffect(() => {
    if (location.state === undefined) {
      return history.push("/");
    }
  });

  useEffect(() => {
    setFlavor(location.state.flavor);
    setSize(location.state.size);
    setWaitTime(location.state.waitTime);
    setSizeCost(location.state.sizeCost);
    setFinalValue(location.state.finalValue);
    setCustomizations(location.state.customizations);
  }, [
    location.state.flavor,
    location.state.size,
    location.state.waitTime,
    location.state.sizeCost,
    location.state.finalValue,
    location.state.customizations,
    customizations,
  ]);

  return (
    <div className="home">
      <div className="title">Resumo do pedido</div>

      <div className="info-block">
        <div className="subtitle">TAMANHO:</div>
        <div className="size-span">
          <span>- {size}</span>
          <span className="left-span">R$ {sizeCost}</span>
        </div>
      </div>
      <div className="info-block">
        <div className="subtitle">SABOR:</div>
        <div className="size-span">
          <span>- {flavor}</span>
          <span className="left-span">R$ 0.00</span>
        </div>
      </div>
      <div className="info-block">
        <div className="subtitle">PERSONALIZAÇÕES:</div>
        <div className="size-span">
          {customizations.map((item) => (
            <li key={item.name}>
              <span>- {item.name}</span>
              <span className="left-span">R$: {item.value}</span>
            </li>
          ))}
        </div>
        <div className="final-info">
          <div>Valor total: R$ {finalValue}</div>
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
