import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("demo@boutique.test");
  const [password, setPassword] = useState("secret");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Erreur de connexion");
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      // On récupère le panier du backend pour cet utilisateur
      const cartRes = await fetch(`http://localhost:3001/cart/${data.user.id}`);
      const cartData = await cartRes.json();

      // On stocke le panier dans localStorage
      localStorage.setItem("cart", JSON.stringify(cartData.cart));

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        padding: "clamp(15px, 4vw, 20px)",
        maxWidth: "400px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#ff6b6b" }}>
        Connexion
      </h1>

      {error && (
        <p
          style={{ color: "#ff0000", fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
        >
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "clamp(12px, 3vw, 15px)" }}>
          <label
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#fff" }}
          >
            Email
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "clamp(8px, 2vw, 10px)",
                marginTop: "5px",
                boxSizing: "border-box",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "clamp(12px, 3vw, 15px)" }}>
          <label
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: "#fff" }}
          >
            Mot de passe
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "clamp(8px, 2vw, 10px)",
                marginTop: "5px",
                boxSizing: "border-box",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
              }}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "clamp(10px, 2vw, 12px)",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            background: "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)",
            color: "#fff",
            border: "2px solid #ff0000",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>

      <p
        style={{
          marginTop: "clamp(12px, 3vw, 15px)",
          fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
          color: "#ddd",
        }}
      >
        Identifiants de test : <br />
        <code style={{ color: "#ff0000" }}>demo@boutique.test / secret</code>
      </p>
    </div>
  );
}

export default Login;
