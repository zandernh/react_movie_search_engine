import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Favorites() {
  const { favorites } = useMovieContext();
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Favorites List:", favorites);

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites
            .filter((movie) =>
              movie.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim())
            )
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorites;
