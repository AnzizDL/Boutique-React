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
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "#0a0a0a",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          color: "#ff0000",
          textShadow: "0 0 10px rgba(255,0,0,0.5)",
          marginTop: "0",
        }}
      >
        Death Note Shop
      </h1>

      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {products.length === 0 && !error && <p>Chargement...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(15px, 3vw, 30px)",
          marginTop: "20px",
        }}
      >
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "2px solid #8b0000",
                borderRadius: "15px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(139,0,0,0.2)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",
                background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
                color: "#fff",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(139,0,0,0.4)";
                e.currentTarget.style.borderColor = "#ff0000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(139,0,0,0.2)";
                e.currentTarget.style.borderColor = "#8b0000";
              }}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "clamp(150px, 30vw, 200px)",
                    objectFit: "cover",
                    borderBottom: "2px solid #8b0000",
                  }}
                />
              )}
              <div style={{ padding: "clamp(12px, 3vw, 20px)" }}>
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                    color: "#ff6b6b",
                  }}
                >
                  {p.name}
                </h3>
                <strong
                  style={{
                    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                    color: "#ff0000",
                  }}
                >
                  {p.price.toLocaleString()} €
                </strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
