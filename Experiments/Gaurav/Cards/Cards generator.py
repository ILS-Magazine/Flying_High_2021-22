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

cardCode = """
        <div class="articleCard"
            style="background-image: url('"""+bgImage+"""');"
            data-search='"""+studentName+" Grade "+grade+" "+articleTitle+"""' data-title='"""++"""' onclick="
            goToArticle(this.dataset.title)">

            <div class=" articleCardContent">
                <div class="articleAuthorInformation">
                    <img src='https://edunext2-storage-cf.edunexttechnologies.com/1569527760550_D636.jpeg'
                        alt='Aditya Singh' class="studentProfilePhoto">
                    <p class="studentInformationText"><b class="studentName">Aditya Singh</b><br>Grade IXA</p>
                </div>
                <h2 class="articleTitle">Electric Cars</h2>
                <!-- <i class="material-icons" id="shareButton">share</i> -->
            </div>
        </div>
"""
