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

                <div className="mx-auto mt-12 max-w-[740px]">
                    <h1 className="mx-auto text-6xl w-fit underline">Input Quiz</h1>
                    <p className="w-fit mx-auto my-16 text-xl">A definition will be given without any other information. The objective is to input the word that corresponds to the definition displayed. There are no help words in this section. Good Luck.</p>
                </div>


            <InputQuiz />


                <Link className="hover:cursor-pointer" href='/'>
                <a className=" text-[#093426] py-3 px-12 rounded-full w-fit mx-auto mt-10 border-2 border-[#093426] transition-all hover:px-24">Go Home</a>
                </Link>
            </div>
            
        </>
    )
}