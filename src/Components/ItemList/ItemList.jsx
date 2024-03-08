import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="d-flex flex-wrap gap-4 m-auto">
      {productos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
