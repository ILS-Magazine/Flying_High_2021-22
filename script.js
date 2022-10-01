// Cursor Effects

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 20) + "px;" + "left:" + (e.pageX - 20) + "px;"
  );
});

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
    root.style.setProperty('--light', '#020F17');
    root.style.setProperty('--dark', '#fffcf9');
    darkModeButton.style.backgroundImage = "url(sun.svg)";
}

function lightMode() {
    var root = document.querySelector(':root');
    root.style.setProperty('--dark', '#020F17');
    root.style.setProperty('--light', '#fffcf9');
    darkModeButton.style.backgroundImage = "url(moon.svg)";
}