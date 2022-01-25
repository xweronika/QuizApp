module.exports = {
    "up": `INSERT INTO quizzes (category, description, created_at)
    VALUES ("Quiz What I like", "Lorem ipsum tekst", now()),
     ("Quiz What I like", "Lorem ipsum tekst", now()),
     ("Quiz What I like", "Lorem ipsum tekst", now()),
     ("Quiz What I like", "Lorem ipsum tekst", now());`,
    "down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}