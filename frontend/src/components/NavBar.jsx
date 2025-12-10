import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Boutique</Link>
        <Link to="/cart">Panier</Link>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>
              Bonjour, {user.name}
            </span>
            <button onClick={handleLogout}>Se déconnecter</button>
          </>
        ) : (
          <Link to="/login">Se connecter</Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
