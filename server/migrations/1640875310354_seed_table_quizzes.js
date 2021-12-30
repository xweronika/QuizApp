module.exports = {
    "up": `INSERT INTO quizzes (title, description, language, created_at)
    VALUES ("Quiz What I like", "Lorem ipsum tekst", "pl", now()),
     ("Quiz What I like", "Lorem ipsum tekst", "pl", now()),
     ("Quiz What I like", "Lorem ipsum tekst", "pl", now()),
     ("Quiz What I like", "Lorem ipsum tekst", "pl", now());`,
    "down": "DROP TABLE quizzes"
}