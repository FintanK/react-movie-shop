import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Backup from "../assets/backup.jpg";
import { useTitle } from "../hooks/useTitle";
import { add, remove } from "../store/cartSlice";

export const MovieDetail = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});

    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cartState.cartList);
    const [isInCart, setIsInCart] = useState(false);

    //eslint-disable-next-line
    useTitle(movie.title);

    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup;

    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`);
            const json = await response.json()
            setMovie(json);

            const movieInCart = cartList.find(item => item.id === json.id);

            setIsInCart(movieInCart);
        }
        fetchMovie();
    }, [params.id, cartList]);

    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <img className="rounded" src={image} alt={movie.title} />
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>
                    <p className="my-4">{movie.overview}</p>
                    {movie.genres ? (
                        <p className="my-7 flex flex-wrap gap-2">
                            {movie.genres.map((genre) => (
                                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
                            ))}
                        </p>
                    ) : ""}
                    <div className="flex items-center justify-between mb-50">
                        {isInCart ? (<button type="button" onClick={() => dispatch(remove(movie))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-8">Remove from Cart</button>) : (<button type="button" onClick={() => dispatch(add(movie))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-8">Add to cart</button>)}
                    </div>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
                    </div>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Runtime:</span>
                        <span>{movie.runtime} min.</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Budget:</span>
                        <span>{movie.budget}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Revenue:</span>
                        <span>{movie.revenue}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Release Date:</span>
                        <span>{movie.release_date}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">IMDB Code:</span>
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
                    </p>

                </div>
            </section>
        </main>
    )
}