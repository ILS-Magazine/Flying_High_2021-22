shortForm = localStorage.getItem("shortForm");
fullForm = localStorage.getItem("fullForm");
teacherHead = localStorage.getItem("teacherHead")
studentHead1 = localStorage.getItem("studentHead1")
studentHead2 = localStorage.getItem("studentHead2")

// Adding the committee JS
var script = document.createElement("SCRIPT");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "./Committee Member Lists/" + shortForm + ".js");
document.getElementsByTagName("head")[0].appendChild(script);

// Adding the committee list.
document.querySelector('head').innerHTML += `
    <title>${fullForm}</title>
    <link rel="shortcut icon" href="./Committee Logos/${shortForm}.svg" type="image/x-icon">
    `;

// Creating committee2.js to do the work
var script2 = document.createElement("SCRIPT");
script2.setAttribute("type", "text/javascript");
script2.setAttribute("src", "committee2.js");
document.getElementsByTagName("body")[0].appendChild(script2);

if (studentHead2 ==""){
    studentHeadTitle = "Student Head:"
    studentHeadJoiner = ""
}else{
    studentHeadTitle = "Student Heads:"
    studentHeadJoiner = "and "
}

console.log("Teacher Head: "+teacherHead)
console.log(studentHeadTitle+" "+studentHead1+studentHeadJoiner+studentHead2)