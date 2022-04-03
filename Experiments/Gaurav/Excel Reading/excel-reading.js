console.log(sampleData[1]["NAME"]);
createHTML();

function createHTML() {
    var sampleDataTable = "";
    for (let i = 0; i < sampleData.length; i++) {
        var ucid = sampleData[i]["UCID"];
        var name = sampleData[i]["NAME"];
        var grade = sampleData[i]["CLASS AND SECTION"];
        var quote = sampleData[i]["Quote"];
        var famousPersonaility = sampleData[i]["Famous Personality"];
        // var accentNumber = 2;
        var accentNumber = Math.floor(Math.random() * 5) + 1;
        quote = quote.replace(/\n/g, '<br><br>');
        quote = quote.replace(/\"/g, '"');
        console.log(quote);
        sampleDataTable += `
        <div class="studentWriteUp" id="`+ucid+`">
            <div class="studentProfile" style="background-color: var(--accent`+accentNumber+`)">
                <p><b>`+name+`</b><br>Grade `+grade+`</p>
            </div>
            <p class="writeUp">
                `+quote+`
            </p>
        </div>
        `;
    }
    document.getElementById('studentWriteUpWrapper').innerHTML = sampleDataTable;
}