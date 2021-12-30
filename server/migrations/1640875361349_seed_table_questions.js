module.exports = {
    "up": ` INSERT INTO questions 
    (question, quiz_id, answer_1, answer_2, answer_3, answer_4, correct)
    VALUES ("What is my favourite color?", 1, "blue", "pink", "black", "green","pink"),
     ("What is my favourite animal?", 1, "pig", "cat", "dog", "chicken", "pig"),
     ("What is my favourite thing?", 1, "door", "window", "carpet", "mirror", "mirror"),
     ("What is my favourite color?", 2, "blue", "pink", "black", "green","pink"),
     ("What is my favourite animal?", 2, "pig", "cat", "dog", "chicken", "pig"),
     ("What is my favourite thing?", 2, "door", "window", "carpet", "mirror", "mirror"),
     ("What is my favourite color?", 3, "blue", "pink", "black", "green","pink"),
     ("What is my favourite animal?", 3, "pig", "cat", "dog", "chicken", "pig"),
     ("What is my favourite thing?", 3, "door", "window", "carpet", "mirror", "mirror"),
     ("What is my favourite color?", 4, "blue", "pink", "black", "green","pink"),
     ("What is my favourite animal?", 4, "pig", "cat", "dog", "chicken", "pig"),
     ("What is my favourite thing?", 4, "door", "window", "carpet", "mirror", "mirror");`,

    "down": "DROP TABLE questions;"
}