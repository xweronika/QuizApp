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
    const quizId = req.params.id;
    const [quiz] = await Quiz.findById(quizId);
    const [details, _] = await Quiz.findDetails(quizId);
    res.status(200).json({ quiz: quiz[0], details: details });
  } catch (error) {
    next(error);
  }
};