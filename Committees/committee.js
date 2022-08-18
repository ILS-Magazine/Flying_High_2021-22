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

cImages = [
    {
      "ShortForm": "SVG",
      "Image": "https://drive.google.com/uc?id=1MBkss8MbUus0NGNWj_veuOc9ymkhZl9B"
    },
    {
      "ShortForm": "HOLC",
      "Image": "https://drive.google.com/uc?id=10cY-jnofUgLKZCVklFaQ7nc8Pcqqr655"
    },
    {
      "ShortForm": "ECOC",
      "Image": ""
    },
    {
      "ShortForm": "SSC",
      "Image": "https://drive.google.com/uc?id=1kfv-LB3TNoZeX-di414DeZCm6M3Qkgsb"
    },
    {
      "ShortForm": "EC",
      "Image": "https://drive.google.com/uc?id=1IiLuyGBg5Yx2fb4qOcZQD52cD0uRimKC"
    },
    {
      "ShortForm": "GAC",
      "Image": "https://drive.google.com/uc?id=1XdEoPZsRy_cL8LmVkod4RsF9CmxATyRR"
    },
    {
      "ShortForm": "CDG",
      "Image": "https://drive.google.com/uc?id=1q2iwZKy78nR2VDG8TG1ZK06PgAlsexIe"
    },
    {
      "ShortForm": "SCC",
      "Image": "https://drive.google.com/uc?id=1FWvRm4pCfeh8js82GWcLD_ivcTV7XoSU"
    },
    {
      "ShortForm": "MC",
      "Image": "https://drive.google.com/uc?id=1RYV1n0UZv8FZbHgz5aK-t2ZZWK3DGcXi"
    },
    {
      "ShortForm": "AIC",
      "Image": "https://drive.google.com/uc?id=1SgL4fsaxLF5DDEtgPSDBTXM8PfN9JXTi"
    },
    {
      "ShortForm": "CCC",
      "Image": "https://drive.google.com/uc?id=1H-7BmrF9WPeIORvBNy1nvQZwvxF1xx_A"
    },
    {
      "ShortForm": "IC",
      "Image": ""
    },
    {
      "ShortForm": "SEWA",
      "Image": ""
    },
    {
      "ShortForm": "HAWC",
      "Image": "https://drive.google.com/uc?id=1-lsYC73rHiK9zJAznCrx25_De-X0OGSh"
    },
    {
      "ShortForm": "CC",
      "Image": ""
    },
    {
      "ShortForm": "MUN",
      "Image": "https://drive.google.com/uc?id=117-s1P2HrQLBFpFd2UmJHpuMGNtsqSWN"
    },
    {
      "ShortForm": "ELC",
      "Image": "https://drive.google.com/uc?id=1loPgopegq-THFhokacrQRpXPySmyDaVr"
    },
    {
      "ShortForm": "DEAR",
      "Image": "https://drive.google.com/uc?id=108FQLS3IyOOkqNw50A001Allihgf2mW-"
    },
    {
      "ShortForm": "DC",
      "Image": "https://drive.google.com/uc?id=1GBgXQiDpu4vgwdRf51fDrrXwwoCqvnpj"
    },
    {
      "ShortForm": "LSC",
      "Image": ""
    },
    {
      "ShortForm": "SC",
      "Image": "https://drive.google.com/uc?id=1HCXh1TjrrvfEneDnPwt0B3ihOeQLjZyu"
    },
    {
      "ShortForm": "PDC",
      "Image": "https://drive.google.com/uc?id=1lRh7OTXOYyR39-X4lDFWNyh4S2zyil6B"
    },
    {
      "ShortForm": "MHAWBC",
      "Image": "https://drive.google.com/uc?id=1YXzDVQPYQ5QR8KB5XsDd9mcl28QLN0cK"
    },
    {
      "ShortForm": "CAC",
      "Image": "https://drive.google.com/uc?id=1445FSSre62FMqLu7NZCZN-LcFS6weqXU"
    },
    {
      "ShortForm": "FAC",
      "Image": "https://drive.google.com/uc?id=1gzB8TBrJVLiMYt19j8iLqhVT7Eiolc-5"
    }
   ]

function getArticles() {
    cArticles.forEach(committee => {
        // Getting Details
        shortFormFromList = committee.ShortForm;
        if (shortFormFromList == shortForm){
            cArticle = committee.Article;
            document.querySelector(".cArticle > p.cArticleContent").innerHTML = cArticle;
        }
    })
    cImages.forEach(committee => {
        shortFormFromList = committee.ShortForm;
        if (shortFormFromList == shortForm){
            cImage = committee.Image;
            console.log(cImage)
            document.querySelector(".cArticle > img.cImage").src = cImage;
        }
    })
}

getArticles()