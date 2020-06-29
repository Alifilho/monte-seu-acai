import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const Home = () => {
  const [flavor, setFlavor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const history = useHistory();

  //Checks if the flavor is already selected and selects if it was not before
  function handleSelectFlavor(selectedFlavor: string) {
    if (selectedFlavor === flavor) {
      setFlavor("");
    } else {
      setFlavor(selectedFlavor);
    }
  }

  //Checks if the size is already selected and selects if it was not before
  function handleSelectSize(selectedSize: string) {
    if (size === selectedSize) {
      setSize("");
    } else {
      setSize(selectedSize);
    }
  }

  //Checks if a flavor and size have been selected and sends for customization if yes
  function handleSubmit() {
    if (flavor === "" || size === "") {
      return alert("É necessário selecionar um sabor e um tamanho!");
    }

    return history.push("/customize", {
      flavor,
      size,
    });
  }

  return (
    <div className="home">
      <div className="title">Escolha seu açaí</div>
      <div className="options-block">
        <div className="item-block">
          <div className="subtitle">SABOR:</div>
          <div className="content">
            <button
              className={
                flavor === "Morango" ? "selected" : "unselected-button"
              }
              onClick={() => handleSelectFlavor("Morango")}
            >
              Morango
            </button>
            <button
              className={flavor === "Banana" ? "selected" : "unselected-button"}
              onClick={() => handleSelectFlavor("Banana")}
            >
              Banana
            </button>
            <button
              className={flavor === "Kiwi" ? "selected" : "unselected-button"}
              onClick={() => handleSelectFlavor("Kiwi")}
            >
              Kiwi
            </button>
          </div>
        </div>

        <div className="item-block">
          <div className="subtitle">TAMANHO:</div>
          <div className="content">
            <button
              className={
                size === "Pequeno (300ml)" ? "selected" : "unselected-button"
              }
              onClick={() => handleSelectSize("Pequeno (300ml)")}
            >
              Pequeno (300ml)
            </button>
            <button
              className={
                size === "Médio (500ml)" ? "selected" : "unselected-button"
              }
              onClick={() => handleSelectSize("Médio (500ml)")}
            >
              Médio (500ml)
            </button>
            <button
              className={
                size === "Grande (700ml)" ? "selected" : "unselected-button"
              }
              onClick={() => handleSelectSize("Grande (700ml)")}
            >
              Grande (700ml)
            </button>
          </div>
        </div>
      </div>
      <div className="footer-block">
        <button className="end-button" onClick={handleSubmit}>
          Avançar
        </button>
      </div>
    </div>
  );
};

export default Home;
