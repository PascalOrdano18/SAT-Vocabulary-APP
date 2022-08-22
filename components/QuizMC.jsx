import { useEffect, useState } from "react"

import vocDB from '../vocabularyDB.json';


export const QuizMC = () => {

    const { unit5 } = vocDB;


    const [newCorrectWord, setNewCorrectWord] = useState('');
    const [newDefinition, setNewDefinition] = useState('');

    const [points, setPoints] = useState(0)
    const [getNewWord, setGetNewWord] = useState(false);


    // Incorrect word options
    const option1 = useState('')
    const option2 = useState('')
    const option3 = useState('')
    const option4 = useState('')



    const options = [option1, option2, option3, option4]




    const [order, setOrder] = useState(Math.floor(Math.random() * 4))




    const handleInput = ( e ) => {

        if( e.target.innerText == newCorrectWord ){
            setPoints( points + 1 )
            setGetNewWord(!getNewWord)
        } else {
            setGetNewWord(!getNewWord)
        }


    }

    
    useEffect(() => {
        const keys = Object.values(unit5); 
        let chapter;
        let randomW;
        let newWord
        let correctDefinition;
        let correctWord;



        

        chapter = keys[Math.floor(Math.random() * keys.length)]
        randomW = Math.floor(Math.random() * chapter.length)
        correctWord = chapter[randomW].word
        correctDefinition = chapter[randomW].definition




        options.map( (option, index) => {
            chapter = keys[Math.floor(Math.random() * keys.length)]
            randomW = Math.floor(Math.random() * chapter.length)
            newWord = chapter[randomW].word

            if( index === 0 ) {
                option1[1](newWord)
            } else if( index === 1 ) {
                option2[1](newWord)
            } else if( index === 2 ) {
                option3[1](newWord)
            } else if( index === 3 ) {
                option4[1](newWord)
            }
        })
        setNewCorrectWord(correctWord)
        setNewDefinition(correctDefinition)
        setOrder(Math.floor(Math.random() * 4))


    }, [ getNewWord ])
    


  return (
    <>

        <h1 className="text-black mx-auto text-3xl md:text-4xl mt-10">POINTS: {points}</h1>


        <div className="grid grid-cols-1 md:grid-cols-2 text-lg md:text-2xl w-full mt-10 mx-auto max-w-[1000px]">
            <button onClick={ handleInput } className="bg-[#093426] text-[#79BEA8] w-64 py-3 md:w-96 md:py-6 lg:py-10 hover:animate-pulse mx-auto rounded-lg sm:mt-8 hover:bg-[#448D76] hover:text-[#093426] border-[#093426] border-2 transition-all">  { order === 0 ? newCorrectWord : option1[0] } </button>
            <button onClick={ handleInput } className="bg-[#093426] text-[#79BEA8] w-64 py-3 md:w-96 md:py-6 lg:py-10 hover:animate-pulse mx-auto rounded-lg mt-8    hover:bg-[#448D76] hover:text-[#093426] border-[#093426] border-2 transition-all"> { order === 1 ? newCorrectWord : option2[0] } </button>
            <button onClick={ handleInput } className="bg-[#093426] text-[#79BEA8] w-64 py-3 md:w-96 md:py-6 lg:py-10 hover:animate-pulse mx-auto rounded-lg mt-8    hover:bg-[#448D76] hover:text-[#093426] border-[#093426] border-2 transition-all"> { order === 2 ? newCorrectWord : option3[0] } </button>
            <button onClick={ handleInput } className="bg-[#093426] text-[#79BEA8] w-64 py-3 md:w-96 md:py-6 lg:py-10 hover:animate-pulse mx-auto rounded-lg mt-8    hover:bg-[#448D76] hover:text-[#093426] border-[#093426] border-2 transition-all"> { order === 3 ? newCorrectWord : option4[0] } </button>
        </div>

        <div className="flex mx-10">
            <h1 className="flex mt-10 md:mt-20 mx-auto text-2xl md:text-4xl text-[#23483C]">{ newDefinition }</h1>
        </div>

        
        
    </>
  )
}
