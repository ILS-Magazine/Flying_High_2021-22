// Down arrow should disappear after 5 seconds

window.onload = function() {
    setTimeout(myFunc, 5000);
  }

function myFunc(){
    document.querySelector(".downArrow").style.display = "none";
}

// document.querySelector(".magazineCoverImage").addEventListener("click", () => {
//     document.querySelector(".magazineCoverImage").classList.toggle("zoomIn")
// })