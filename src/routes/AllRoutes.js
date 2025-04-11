import { Route, Routes } from "react-router-dom";
import { Cart, Checkout, MovieDetail, MovieList, PageNotFound, Search } from "../pages";
import { CheckoutComplete } from "../pages/CheckoutComplete";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
                <Route path="movie/:id" element={<MovieDetail />} />
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
                <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout/complete" element={<CheckoutComplete />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}