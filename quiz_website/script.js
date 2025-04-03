const quizData = {
    science: [
        { question: "1. What is the chemical symbol for water?", answers: { a: "H2O", b: "O2", c: "CO2" }, correct: "a", explanation: "Water's chemical formula is H2O because it consists of two hydrogen atoms and one oxygen atom.", img: "water drop.jpg"},
        { question: "2. What planet is known as the Red Planet?", answers: { a: "Mars", b: "Venus", c: "Jupiter" }, correct: "a", explanation: "Mars is called the Red Planet due to its iron-rich dust, which gives it a reddish appearance." },
        { question: "3. A car accelerates uniformly from rest to a speed of 30 m/s in 10 seconds. What is its acceleration?", answers: { a: "2 m/s²", b: "3 m/s²", c:" 5 m/s²" }, correct: "b", explanation: "Acceleration is given by the formula a = (final velocity - initial velocity) / time. Since the car starts from rest (0 m/s) and reaches 30 m/s in 10 seconds: a = (30 - 0) / 10 = 3 m/s²."},
        { question: "4. A 12 V battery is connected to a 4Ω resistor. What is the current flowing through the resistor?", answers: {a: " 2 A", b: "3 A", c: "4 A" }, correct: "b", explanation: "Using Ohm’s law: V = IR. Rearranging for I: I = V/R = 12V / 4Ω = 3A."},
        { question: "5. Which subatomic particle determines the identity of an element?", answers: {a: "Electron", b: "protons", c: "neutrons"}, correct: "b", explanation: "The number of protons in an atom's nucleus determines the element. For example, hydrogen has 1 proton, helium has 2, and so on."},
        { question: "6. What is the chemical name of baking soda?", answers: {a: "Sodium carbonate", b: "Sodium bicarbonate", c: "Calcium carbonate"}, correct: "b",explanation: "Baking soda’s chemical name is Sodium Bicarbonate (NaHCO₃). It is commonly used in baking, cleaning, and even as an antacid."},
    ],
    history: [
        { question: "1. Who discovered America?", answers: { a: "Columbus", b: "Vikings", c: "Magellan" }, correct: "a", img: "https://via.placeholder.com/300" },
        { question: "2. What year did World War II end?", answers: { a: "1945", b: "1939", c: "1918" }, correct: "a", img: "" },
        { question: "3. Who built the Great Pyramid of Giza?", answers: {a: "Julius Caesar", b: "Pharaoh Khufu", c: "Alexander the Great"}, correct: "b"},    
        { question: "4. What was the primary language of the Roman Empire?", answers: {a: "Latin", b: "Greek", c: "hebrew"}, correct: "a" },
        { question: "5. Which ancient city was buried by the eruption of Mount Vesuvius?", answers: {a: "Athens", b: "Babylon", c: "Pompeii"}, correct: "c"},
        { question: "6. In which year did World War II end?", answers: {a: "1945", b: "1919", c: "1925"}, correct: "a"},
    ],
    sports: [
        { question: "1. Which sport is known as the ‘king of sports’?", answers: { a: "Football (Soccer)", b: "Cricket", c: "Basketball" }, correct: "a", img: "https://via.placeholder.com/300" },
        { question: "2. How many players are there in a standard soccer team?", answers: { a: "11", b: "9", c: "12" }, correct: "a", img: "" },
        { question: "3. Which country has won the most FIFA World Cup titles?", answers: {a: "Brazil", b: "Argentina", c: "Portugal" }, correct: "a"},
        { question: "4. In which sport would you perform a 'slam dunk'?", answers: {a: "Football", b: "Basketball", c: "Batminton"}, correct: "b"},
        { question: "5. Who is often called 'The King of Clay' in tennis?", answers: {a: "Roger Federer", b: "Novak Djokovic", c: "Rafael Nadal"}, correct: "c"},
        { question: "6. Which sport uses the term 'birdie' and 'eagle' to describe scores?", answers: {a: "Soccer", b: "Golf", c: " Cricket"}, correct: "b"},
    ],
    literature: [
        { question: "1. Choose the correct sentence:", answers: {a: "She don’t like coffee.", b: "She doesn’t likes coffee.", c: "She doesn’t like coffee."}, correct: "c"},
        { question: "2. What is the meaning of the idiom 'Break a leg'?", answers: {a: "To get injured", b: "To wish someone good luck", c: "To dance well"}, correct: "b"},
        { question: "3. Who wrote 'Romeo and Juliet'?", answers: {a: "William Shakespeare", b: "Jane Austen", c: "Charles Dickens"}, correct: "a"},
        { question: "4. What is the main character’s name in 'To Kill a Mockingbird'?", answers: {a: "Scout Finch", b: "Holden Caulfield", c: "Jay Gatsby"}, correct: "a"},
        { question: "5. What is the term for a story that teaches a moral lesson?", answers: {a: "Fable", b: "Epic", c: "Sonnet"}, correct: "a"},
        { question: "6. Which novel begins with the famous line 'Call me Ishmael'?", answers: {a: "Moby-Dick", b: "Pride and Prejudice", c: "Great Expectations"}, correct: "a"}
    ],
    geography: [
        { question: "1. What is the capital of France?", answers: {a: "Paris", b: "Rome", c: "Berlin"}, correct: "a"},
        { question: "2. Which is the largest continent by land area?", answers: {a: "Africa", b: "Asia", c: "North America"}, correct: "b"},
        { question: "3. The Amazon Rainforest is primarily located in which country?", answers: {a: "Brazil", b: "Peru", c: "Colombia"}, correct: "a"},
        { question: "4. What is the longest river in the world?", answers: {a: "Nile River", b: "Amazon River", c: "Yangtze River"}, correct: "a"},
        { question: "5. Mount Everest is part of which mountain range?", answers: {a: "Andes", b: "Himalayas", c: "Rockies"}, correct: "b"},
        { question: "6. Which ocean is the largest by surface area?", answers: {a: "Atlantic Ocean", b: "Indian Ocean", c: "Pacific Ocean"}, correct: "c"}
    ],
    movies: [
        { question: "1. Which movie features the famous quote 'I'm the king of the world'?", answers: {a: "Titanic", b: "Gladiator", c: "Braveheart"}, correct: "a"},
        { question: "2. Who played the role of Iron Man in the Marvel Cinematic Universe?", answers: {a: "Chris Evans", b: "Robert Downey Jr.", c: "Chris Hemsworth"}, correct: "b"},
        { question: "3. What is the highest-grossing movie of all time?", answers: {a: "Titanic", b: "Avengers: Endgame", c: "Avatar"}, correct: "c"},
        { question: "4. Which TV series features a coffee shop called Central Perk?", answers: {a: "Friends", b: "How I Met Your Mother", c: "The Big Bang Theory"}, correct: "a"},
        { question: "5. In Breaking Bad, what is Walter White’s alias?", answers: {a: "Heisenberg", b: "Gus Fring", c: "Jesse Pinkman"}, correct: "a"},
        { question: "6. What is the name of the dragon in Game of Thrones ridden by Daenerys?", answers: {a: "Viserion", b: "Drogon", c: "Rhaegal"}, correct: "b"}
    ],
    music: [
        { question: "1. Who is known as the 'King of Pop'?", answers: {a: "Elvis Presley", b: "Michael Jackson", c: "Prince"}, correct: "b"},
        { question: "2. Which singer released the album '1989'?", answers: {a: "Ariana Grande", b: "Taylor Swift", c: "Beyoncé"}, correct: "b"},
        { question: "3. What is the name of Beyoncé’s famous fanbase?", answers: {a: "Beliebers", b: "BeyHive", c: "Swifties"}, correct: "b"},
        { question: "4. Which rapper is known for hits like 'Sicko Mode' and 'Goosebumps'?", answers: {a: "Drake", b: "Kanye West", c: "Travis Scott"}, correct: "c"},
        { question: "5. Which K-pop group became the first to win a Billboard Music Award?", answers: {a: "EXO", b: "BLACKPINK", c: "BTS"}, correct: "c"},
        { question: "6. Who performed the iconic halftime show at the 2023 Super Bowl?", answers: {a: "Rihanna", b: "The Weeknd", c: "Eminem"}, correct: "a"}
    ],
    mythology: [
        { question: "1. Who is the king of the Greek gods?", answers: {a: "Poseidon", b: "Zeus", c: "Hades"}, correct: "b"},
        { question: "2. In Norse mythology, what is the name of Thor’s hammer?", answers: {a: "Excalibur", b: "Mjolnir", c: "Gungnir"}, correct: "b"},
        { question: "3. Who is the Egyptian god of the underworld?", answers: {a: "Osiris", b: "Ra", c: "Anubis"}, correct: "a"},
        { question: "4. What is the name of the winged horse in Greek mythology?", answers: {a: "Pegasus", b: "Chimera", c: "Griffin"}, correct: "a"},
        { question: "5. In Roman mythology, who is the god of war?", answers: {a: "Apollo", b: "Mars", c: "Mercury"}, correct: "b"},
        { question: "6. Which mythological creature is known for turning people to stone with its gaze?", answers: {a: "Medusa", b: "Minotaur", c: "Sphinx"}, correct: "a"}
    ],
    riddles: [
        { question: "1. The more of me you take, the more you leave behind. What am I?", answers: {a: "Time", b: "Footsteps", c: "Memories"}, correct: "b"},
        { question: "2. I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answers: {a: "A shadow", b: "An echo", c: "A ghost"}, correct: "b"},
        { question: "3. I have keys but open no locks. I have space but no room. You can enter, but you can’t go outside. What am I?", answers: {a: "A book", b: "A map", c: "A keyboard"}, correct: "c"},
        { question: "4. The more you remove from me, the bigger I get. What am I?", answers: {a: "A hole", b: "A balloon", c: "A shadow"}, correct: "a"},
        { question: "5. What has to be broken before you can use it?", answers: {a: "An egg", b: "A lock", c: "A seal"}, correct: "a"},
        { question: "6. I have hands but no arms. I show time but never move. What am I?", answers: {a: "A clock", b: "A mirror", c: "A painting"}, correct: "a"}
    ],
    numbers: [
        { question: "1. What is the only even prime number?", answers: {a: "2", b: "4", c: "6"}, correct: "a"},
        { question: "2. What is the Roman numeral for 50?", answers: {a: "L", b: "C", c: "X"}, correct: "a"},
        { question: "3. How many sides does a hexagon have?", answers: {a: "5", b: "6", c: "8"}, correct: "b"},
        { question: "4. What is the square root of 144?", answers: {a: "10", b: "12", c: "14"}, correct: "b"},
        { question: "5. What is the value of π (pi) rounded to two decimal places?", answers: {a: "3.14", b: "3.16", c: "3.12"}, correct: "a"},
        { question: "6. How many zeros are in one million?", answers: {a: "5", b: "6", c: "7"}, correct: "b"}
    ],
    astronomy: [
        { question: "1. What is the largest planet in our solar system?", answers: {a: "Earth", b: "Jupiter", c: "Saturn"}, correct: "b"},
        { question: "2. What galaxy is Earth located in?", answers: {a: "Andromeda", b: "Milky Way", c: "Whirlpool"}, correct: "b"},
        { question: "3. What is the name of the first man to walk on the moon?", answers: {a: "Buzz Aldrin", b: "Neil Armstrong", c: "Yuri Gagarin"}, correct: "b"},
        { question: "4. Which planet is known as the 'Morning Star' or 'Evening Star'?", answers: {a: "Mars", b: "Venus", c: "Mercury"}, correct: "b"},
        { question: "5. What is the name of the closest star to Earth?", answers: {a: "Alpha Centauri", b: "Betelgeuse", c: "The Sun"}, correct: "c"},
        { question: "6. What is a light-year a measure of?", answers: {a: "Time", b: "Distance", c: "Brightness"}, correct: "b"}
    ],
    programming: [
        { question: "1. What does HTML stand for?", answers: {a: "Hyper Text Markup Language", b: "High Tech Modern Language", c: "Home Tool Markup Language"}, correct: "a"},
        { question: "2. Which programming language is commonly used for building Android apps?", answers: {a: "Python", b: "Java", c: "C++"}, correct: "b"},
        { question: "3. What does ‘CSS’ stand for in web development?", answers: {a: "Creative Style System", b: "Cascading Style Sheets", c: "Computer Styling Syntax"}, correct: "b"},
        { question: "4. Which of the following is NOT a programming language?", answers: {a: "Python", b: "Java", c: "HTML"}, correct: "c"},
        { question: "5. What symbol is used for single-line comments in Python?", answers: {a: "//", b: "#", c: "/* */"}, correct: "b"},
        { question: "6. Which company developed the Java programming language?", answers: {a: "Microsoft", b: "Apple", c: "Sun Microsystems"}, correct: "c"}
    ]
};
function showSection(section) {
    document.getElementById('home').style.display = "none";
    document.getElementById('quiz-section').style.display = "none";
    document.getElementById('top-quizzes').style.display = "none";
    document.getElementById('trivia').style.display = "none";
    document.getElementById('about').style.display = "none";

    document.getElementById(section).style.display = "block";
}

function startQuiz(topic) {
    const quizContainer = document.getElementById('quiz');
    const quizTitle = document.getElementById('quiz-title');
    const resultsContainer = document.getElementById('results');
    
    quizTitle.innerText = topic.charAt(0).toUpperCase() + topic.slice(1) + " Quiz";
    resultsContainer.innerHTML = "";
    
    let output = "";
    quizData[topic].forEach((q, index) => {
        let answersHTML = "";
        for (const option in q.answers) {
            answersHTML += `<label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}: ${q.answers[option]}
            </label><br>`;
        }
        output += `<div class="question">${q.question}</div>`;
        if (q.img) output += `<img src="${q.img}" alt="Question Image">`;
        output += `<div class="answers">${answersHTML}</div>`;
    });

    quizContainer.innerHTML = output;
    showSection('quiz-section');
}

document.getElementById('submit').addEventListener('click', function() {
    const quizTitle = document.getElementById('quiz-title').innerText.replace(" Quiz", "").toLowerCase();
    const answerContainers = document.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData[quizTitle].forEach((q, index) => {
        const selectedOption = answerContainers[index].querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correct) numCorrect++;
        triggerConfetti();
    });

    document.getElementById('results').innerHTML = `You got ${numCorrect} out of ${quizData[quizTitle].length} correct!`;
});
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
   
}

showSection('home');