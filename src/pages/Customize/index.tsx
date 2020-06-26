import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Location } from "history";

import "./styles.css";

interface IHistoryParams extends Location {
  flavor: string;
  size: string;
}

const Customize = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
    return history.push("/finish-order", {
      flavor: location.state.flavor,
      size: location.state.size,
      customizations: selectedItems,
    });
  }

  return (
    <div className="home">
      <h2>Personalize seu açaí</h2>
      <div className="opt-block">
        <div className="flavor-block">
          <h4>PERSONALIZAÇÃO:</h4>
          <button
            className={selectedItems.includes("granola") ? "selected" : ""}
            onClick={() => handleChooseCustomizations("granola")}
          >
            Granola
          </button>
          <button
            className={selectedItems.includes("pacoca") ? "selected" : ""}
            onClick={() => handleChooseCustomizations("pacoca")}
          >
            Paçoca
          </button>
          <button
            className={
              selectedItems.includes("powdered-milk") ? "selected" : ""
            }
            onClick={() => handleChooseCustomizations("powdered-milk")}
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
