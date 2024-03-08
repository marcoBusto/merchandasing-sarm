import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CarWidget/CardWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <img src="../public/escudo.png" alt="logo" className="logo" />
      </Link>
      <nav>
        <NavLink to="/categoria/Camisetas">Camisetas</NavLink>
        <NavLink to="/categoria/Mates">Mates y Accesorios</NavLink>
        <CardWidget />
      </nav>
    </header>
  );
}

export default NavBar;
