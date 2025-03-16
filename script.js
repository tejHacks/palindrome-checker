document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("input-text");
    const checkButton = document.getElementById("btn-check");
    const resultDisplay = document.getElementById("result");

    if (!inputText || !checkButton || !resultDisplay) {
        console.error("Error: One or more elements not found in the DOM.");
        return;
    }

    const isPalindrome = (str) => {
        const cleanStr = str.trim().toLowerCase().replace(/[^a-z0-9]/g, ""); // Trim & clean input
        return cleanStr === cleanStr.split("").reverse().join("");
    };

    checkButton.addEventListener("click", () => {
        const userInput = inputText.value.trim();

        if (!userInput) {
            resultDisplay.textContent = "Please enter a word or phrase.";
            resultDisplay.className = "error";
            return;
        }

        if (isPalindrome(userInput)) {
            resultDisplay.textContent = `"${userInput}" is a Palindrome! ✅`;
            resultDisplay.className = "success";
        } else {
            resultDisplay.textContent = `"${userInput}" is NOT a Palindrome. ❌`;
            resultDisplay.className = "error";
        }
    });
});
