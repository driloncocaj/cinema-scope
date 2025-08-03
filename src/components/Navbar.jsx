function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-md">
      <h1
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-yellow-400 cursor-pointer 
             transition duration-300 ease-in-out 
             hover:from-pink-500 hover:to-purple-500"
        onClick={() => window.location.reload()}
      >
        Cinema Scope
      </h1>
    </nav>
  );
}

export default Navbar;
