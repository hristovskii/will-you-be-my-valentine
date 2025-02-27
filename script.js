(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Дали си сигурна?",
    "Сигурна сигурна??",
    "Навистина не сакаш?",
    "Бебо те молам значи...",
    "Само размисли поубаво!",
    "Ќе бидам многу среќен ако кажеш да...",
    "Ако кажеш не, ќе бидам навистина тажен...",
    "Ќе бидам навистина многу многу тажен...",
    "Ќе плачам...",
    "Ок добро, ќе престанам да те прашувам...",
    "Се шалам, те молам кажи да! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.25}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}