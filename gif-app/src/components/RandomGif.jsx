import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const RandomGif = () => {

    const [gif, setGif] = useState('');

    async function fetchData() {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        const imgSource = data.data.images.downsized_large.url;
        setGif(imgSource);     
    }

    useEffect(() => {
        fetchData();
    }, [])

    function clickHandler() {
        fetchData();
    }

    return (
        <div className='w-1/2 h-[400px] flex flex-col items-center justify-evenly gap-2 p-2 border-2 rounded-2xl 
            bg-yellow-200'>
            <h1 className='font-semibold underline'>Random GIF</h1>
            <img src={gif} className='w-[420px] h-[280px] mx-auto mt-2 rounded-md'/>
            <button onClick={clickHandler} className='py-2 px-10 border rounded-2xl bg-red-600 text-white hover:bg-red-700 font-semibold'>
                Generate
            </button>
        </div>
    )
}

export default RandomGif