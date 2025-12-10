import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ FAUSSE BASE DE DONNÉES (pour le test)
const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 19.99,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 2,
    name: "Sweat",
    price: 39.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 3,
    name: "Casquette",
    price: 14.99,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];

// ✅ Route test
app.get("/", (req, res) => {
  res.send("API backend OK ✅");
});

// ✅ Route produits
app.get("/products", (req, res) => {
  res.json(products);
});

// ✅ Route pour ajouter un produit
app.post("/products", (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Nom et prix obligatoires" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price: Number(price),
    image: image || "https://via.placeholder.com/200",
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log("Serveur backend lancé sur http://localhost:" + PORT);
});

app.listen(PORT, () => {
  console.log("Serveur backend lancé sur http://localhost:" + PORT);
});
