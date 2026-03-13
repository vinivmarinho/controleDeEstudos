const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API controle de estudos funcionando!!!!")
});
/* Rota de estudos */
app.get("/lista", (req, res) => {
    res.json({
        message: "Lista de estudos"
    })
})
const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))