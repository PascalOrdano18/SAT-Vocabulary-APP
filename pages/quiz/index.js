import Link from "next/link";
import Head from "next/head";
import { QuizMC } from "../../components/QuizMC";


const index = () => {


  return (
    <>
      <Head>
        <title>SAT - QUIZ</title>
      </Head>

      <div className="w-screen h-full min-h-screen flex flex-col bg-[#448D76]">

        <div className="mx-10 sm:mx-auto mt-6 sm:mt-20 max-w-[740px] text-[#093426]">
            <h1 className="mx-auto text-3xl lg:text-6xl w-fit underline">Multiple Choice Quiz</h1>
            <p className="w-fit max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-none lg:mx-auto mt-10 sm:mt-16 sm:mb-12 text-xl sm:text-2xl">A definition will be given with four possible corresponding words. Only one word is the correct answer. Good Luck</p>
        </div>

      <QuizMC />

        <Link className="hover:cursor-pointer" href='/'>
          <a className=" text-[#093426] mb-10 py-3 px-12 rounded-full w-fit mx-auto mt-10 border-2 border-[#093426] transition-all hover:px-24">
            Go Home
          </a>
        </Link>
      </div>
       
    </>
)
}
export default index;