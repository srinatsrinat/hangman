var mainContainer = document.createElement('div')
mainContainer.classList.add('container','mainContainer')
document.body.append(mainContainer)


var mainMes = document.createElement('div')
mainMes.innerHTML = "<b>Click to start Hangman game<b>"
mainContainer.append(mainMes)
mainMes.classList.add('mainMes')

var buttonRow = document.createElement('div')
buttonRow.classList.add('buttonRow')
mainContainer.append(buttonRow)

var mainButton = document.createElement('button')
buttonRow.append(mainButton)
mainButton.innerHTML ="Start"
mainButton.classList.add('mainButton')


var next = document.createElement('a')
next.href = "gamepage.html"
next.append(mainButton)
buttonRow.append(next)



