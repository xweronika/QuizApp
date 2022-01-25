module.exports = {
    "up": `INSERT INTO quizzes (category, description, created_at)
    VALUES ("Food", "Looking for food and drink quiz? It is time to put your general knowledge about what you eat and drink to the test.", now()),
    ("World culinary", "Are you a foodie? How good is your world food knowledge? Where do your favorite foods originate from?", now()),
    ("Movies", "How well do you know the history of cinema, from its early days to today? Quiz for people who are serious movie lovers.", now()),
    ("Animals ", "Could you lead the tour at the zoo? Test your knowledge about the creatures large and small that share our planet.", now()),
    ("Science", "Test your scientific knowledge with this challenging science quiz. Are you a science genius? Take a quiz and find out!", now()),
    ("Nature", "How connected to nature are you? From scientific discoveries, to stones and minerals, get ready to challenge yourself.", now()),
    ("Business and technology", "Let's know more about the richest people and the largest companies in the world. Let's start the quiz.", now()),
    ("Informatics", "Do you think you know computers? Are you a tech egg-head? Hack into this quiz and let some technology tally your score.", now()),
    ("Geography", "Earth is an amazing planet. Take a spin around the globe and see how many of these geography facts you know!", now()),
    ("Human", "The human body is pretty amazing. But it turns out, it's also kind of strange! Test your knowledge of the human body.", now()),
    ("Astronomy", "Are you a keen stargazer? Can you name the planets in the Solar System? How about the many moons of Saturn…?", now()),
    ("Art", "Grab your paintbrushes! It's time for an art attack! Test your knowledge of famous artists, their works and more.", now());`,
    "down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}