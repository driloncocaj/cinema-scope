function Modal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-lg max-w-2xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-red-500 text-3xl font-bold cursor-pointer"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-300 mb-2">
          Release Year: {movie.release_date?.slice(0, 4)}
        </p>
        <p className="text-gray-300 mb-2">Rating: {movie.vote_average} ⭐</p>
        <p className="text-gray-300">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  );
}

export default Modal;
