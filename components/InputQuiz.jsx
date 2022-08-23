import { useEffect, useState } from "react"

import vocDB from '../vocabularyDB.json'


export const InputQuiz = () => {


    const { unit5 } = vocDB;



    const [newDefinition, setNewDefinition] = useState('');
    const [newWord, setNewWord] = useState('');


    const [points, setPoints] = useState(0)

    const [getNewWord, setGetNewWord] = useState(false);

    const [inputWord, setInputWord] = useState('');

    const handleInput = (event) => {
        setInputWord( event.target.value )
    }

    const onSubmit = ( e ) => {
        e.preventDefault()
        if( inputWord.trim().length == 0 ) return;
        setInputWord( '' );

        if(inputWord.toLocaleLowerCase() == newWord){
            setPoints(points + 1)
        } 

        setGetNewWord(true);
    }





    useEffect(() => {

        const keys = Object.values(unit5);
        const chapter = keys[Math.floor(Math.random() * keys.length)]

        const randomW = Math.floor(Math.random() * chapter.length)
        const correctDefinition = chapter[randomW].definition
        const correctWord = chapter[randomW].word

        setNewDefinition(correctDefinition)
        setNewWord(correctWord)

        console.log(correctWord)
        setGetNewWord(false)


    }, [getNewWord === false])
    



  return (
    <>



        <div className="flex mx-10 mt-10 md:mt-20">
            <h1 className="flex mx-auto text-2xl md:text-4xl text-[#23483C]">Points: {points}</h1>
        </div>

        <form onSubmit={ onSubmit } aria-label="form" className="mx-auto w-fit my-8 sm:mt-20" >
            <input 
            className="border-[#086948] bg-[#E7F3EF] text-black border-2  rounded h-10 px-5 focus:px-10 transition-all focus:border-4 focus:border-[#23483C] outline-none" 
            type="text"
                placeholder="Word..."
                value={ inputWord }
                onChange={ handleInput }
            />
        </form>


        <div className="flex mx-10">
            <h1 className="flex mt-0 sm:mt-20 mx-auto text-2xl md:text-4xl text-[#23483C]">
                {newDefinition.charAt(0).toUpperCase() + newDefinition.slice(1)}
            </h1>
        </div>

    </>
  )
}

