import Link from "next/link"
import Head from "next/head"
import { InputQuiz } from "../../components/InputQuiz"


export default function Input (){
    return (
        <>

            <Head>
                <title>SAT - INPUT</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
             <div className="w-screen h-full min-h-screen flex flex-col bg-[#448D76]">

                <div className="mx-10 sm:mx-auto mt-6 sm:mt-20 max-w-[740px] text-[#093426]">
                    <h1 className="mx-auto text-3xl lg:text-6xl w-fit underline">Input Quiz</h1>
                    <p className="w-fit max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-none lg:mx-auto mt-10 sm:mt-16 sm:mb-12 text-xl sm:text-2xl">A definition will be given without any other information. The objective is to input the word that corresponds to the definition displayed. There are no help words in this section. Good Luck.</p>
                </div>


            <InputQuiz />


                <Link className="hover:cursor-pointer" href='/'>
                    <a className=" text-[#093426] py-3 px-12 rounded-full w-fit mx-auto sm:mt-10 mt-20 border-2 border-[#093426] transition-all hover:px-24">Go Home</a>
                </Link>
            </div>
            
        </>
    )
}