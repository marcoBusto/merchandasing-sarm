import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";


const ItemDetail = ({ item }) => {
  const { cart} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const clickSubstract = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const clickAddition = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="card p-3 mx-auto">
        <div className="m-auto">
          <img
            src={item.img}
            alt={item.nombre}
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
        <div className="p-3">
          <div className="mb-4">
            <h3 className="text-black">{item.nombre}</h3>
            <p>{item.detalle}</p>
            <h4 className="text-black">Precio: ${item.precio}</h4>
            <h4 className="fw-semibold">Categoria: {item.categoria}</h4>
          </div>

          <ItemCount/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
