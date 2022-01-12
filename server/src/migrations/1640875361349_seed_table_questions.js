module.exports = {
    "up": ` INSERT INTO questions 
    (question, quiz_id, correct, answers)
    VALUES ("What is my favourite color?", 1, "pink", '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 1, "pig", '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 1, "mirror", '["door", "window", "carpet", "mirror"]'),
     ("What is my favourite color?", 2, "pink", '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 2, "pig", '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 2, "mirror", '["door", "window", "carpet", "mirror"]'),
     ("What is my favourite color?", 3, "pink", '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 3, "pig", '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 3, "mirror", '["door", "window", "carpet", "mirror"]'),
     ("What is my favourite color?", 4, "pink", '["blue", "pink", "black", "green"]'),
     ("What is my favourite animal?", 4, "pig", '["pig", "cat", "dog", "chicken"]'),
     ("What is my favourite thing?", 4, "mirror", '["door", "window", "carpet", "mirror"]');`,

    "down": "DROP TABLE questions;"
}