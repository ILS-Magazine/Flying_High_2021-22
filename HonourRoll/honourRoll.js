let progressBars = document.querySelectorAll(".progress-bar-wrapper");

progressBars.forEach(progressBar => {
    percent = progressBar.dataset.progress.toString();
    progressBar.children[0].children[1].innerHTML = percent;
    console.log("translateX("+percent+");")
    progressBar.children[1].children[0].style.transform = "translateX("+percent+")";
});