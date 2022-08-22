import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useGame } from '../context/GameContext'

export default function Row({ rowID }: { rowID: number }) {
  const { currentRow, answer, checkGameState } = useGame()
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

  function handleKeyPress(e: KeyboardEvent) {
    if (!rowAnswer) {
      if (e.key === 'Backspace' && currentCell > 0) {
        setWord((prevValue) => {
          return prevValue.map((letter, index) => {
            return index === currentCell - 1 ? '' : letter
          })
        })
        return setCurrentCell((prevValue) => prevValue - 1)
      }
      if (e.key === 'Enter') {
        if (currentCell === 5) {
          setRowAnswer(true)
          return checkGameState(word)
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
      if (currentCell < 5 && /^[a-zA-Z]$/.test(e.key)) {
        setWord((prevValue) => {
          return prevValue.map((letter, index) => {
            return index === currentCell ? e.key : letter
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
            className={`w-[60px] h-[60px] border-2 border-white/20 uppercase flex items-center justify-center text-3xl font-bold ${
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
