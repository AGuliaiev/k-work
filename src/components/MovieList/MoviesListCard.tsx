import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie;
}


const MoviesListCard: FC<IProps> = ({movie}) => {
    const {
        id, original_language, original_title, genre_ids,
        overview, poster_path, release_date, backdrop_path
    } = movie;
    return (
        <div>
            <div>id: {id}</div>
            <div>original_language: {original_language}</div>
            <div>original_title: {original_title}</div>
            <div>overview: {overview}</div>
            <div>release_date: {release_date}</div>
            <img src={backdrop_path}/>
        </div>
    );
};

export {
    MoviesListCard
};