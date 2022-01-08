import axios from "axios";

const NasaModel = function () {
    const API_KEY = "SViVeKHGC7aecBm4xAPAM8ZpkJKCqSroi4aJXzLI";
    const APOD_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    const IMAGE_AND_VIDEO_API_URL = "https://images-api.nasa.gov/search?q="

    const getAstronomyPictureOfTheDay = async function () {
        return (await axios.get(APOD_API_URL)).data
    }

    const getImageAndVideo = async function (query) {
        return (await axios.get(IMAGE_AND_VIDEO_API_URL + query)).data.collection.items
    }

    return {
        getAstronomyPictureOfTheDay,
        getImageAndVideo
    }
}

export default NasaModel();