import { Toaster } from 'react-hot-toast'
import GameGrid from './components/GameGrid'
import KeyboardKeys from './components/KeyboardKeys'
import Nav from './components/Nav'
import { GameProvider } from './context/GameContext'

export default function App() {
  return (
    <div className='min-h-screen w-screen bg-[#121213] text-white flex flex-col justify-center items-center'>
      <Nav />
      <Toaster />
      <GameProvider>
        <GameGrid />
        <KeyboardKeys />
      </GameProvider>
    </div>
  )
}
