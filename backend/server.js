const PORT = 3000;
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let studies = [
    {
        id: 1,
        subject: "JavaScript",
        duration: 60
    },
    {
        id: 2,
        subject: "React",
        duration: 90
    }
];

/* Rota principal*/
app.get("/", (req, res) => {
    res.send("API controle de estudos funcionando!!!!")
});

/* Rota Que lista os topicos */
app.get("/topics", (req, res) => {
    res.json(studies)
});


/* Rota que adiciona topicos de estudo */
app.post("/add", (req, res) => {
    const { subject, duration} = req.body;

    const newStudy = {
        id: studies.length + 1,
        subject,
        duration
    }
    studies.push(newStudy)
    res.status(201).json(newStudy);
})

/* Rota que atualiza os dados */
app.put("/study/:id", (req, res) => {
    const {id} = req.params;
    const {subject, duration} = req.body;

    const study = studies.find(item => item.id == id);

    if(!study) {
        return res.status(404).json({error: "Estudo não encontrado"})
    }
    /* Atualiza os dados */
    study.subject = subject;
    study.duration = duration;

    res.json(study)
});

/* Rota que apaga */
app.delete("/study/:id", (req, res) => {
    const {id} = req.params;

    studies = studies.filter(item => item.id != id);

    res.json({message: "Estudo removido"});
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))