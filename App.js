/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */

// const mongodbId = import.meta.env.VITE_MONGODB_ID;

// const mongodbPassword = import.meta.env.VITE_MONGODB_PASSWORD;

const mongoose = require("mongoose");

const express = require("express");

const bookRoutes = require("./routes/book");

const userRoutes = require("./routes/user");

// se connecter à ma bdd sur MongoDb
mongoose
  .connect(
    // `mongodb+srv://${mongodbId}:${mongodbPassword}@dbdylan.lwhd3x8.mongodb.net/`,
    `mongodb+srv://dylane33:3hGaew16O7MNlkPW@dbdylan.lwhd3x8.mongodb.net/ocSeven `,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// eslint-disable-next-line no-unused-vars
const Book = require("./models/Books");

const app = express();

app.use(express.json()); // Ajoute le middleware pour analyser les données JSON

// On ajotue des headers à la réponse pour le CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
