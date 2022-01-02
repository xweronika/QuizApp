module.exports = {
    "up": `INSERT INTO quizzes (title, description, add_default, created_at)
    VALUES ("Quiz What I like", "Lorem ipsum tekst", 1, now()),
     ("Quiz What I like", "Lorem ipsum tekst", 1, now()),
     ("Quiz What I like", "Lorem ipsum tekst", 1, now()),
     ("Quiz What I like", "Lorem ipsum tekst", 1, now());`,
    "down": "DROP TABLE quizzes"
}