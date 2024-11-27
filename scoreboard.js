
document.addEventListener("DOMContentLoaded", () => {
    const scoreList = document.getElementById("score-list");

    // Retrieve data from localStorage
    const attempts = JSON.parse(localStorage.getItem("scoreboard")) || [];
    const countries = JSON.parse(localStorage.getItem("countries")) || [];

    let totalCluesUsed = 0;

    // Populate the scoreboard
    attempts.forEach((cluesUsed, index) => {
        const countryName = countries[index]?.name || `Country ${index + 1}`;
        const scoreItem = document.createElement("li");
        scoreItem.textContent = `${countryName}: ${cluesUsed} clues`;
        scoreList.appendChild(scoreItem);

        totalCluesUsed += cluesUsed;
    });

    // Display the total clues used
    const totalCluesItem = document.createElement("li");
    totalCluesItem.textContent = `Total clues used: ${totalCluesUsed}`;
    totalCluesItem.style.fontWeight = "bold";
    scoreList.appendChild(totalCluesItem);

    // document.addEventListener("DOMContentLoaded", () => {
        const playAgainButton = document.getElementById("play-again");
    
        // Add a click event listener to the Play Again button
        playAgainButton.addEventListener("click", () => {
            // Clear the stored scoreboard data
            localStorage.removeItem("scoreboard");
            localStorage.removeItem("countries");
    
            // Redirect to the quiz page
            window.location.href = "index.html";
        });
    });



// OG CODE vv
// document.addEventListener("DOMContentLoaded", () => {
//     const scoreList = document.getElementById("score-list");
//     const playAgainButton = document.getElementById("play-again");

//     // Retrieve scoreboard data from localStorage
//     const attempts = JSON.parse(localStorage.getItem("scoreboard")) || [];

//     // Display the scoreboard
//     attempts.forEach((cluesUsed, index) => {
//         const scoreItem = document.createElement("li");
//         scoreItem.textContent = `Country ${index + 1}: ${cluesUsed} clues`;
//         scoreList.appendChild(scoreItem);
//     });

    // // Play Again button
    // playAgainButton.addEventListener("click", () => {
    //     // Clear localStorage and redirect to the quiz page
    //     localStorage.removeItem("scoreboard");
    //     window.location.href = "index.html";
    // });
// });
