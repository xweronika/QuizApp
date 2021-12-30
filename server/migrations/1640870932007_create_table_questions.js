module.exports = {
    "up": `CREATE TABLE questions (
        id INT NOT NULL AUTO_INCREMENT, 
        question varchar(255) NOT NULL,
        quiz_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id))`,
        
    "down": "DROP TABLE questions"
}