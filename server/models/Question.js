const db = require("../config/db");

class Question {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  
  static findById(id) {
    let sql = `SELECT answer_1, answer_2, 
    answer_3, answer_4, correct, question, id
    FROM questions WHERE quiz_id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Question;