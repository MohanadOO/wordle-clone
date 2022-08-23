import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useGame } from '../context/GameContext'

export default function Row({ rowID }: { rowID: number }) {
  const { wordList, currentRow, answer, checkGameState, letter, updateLetter } =
    useGame()
  const [currentCell, setCurrentCell] = useState(0)

  const [word, setWord] = useState(Array(5).fill(''))
  const [rowAnswer, setRowAnswer] = useState(false)

  useEffect(() => {
    if (currentRow === rowID) {
      document.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  useEffect(() => {
    if (currentRow === rowID) {
      handleKeyPress(letter)
    }
  }, [updateLetter])

  function handleKeyPress(e: KeyboardEvent | string) {
    let letter: undefined | string
    if (typeof e === 'string') {
      letter = e
    } else {
      letter = e.key
    }

    if (!rowAnswer) {
      if (letter === 'Backspace' && currentCell > 0) {
        setWord((prevValue) => {
          return prevValue.map((prevLetter, index) => {
            return index === currentCell - 1 ? '' : prevLetter
          })
        })
        return setCurrentCell((prevValue) => prevValue - 1)
      }
      if (letter === 'Enter') {
        if (
          currentCell === 5 &&
          wordList.includes(word.join('').toLowerCase())
        ) {
          setRowAnswer(true)
          return checkGameState(word)
        } else if (currentCell === 5) {
          toast.error(<b>This is not a Word</b>, {
            style: {
              borderRadius: '20px',
              backgroundColor: '#333',
              color: 'white',
            },
          })
        } else {
          toast.error(<b>No Enough Words</b>, {
            style: {
              borderRadius: '20px',
              backgroundColor: '#333',
              color: 'white',
            },
          })
        }
      }
      if (currentCell < 5 && /^[a-zA-Z]$/.test(letter)) {
        setWord((prevValue) => {
          return prevValue.map((prevLetter, index) => {
            return index === currentCell ? letter : prevLetter
          })
        })
        return setCurrentCell((prevValue) => prevValue + 1)
      }
    }
  }

  return (
    <div className='flex gap-1'>
      {word.map((letter, index) => {
        return (
          <div
            key={letter + index}
            className={`w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] border-2 border-white/20 uppercase flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold ${
              rowAnswer
                ? letter.toUpperCase() === answer[index].toUpperCase()
                  ? 'bg-green-500'
                  : answer.includes(letter.toUpperCase())
                  ? 'bg-orange-400'
                  : 'bg-white/20'
                : ''
            }`}
          >
            {letter}
          </div>
        )
      })}
    </div>
  )
}
