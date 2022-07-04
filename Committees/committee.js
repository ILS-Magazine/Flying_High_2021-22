committee = localStorage.getItem("committee");
committeeFName = localStorage.getItem("committeeFName");
console.log(committeeFName);

// Adding the committee list.
document.querySelector('head').innerHTML +=`
    <script src="./Committee Member Lists/${committee}.js"></script>
    <title>${committeeFName}</title>
    `
Committee = Committees
ShortForm = Committees
TeacherHead = Committees
StudentHead1 = Committees
StudentHead2 = Committees