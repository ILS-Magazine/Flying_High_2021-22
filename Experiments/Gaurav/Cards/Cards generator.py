import clipboard

bgImage = input('Background Image Link: ')
studentName = input('\nStudent / Author Name: ')
studentImage = input('\nStudent Image Link: ')
grade = input('\nGrade: ')
articleTitle = input('\nArticle Title: ')

cardCode = """
        <div class="articleCard"
            style="background-image: url('"""+bgImage+"""');" data-search='"""+studentName+" Grade "+grade+" "+articleTitle+"""'>
            <div class="articleCardContent">
                <div class="articleAuthorInformation">
                    <img src='"""+studentImage+"""'
                        alt='"""+studentName+"""' class="studentProfilePhoto">
                    <p class="studentInformationText"><b class="studentName">"""+studentName+"""</b><br>Grade """+grade+"""</p>
                </div>
                    <h2 class="articleTitle">"""+articleTitle+"""</h2>
                
            </div>
        </div>
"""

clipboard.copy(cardCode)
print('Article Code Copied!')
