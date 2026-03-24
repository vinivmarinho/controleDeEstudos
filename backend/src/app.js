const express = require("express");
const cors = require("cors");

// Cria a aplicação do servidor
const app = express();

// Importa as rotas
const studyRoutes = require("./routes/studyRoutes");

// Libera acesso de outros domínios (exemplo: React rodando em outra porta)
app.use(cors());
// Permite receber JSON no corpo da requisição
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
    res.send("API de controle está funcionando!");
})

// Conecta as rotas no app. Todas as rotas de studyRoutes irão começar com "/study"
app.use("/study", studyRoutes);

module.exports = app;