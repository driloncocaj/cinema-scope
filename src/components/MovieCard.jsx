function MovieCard({ movie, onClick }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.png";

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-80 sm:h-96 md:h-96 lg:h-96 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white text-lg font-bold">{movie.title}</h3>
        <p className="text-gray-300">{movie.release_date?.slice(0, 4)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
