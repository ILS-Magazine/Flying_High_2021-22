const searchInputField = document.querySelector('#searchBar')

document.querySelector('#seachInputClear').addEventListener("click", function () {
    searchInputField.value = "";
    clear();
});

searchInputField.addEventListener('focusout', function () {
    if (searchInputField.value == "") {
        clear();
    };
})

searchInputField.addEventListener('keypress', function () {
    search()
});


function search() {
    let input = searchInputField.value.toLowerCase();
    let searchItems = document.querySelector(".articlesList ul").children;
    for (i = 0; i < searchItems.length; i++) {
        if (!searchItems[i].innerHTML.toLowerCase().includes(input) && !searchItems[i].dataset.tags.includes(input)) {
            searchItems[i].style.display = "none";
        }
        else {
            searchItems[i].style.display = "list-item";
        }
    }
};

function clear() {
    console.log("Clearing Search Bar...");
    let searchItems = document.querySelector(".articlesList ul").children;
    for (i = 0; i < searchItems.length; i++) {
        searchItems[i].style.display = "list-item";
    }
}