function About() {
  return (
    <div style={{ 
      padding: "40px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#fff"
    }}>
      <h1 style={{ 
        fontSize: "2.5rem", 
        color: "#ff0000", 
        textShadow: "0 0 10px rgba(255,0,0,0.5)",
        marginBottom: "30px"
      }}>À Propos</h1>
      
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d0000 100%)",
        padding: "30px",
        borderRadius: "15px",
        border: "2px solid #8b0000",
        lineHeight: "1.8"
      }}>
        <h2 style={{ color: "#ff6b6b", marginBottom: "20px" }}>Bienvenue dans le monde du Death Note</h2>
        
        <p style={{ marginBottom: "20px" }}>
          Notre boutique est dédiée aux fans de Death Note, le manga culte de Tsugumi Ohba et Takeshi Obata.
        </p>
        
        <p style={{ marginBottom: "20px" }}>
          Nous proposons une sélection exclusive d'articles collectors, des figurines authentiques aux 
          répliques du légendaire Death Note lui-même.
        </p>
        
        <h3 style={{ color: "#ff6b6b", marginTop: "30px", marginBottom: "15px" }}>Notre Mission</h3>
        <p>
          Apporter la justice... et les meilleurs produits Death Note à tous les fans du monde entier. 
          Que vous soyez team Light ou team L, vous trouverez votre bonheur ici.
        </p>
        
        <div style={{ 
          marginTop: "40px", 
          padding: "20px", 
          background: "#1a0000",
          borderRadius: "10px",
          borderLeft: "4px solid #ff0000"
        }}>
          <p style={{ fontStyle: "italic", color: "#ffaaaa" }}>
            "Ce monde est pourri. Ceux qui le font pourrir méritent de mourir." - Light Yagami
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
