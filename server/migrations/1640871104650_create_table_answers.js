module.exports = {
    "up": `CREATE TABLE answers (
        id INT NOT NULL AUTO_INCREMENT, 
        answer varchar(255) NOT NULL,
        correct BOOL NOT NULL DEFAULT 0,
        question_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (question_id) REFERENCES questions(id))
        `,
    "down": "DROP TABLE answers;"
}