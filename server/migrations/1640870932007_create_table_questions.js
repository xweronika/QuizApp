module.exports = {
    "up": `CREATE TABLE questions (
        id INT NOT NULL AUTO_INCREMENT, 
        question varchar(255) NOT NULL,
        quiz_id INT NOT NULL,
        answer_1 varchar(255) NOT NULL,
        answer_2 varchar(255) NOT NULL,
        answer_3 varchar(255) NOT NULL,
        answer_4 varchar(255) NOT NULL,
        correct varchar(255) NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id))`,
        
    "down": "DROP TABLE questions"
}