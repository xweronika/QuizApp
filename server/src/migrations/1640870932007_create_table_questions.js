module.exports = {
    "up": `CREATE TABLE questions (
        id INT NOT NULL AUTO_INCREMENT, 
        quiz_id INT NOT NULL, 
        question varchar(255) NOT NULL,
        answers JSON NOT NULL,
        correct TINYINT NOT NULL,
        add_default BOOL DEFAULT 0,
        PRIMARY KEY (id),
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id))`,

    "down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}