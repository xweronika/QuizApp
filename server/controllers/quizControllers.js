const Quiz = require("../models/Quiz");
const Question = require("../models/Question");

exports.getAll = async (req, res, next) => {
  try {
    const [quizzes] = await Quiz.findAll();
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const [quiz] = await Quiz.findById(req.params.id);
    res.status(200).json(quiz[0]);
  } catch (error) {
    next(error);
  }
};

exports.getQuestions = async (req, res, next) => {
  try {
    const [details] = await Question.findById(req.params.id);
    for (let i = 0; i < details.length; i++) details[i]["index"] = i;
    res.status(200).json(details);
  } catch (error) {
    next(error);
  }
};

exports.addNew = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let quiz = new Quiz(title, body);
    quiz = await quiz.save();
    res.status(201).json({ message: "Quiz created" });
  } catch (error) {
    next(error);
  }
};

