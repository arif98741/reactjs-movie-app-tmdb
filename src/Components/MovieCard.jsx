// src/components/MovieCard.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';  // Using Font Awesome icon from react-icons
import { toast } from 'react-toastify';



const MovieCard = ({ id, title, image, rating, releaseDate }) => {
  ///const navigate = useNavigate(); // hook to navigate to details page
  const [isLiked, setIsLiked] = useState(false); // For toggling like/unlike
  const hasImage = image && image.trim() !== '';

  // Check if the movie is already liked when the component mounts
  useEffect(() => {
    // Get the liked movies from localStorage
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];

    // If the movie ID is in the likedMovies list, set isLiked to true
    if (likedMovies.includes(id)) {
      setIsLiked(true);
    }
  }, [id]);

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevent triggering onClick for the entire card

    // Toggle like/unlike state
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);


    // Get the current liked movies from localStorage
    const likedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];

    // Check if the movie is already in the liked movies list
    if (newLikedState) {
      // If the movie is liked, add it to localStorage (if not already there)
      if (!likedMovies.includes(id)) {
        likedMovies.push(id); // Add the current movie ID to the liked list
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies)); // Store it in localStorage
      }
    } else {
      // If the movie is unliked, remove it from localStorage
      const updatedLikedMovies = likedMovies.filter((movieId) => movieId !== id);
      localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies)); // Update localStorage
    }

    toast.success(newLikedState ? 'Added to Favorites' : 'Removed from Favorites', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div className="bg-white dark:bg-gray-800 mt-2 rounded-lg shadow-md overflow-hidden transition hover:scale-[1.02] hover:shadow-lg duration-300 w-full max-w-[220px]">
      {hasImage ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
          className="object-cover w-full h-72"
        />
      ) : (
        <div className="flex items-center justify-center w-full px-4 text-sm text-center text-gray-500 bg-gray-100 h-72 dark:bg-gray-700 dark:text-gray-300">
          No Poster Available
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center justify-between"> {/* Use flex and items-center */}
          <h3 className="text-lg font-semibold text-gray-800 truncate dark:text-white">
            {title}
          </h3>

          <FaHeart
            className={`text-xl cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
            onClick={handleLikeClick} // Toggle like status
          />
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span>⭐ {rating}</span>
          <span>{releaseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;