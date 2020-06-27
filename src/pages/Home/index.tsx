import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const Home = () => {
  const [flavor, setFlavor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const history = useHistory();

  function handleSelectFlavor(selectedFlavor: string) {
    if (selectedFlavor === flavor) {
      setFlavor("");
    } else {
      setFlavor(selectedFlavor);
    }
  }

  function handleSelectSize(selectedSize: string) {
    if (size === selectedSize) {
      setSize("");
    } else {
      setSize(selectedSize);
    }
  }

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
      <h2>Escolha seu açaí</h2>
      <div className="opt-block">
        <div className="flavor-block">
          <h4>SABOR:</h4>
          <button
            className={flavor === "Morango" ? "selected" : ""}
            onClick={() => handleSelectFlavor("Morango")}
          >
            Morango
          </button>
          <button
            className={flavor === "Banana" ? "selected" : ""}
            onClick={() => handleSelectFlavor("Banana")}
          >
            Banana
          </button>
          <button
            className={flavor === "Kiwi" ? "selected" : ""}
            onClick={() => handleSelectFlavor("kiwi")}
          >
            Kiwi
          </button>
        </div>

        <div className="size-block">
          <h4>TAMANHO:</h4>
          <button
            className={size === "Pequeno (300ml)" ? "selected" : ""}
            onClick={() => handleSelectSize("Pequeno (300ml)")}
          >
            Pequeno (300ml)
          </button>
          <button
            className={size === "Médio (500ml)" ? "selected" : ""}
            onClick={() => handleSelectSize("Médio (500ml)")}
          >
            Médio (500ml)
          </button>
          <button
            className={size === "Grande (700ml)" ? "selected" : ""}
            onClick={() => handleSelectSize("Grande (700ml)")}
          >
            Grande (700ml)
          </button>
        </div>
      </div>
      <button onClick={handleSubmit}>Avançar</button>
    </div>
  );
};

export default Home;
