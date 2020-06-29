import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

//Importing interfaces
import Customizations from "../../@types/customizations";
import HistoryParams from "../../@types/historyParams";

import "./styles.css";

const Customize = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const location = useLocation<HistoryParams>();
  const history = useHistory();

  //Checks if the order data has been entered in the Location and sends it to Home if not
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  //Select or deselect customization when clicked
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

  //Sends the order data to the next component
  function handleSubmit() {
    let waitTime = 0;
    let sizeCost = 0;
    let finalValue = 0;

    //Checks the selected customizations and creates an array with each customization and its cost and adds the customization values ​​to the final order value
    let auxArray: Customizations[] = [];
    selectedItems.forEach((item) => {
      if (item === "Granola") {
        finalValue += 0;
        return auxArray.push({ name: item, value: 0 });
      }
      if (item === "Paçoca") {
        finalValue += 3;
        return auxArray.push({ name: item, value: 3 });
      }
      if (item === "Leite ninho") {
        finalValue += 3;
        return auxArray.push({ name: item, value: 3 });
      }
    });

    //Checks the order size and adds the size value to the final value
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
      customizations: auxArray,
      waitTime,
      sizeCost,
      finalValue,
    });
  }

  return (
    <div className="home">
      <div className="title">Personalize seu açaí</div>
      <div className="options-block">
        <div className="item-block">
          <div className="subtitle">PERSONALIZAÇÃO:</div>
          <div className="buttons">
            <button
              className={
                selectedItems.includes("Granola")
                  ? "selected"
                  : "unselected-button"
              }
              onClick={() => handleChooseCustomizations("Granola")}
            >
              Granola
            </button>
            <button
              className={
                selectedItems.includes("Paçoca")
                  ? "selected"
                  : "unselected-button"
              }
              onClick={() => handleChooseCustomizations("Paçoca")}
            >
              Paçoca
            </button>
            <button
              className={
                selectedItems.includes("Leite ninho")
                  ? "selected"
                  : "unselected-button"
              }
              onClick={() => handleChooseCustomizations("Leite ninho")}
            >
              Leite ninho
            </button>
          </div>
        </div>
      </div>
      <div className="footer-block">
        <button className="end-button" onClick={handleSubmit}>
          Finalizar pedido
        </button>
      </div>
    </div>
  );
};

export default Customize;
