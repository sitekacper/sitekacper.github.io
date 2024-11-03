// Funkcja do otwierania popupu
function openProject(projectId) {
    document.getElementById("projectPopup").style.display = "flex";
    // W przyszłości można dodać logikę ustawiania zawartości popupu na podstawie `projectId`
}

// Funkcja do zamykania popupu
function closeProject() {
    document.getElementById("projectPopup").style.display = "none";
}
// Get the audio element
const clickSound = document.getElementById('click-sound');

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        clickSound.currentTime = 0; // Rewind to the start
        clickSound.play();          // Play sound
    });
});
