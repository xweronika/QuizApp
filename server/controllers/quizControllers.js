const Quiz = require("../models/Quiz");

exports.getAllQuizzes = async (req, res, next) => {
  try {
    const [quizzes, _] = await Quiz.findAll();
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

exports.addNewQuiz = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let quiz = new Quiz(title, body);
    quiz = await quiz.save();
    res.status(201).json({ message: "Quiz created" });
  } catch (error) {
    next(error);
  }
};

exports.getQuizById = async (req, res, next) => {
  try {
    let quizId = req.params.id;

    let [quiz, _] = await Quiz.findById(quizId);

    res.status(200).json({ quiz: quiz[0] });
  } catch (error) {
    next(error);
  }
};