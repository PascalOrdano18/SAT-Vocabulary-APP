
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { WordList } from '../components/WordList'


export default function Home() {


  return (
    <div className='bg-[#448D76] w-screen h-full min-h-screen overflow-x-hidden'>
      

      <nav className='flex text-xl h-20 px-2 sm:px-4 py-2.5 w-full bg-[#093426] shadow-lg'>
      <div className="container mx-10 text-[#448D76] flex flex-wrap justify-between items-center">
          <Link href='./'><a>SAT</a></Link>
            <ul className='flex space-x-5'>
              <li> <Link href='/quiz'><a className='hover:underline hover:text-[#E7F3EF] transition-all'> QUIZ</a></Link></li>
              <li> <Link href='/input'><a className='hover:underline hover:text-[#E7F3EF] transition-all'>INPUT</a></Link></li>
            </ul>
        </div>
        
      </nav>

      <h1 className='text-[#23483C] text-5xl mt-20 text-center underline'>Learn Some Words!</h1>
      <p className='my-10 w-[60%] mx-auto text-xl text-[#1a3a30]'>This is a simple app to learn SAT vocabulary from a McGraw Hill database. We will try to expand it as much as possible with the objective of making vocabulary-learning easy. The app is still in development, we preciate any suggestion / bug report. </p>
      <p className='bg-green-200 w-fit rounded'>unit 5 only :)</p>
      
      <hr />

      <WordList />

    </div>
  )
}
