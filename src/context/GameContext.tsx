import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const GameContext = createContext<any>(null)

export function useGame() {
  return useContext(GameContext)
}

export function GameProvider({ children }: any) {
  const [stopGame, setStopGame] = useState(false)
  const [answer, setAnswer] = useState('Crane'.toUpperCase())
  const [currentRow, setCurrentRow] = useState(0)

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

  const value = {
    answer,
    setAnswer,
    currentRow,
    setCurrentRow,
    stopGame,
    setStopGame,
    checkGameState,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
