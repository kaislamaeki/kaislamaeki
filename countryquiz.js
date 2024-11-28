const countries = [
    {
        name: "Japan",
        clues: [
            "images/japan-outline.png", // Local path to your image
            "Population: ~125 million",
            "Top export (2021): cars",
            "Capital: Tokyo",
            "🇯🇵" // Flag
        ]
    },
    {
        name: "France",
        clues: [
            "images/france-outline.png",
            "Population: ~67 million",
            "Top export (2021): packaged medications",
            "Capital: Paris",
            "🇫🇷"
        ]
    },
    {
        name: "Uruguay",
        clues: [
            "images/uruguay-outline.png",
            "Population: ~3.5 million",
            "Top export (2021): beef",
            "Capital: Montevideo",
            "🇺🇾"
        ]
    },
    {
        name: "New Zealand",
        correctAnswers: ["new zealand", "newzealand"],
        clues: [
            "images/newzealand-outline.jpeg",
            "Population: ~5 million",
            "Top export (2021): milk",
            "Capital: Wellington",
            "🇳🇿"
        ]
    },
    {
        name: "Namibia",
        clues: [
            "images/namibia-outline.png",
            "Population: ~3 million",
            "Top export (2021): copper",
            "Capital: Windhoek",
            "🇳🇦"
        ]
    },
    {
        name: "Fiji",
        clues: [
            "images/fiji-outline.png",
            "Population: ~900,000",
            "Top export (2021): water",
            "Capital: Suva",
            "🇫🇯"
        ]
    },
    {
        name: "Suriname",
        clues: [
            "images/suriname-outline.jpeg",
            "Population: ~600,000",
            "Top export (2021): gold",
            "Capital: Paramaribo",
            "🇸🇷"
        ]
    },
    {
        name: "Mongolia",
        clues: [
            "images/mongolia-outline.png",
            "Population: ~3.5 million",
            "Top export (2021): copper",
            "Capital: Ulaanbaatar",
            "🇲🇳"
        ]
    },
    {
        name: "Rwanda",
        clues: [
            "images/rwanda-outline.png",
            "Population: ~14 million",
            "Top export (2021): gold",
            "Capital: Kigali",
            "🇷🇼"
        ]
    },
    {
        name: "Malta",
        clues: [
            "images/malta-outline.jpeg",
            "Population: ~500,000",
            "Top export (2021): integrated circuits",
            "Capital: Valletta",
            "🇲🇹"
        ]
    },
    {
        name: "Vanuatu",
        clues: [
            "images/vanuatu-outline.png",
            "Population: ~300,000",
            "Top export (2021): fish",
            "Capital: Port Vila",
            "🇻🇺"
        ]
    },
    {
        name: "Botswana",
        clues: [
            "images/botswana-outline.jpeg",
            "Population: ~2.5 million",
            "Top export (2021): diamonds",
            "Capital: Gaborone",
            "🇧🇼"
        ]
    },
    {
        name: "Guyana",
        clues: [
            "images/guyana-outline.jpeg",
            "Population: ~800,000",
            "Top export (2021): petroleum",
            "Capital: Georgetown",
            "🇬🇾"
        ]
    },
    {
        name: "Seychelles",
        clues: [
            "images/seychelles-outline.jpeg",
            "Population: ~100,000",
            "Top export (2021): boats",
            "Capital: Victoria",
            "🇸🇨"
        ]
    },
    {
        name: "Eswatini",
        clues: [
            "images/eswatini-outline.jpeg",
            "Population: ~1.2 million",
            "Top export (2021): soft drink concentrates",
            "Capital: Mbabane (administrative), Lobamba (legislative)",
            "🇸🇿"
        ]
    },
    {
        name: "Papua New Guinea",
        correctAnswers: ["papua new guinea", "papuanewguinea"],
        clues: [
            "images/papuanewguinea-outline.png",
            "Population: ~10.5 million",
            "Top export (2021): petroleum",
            "Capital: Port Moresby",
            "🇵🇬"
        ]
    },
    {
        name: "Barbados",
        clues: [
            "images/barbados-outline.png",
            "Population: ~280,000",
            "Top export (2021): rum",
            "Capital: Bridgetown",
            "🇧🇧"
        ]
    },
    {
        name: "Afghanistan",
        clues: [
            "images/afghanistan-outline.png", // Local path to the outline image of Afghanistan
            "Population: ~42.5 million",
            "Top export (2021): gold",
            "Capital: Kabul",
            "🇦🇫"
        ]
    },
    {
        name: "Sweden",
        clues: [
            "images/sweden-outline.jpeg", // Local path to the outline image of Sweden
            "Population: ~10.5 million",
            "Top export (2021): cars",
            "Capital: Stockholm",
            "🇸🇪"
        ]
    },
    {
        name: "Egypt",
        clues: [
            "images/egypt-outline.jpeg", // Local path to the outline image of Egypt
            "Population: ~116.5 million",
            "Top export (2021): petroleum",
            "Capital: Cairo",
            "🇪🇬"
        ]
    }    
];

