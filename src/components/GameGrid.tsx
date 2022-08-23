import Row from './Row'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useGame } from '../context/GameContext'

export default function GameGrid() {
  const { width, height } = useWindowSize()
  const { stopGame } = useGame()

  return (
    <section id='game-grid' className='flex flex-col gap-1 mt-24'>
      {stopGame && <Confetti width={width} height={height} />}

      <Row rowID={0} />
      <Row rowID={1} />
      <Row rowID={2} />
      <Row rowID={3} />
      <Row rowID={4} />
      <Row rowID={5} />
    </section>
  )
}
