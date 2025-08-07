import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Modal from "../components/Modal";

const API_KEY = import.meta.env.TMDB_API_KEY;

if (!API_KEY) {
  console.warn(
    "TMDb API key is missing. Add VITE_TMDB_API_KEY in your .env file."
  );
}
const BASE_URL = "https://api.themoviedb.org/3";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          const filtered = data.results.filter(
            (m) => !m.adult && m.vote_count > 50
          );
          setMovies(filtered.slice(0, 10)); // show top 10
        }
      } catch (err) {
        console.error("Error fetching trending movies:", err);
        setError("Could not load trending movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            searchTerm
          )}`
        );
        const data = await res.json();

        if (data.results && data.results.length > 0) {
          const filtered = data.results.filter(
            (m) => !m.adult && m.vote_count > 50
          );
          if (filtered.length === 0) {
            setMovies([]);
            setError("No movies found.");
          } else {
            setMovies(filtered.slice(0, 10));
          }
        } else {
          setMovies([]);
          setError("No movies found.");
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="min-h-screen p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-white text-center">
        Welcome to Cinema Scope
      </h2>
      <p className="mt-2 text-gray-300 text-center">
        Search and explore movies powered by TMDb API.
      </p>

      <div className="mt-6 flex justify-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white text-center">
        {searchTerm ? "Search Results" : "Trending Now"} 🎬
      </h2>

      {loading && (
        <p className="mt-4 text-yellow-400 text-center">Loading...</p>
      )}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!loading &&
          !error &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
      </div>

      <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}

export default Home;
