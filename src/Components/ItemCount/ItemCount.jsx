import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ item }) => { // Agregamos `item` como prop
  const [cantidad, setCantidad] = useState(1);
  const { clickAdd } = useContext(CartContext);

  const clickAddition = () => {
    setCantidad(cantidad + 1);
  };

  const clickSubstract = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="w-100">
      <div className="w-100" style={{ margin: "auto" }}>
        <div className="count mb-2">
          <button className="bg-danger text-white" onClick={clickSubstract}>
            -
          </button>
          <p>{cantidad}</p>
          <button className="bg-danger text-white" onClick={clickAddition}>
            +
          </button>
        </div>
        <button onClick={() => clickAdd(item, cantidad)} className="w-100 bg-danger text-white">
          <p className="text-white m-0 p-0">Agregar al carrito</p>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;