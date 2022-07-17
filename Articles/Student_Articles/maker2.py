import pandas as pd


df = pd.read_excel('Magazine (1).xlsx')
name = df["NAME"]
grade = df["CLASS"]
imglk = df["IMAGE LINK"]
topic = df["TOPIC"]
article = df["ARTICLE"]


x = len(name)

for i in range(0, x):
    articles[i].replace("(", "<p>")
    articles[i].replace(")", "</p>")