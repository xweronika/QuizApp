module.exports = {
    "up": `CREATE TABLE quizzes (
        id INT NOT NULL AUTO_INCREMENT, 
        category varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        add_default BOOL DEFAULT 0,
        created_at DATE  NOT NULL,
        PRIMARY KEY (id) );`,
"down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}