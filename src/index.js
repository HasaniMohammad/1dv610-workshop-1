import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const wordLibrary = ['home', 'lamb', 'ears', 'cars']


const currentWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)]
const currentWordSplit = currentWord.split('')
console.log(currentWordSplit[0])



rl.question('Enter a word:', async (input) => {

  const inputSplit = input.split('')

  let checkWord = ''
  for (let i = 0; i < currentWordSplit.length; i++) {

    let checkLetter
    if (currentWordSplit.includes(inputSplit[i])) {
      checkLetter = '0'
    }
    
    if
      (inputSplit[i] === currentWordSplit[i]) {
      checkLetter = 'x'
    } else {
      checkLetter = '_'
    }
    checkWord += checkLetter
  }

  console.log(checkWord)
})

