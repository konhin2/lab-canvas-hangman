class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    if (keyCode === 81) {
      return true
    } else if (keyCode === 87) {
      return true
    } else if (keyCode === 69) {
      return true
    } else if (keyCode === 82) {
      return true
    } else if (keyCode === 84) {
      return true
    } else if (keyCode === 89) {
      return true
    } else if (keyCode === 85) {
      return true
    } else if (keyCode === 73) {
      return true
    } else if (keyCode === 79) {
      return true
    } else if (keyCode === 80) {
      return true
    } else if (keyCode === 65) {
      return true
    } else if (keyCode === 83) {
      return true
    } else if (keyCode === 68) {
      return true
    } else if (keyCode === 70) {
      return true
    } else if (keyCode === 71) {
      return true
    } else if (keyCode === 72) {
      return true
    } else if (keyCode === 74) {
      return true
    } else if (keyCode === 75) {
      return true
    } else if (keyCode === 76) {
      return true
    } else if (keyCode === 186) {
      return true
    } else if (keyCode === 90) {
      return true
    } else if (keyCode === 88) {
      return true
    } else if (keyCode === 67) {
      return true
    } else if (keyCode === 86) {
      return true
    } else if (keyCode === 66) {
      return true
    } else if (keyCode === 78) {
      return true
    } else if (keyCode === 77) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
    console.log(this.guessedLetters)
  }

  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft--
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) {
      return true
    } else {
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');


startGameButton.addEventListener('click', event => {
  hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa'])

  // HINT (uncomment when start working on the canvas portion of the lab)
  hangman.secretWord = hangman.pickWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)

  hangmanCanvas.createBoard()
})


document.addEventListener('keydown', event => {
  // React to user pressing a key
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key)
        hangmanCanvas.writeCorrectLetter(event.key)
      } else {
        hangman.addWrongLetter(event.key)
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    } else {
      return window.alert(`Ya has presionado la tecla "${event.key}"" antes, prueba con otra`)
    }
  } else {
    return window.alert(`No presionaste una letra de la A a la z
    Z tu presionaste "${event.key}", usa otra`)
  }
  // Agregando eventos si gano o perdio la paertidade
  if (hangman.checkGameOver()) {
    hangmanCanvas.context.clearRect(0, 0, innerWidth, innerHeight)
    hangmanCanvas.gameOver()
  }
  if (hangman.checkWinner()) {
    hangmanCanvas.context.clearRect(0, 0, innerWidth, innerHeight)
    hangmanCanvas.winner()
  }
})