import { HiMenu, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { BsBarChartSteps, BsGearFill } from 'react-icons/bs'

export default function Nav() {
  return (
    <header className='fixed top-0 left-0 w-full'>
      <nav className='p-2 sm:p-5 shadow-md border-b-2 border-white/20'>
        <ul className='flex items-center'>
          <li className='md:mr-auto'>
            <HiMenu className='w-6 h-6 md:w-7 md:h-7' />
          </li>
          <li className='ml-5 mr-auto md:absolute md:left-[50%] md:translate-x-[-70%]'>
            <span className='text-3xl md:text-4xl font-bold font-saira'>
              Wordle
            </span>
          </li>
          <ul className='flex gap-3 items-center'>
            <li className='cursor-pointer'>
              <HiOutlineQuestionMarkCircle className='w-6 h-6 md:w-7 md:h-7' />
            </li>
            <li className='cursor-pointer'>
              <BsBarChartSteps className='w-6 h-6 md:w-7 md:h-7' />
            </li>
            <li className='cursor-pointer'>
              <BsGearFill className='w-6 h-6 md:w-7 md:h-7' />
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  )
}
