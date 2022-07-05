var cMemberListOl = document.querySelector(".cMemberListOl");

function getData() {
    jsonList.forEach(member => {
        cMember = member.Name+", "+member.Grade+member.Section;
        cMemberListOl.innerHTML+="<li>"+cMember+"</li>";
    });
}

getData()
