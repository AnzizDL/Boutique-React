import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  // 🔄 Se met à jour à chaque changement de page
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(storedUser);
  }, [location]);

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setUser(null);
    navigate("/login");
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
