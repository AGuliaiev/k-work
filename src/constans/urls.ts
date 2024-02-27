const baseURL = 'https://developers.themoviedb.org/3'


const movie = '/discover/movie';

const genre = '/genre';
// const list = '/list';
// const search = '/search';


const urls = {
    movie: {
    base:movie,
        byId:(id: number): string => `${movie}/${id}`
},
    genre: {
        base:genre,
        byId:(id: number): string => `${genre}/${id}`
    }
}

export {
    baseURL,
    urls
}