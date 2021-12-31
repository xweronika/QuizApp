module.exports = {
    "up": `INSERT INTO answers (answer,correct,question_id) VALUES 
    ("blue",0, 1),
    ("pink",0, 1),
    ("black",0, 1),
    ("green",1, 1),
    ("pig",0, 2),
    ("cat",1, 2),
    ("dog",0, 2),
    ("chicken",0, 2),
    ("door",0, 3),
    ("window",0, 3),
    ("carpet",0, 3),
    ("mirror",1, 3),



    ("blue",0, 4),
    ("pink",0, 4),
    ("black",0, 4),
    ("green",1, 4),
    ("pig",0, 5),
    ("cat",1, 5),
    ("dog",0, 5),
    ("chicken",0, 5),
    ("door",0, 6),
    ("window",0, 6),
    ("carpet",0, 6),
    ("mirror",1, 6),


    ("blue",0, 7),
    ("pink",0, 7),
    ("black",0, 7),
    ("green",1, 7),
    ("pig",0, 8),
    ("cat",1, 8),
    ("dog",0, 8),
    ("chicken",0, 8),
    ("door",0, 9),
    ("window",0, 9),
    ("carpet",0, 9),
    ("mirror",1, 9),



    ("blue",0, 10),
    ("pink",0, 10),
    ("black",0, 10),
    ("green",1, 10),
    ("pig",0, 11),
    ("cat",1, 11),
    ("dog",0, 11),
    ("chicken",0, 11),
    ("door",0, 12),
    ("window",0, 12),
    ("carpet",0, 12),
    ("mirror",1, 12);
`,
    "down": "DROP TABLE answers;"
}