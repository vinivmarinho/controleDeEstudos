const express = require("express");
// Cria um roteador para organizar as rotas separadamente
const router = express.Router();
// Importa as funções que executam a lógica
const studyController = require("../controllers/studyController");

// Define as rotas
router.get("/", studyController.getAll);
router.post("/", studyController.create);
router.put("/:id", studyController.update);
router.delete("/:id", studyController.remove);

module.exports = router;