const express = require("express");
const cors = require("cors");

const app = express();

const studyRoutes = require("./routes/studyRoutes");

app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
    res.send("API de controle está funcionando!");
})

app.use("/study", studyRoutes);

module.exports = app;