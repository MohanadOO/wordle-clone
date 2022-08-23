import { HiBackspace } from 'react-icons/hi'
import { useGame } from '../context/GameContext'

export default function KeyboardKeys() {
  const KeyboardKeysRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const KeyboardKeysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const KeyboardKeysRow3 = [
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    'DELETE',
  ]

  const { typing, greenLetters, orangeLetters, wrongLetters } = useGame()

  return (
    <>
      <ul className='flex gap-1 select-none mt-24'>
        {KeyboardKeysRow1.map((key) => {
          return (
            <li
              key={key}
              onClick={() => typing(key)}
              className={`w-[30px] h-[40px] md:w-[40px] md:h-[50px] rounded-sm flex items-center justify-center uppercase cursor-pointer text-xs md:text-base ${
                greenLetters.includes(key)
                  ? 'bg-green-500'
                  : orangeLetters.includes(key)
                  ? 'bg-orange-500'
                  : wrongLetters.includes(key)
                  ? 'bg-gray-800'
                  : 'bg-gray-500'
              }`}
            >
              <button>{key}</button>
            </li>
          )
        })}
      </ul>
      <ul className='flex gap-1 select-none mt-3'>
        {KeyboardKeysRow2.map((key) => {
          return (
            <li
              key={key}
              onClick={() => typing(key)}
              className={` w-[30px] h-[40px] md:w-[40px] md:h-[50px] rounded-sm flex items-center justify-center uppercase cursor-pointer text-xs md:text-base ${
                greenLetters.includes(key)
                  ? 'bg-green-500'
                  : orangeLetters.includes(key)
                  ? 'bg-orange-500'
                  : wrongLetters.includes(key)
                  ? 'bg-gray-800'
                  : 'bg-gray-500'
              }`}
            >
              <button>{key}</button>
            </li>
          )
        })}
      </ul>
      <ul className='flex gap-1 select-none mt-3 mb-5'>
        {KeyboardKeysRow3.map((key) => {
          return (
            <li
              key={key}
              onClick={() => typing(key)}
              className={` w-[30px] h-[40px] md:w-[40px] md:h-[50px] rounded-sm flex items-center justify-center uppercase cursor-pointer text-xs md:text-base ${
                greenLetters.includes(key)
                  ? 'bg-green-500'
                  : orangeLetters.includes(key)
                  ? 'bg-orange-500'
                  : wrongLetters.includes(key)
                  ? 'bg-gray-800'
                  : 'bg-gray-500'
              } ${
                key === 'ENTER' || key === 'DELETE'
                  ? 'w-[50px] md:w-[85px]'
                  : ''
              }`}
            >
              <button>
                {key === 'DELETE' ? (
                  <HiBackspace className='w-5 h-5 md:w-7 md:h-7' />
                ) : (
                  key
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
