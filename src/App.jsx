import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Merchandasing Demonio" />}
          />
          <Route path="/categoria/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="/categoria/:category/Item/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/cart/checkout/" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
