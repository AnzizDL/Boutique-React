import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Produit introuvable");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.toString()));
  }, [id]);

  if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;
  if (!product) return <p>Chargement...</p>;

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetch(`http://localhost:3001/cart/${user.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart })
      });
    }

    alert("Produit ajouté !");
  }

  return (
    <div style={{ 
      padding: "40px", 
      maxWidth: "900px", 
      margin: "0 auto",
      background: "#0a0a0a",
      minHeight: "100vh"
    }}>
      <div className="product-card" style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
        border: "2px solid #8b0000",
        boxShadow: "0 4px 12px rgba(139,0,0,0.3)"
      }}>
        {product.image && (
          <img 
            src={product.image} 
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
              border: "2px solid #8b0000"
            }}
          />
        )}
        <h1 style={{ color: "#ff6b6b" }}>{product.name}</h1>
        <p style={{ color: "#ddd", fontSize: "1.1rem", lineHeight: "1.6" }}>{product.description}</p>
        <h2 style={{ color: "#ff0000", fontSize: "2rem" }}>{product.price.toLocaleString()} €</h2>

        <button 
          onClick={addToCart}
          style={{
            background: "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)",
            color: "#fff",
            border: "2px solid #ff0000",
            padding: "15px 40px",
            fontSize: "1.2rem",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "20px",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => {
            e.target.style.background = "linear-gradient(135deg, #ff0000 0%, #ff4444 100%)";
            e.target.style.boxShadow = "0 0 15px rgba(255,0,0,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)";
            e.target.style.boxShadow = "none";
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default Product;
