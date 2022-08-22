// import Head from "next/head";
import Link from "next/link";
import Head from "next/head";
import { QuizMC } from "../../components/QuizMC";


const index = () => {


  return (
    <>
      <Head>
        <title>SAT - QUIZ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="w-screen h-screen flex flex-col bg-red-900">

        <div className="mx-auto mt-20 max-w-[740px]">
            <h1 className="mx-auto text-6xl w-fit underline">Multiple Choice Quiz</h1>
            <p className="w-fit mx-auto my-16 text-xl">A definition will be given with four possible corresponding words. Only one word corresponds with the definition displayed. Good Luck</p>
        </div>



      <QuizMC />



        <Link className="hover:cursor-pointer" href='/'>
          <a className=" text-[#093426] py-3 px-12 rounded-full w-fit mx-auto mt-10 border-2 border-[#093426] transition-all hover:px-24">
            Go Home
          </a>
        </Link>
      </div>
       
    </>
)
}
export default index;