const express = require("express");
const quizControllers = require("../controllers/quizControllers");
const router = express.Router();

// @route GET && POST - /quiz/
router
  .route("/")
  .get(quizControllers.getAllQuizzes)
  .post(quizControllers.addNewQuiz);

router.route("/:id").get(quizControllers.getQuizById);

module.exports = router;