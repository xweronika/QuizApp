module.exports = {
    "up": ` INSERT INTO questions 
    (question, quiz_id, correct, answers)
    VALUES 
    ("What kind of food is Penne?", 1, 0, '["Pasta", "Groats", "Rice", "Any of the above"]'),
    ("What was the old name for a Snickers bar before it changed in 1990?", 1, 2, '["Toblerone", "Duplo", "Marathon", "Pierrot"]'),
    ("What was the first soft drink in space?", 1, 1, '["Carbonated water", "Coca Cola", "Diet Pepsi", "Sprite"]'),
    ("What is the primary ingredient in hummus?", 1, 1, '["Avocado", "Chickpeas", "Pea", "Buckwheat groats"]'),
    ("Cuy is often on the menu in South American countries such as Peru. If you ordered it, which animal would you be eating?", 1, 0, '["Guinea pig", "Capybara", "Rabbit", "Mole"]'),
    ("What is the most expensive spice in the world by weight?", 1, 3, '["Curry", "Chilli pepper", "Anise", "Saffron"]'),
    ("Which variety of rice is often referred to as the Queen of Rice?", 1, 1, '["Jasmine", "Basmati", "Arborio", "Sticky"]'),
    ("Which chocolate is slogan is - You are not you when you are hungry?", 1, 2, '["Lindt", "Mars", "Snickers", "Kit Kat"]'),
    ("Which fruit, grown throughout Asia, is known as the smelliest fruit on the planet?", 1, 3, '["Nashi Pear", "Snake Fruit", "Papaya", "Durian"]'),


    ("Where was pizza invented?", 2, 0, '["Naples, Italy", "Chicago, USA", "Paris, France", "Rome, Italy"]'),
    ("Which country is the origin of the cocktail Mojito?", 2, 3, '["Jamaica", "Bahamas", "Dominican Republic", "Cuba"]'),
    ("Which country consumes the most chocolate per capita?", 2, 0, '["Switzerland", "Brazil", "Norway", "United Kingdom"]'),
    ("Which country invented ice cream?", 2, 0, '["China", "Japan", "United States", "United Kingdom"]'),
    ("Which country produces the most coffee in the world?", 2, 1, '["Dominican Republic", "Brazil", "Cuba", "Japan"]'),
    ("What is the most famous Mexican beer?", 2, 3, '["Coors", "Skol", "Heineken", "Corona"]'),
    ("In the USA, what is the most popular flavor of ice cream?", 2, 3, '["Chocolate", "Cookie Dough", "Strawberry", "Vanilla"]'),
    ("Which country eats the most pizza per capita in the world?", 2, 1, '["Italy", "Norway", "United States", "United Kingdom"]'),
    ("The sale of soft drink Coca Cola is officially banned in two countries. One is North Korea, which is the other?", 2, 1, '["Estonia", "Cuba", "Andorra", "Paraguay"]'),
    ("Mayonnaise is a popular pizza condiment in which country?", 2, 2, '["France", "Germany", "Japan", "Canada"]'),


    ("What was the first feature-length animated movie ever released?", 3, 3, '["The Lion King", "Cinderella", "Alice in Wonderland", "Snow White and the Seven Dwarfs"]'),
    ("Which colour pill does Neo swallow in The Matrix?", 3 , 0, '["Red", "Blue", "Green", "Yellow"]'),
    ("What TV series showed the first interracial kiss on American network television?", 3, 0, '["Star Trek", "Star Wars", "Spider-Man", "X-Men"]'),
    ("When was Netflix founded?", 3, 0, '["1997", "2001", "2009", "2015"]'),
    ("Which cartoon character lives in a pineapple under the sea?", 3, 3, '["Finding Nemo", "Shark Tale", "Shark Bait", "Spongebob Squarepants"]'),
    ("What is the name of the toy cowboy in Toy Story?", 3, 0, '["Woody", "Buzz Astral", "Jessie", "Bou"]'),
    ("What anniversary is the Harry Potter film franchise celebrating in 2021?", 3, 1, '["10th", "20th", "30th", "40th"]'),
    ("Name Batman's crime-fighting partner?", 3, 0, '["Robin", "Joker", "Peter", "Jack"]'),
    ("Exceeding $1 billion at the box office, what was the highest grossing film of the 1990s?", 3, 3, '["Independence Day", "Jurassic Park", "Star Wars Episode I - The Phantom Menace", "Titanic"]'),


    ("Of all the animals on Earth, which is the largest?", 4, 1, '["Elephant", "Blue whale", "Basking shark", "Hippopotamus"]'),
    ("How many hearts does an octopus have?", 4, 2, '["1", "2", "3", "4"]'),
    ("What animals are pearls found in?", 4, 2, '["Mussels", "Pearls", "Oysters", "None of the above"]'),
    ("What is the world's largest land mammal?", 4, 3, '["Blue whale", "Hippopotamus", "Rhinoceros", "Elephant"]'),
    ("How many legs does a spider have?", 4, 3, '["5", "6", "7", "8"]'),
    ("Which mammal has no vocal cords?", 4, 0, '["Giraffe", "Rhinoceros", "Elephant", "Hippopotamus"]'),
    ("How long do elephant pregnancies last?", 4, 3, '["6 months", "9 months", "15 months", "22 months"]'),
    ("What was the first animal sent into Space?", 4, 2, '["Rabbit", "Chimpanzee", "Dog", "Rat"]'),


    ("What does fiber optic cable resemble, in terms of size?", 5, 3, '["Pipeline", "Bamboo", "Telephone wire", "Human hair"]'),
    ("What is the measure of electrical charge?", 5, 1, '["Ampere", "Coulomb", "Volt", "Ohm"]'),
    ("Who is best known for his theory of black holes?", 5, 3, '["Albert Einstein", "Izaak Newton", "Neil Armstrong", "Stephen Hawking"]'),
    ("What does a Geiger Counter measure?", 5, 2, '["Voltage", "Power", "Radiation", "Wind speed"]'),
    ("Who was the first woman to win a Nobel Prize (in 1903)?", 5, 2, '["Mary Walker", "Jane Addams", "Marie Curie", "Elisabeth Williams"]'),
    ("What measurement scale is used to determine wind speed?", 5, 0, '["Beaufort scale", "Richter scale", "Synoptic scale", "Gusting scale"]'),
    ("What is the layer of air that surrounds the Earth called?", 5, 3, '["Mantle", "Water vapor", "Ozone layer", "Atmosphere"]'),
    ("Who invented the telephone?", 5, 1, '["Thomas Edison", "Alexander Graham Bell", "Alexander Fleming", "Nikola Tesla"]'),
    ("What does a barometer measure?", 5, 3, '["Rainfall", "High tide", "Temperature", "Atmospheric pressure"]'),
    ("Aircraft flight recorders are often known by the misnomer - black box, even though they are actually which colour?", 5, 1, '["Red", "Orange", "Yellow", "Green"]'),


    ("What is the chemical formula for Table Salt?", 6, 3, '["CO2", "MgO", "H2O", "NaCl"]'),
    ("What is the hardest natural stone?", 6, 3, '["Granite", "Marble", "Topaz", "Diamond"]'),
    ("What is the main source of vitamin C?", 6, 0, '["Fruits", "Vegetables", "Fishes", "Meat"]'),
    ("What is the color of an emerald?", 6, 1, '["Red", "Green", "Black", "Gray"]'),
    ("How long does it take for the Moon to travel around the Earth?", 6, 0, '["27 days", "28 days", "30 days", "31 days"]'),
    ("Which month of the year has the longest daylight hours in the Northern Hemisphere and the shortest daylight hours in the Southern Hemisphere?", 6, 1, '["January", "June", "August", "September"]'),
    ("Dolly was the name of the world's first mammal cloned from a somatic cell. Which animal was Dolly?", 6, 3, '["Dog", "Cat", "Horse", "Sheep"]'),
    ("How many colors are there in the rainbow?", 6, 2, '["5", "6", "7", "8"]'),
    ("Maroon and scarlet are shades of what color?", 6, 2, '["Green", "Blue", "Red", "Orange"]'),
    ("Which vitamin is the only one that you will not find in an egg?", 6, 2, '["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"]'),



    ("Who is the richest person in the world as of 2021?", 7, 0, '["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"]'),
    ("How much did Steve Job's first computer go for at auction?", 7, 1, '["$1.2 million", "$500,000", "$223,000", "3.4 million"]'),
    ("Bill Gates is the founder of which company?", 7, 3, '["IBM", "Apple", "Google", "Microsoft"]'),
    ("Which animal can be seen on the Porsche logo?", 7, 1, '["Lion", "Horse", "Puma", "Jaguar"]'),
    ("Popular computer brands like Apple, Dell and Microsoft started their offices from which place?", 7, 3, '["Silicon Valley", "International Corporation", "Street", "Garage"]'),
    ("What is Hewlett Packard (HP) originally known for?", 7, 3, '["Computers", "Telephones", "Radios", "Printers"]'),
    ("What is the name of the biggest technology company in South Korea?", 7, 2, '["Sony", "Huawei", "Samsung", "Apple"]'),
    ("Elon Musk is the CEO of which global brand?", 7, 0, '["Tesla", "IBM", "Google", "Apple"]'),
    ("What was the first item sold on Ebay in 1995?", 7, 2, '["A rusty bucket", "A computer mouse", "A broken laser pointer", "A Jurassic Park T-shirt"]'),
    ("Which company has employed the largest number of language translators?", 7, 1, '["IBM", "Google", "Microsoft", "Apple"]'),



    ("Which digital currency is the most well known cryptocurrency?", 8, 3, '["Ethereum", "Tether", "USD Coin", "Bitcoin"]'),
    ("Where was the world wide web invented?", 8, 1, '["United States", "Switzerland", "Germany", "United Kingdom"]'),
    ("What is the name of the oldest programming language still in use?", 8, 1, '["Matlab", "FORTRAN", "Ada", "COBOL"]'),
    ("If a URL ends with .mx, in which country would you expect it to be based?", 8, 3, '["Marshall Islands", "Monaco", "Morocco", "Mexico"]'),
    ("Which model of computer is the best selling of all time?", 8, 2, '["Apple II", "IBM PC (5150)", "Commodore 64", "Sinclair ZX Spectrum"]'),
    ("Which University offered the first-ever academic programme in Computer Science?", 8, 3, '["Harvard University", "MIT", "University of Glasgow", "Cambridge University"]'),
    ("A folder in windows computer can't be made with the name:", 8, 1, '["Can", "Con", "Mak", "Make"]'),
    ("What was the first mobile phone with internet connectivity?", 8, 1, '["iPhone", "Nokia 9000 Communicator", "Motorola 7500", "Blackberry 850"]'),



    ("Which country in the world is believed to have the most miles of motorway?", 9, 0, '["China", "United States", "United Kingdom", "Russia"]'),
    ("What colour are most buses in London?", 9, 1, '["Yellow", "Red", "Green", "Blue"]'),
    ("What is the largest country in the world?", 9, 3, '["United States", "United Kingdom", "China", "Russia"]'),
    ("In which state was former US President Barack Obama born?", 9, 0, '["Hawaii", "Floryda", "Kalifornia", "Arizona"]'),
    ("What is the smallest country in the world?", 9, 1, '["Monako", "Vatican", "San Marino", "Liechtenstein"]'),
    ("Where is the hottest place in the world?", 9, 2, '["Sahara Desert", "Gobi Desert", "Death Valley", "Mitribah"]'),
    ("What country is home to Oymyakon, the coldest place in the northern hemisphere?", 9, 1, '["Canada", "Russia", "USA", "Mongolia"]'),
    ("The unicorn is the national animal of which country?", 9, 0, '["Scotland", "Argentina", "Peru", "New Zealand"]'),
    ("What currency is used in Australia?", 9, 3, '["Australian pound", "Australian shilling", "Australian sterling", "Australian dollar"]'),
    ("What is the national flower/emblem of Ireland?", 9, 2, '["Daffodil", "Rose", "Shamrock", "Thistle"]'),
    ("Which colour is found on 75% of world flags?", 9, 0, '["Red", "White", "Blue", "Black"]'),
    ("If you dug a hole through the center of the Earth from Wellington, New Zealand, in which European country would you emerge?", 9, 1, '["Germany", "Spain", "France", "Poland"]'),


    ("Where is the smallest bone in the human body located?", 10, 0, '["Ear", "Elbow", "Tongue", "Toe"]'),
    ("What is a fear of snow called?", 10, 2, '["Ancraophobia", "Ombrophobia", "Chionophobia", "Thermophobia"]'),
    ("Approximately what proportion of people in the world have blue eyes?", 10, 1, '["4%", "8%", "12%", "16%"]'),
    ("Which side of the brain would be mostly used to evaluate whether a new wardrobe fits into the space available in a bedroom?", 10, 2, '["Front side", "Back side", "Right side", "Left side"]'),
    ("The human body is made up of approximately how much water?", 10, 2, '["40%", "50%", "60%", "70%"]'),
    ("Which of the human organs below is capable of regeneration?", 10, 1, '["Brain", "Liver", "Stomach", "Large intestine"]'),
    ("What are you afraid of if you are Syngenesophobic?", 10, 3, '["Syringes", "Genetically modified crops", "Snakes", "Relatives"]'),
    ("Roughly what percentage of people in the world can wiggle their ears?", 10, 3, '["50%", "40%", "30%", "20%"]'),


    ("What is the name of the spacecraft that took the first men to the moon?", 11, 2, '["Apollo 6", "Apollo 9", "Apollo 11", "Apollo 13"]'),
    ("Which planet is the hottest in the solar system?", 11, 0, '["Venus", "Uranus", "Mercury", "Saturn"]'),
    ("The existence of black holes was predicted by which eminent scientist's 'Theory of General Relativity'?", 11, 1, '["Izaak Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"]'),
    ("After the Moon, what is the brightest object in the night sky?", 11, 2, '["Betelgeuse", "Pole Star", "Venus", "International Space Station"]'),
    ("A light year is the distance travelled by light in how many Earth years?", 11, 0, '["1", "5", "10", "15"]'),
    ("What is the name of the galaxy containing earth and the sun?", 11, 3, '["Cygnus", "Andromeda Galaxy", "Eye of Sauron", "Milky Way"]'),
    ("Which country was the first to travel in space?", 11, 2, '["United States", "China", "Soviet Union", "United Kingdom"]'),
    ("Which planet is known for its distinctive red spot caused by an anti-cyclone?", 11, 1, '["Mars", "Jupiter", "Uranus", "Neptune"]'),
    ("What was the name of the world's first artificial satellite?", 11, 0, '["Sputnik 1", "Telstar 1", "Explore 1", "Hubble 1"]'),
    ("Which of these vegetables was the first to be grown in space?", 11, 1, '["Radish", "Potato", "Peas", "Swede"]'),
    ("In the solar system, which planet is known for its rings?", 11, 1, '["Jupiter", "Saturn", "Mars", "Venus"]'),


    ("Where can you see the Mona Lisa?", 12, 2, '["The Guggenheim Museum", "Tate Britain", "The Louvre", "The Pompidou Centre"]'),
    ("Which of these painters is not Italian?", 12, 0, '["Pablo Picasso", "Leonardo da Vinci", "Titian", "Caravaggio"]'),
    ("Which brand of soup featured in one of Andy Warhol's most famous pop art pieces?", 12, 1, '["Heinz", "Campbells", "Baxters", "Knorr"]'),
    ("In mythology, Romulus and Remus were brought up by which animal?", 12, 0, '["Wolf", "Bear", "Monkey", "Cow"]'),
    ("Which artist famously cut off his own ear?", 12, 0, '["Vincent Van Gogh", "Claude Monet", "Salvador Dali", "Pablo Picasso"]'),
    ("The Mad Hatter and the Cheshire Cat are characters in which famous book?", 12, 3, '["Winne-the-Pooh", "Charlottes Web", "Charlie and the Chocolate Factory", "Alice in Wonderland"]'),
    ("Which traditional Spanish dance originated in Andalusia and is recognised by UNESCO as a heritage of humanity?", 12, 2, '["Sardana", "Tango", "Flamenco", "Paso Doble"]'),
    ("Which one of these philosophers isn't a famous Greek mathematician?", 12, 1, '["Archimedes", "Homer", "Euclid", "Pythagoras"]'),
    ("What is the largest museum of fine art as defined by available gallery space?", 12, 0, '["The Louvre", "The Hermitage", "Metropolitan Museum of Art", "The Pompidou Centre"]');`,


    "down": "DROP TABLE IF EXISTS questions, quizzes, mysql_migrations_347ertt3e;"
}