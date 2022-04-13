import pandas as pd

df = pd.read_excel('Grade 3 &4 articles.xlsx')
name = df["NAME"]
grade = df["CLASS"]
topic = df["TOPIC"]
article = df["ARTICLE"]

x = len(name)

for i in range(0, x):
    member1 = article[i].replace("(", "<p>")
    studentArticle = member1.replace(")", "</p><br>")
    print(studentArticle)
