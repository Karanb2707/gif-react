import { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = ({ search }) => {

    const searchGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}`
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const { data } = await axios.get(search ? searchGifUrl : randomGifUrl);
        const imgSource = data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData }
}

export default useGif;