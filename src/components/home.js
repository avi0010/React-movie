// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import noImg from "../images/no_image.jpg"
import API from "../API";
//hooks
import {useHomeFetch} from "../hooks/useHomeFetch";
//Components
import HeroImage from "./heroImage";
import Grid from "./Grid";
import Thumb from "./thumb"
import Spinner from "./spinner";
import SearchBar from "./searchBar";

const Home = () => {
    const {state, loading, error, setSearchTerm} = useHomeFetch()
    return (
        <>
            {state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
                    title={state.results[1].original_title}
                    text={state.results[1].overview}
                /> : null
            }
            <SearchBar searchTerm={setSearchTerm}/>
            <Grid header="Popular Movies">
                {state.results.map(movie => (
                    <Thumb key={movie.id}
                           cliclable={true}
                           image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImg}
                           movieId={movie.id}
                    />
                ))}
            </Grid>
            <Spinner />
        </>
    )
}

export default Home;