import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {MoviesListCard} from "./MoviesListCard";
import {movieService} from "../../services/movieService";
import {usePageQuery} from "../../hooks/usePageQuery";


interface IProps extends PropsWithChildren {
}


const MoviesList: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const {page} = usePageQuery();



    useEffect(() => {
        movieService.getAll(page).then(({data})=> console.log(data))


    }, []);
    return (
        <div>
            {movies?.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
}

export {
    MoviesList
};