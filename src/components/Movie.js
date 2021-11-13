import React from "react"
import {useParams} from "react-router-dom";
//Config
// Components
import Spinner from './Spinner'
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo";
// hooks
import useMovieFetch from "../hooks/useMovieFetch"

const Movie = () => {
    const {movieId} = useParams();
    const {state:movie, loading, error} = useMovieFetch(movieId);
    if (loading) return (<Spinner/>);
    if (error) return (<div>Something Went Wrong.......</div>);
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
        </>
    )
};
export default Movie;
