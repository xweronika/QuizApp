module.exports = {
    "up": `CREATE TABLE quizzes (
        id INT NOT NULL AUTO_INCREMENT, 
        category varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        created_at DATE  NOT NULL,
        PRIMARY KEY (id));`,
"down": "DROP TABLE IF EXISTS questions, quizzes"
}