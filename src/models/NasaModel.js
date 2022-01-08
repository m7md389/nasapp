import axios from "axios";

const NasaModel = function () {
    const API_KEY = "SViVeKHGC7aecBm4xAPAM8ZpkJKCqSroi4aJXzLI";
    const APOD_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    const getAstronomyPictureOfTheDay = async function () {
        return (await axios.get(APOD_API_URL)).data
    }

    return {
        getAstronomyPictureOfTheDay
    }
}

export default NasaModel();