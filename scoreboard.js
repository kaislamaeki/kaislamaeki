document.addEventListener("DOMContentLoaded", () => {
    const scoreList = document.getElementById("score-list");
    const playAgainButton = document.getElementById("play-again");

    // Retrieve scoreboard data from localStorage
    const attempts = JSON.parse(localStorage.getItem("scoreboard")) || [];

    // Display the scoreboard
    attempts.forEach((cluesUsed, index) => {
        const scoreItem = document.createElement("li");
        scoreItem.textContent = `Country ${index + 1}: ${cluesUsed} clues`;
        scoreList.appendChild(scoreItem);
    });

    // Play Again button
    playAgainButton.addEventListener("click", () => {
        // Clear localStorage and redirect to the quiz page
        localStorage.removeItem("scoreboard");
        window.location.href = "index.html";
    });
});
