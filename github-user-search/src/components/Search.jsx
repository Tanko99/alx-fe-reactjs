import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState("");
  const [repoCount, setRepoCount] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput && !location && !repoCount) {
      setError("Please enter at least one search criteria");
      return;
    }

    setError("");
    setLoading(true);
    setResults([]);

    try {
      const response = await fetchUserData(userInput, location, repoCount);
      setResults(response);
    } catch (err) {
      setError("Looks like we can’t fetch users right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6"
      >
        <input
          className="py-2 px-4 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          className="py-2 px-4 border border-gray-300 rounded w-full focus:ring-2 focus:ring-green-400"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="py-2 px-4 border border-gray-300 rounded w-full focus:ring-2 focus:ring-purple-400"
          type="number"
          placeholder="Minimum repos"
          value={repoCount}
          onChange={(e) => setRepoCount(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Status */}
      {loading && <p className="text-blue-600 text-center">Loading...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-32 h-32 rounded-full mx-auto mb-3"
            />
            <h2 className="text-xl font-bold text-center">{user.login}</h2>
            <p className="text-sm text-gray-500 text-center">
              {user.location || "Location not available"}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;