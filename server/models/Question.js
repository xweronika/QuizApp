const db = require("../config/db");

class Question {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  
  static findById(id) {
    let sql = `SELECT question, answers, correct
    FROM questions WHERE quiz_id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Question;