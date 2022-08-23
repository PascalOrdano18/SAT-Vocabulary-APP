import { useState, useEffect } from 'react';
import vocDB from '../vocabularyDB.json'




export const WordList = () => {

  const { unit5 } = vocDB;




  const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (event) => {
        setSearchTerm( event.target.value )
    }

    const onSubmit = ( e ) => {
        e.preventDefault()
        if( searchTerm.trim().length == 0 ) return;
        setSearchTerm( '' );
    }
  return (
    <>


      <form onSubmit={ onSubmit } aria-label="form" className="mx-auto w-fit my-10" >
        <input 
            className="border-[#086948] bg-[#E7F3EF] text-black border-2 rounded h-10 px-5 focus:px-10 transition-all focus:border-4 focus:border-[#23483C] outline-none" 
            type="text"
            placeholder="🔎 Search for words..."
            value={ searchTerm }
            onChange={ handleSearch }
        />
      </form>

      <hr />

        {
          Object.values(unit5).map( (chapter, index) => {
            return (
              chapter.filter( (val) => {

                if (searchTerm == ''){
                  return val
                } else if (val.word.includes( searchTerm.toLocaleLowerCase() )){
                  return val
                }

              } ).map( (word, index) => {
                return (
                  <ul key={index} className='' >
                    <li className='my-2 w-3/6 mx-auto'>
                      <h1 className='text-2xl'>{word.word}</h1>
                      <h2>{word.definition}</h2>
                    </li>
                    <hr />
                  </ul>
                )
              })
            )
            }
          )
        }
    </>
  )
}

