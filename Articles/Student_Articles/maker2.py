import pandas as pd


df = pd.read_excel('Magazine (1).xlsx','grade 9')
name = df["NAME"]
grade = df["CLASS"]
imglk = df["IMAGE LINK"]
topic = df["TOPIC"]
article = df["ARTICLE"]


x = len(name)

for i in range(0, x):
    article[i].replace("(", "<p>")
    article[i].replace(")", "</p>")

    articlediv="""
    <div class="article">
        <h1>"""+topic[i]+"""</h1>
        <div class="student">
            <img src='"""+str(imglk[i])+"""' alt='"""+name[i]+"""'>
            <h3>"""+name[i]+""", """+grade[i]+"""</h3>
        </div>
        """+article[i]+"""
    </div>"""

    print(articlediv)
