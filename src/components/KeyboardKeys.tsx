import { useEffect } from 'react'

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

  function handleKeyPress(key: string) {
    console.log(key)
  }

  return (
    <>
      <ul className='flex gap-1 mt-24 md:mt-auto'>
        {KeyboardKeysRow1.map((key) => {
          return (
            <li
              key={key}
              onClick={() => handleKeyPress(key)}
              className='bg-gray-600 w-[30px] h-[40px] md:w-[40px] md:h-[50px] rounded-sm flex items-center justify-center uppercase cursor-pointer text-xs md:text-base'
            >
              <button>{key}</button>
            </li>
          )
        })}
      </ul>
      <ul className='flex gap-1 mt-3'>
        {KeyboardKeysRow2.map((key) => {
          return (
            <li
              key={key}
              onClick={() => handleKeyPress(key)}
              className='bg-gray-600 w-[30px] h-[40px] md:w-[40px] md:h-[50px] rounded-sm flex items-center justify-center uppercase cursor-pointer text-xs md:text-base'
            >
              <button>{key}</button>
            </li>
          )
        })}
      </ul>
      <ul className='flex gap-1 mt-3 mb-5'>
        {KeyboardKeysRow3.map((key) => {
          return (
            <li
              key={key}
              onClick={() => handleKeyPress(key)}
              className={`bg-gray-600 w-[30px] h-[40px] md:w-[40px] md:h-[50px] rounded-sm flex items-center justify-center uppercase cursor-pointer text-xs md:text-base ${
                key === 'ENTER' || key === 'DELETE'
                  ? 'w-[50px] md:w-[65px]'
                  : ''
              }`}
            >
              <button>{key}</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
