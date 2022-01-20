const Quiz = require("../models/Quiz");
const Question = require("../models/Question");


exports.get = async (req, res, next) => {
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

exports.add = async (req, res, next) => {
  try {
    let { category, description } = req.body;
    let quiz = new Quiz(category, description);
    quiz = await quiz.save();
    const id = quiz[0].insertId;

    for (const data of req.body.details) {
      let { question, answers, correct } = data;
      let details = new Question(id, question, answers, correct);
      details = await details.save();
    }
    res.status(201).json(id);
  } catch (error) {
    next(error);
  }
};


