function getData() {
    jsonList.forEach(member => {
        console.log(member.Name+", "+member.Grade+member.Section)
    });
}

getData()