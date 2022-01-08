import axios from "axios";

const Nasapp = function () {
    const SERVER_API = "http://localhost:3100/api";

    const getFavoriteAstronomyPictures = async function () {
        return (await axios.get(SERVER_API + "/favourites")).data
    }

    const saveAstronomyPicture = function (astronomyTitle, astronomyImage) {
        return axios.post(SERVER_API + "/favourites", { astronomyTitle, astronomyImage })
            .then(response => response)
            .catch(error => error);
    }

    const deleteAstronomyPicture = function (astronomyTitle) {
        return axios.delete(SERVER_API + "/favourites", { "data": { "astronomyTitle": astronomyTitle } })
            .then(response => response)
            .catch(error => error);
    }

    return {
        getFavoriteAstronomyPictures,
        saveAstronomyPicture,
        deleteAstronomyPicture
    }
}

export default Nasapp();