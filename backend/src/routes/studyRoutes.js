const express = require("express");
const router = express.Router();
const studyController = require("..controllers/studyController");

router.get("/", studyController.getAll);
router.post("/", studyController.create);
router.put("/:id", studyController.update);
router.delete("/:id", studyController.remove());

module.exports = router;