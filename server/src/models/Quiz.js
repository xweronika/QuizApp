const db = require("../config/db");

class Quiz {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  // save() {
  //   let sql = `
  //   INSERT INTO quizzes(
  //     title,
  //     body,
  //     created_at
  //   )
  //   VALUES(
  //     '${this.title}',
  //     '${this.body}',
  //     '${createdAtDate}'
  //   )`;
  //   return db.execute(sql);
  // }

  static findAll() {
    let sql = `select * from quizzes;`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM quizzes WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Quiz;