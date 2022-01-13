const db = require("../config/db");

class Quiz {
  constructor(category, description) {
    this.category = category;
    this.description = description;
  }

  save() {
    let sql = `
    INSERT INTO quizzes(
      category,
      description,
      created_at
    )
    VALUES(
      '${this.category}',
      '${this.description}',
      now()
    )`;
    return db.execute(sql);
  }

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