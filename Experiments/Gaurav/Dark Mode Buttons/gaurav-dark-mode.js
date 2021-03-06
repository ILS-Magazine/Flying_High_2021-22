var darkModeNumber = localStorage.getItem("darkModeNumber");
var darkModeButton = document.querySelector(".darkModeButton");

if (darkModeNumber == 1) {
    darkMode();
}

//Check if Dark mode is already enabled

function checkDarkMode() {
    if (localStorage.getItem("darkModeNumber") == 1) {
        localStorage.setItem("darkModeNumber", 0);
        lightMode();
    } else {
        localStorage.setItem("darkModeNumber", 1);
        darkMode();
    }
}

function darkMode() {
    var root = document.querySelector(':root');
    root.style.setProperty('--light', '#020f17');
    root.style.setProperty('--dark', '#f8efe6');
    darkModeButton.style.backgroundImage = "url(sun.svg)";
}

function lightMode() {
    var root = document.querySelector(':root');
    root.style.setProperty('--dark', '#020f17');
    root.style.setProperty('--light', '#f8efe6');
    darkModeButton.style.backgroundImage = "url(moon.svg)";
}