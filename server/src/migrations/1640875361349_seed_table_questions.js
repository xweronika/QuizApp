module.exports = {
    "up": ` INSERT INTO questions 
    (question, quiz_id, correct, answers)
    VALUES ("What is my favourite color?", 1, 1, '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 1, 2, '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 1, 3, '["door", "window", "carpet", "mirror"]'),
     ("What is my favourite color?", 2, 0, '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 2, 0, '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 2, 0, '["door", "window", "carpet", "mirror"]'),
     ("What is my favourite color?", 3, 0, '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 3, 0, '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 3, 0, '["door", "window", "carpet", "mirror"]'),
     ("What is my favourite color?", 4, 3, '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 4, 3, '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 4, 3, '["door", "window", "carpet", "mirror"]');`,

    "down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}