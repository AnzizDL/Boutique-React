import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Produit introuvable");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.toString()));
  }, [id]);

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetch(`http://localhost:3001/cart/${user.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
    }

    // Afficher le toast
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 1500);
  }

  if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;
  if (!product) return <p>Chargement...</p>;

  return (
    <div
      style={{
        padding: "clamp(20px, 5vw, 40px)",
        maxWidth: "900px",
        margin: "0 auto",
        background: "#0a0a0a",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Toast Notification */}
      {toastVisible && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "8px",
            border: "2px solid #ff0000",
            boxShadow: "0 4px 12px rgba(255,0,0,0.4)",
            fontSize: "1rem",
            fontWeight: "500",
            zIndex: 1000,
            animation: "slideIn 0.3s ease, slideOut 0.3s ease 1.2s forwards",
          }}
        >
          ✓ Produit ajouté au panier !
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(400px);
            opacity: 0;
          }
        }
      `}</style>

      <div
        className="product-card"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
          border: "2px solid #8b0000",
          boxShadow: "0 4px 12px rgba(139,0,0,0.3)",
        }}
      >
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "clamp(250px, 50vw, 400px)",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "clamp(15px, 3vw, 20px)",
              border: "2px solid #8b0000",
            }}
          />
        )}
        <h1
          style={{ color: "#ff6b6b", fontSize: "clamp(1.8rem, 5vw, 2.2rem)" }}
        >
          {product.name}
        </h1>
        <p
          style={{
            color: "#ddd",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: "1.6",
          }}
        >
          {product.description}
        </p>
        <h2 style={{ color: "#ff0000", fontSize: "clamp(1.8rem, 4vw, 2rem)" }}>
          {product.price.toLocaleString()} €
        </h2>

        <button
          onClick={addToCart}
          style={{
            background: "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)",
            color: "#fff",
            border: "2px solid #ff0000",
            padding: "clamp(12px, 3vw, 15px) clamp(25px, 5vw, 40px)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "clamp(15px, 3vw, 20px)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #ff0000 0%, #ff4444 100%)";
            e.target.style.boxShadow = "0 0 15px rgba(255,0,0,0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)";
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
