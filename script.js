// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript jest poprawnie podłączony i gotowy do użycia.");

    // Funkcja przykładowa, dodająca alert po kliknięciu nagłówka
    const header = document.querySelector("header h1");
    header.addEventListener("click", function() {
        alert("Witaj na mojej stronie portfolio!");
    });
});