// Shuffle the countries array at the start
shuffleArray(countries);

// Fisher-Yates shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

let currentCountryIndex = 0;
let currentClueIndex = -1;
let attempts = [];
let cluesUsed = 0;

const clueText = document.getElementById("clue-text");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-answer");
const newClueButton = document.getElementById("new-clue");
const result = document.getElementById("result");
const scoreList = document.getElementById("score-list");

function showNextClue() {
    if (currentClueIndex < countries[currentCountryIndex].clues.length - 1) {
        currentClueIndex++;
        cluesUsed++;
        const clue = countries[currentCountryIndex].clues[currentClueIndex];
        if (currentClueIndex === 0) {
            clueText.innerHTML = `<img src="${clue}" alt="Country outline" width="200px">`;
        } else {
            clueText.textContent = clue;
        }
    } else {
        clueText.textContent = "Nope, try again!";
    }
}

function checkAnswer() {
    const answer = answerInput.value.trim().toLowerCase();
    const correctAnswer = countries[currentCountryIndex].name.toLowerCase();

    if (answer === correctAnswer) {
        result.textContent = `Correct! The country was ${countries[currentCountryIndex].name}.`;
        result.className = "correct"; // Apply the green styling
        attempts.push(cluesUsed);
       
        // Delay moving to the next question
        setTimeout(() => {
            updateScoreboard();
            moveToNextCountry();
        }, 1500); // 1.5-second delay

    } else {
        result.textContent = "Nope, try again.";
        result.className = "wrong"; // Apply the red styling
        showNextClue();

        // Clear "Wrong answer!" after 2 seconds
        setTimeout(() => {
            result.textContent = "";
        }, 1500); // 2000ms = 2 seconds
    }
    answerInput.value = "";
    
}


function moveToNextCountry() {
    result.textContent = ""; // Clear previous result
    currentCountryIndex++;
    
    if (currentCountryIndex < countries.length) {
        // Reset clues and prompt for the next question
        currentClueIndex = -1;
        cluesUsed = 0;
        clueText.textContent = "Press 'New Clue' to start the next country!";
        updateProgressBar(); // Update progress bar
    } else {
        // Store the scoreboard data in localStorage
        localStorage.setItem("scoreboard", JSON.stringify(attempts));
        localStorage.setItem("countries", JSON.stringify(countries));

        // Redirect to the scoreboard page
        window.location.href = "scoreboard.html";
    }
}

function updateScoreboard() {
    const scoreList = document.getElementById("score-list");
    scoreList.innerHTML = ""; // Clear previous scores

    let totalCluesUsed = 0;

    attempts.forEach((cluesUsed, index) => {
        const countryName = countries[index].name; // Get country name
        const scoreItem = document.createElement("li");
        scoreItem.textContent = `${countryName}: ${cluesUsed} clues`;
        scoreList.appendChild(scoreItem);

        totalCluesUsed += cluesUsed; // Add to total clues
    });

    const totalCluesItem = document.createElement("li");
    totalCluesItem.textContent = `Total clues used: ${totalCluesUsed}`;
    totalCluesItem.style.fontWeight = "bold"; // Make it stand out
    scoreList.appendChild(totalCluesItem);
}


// THE OG CODE vv
// function updateScoreboard() {
//     const scoreItem = document.createElement("li");
//     scoreItem.textContent = `${countries[currentCountryIndex].name}: ${cluesUsed} clues`;
//     scoreList.appendChild(scoreItem);
// }

newClueButton.addEventListener("click", showNextClue);
submitButton.addEventListener("click", checkAnswer);

// Trigger submit with Enter key
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressDecor = document.getElementById("progress-decor");
    const progressContainer = document.getElementById("progress-bar-container");

    // Calculate progress percentage
    const progress = ((currentCountryIndex + 1) / countries.length) * 100;

    // Update the progress bar width
    progressBar.style.width = `${progress}%`;

    // Calculate the position of the decorative image
    const containerWidth = progressContainer.offsetWidth;
    const maxDecorPosition = containerWidth - progressDecor.offsetWidth; // Prevent overflow
    const decorPosition = (progress / 100) * maxDecorPosition;

    // Update the decorative image position
    progressDecor.style.left = `${decorPosition}px`;
}
