const searchInputField = document.querySelector('#searchBar')

document.querySelector('#seachInputClear').addEventListener("click", () => {
    console.log("Clearing Search Bar...");
    searchInputField.value = "";
    let searchItems = document.querySelector(".articlesList ul").children;
    for (i = 0; i < searchItems.length; i++){
        searchItems[i].style.display="list-item"; 
    }
});

searchInputField.addEventListener('keypress', function () {
    search()
});


function search() {
    let input = searchInputField.value.toLowerCase();
    let searchItems = document.querySelector(".articlesList ul").children;
    for (i = 0; i < searchItems.length; i++){
        if(!searchItems[i].innerHTML.toLowerCase().includes(input) && !searchItems[i].dataset.tags.includes(input)){
            searchItems[i].style.display="none";
        }
        else {
            searchItems[i].style.display="list-item";                 
        }
    }
};