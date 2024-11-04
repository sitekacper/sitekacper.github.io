// Function to open the popup with project details
function openProject(projectId) {
    const popup = document.getElementById("projectPopup");
    popup.style.display = "flex";

    // Set content dynamically based on projectId
    if (projectId === "project1") {
        document.getElementById("projectTitle").innerText = "Networking Course";
        document.getElementById("projectYear").innerText = "Year: 2023";
        document.getElementById("projectRole").innerText = "My role: UX/UI Designer";
        document.getElementById("projectLink").innerHTML = '<a href="https://example.com/networking" target="_blank">See live</a>';
    } else if (projectId === "project2") {
        document.getElementById("projectTitle").innerText = "Loom Roast";
        document.getElementById("projectYear").innerText = "Year: 2023";
        document.getElementById("projectRole").innerText = "My role: Researcher";
        document.getElementById("projectLink").innerHTML = '<a href="https://example.com/loom" target="_blank">See live</a>';
    } else if (projectId === "project3") {
        document.getElementById("projectTitle").innerText = "AI-Native Software";
        document.getElementById("projectYear").innerText = "Year: 2024";
        document.getElementById("projectRole").innerText = "My role: Developer";
        document.getElementById("projectLink").innerHTML = '<a href="https://example.com/ai-native" target="_blank">See live</a>';
    }
}

// Function to close the popup
function closeProject() {
    document.getElementById("projectPopup").style.display = "none";
}

// Function to close popup when clicking outside of it
function closeProjectOutside(event) {
    const popupContent = document.querySelector(".popup-content");
    if (!popupContent.contains(event.target)) {
        closeProject();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the audio element
    const clickSound = document.getElementById('click-sound');

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            clickSound.currentTime = 0;
            clickSound.play().catch(error => {
                console.log("Playback prevented:", error);
            });
        });
    });
});
//animacja obrazka
document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.querySelector('.draw-svg');

    svgElement.addEventListener('click', function() {
        svgElement.style.animation = 'none';
        setTimeout(() => {
            svgElement.style.animation = '';
        }, 10);
    });
});
