import "./ItemCount.css";

const ItemCount = ({ cantidad, clickSubstract, clickAddition, clickAdd }) => {
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
        <button onClick={clickAdd} className="w-100 bg-danger text-white">
          <p className="text-white m-0 p-0">Agregar al carrito</p>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
