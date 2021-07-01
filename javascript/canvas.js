class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800)
    this.drawLines()
  }

  drawLines() {
    let ctx = this.context
    let spaces = 0
    ctx.lineWidth = 5
    for (let i = 0; i < this.secretWord.length; i++) {
      ctx.beginPath()
      ctx.moveTo(400 + spaces, 600)
      ctx.lineTo(400 + spaces + 50, 600)
      ctx.strokeStyle = '#4268DB'
      ctx.stroke()
      spaces += 80
    }
    ctx.closePath()
  }

  writeCorrectLetter(index) {
    let ctx = this.context
    for (let i = 0; i < this.secretWord.length; i++) {
      if (index === this.secretWord[i]) {
        ctx.fillStyle = '#13D754'
        ctx.font = '30px Arial'
        ctx.fillText(index.toUpperCase(), 415 + i * 80, 595)
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    for (let i = 0; i < letter.length; i++) {
      this.context.fillStyle = "red";
      this.context.font = '30px Arial'
      this.context.fillText(`${letter[i].toUpperCase()}`, 1000, 50 + i * 55)
    }
  }

  drawHangman(errorsLeft) {
    let ctx = this.context
    ctx.strokeStyle = '#4268DB'
    if (errorsLeft === 9) {
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(100, 600)
      ctx.lineTo(50, 700)
      ctx.lineTo(150, 700)
      ctx.lineTo(100, 600)

    } else if (errorsLeft === 8) {
      ctx.lineTo(100, 10)
    } else if (errorsLeft === 7) {
      ctx.lineTo(300, 10)
    } else if (errorsLeft === 6) {
      ctx.lineTo(300, 100)
    } else if (errorsLeft === 5) {
      ctx.arc(300, 150, 50, -1.4, Math.PI * 2)
      ctx.stroke()
      ctx.stopPath()
    } else if (errorsLeft === 4) {
      ctx.beginPath()
      ctx.moveTo(300, 200)
      ctx.lineTo(300, 450)
      ctx.stroke()
      ctx.closePath()
    } else if (errorsLeft === 3) {
      ctx.beginPath()
      ctx.moveTo(300, 450)
      ctx.lineTo(250, 500)
      ctx.stroke()
      ctx.closePath()
    } else if (errorsLeft === 2) {
      ctx.beginPath()
      ctx.moveTo(300, 450)
      ctx.lineTo(350, 500)
      ctx.stroke()
      ctx.closePath()
    } else if (errorsLeft === 1) {
      ctx.beginPath()
      ctx.moveTo(300, 250)
      ctx.lineTo(350, 300)
      ctx.stroke()
      ctx.closePath()
    } else {
      ctx.beginPath()
      ctx.moveTo(300, 250)
      ctx.lineTo(250, 300)
      ctx.stroke()
      ctx.closePath()
    }

    ctx.stroke()
  }

  gameOver() {
    const imgLoser = new Image()
    imgLoser.src = '../images/gameover.png'
    imgLoser.onload = () => {
      this.context.drawImage(imgLoser, 0, 0, 1200, 800)
    }
  }

  winner() {
    const imgWinner = new Image()
    imgWinner.src = '../images/awesome.png'
    imgWinner.onload = () => {
      this.context.drawImage(imgWinner, 0, 0, 1200, 800)
    }
  }
}