import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Location } from "history";

import "./styles.css";

export interface IHistoryParams extends Location {
  flavor: string;
  size: string;
}

interface ICustomizations {
  name: string;
  value: number;
}

const Customize = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [customizations, setCustomizations] = useState<ICustomizations[]>([]);

  const location = useLocation<IHistoryParams>();
  const history = useHistory();

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  function handleChooseCustomizations(ingredient: string) {
    const alreadySelected = selectedItems.findIndex(
      (item) => item === ingredient
    );

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== ingredient);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, ingredient]);
    }
  }

  function handleSubmit() {
    let waitTime = 0;
    let sizeCost = 0;
    let finalValue = 0;

    selectedItems.forEach((item) => {
      switch (item) {
        case "Granola":
          setCustomizations((list) => {
            list.push({ name: item, value: 0 });
            return list;
          });
          console.log(customizations);
          finalValue += 3;
          break;
        case "Paçoca":
          //setCustomizations([...customizations, { name: item, value: 3 }]);
          finalValue += 3;
          break;
        case "Leite ninho":
          //setCustomizations([...customizations, { name: item, value: 3 }]);
          finalValue += 3;
          break;
        default:
          alert("Error");
          break;
      }
    });

    switch (location.state.size) {
      case "Pequeno (300ml)":
        sizeCost = 10;
        finalValue += sizeCost;
        waitTime = 5;
        break;
      case "Médio (500ml)":
        sizeCost = 12;
        finalValue += sizeCost;
        waitTime = 7;
        break;
      case "Grande (700ml)":
        sizeCost = 12;
        finalValue += sizeCost;
        waitTime = 9;
        break;

      default:
        alert("Error");
        break;
    }

    return history.push("/finish-order", {
      flavor: location.state.flavor,
      size: location.state.size,
      customizations,
      waitTime,
      sizeCost,
      finalValue,
    });
  }

  return (
    <div className="home">
      <h2>Personalize seu açaí</h2>
      <div className="opt-block">
        <div className="flavor-block">
          <h4>PERSONALIZAÇÃO:</h4>
          <button
            className={selectedItems.includes("Granola") ? "selected" : ""}
            onClick={() => handleChooseCustomizations("Granola")}
          >
            Granola
          </button>
          <button
            className={selectedItems.includes("Paçoca") ? "selected" : ""}
            onClick={() => handleChooseCustomizations("Paçoca")}
          >
            Paçoca
          </button>
          <button
            className={selectedItems.includes("Leite ninho") ? "selected" : ""}
            onClick={() => handleChooseCustomizations("Leite ninho")}
          >
            Leite ninho
          </button>
        </div>
      </div>
      <button onClick={handleSubmit}>Finalizar pedido</button>
    </div>
  );
};

export default Customize;
