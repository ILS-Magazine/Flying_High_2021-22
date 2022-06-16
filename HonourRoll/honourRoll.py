name = input("Name: ").title()
titles = []
percents = []
yesTitle = "y"
while yesTitle != "n":
    titles.append(input("Title: "))
    percents.append(input("Percent: "))
    yesTitle = input('Continue? (y/n) ')

print("""
        <div class="card">
            <img src='"""+name.upper()+""".jpg' alt='"""+name+"""' class="card-image">
            <span class="card-content">
                <h2 class="card-title">"""+name+"""</h2>
                <div class="card-content-inner">
""")
    
for i, j in zip(titles, percents):
    print('''
                    <div class="progress-bar-wrapper" data-progress="'''+str(j)+'''%">
                        <div class="progress-bar-text">
                            <p class="progress-bar-label">'''+i+'''</p>
                            <p class="progress-bar-percentage">%</p>
                        </div>
                        <div class="progress-bar">
                            <div class="progress" style="transform: translateX(50%);"></div>
                        </div>
                    </div>
    ''')

print('''

                </div>
            </span>
        </div>
''')
