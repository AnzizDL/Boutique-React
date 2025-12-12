function About() {
  return (
    <div
      style={{
        padding: "clamp(20px, 5vw, 40px)",
        maxWidth: "1200px",
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
        À Propos
      </h1>

      <div
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
          padding: "clamp(20px, 4vw, 30px)",
          borderRadius: "15px",
          border: "2px solid #8b0000",
          lineHeight: "1.8",
        }}
      >
        <h2
          style={{
            color: "#ff6b6b",
            marginBottom: "clamp(15px, 3vw, 20px)",
            fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
          }}
        >
          Bienvenue dans le monde du Death Note
        </h2>

        <p
          style={{
            marginBottom: "clamp(15px, 3vw, 20px)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          }}
        >
          Notre boutique est dédiée aux fans de Death Note, le manga culte de
          Tsugumi Ohba et Takeshi Obata.
        </p>

        <p
          style={{
            marginBottom: "clamp(15px, 3vw, 20px)",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          }}
        >
          Nous proposons une sélection exclusive d'articles collectors, des
          figurines authentiques aux répliques du légendaire Death Note
          lui-même.
        </p>

        <h3
          style={{
            color: "#ff6b6b",
            marginTop: "clamp(20px, 4vw, 30px)",
            marginBottom: "clamp(12px, 3vw, 15px)",
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
          }}
        >
          Notre Mission
        </h3>
        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
          Apporter la justice... et les meilleurs produits Death Note à tous les
          fans du monde entier. Que vous soyez team Light ou team L, vous
          trouverez votre bonheur ici.
        </p>

        <div
          style={{
            marginTop: "clamp(25px, 4vw, 40px)",
            padding: "clamp(15px, 3vw, 20px)",
            background: "#1a0000",
            borderRadius: "10px",
            borderLeft: "4px solid #ff0000",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              color: "#ffaaaa",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            }}
          >
            "Ce monde est pourri. Ceux qui le font pourrir méritent de mourir."
            - Light Yagami
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
