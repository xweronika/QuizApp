module.exports = {
    "up": ` INSERT INTO questions (question, quiz_id)
    VALUES ("What is my favourite color?", 1),
     ("What is my favourite animal?", 1),
     ("What is my favourite thing?", 1),
     ("What is my favourite color?", 2),
     ("What is my favourite animal?", 2),
     ("What is my favourite thing?", 2),
     ("What is my favourite color?", 3),
     ("What is my favourite animal?", 3),
     ("What is my favourite thing?", 3),
     ("What is my favourite color?", 4),
     ("What is my favourite animal?", 4),
     ("What is my favourite thing?", 4);`,
        
    "down": "DROP TABLE questions;"
}