module.exports = {
    "up": `INSERT INTO quizzes (category, description, created_at)
    VALUES ("Food", "Looking for food and drink quiz? You've come to the right place. It is time to put your general knowledge about what you eat and drink to the test.", now()),
    ("World culinary", "Are you a foodie? Then take this food origins quiz to really test your knowledge on the world's favorite foods & their true origins!", now()),
    ("Movies", "Lorem ipsum tekst", now()),
    ("Animals ", "Lorem ipsum tekst", now()),
    ("Science", "Lorem ipsum tekst", now()),
    ("Nature", "Lorem ipsum tekst", now()),
    ("Business and technology", "Lorem ipsum tekst", now()),
    ("Informatics", "Lorem ipsum tekst", now()),
    ("Geography", "Lorem ipsum tekst", now()),
    ("Human", "Lorem ipsum tekst", now()),
    ("Astronomy", "From famous astronauts to facts about planets and stars. This astronomy quiz will truly test your knowledge!", now()),
    ("Art", "Lorem ipsum tekst", now());`,
    "down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}