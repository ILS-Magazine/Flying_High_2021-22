const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 20) + "px;" + "left:" + (e.pageX - 20) + "px;"
  );
});

var darkModeNumber = localStorage.getItem("darkModeNumber");

if (darkModeNumber == 1) {
    darkMode();
}

function darkMode() {
    console.log("FUCK")
    downButton = document.querySelector('.scrollDown');
    downButton.setAttribute.src = '../../../Images/Down Arrow Dark Mode.svg';
}