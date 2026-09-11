import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

try {
  const argv = process.argv.splice(2)
  const currentWord = await fetchRandomWord(argv[0])
  const currentWordSplit = currentWord.split('')

  let maxTries = argv[1]
  let tries = 0
  
  playGame()
} catch (err) {
  console.error(err)
  process.exit(err.errorCode || 1)
}

async function fetchRandomWord (length) {
  const response = await fetch(`https://random-word-api.herokuapp.com/word?length=${length}`)
  const data = await response.json()

  return data[0]
}

function checkWord (input) {
  const inputSplit = input.split('')

  let checkWord = ''
  for (let i = 0; i < currentWordSplit.length; i++) {

    let checkLetter
    if (inputSplit[i] === currentWordSplit[i]) {
      checkLetter = 'X'
    } else if (currentWordSplit.includes(inputSplit[i])) {
      checkLetter = '0'
    } else {
      checkLetter = '_'
    }

    checkWord += checkLetter
  }

  return checkWord
}

async function playGame() {
  rl.question('Enter a word: ', async (input) => {

    if (input.length !== currentWord.length) {
      console.log("Not correct letter length")
      playGame()
    }

    let result = checkWord(input)

    console.log(result)
    tries++

    if (currentWord === input) {
      console.log('Correct Answer!')
      rl.close()
    } else if (tries === 6) {
      console.log('You lost!')
      rl.close()
    } else {
      playGame()
    }
  })
}


