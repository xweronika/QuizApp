const db = require("../config/db");

class Question {
  constructor(quiz_id, question, answers, correct) {
    this.quiz_id = quiz_id;
    this.question = question;
    this.answers = JSON.stringify(answers);
    this.correct = correct;
  }

  save() {

    let sql = `
    INSERT INTO questions(
      quiz_id,
      question,
      answers,
      correct
    )
    VALUES(
      '${this.quiz_id}',
      '${this.question}',
      '${this.answers}',
      '${this.correct}'
    )`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT question, answers, correct, quiz_id
    FROM questions WHERE quiz_id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Question;