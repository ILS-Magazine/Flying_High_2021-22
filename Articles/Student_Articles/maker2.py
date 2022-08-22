import pandas as pd
import pyperclip


df = pd.read_excel('Final Articles.xlsx')
name = df["NAME"]
grade = df["CLASS"]
# imglk = df["IMAGE LINK"]
topic = df["TOPIC"]
article = df["ARTICLE"]

articleDivComplete = ""

x = len(name)

for i in range(0, x):
    a = article[i].replace("(", "")
    b = a.replace(")", "<br><br>")
    c = b.replace("_x000D_", "")

    articlediv="""
        <div class="article">
        <h2 class="articleTitle">"""+str(topic[i])+"""</h2>
        <p class="articleAuthor">- By """+name[i]+""" ("""+str(grade[i])+""")</p>
        <p class='articleContent'>"""+c+"""</p>
        <hr>
    </div>
    """

    articleDivComplete += articlediv

    # articlediv="""
    # <div class="article">
    #     <h1>"""+topic[i]+"""</h1>
    #     <div class="student">
    #         <img src='"""+str(imglk[i])+"""' alt='"""+name[i]+"""'>
    #         <h3>"""+name[i]+""", """+grade[i]+"""</h3>
    #     </div>
    #     """+article[i]+"""
    # </div>"""

pyperclip.copy(articleDivComplete)
print("Done")
