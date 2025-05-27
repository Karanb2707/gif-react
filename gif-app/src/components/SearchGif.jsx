import React, { useState } from 'react'

const SearchGif = () => {

    const [gif, setGif] = useState('');

    function clickHandler() {

    }

    return (
        <div className='w-1/2 h-[400px] flex flex-col items-center justify-evenly gap-2 p-2 border-2 rounded-2xl 
              bg-yellow-200'>
            <h1 className='font-semibold underline'>Random GIF</h1>
            <div className='w-[380px] h-[290px] border rounded-md'>
                <img src={gif} />
            </div>
            <button onClick={clickHandler} className='py-2 px-10 border rounded-2xl bg-red-600 text-white hover:bg-red-700 font-semibold'>
                Generate
            </button>
        </div>
    )
}

export default SearchGif