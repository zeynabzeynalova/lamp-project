function toggleLamp() {
    document.getElementById("lamp").src = "./images/pic_bulbon.gif";
}
function turnOff(){
    document.getElementById("lamp").src="./images/pic_bulboff.gif";
}
// Gecə və gündüz rejimini dəyişən funksiya
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
let currentBrightness = 100; // Başlanğıc parlaqlıq

// Parlaqlığı artırıb-azaltmaq üçün funksiya
function adjustBrightness(action) {
    // Parlaqlıq dəyişənini tənzimləyirik
    if (action === 'increase' && currentBrightness < 100) {
        currentBrightness += 10; // Parlaqlığı 10% artırırıq
    } else if (action === 'decrease' && currentBrightness > 0) {
        currentBrightness -= 10; // Parlaqlığı 10% azaldırıq
    }

    // Lampa üzərində parlaqlıq dəyişikliklərini tətbiq edirik
    lamp.style.filter = `brightness(${currentBrightness}%)`;
}
