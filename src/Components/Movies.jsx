// src/App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCard from "./MovieCard";
import NoMovieFound from './partials/no-movie-found';
import BreadcrumbsPagination from './partials/BreadcrumbsPagination';
import Pagination from './partials/Pagination';
import Loader from './partials/Loader';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_API_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_KEY}`
    }
};

function Movies({ searchQuery, currentPage, setCurrentPage, totalPages, setTotalPages }) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchMovies = async (query = '', page = 1) => {
        console.log('query:', query, 'on page:', page);

        const endpoint = query
            ? `${TMDB_API_URL}/search/movie?sort_by=popularity.desc&query=${encodeURIComponent(query)}&page=${page}&include_adult=false`
            : `${TMDB_API_URL}/discover/movie?sort_by=popularity.desc&page=${page}&include_adult=false`;

        setLoading(true); // Set loading to true before fetching

        try {
            const response = await fetch(endpoint, TMDB_API_OPTIONS);
            const data = await response.json();

            if (data && data.results) {
                setMovies(data.results);
                setCurrentPage(data.page);
                setTotalPages(data.total_pages);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setError("Failed to fetch movies. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(searchQuery, currentPage);
    }, [searchQuery, currentPage]);

    return (
        <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-12">
            <h1 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">
                {(searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Movies')}
            </h1>
            <BreadcrumbsPagination currentPage={currentPage} totalPages={totalPages} />

            {/* Movie Grid */}
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:gap-4">

                {/* Show loader while data is being fetched */}
                {loading ? (
                    <Loader />
                ) : (
                    // If loading is false, display either movies or NoMovieFound
                    movies.length > 0 ? (
                        movies.map((movie) => (
                            <div key={movie.id}>
                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    image={movie.poster_path}
                                    rating={movie.vote_average}
                                    releaseDate={movie.release_date}

                                />
                            </div>
                        ))
                    ) : (
                        <NoMovieFound />
                    )
                )}

            </div>
        </div>
    );
}

export default Movies;
