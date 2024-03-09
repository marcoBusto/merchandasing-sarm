import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, empty } = useContext(CartContext);

  const emptyCart = () => {
    empty();
  };

  return (
    <div className="container">
      {cart.map((prod) => (
        <div key={prod.id} className="card p-3">
          <h3>{prod.title}</h3>
          <p>Precio unitario: $ {prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio Total : $ {prod.precio * prod.cantidad}</p>
          <br />
        </div>
      ))}

      {cart.length > 0 ? (
        <>
          <h2>Precio Total: $ {totalPrice()}</h2>

          <button onClick={emptyCart}>Vaciar Carrito</button>

          <Link to="/cart/checkout">Finaliza tu compra</Link>
        </>
      ) : (
        <div className="bg-white p-3 rounded">
          <h2>Su carrito esta vacio</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
