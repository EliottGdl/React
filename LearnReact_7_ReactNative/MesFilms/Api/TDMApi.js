import {token} from "./conf.js"

export function getFilmsFromApiWithSearchedText(text,page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + token + '&language=fr&query=' + text + "&page="+page;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}