import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [search, movies]);

  return (
    <>
      <h1>Movie Search</h1>

      <input
        data-testid="search"
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredMovies.length === 0 ? (
        <p data-testid="empty">No Movies Found</p>
      ) : (
        <div data-testid="movies">
          {filteredMovies.map((movie) => (
            <p key={movie.id}>
              {movie.title} ({movie.year})
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;