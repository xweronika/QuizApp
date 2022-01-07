const express = require("express");
const quizControllers = require("../controllers/quizControllers");
const router = express.Router();

// @route GET && POST - /quiz/
router
  .route("/")
  .get(quizControllers.getAll)
  .post(quizControllers.addNew);

router.route("/:id").get(quizControllers.getById);
router.route("/:id/data").get(quizControllers.getQuestions);

module.exports = router;