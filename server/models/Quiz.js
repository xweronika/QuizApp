const db = require("../config/db");

class Quiz {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    let sql = `
    INSERT INTO quizzes(
      title,
      body,
      created_at
    )
    VALUES(
      '${this.title}',
      '${this.body}',
      '${createdAtDate}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = `select * from quizzes;`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `
    SELECT quizzes.*, questions.id as question_id, 
    questions.question, answers.answer, answers.correct 
    FROM quizzes 
    inner join questions on quizzes.id = questions.quiz_id 
    inner join answers on questions.id = answers.question_id
    WHERE quizzes.id = ${id};`;

    return db.execute(sql)
  }
}

module.exports = Quiz;