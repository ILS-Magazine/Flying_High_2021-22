shortForm = localStorage.getItem("shortForm");
fullForm = localStorage.getItem("fullForm");
console.log(fullForm);

console.log(document.getElementsByTagName("body")[0])

// Adding the committee JS
var script = document.createElement("SCRIPT");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "./Committee Member Lists/" + shortForm + ".js");
document.getElementsByTagName("head")[0].appendChild(script);

// Adding the committee list.
document.querySelector('head').innerHTML += `
    <title>${fullForm}</title>`;

// Creating committee2.js to do the work
var script2 = document.createElement("SCRIPT");
script2.setAttribute("type", "text/javascript");
script2.setAttribute("src", "committee2.js");
document.getElementsByTagName("body")[0].appendChild(script2);