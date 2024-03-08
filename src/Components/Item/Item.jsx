// import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <div className="card w-100 p-3" style={{ maxWidth: "400px" }}>
      <div className="mx-auto">
        <img src={producto.img} style={{ maxHeight: "100px" }} />
      </div>

      <p className="fw-bold">{producto.nombre}</p>

      <div className="mt-auto">
        <p className="font-weight-bold">Precio: $ {producto.precio}</p>
        <Link to={`Item/${producto.id}`}>
          <button className="w-100 bg-danger text-white">
            <p className="text-white m-0 p-0">Ver mas</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
