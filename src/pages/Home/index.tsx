import React, { useState } from "react";

import "./styles.css";

const Home = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  function handleSelectFlavor(flavor: string) {
    if (flavor === selectedFlavor) {
      setSelectedFlavor("");
    } else {
      setSelectedFlavor(flavor);
    }
  }

  function handleSelectSize(size: string) {
    if (size === selectedSize) {
      setSelectedSize("");
    } else {
      setSelectedSize(size);
    }
  }

  return (
    <div className="home">
      <h2>Escolha seu açaí</h2>
      <div className="opt-block">
        <div className="flavor-block">
          <h4>SABOR:</h4>
          <button
            className={selectedFlavor === "strawberry" ? "selected" : ""}
            onClick={() => handleSelectFlavor("strawberry")}
          >
            Morango
          </button>
          <button
            className={selectedFlavor === "banana" ? "selected" : ""}
            onClick={() => handleSelectFlavor("banana")}
          >
            Banana
          </button>
          <button
            className={selectedFlavor === "kiwi" ? "selected" : ""}
            onClick={() => handleSelectFlavor("kiwi")}
          >
            Kiwi
          </button>
        </div>

        <div className="size-block">
          <h4>TAMANHO:</h4>
          <button
            className={selectedSize === "small" ? "selected" : ""}
            onClick={() => handleSelectSize("small")}
          >
            Pequeno (300ml)
          </button>
          <button
            className={selectedSize === "medium" ? "selected" : ""}
            onClick={() => handleSelectSize("medium")}
          >
            Médio (500ml)
          </button>
          <button
            className={selectedSize === "large" ? "selected" : ""}
            onClick={() => handleSelectSize("large")}
          >
            Grande (700ml)
          </button>
        </div>
      </div>
      <button onClick={() => console.log(`${selectedFlavor}, ${selectedSize}`)}>
        Avançar
      </button>
    </div>
  );
};

export default Home;
