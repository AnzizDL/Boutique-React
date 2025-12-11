import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/products", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err.toString()));
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "30px", fontSize: "2rem" }}>Nos Produits</h1>

      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {products.length === 0 && !error && <p>Chargement...</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={{ marginBottom: "10px", fontSize: "1.3rem" }}>{p.name}</h3>
              <strong style={{ fontSize: "1.5rem", color: "#2563eb" }}>{p.price} €</strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;