import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { words } from '../data/word_list.js'

const GameContext = createContext<any>(null)

export function useGame() {
  return useContext(GameContext)
}

export function GameProvider({ children }: any) {
  const [wordList, setWordList] = useState<string[]>(words)
  const [stopGame, setStopGame] = useState<boolean>(false)

  const [updateLetter, setUpdateLetter] = useState(false)
  const [letter, setLetter] = useState('')

  const [greenLetters, setGreenLetters] = useState<string[]>([])
  const [orangeLetters, setOrangeLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  const [answer, setAnswer] = useState<string>('Crane'.toUpperCase())
  const [currentRow, setCurrentRow] = useState<number>(0)

  useEffect(() => {
    const wordListLen = wordList.length
    setAnswer(wordList[Math.floor(Math.random() * wordListLen)].toUpperCase())
  }, [])

  function checkGameState(word: []) {
    if (answer === word.join('').toUpperCase()) {
      toast.success(<b>Good Job 👏</b>, {
        style: {
          borderRadius: '20px',
          backgroundColor: '#333',
          color: 'white',
        },
      })
      return setStopGame(true)
    } else if (currentRow !== 5) {
      handleLettersUsed(word)
      return setCurrentRow((prevRow) => prevRow + 1)
    } else {
      toast.error(
        <p>
          The Word is <span className='font-bold'>{answer}</span> 😢
        </p>,
        {
          style: {
            borderRadius: '20px',
            backgroundColor: '#333',
            color: 'white',
          },
        }
      )
    }
  }

  function handleLettersUsed(word: []) {
    const letters: string = word.join('').toUpperCase()

    letters.split('').forEach((letter, index) => {
      if (answer.includes(letter) && answer.indexOf(letter) === index) {
        setGreenLetters((prev) => [...prev, letter])
      } else if (answer.includes(letter)) {
        setOrangeLetters((prev) => [...prev, letter])
      } else {
        setWrongLetters((prev) => [...prev, letter])
      }
    })
  }

  function typing(letter: string) {
    setUpdateLetter((prev) => !prev)
    if (letter === 'DELETE') return setLetter('Backspace')
    else if (letter === 'ENTER') return setLetter('Enter')
    return setLetter(letter)
  }

  const value = {
    wordList,
    answer,
    setAnswer,
    currentRow,
    setCurrentRow,
    stopGame,
    setStopGame,
    checkGameState,
    typing,
    letter,
    updateLetter,
    greenLetters,
    orangeLetters,
    wrongLetters,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
