
import { Route, Routes } from 'react-router-dom';
import { MovieList } from '../pages/MovieList';
import { MovieDetail } from '../pages/MoveDetail';
import { PageNotFound } from '../pages/PageNotFound';

export const AllRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/movies/popular" element={<MovieList />} />
                <Route path="/movies/top" element={<MovieList />} />
                <Route path="/movies/upcoming" element={<MovieList />} />
                <Route path="search" element={<MovieList />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>

    )

}