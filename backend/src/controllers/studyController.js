let studies = require("../models/studyModel");

// Listar
exports.getAll = (req, res) => {
    res.json(studies);
}

// Criar
exports.create = (req, res) => {
    const { subject, duration } = req.body;

    const newStudy = {
        id: studies.length + 1,
        subject,
        duration
    };

    studies.push(newStudy);
    res.status(201).json(newStudy)
};

// Atualizar
exports.update = (req, res) => {
    const { id } = req.params;
    const { subject, duration } = req.body;

    const study = studies.find(item => item.id == id);

    if (!study) {
        return res.status(404).json({error: "Matéria não encontrada"});
    }

    study.subject = subject;
    study.duration = duration;

    res.json(study);
};

// Deletar
exports.remove = (req, res) => {
    const { id } = req.params;

    studies = studies.filter(item => item.id != id);

    res.json({ message: "Matéria removida"})
};



