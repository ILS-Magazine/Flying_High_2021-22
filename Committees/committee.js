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

if (studentHead2 == "") {
    studentHeadTitle = "Student Head:"
    studentHeadJoiner = ""
} else {
    studentHeadTitle = "Student Heads:"
    studentHeadJoiner = "and "
}

teacherHeadText = "<b>Teacher Head:</b> " + teacherHead;
studentHeadText = "<b>" + studentHeadTitle + "</b> " + studentHead1 + " " + studentHeadJoiner + studentHead2;

document.querySelector(".cLogo").setAttribute("src", "./Committee Logos/" + shortForm + ".svg");
document.querySelector(".cName").innerHTML = fullForm;
document.querySelector(".teacherHeadText").innerHTML = teacherHeadText;
document.querySelector(".studentHeadText").innerHTML = studentHeadText

// Getting Committee Articles

cArticles = [
    {
        'ShortForm': 'SVG',
        'Article': ' '
    },
    {
        'ShortForm': 'HOLC',
        'Article': ' '
    },
    {
        'ShortForm': 'ECOC',
        'Article': ' '
    },
    {
        'ShortForm': 'SSC',
        'Article': ' '
    },
    {
        'ShortForm': 'EC',
        'Article': ' '
    },
    {
        'ShortForm': 'GAC',
        'Article': ' '
    },
    {
        'ShortForm': 'CDG',
        'Article': ' '
    },
    {
        'ShortForm': 'SCC',
        'Article': ' '
    },
    {
        'ShortForm': 'MC',
        'Article': ' '
    },
    {
        'ShortForm': 'AIC',
        'Article': '<iframe width="560" height="315" src="https://www.youtube.com/embed/XL84SnK2yR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        'ShortForm': 'CCC',
        'Article': ' '
    },
    {
        'ShortForm': 'IC',
        'Article': ' '
    },
    {
        'ShortForm': 'SEWA',
        'Article': ' '
    },
    {
        'ShortForm': 'HAWC',
        'Article': ' '
    },
    {
        'ShortForm': 'CC',
        'Article': ' '
    },
    {
        'ShortForm': 'MUN',
        'Article': ' '
    },
    {
        'ShortForm': 'ELC',
        'Article': ' '
    },
    {
        'ShortForm': 'DEAR',
        'Article': ' '
    },
    {
        'ShortForm': 'DC',
        'Article': ' '
    },
    {
        'ShortForm': 'LSC',
        'Article': ' '
    },
    {
        'ShortForm': 'SC',
        'Article': ' '
    },
    {
        'ShortForm': 'PDC',
        'Article': ' '
    },
    {
        'ShortForm': 'MHAWBC',
        'Article': ' '
    },
    {
        'ShortForm': 'CAC',
        'Article': ' '
    },
    {
        'ShortForm': 'FAC',
        'Article': ' '
    }

]

function getArticles() {
    cArticles.forEach(committee => {
        // Getting Details
        shortFormFromList = committee.ShortForm;
        if (shortFormFromList == shortForm){
            cArticle = committee.Article;
            document.querySelector(".cArticle > p").innerHTML = cArticle;
        }
    })
}

getArticles()