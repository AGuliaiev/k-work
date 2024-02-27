import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const movieService = {
    getAll:(page:string) => apiService.get(urls.movie.base, {params: {page}}),
    getById:(id:number) => apiService.get(urls.movie.byId(id))
}

export {
    movieService
}