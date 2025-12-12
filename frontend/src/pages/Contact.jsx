import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      style={{
        padding: "clamp(20px, 5vw, 40px)",
        maxWidth: "800px",
        margin: "0 auto",
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
          color: "#ff0000",
          textShadow: "0 0 10px rgba(255,0,0,0.5)",
          marginBottom: "clamp(20px, 4vw, 30px)",
        }}
      >
        Contactez-nous
      </h1>

      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
          padding: "clamp(25px, 4vw, 40px)",
          borderRadius: "15px",
          border: "2px solid #8b0000",
        }}
      >
        {submitted && (
          <div
            style={{
              background: "#1a4d1a",
              color: "#4eff4e",
              padding: "clamp(12px, 3vw, 15px)",
              borderRadius: "8px",
              marginBottom: "clamp(15px, 3vw, 20px)",
              border: "1px solid #4eff4e",
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            }}
          >
            Message envoyé ! Nous vous répondrons bientôt.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "clamp(18px, 3vw, 25px)" }}>
            <label
              style={{
                display: "block",
                marginBottom: "clamp(6px, 1vw, 8px)",
                color: "#ff6b6b",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              }}
            >
              Nom
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "clamp(10px, 2vw, 12px)",
                borderRadius: "8px",
                border: "2px solid #8b0000",
                background: "#1a1a1a",
                color: "#fff",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "clamp(18px, 3vw, 25px)" }}>
            <label
              style={{
                display: "block",
                marginBottom: "clamp(6px, 1vw, 8px)",
                color: "#ff6b6b",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "clamp(10px, 2vw, 12px)",
                borderRadius: "8px",
                border: "2px solid #8b0000",
                background: "#1a1a1a",
                color: "#fff",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "clamp(18px, 3vw, 25px)" }}>
            <label
              style={{
                display: "block",
                marginBottom: "clamp(6px, 1vw, 8px)",
                color: "#ff6b6b",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              }}
            >
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="6"
              style={{
                width: "100%",
                padding: "clamp(10px, 2vw, 12px)",
                borderRadius: "8px",
                border: "2px solid #8b0000",
                background: "#1a1a1a",
                color: "#fff",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
                resize: "vertical",
                boxSizing: "border-box",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #8b0000 0%, #ff0000 100%)",
              color: "#fff",
              padding: "clamp(12px, 2vw, 15px) clamp(30px, 5vw, 40px)",
              border: "2px solid #ff0000",
              borderRadius: "8px",
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(255,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 12px rgba(255,0,0,0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 8px rgba(255,0,0,0.3)";
            }}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
