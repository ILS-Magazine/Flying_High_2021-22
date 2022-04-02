console.log(sampleData[0]["Item"]);
// createHTML();

function createHTML(){
    var sampleDataTable = "";
    for (let i = 0; i < sampleData.length; i++) {
        var OrderDate = sampleData[i]["OrderDate"];
        var Region = sampleData[i]["Region"];
        var Rep = sampleData[i]["Rep"];
        var Item = sampleData[i]["Item"];
        var Units = sampleData[i]["Units"];
        var UnitCost = sampleData[i]["UnitCost"];
        var Total = sampleData[i]["Total"];  
        sampleDataTable += "<p>"+OrderDate+", "+Region+", "+Rep+", "+Item+", "+Units+", "+UnitCost+", "+Total+"</p><hr>"
    }
    document.getElementById('studentWriteUpWrapper').innerHTML = sampleDataTable;
}