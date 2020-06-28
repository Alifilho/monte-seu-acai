import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

import { IHistoryParams, ICustomizations } from "../Customize";

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
      <h2>Resumo do pedido</h2>

      <div className="size-info">
        <h4>TAMANHO:</h4>
        <div className="size-p">
          <p>-{size}</p>
          <p>R$ {sizeCost}</p>
        </div>
      </div>
      <div className="flavor-info">
        <h4>SABOR:</h4>
        <div className="flavor-p">
          <p>-{flavor}</p>
          <p>R$ 0.00</p>
        </div>
      </div>
      <div className="customizations-info">
        <h4>PERSONALIZAÇÕES:</h4>
        <div className="customizations-p">
          <ul>
            {customizations.map((item) => (
              <li key={item.name}>
                <p>- {item.name}</p>
                <p>R$: {item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="final-info">
        <p>Valor total: R$ {finalValue}</p>
        <p>Tempo de preparo: {waitTime}min</p>
      </div>
      <Link to="/">Refazer pedido</Link>
    </div>
  );
};
export default FinishOrder;
