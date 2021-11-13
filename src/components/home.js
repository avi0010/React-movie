// Config
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import noImg from "../images/no_image.jpg"
//hooks
import {useHomeFetch} from "../hooks/useHomeFetch";
//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb"
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Home = () => {
    const {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore} = useHomeFetch();
    if (error) {
        return (
            <div>Something is seriously wrong</div>
        );
    }
    return (
        <>
            {!searchTerm && state.results[0] ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                /> : null
            }
            <SearchBar searchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
                {state.results.map(movie => (
                    <Thumb key={movie.id}
                           cliclable={true}
                           image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : noImg}
                           movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    )
}

export default Home;
