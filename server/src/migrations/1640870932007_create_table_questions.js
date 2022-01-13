module.exports = {
    "up": `CREATE TABLE questions (
        id INT NOT NULL AUTO_INCREMENT, 
        quiz_id INT NOT NULL, 
        question varchar(255) NOT NULL,
        answers JSON NOT NULL,
        correct varchar(255) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id))`,
        
    "down": "DROP TABLE questions"
}