
import { useState } from "react";
import fetchUserData from '../services/githubService';

const Search = () => {
    const [userInput, setUserInput] = useState("");
    const [userData, setUserData] =  useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = userInput.trim();
        if(!username){
            setError("Oops, you didn't enter username!");
            return;
        }

        setUserInput("");
        setLoading(true);
        setUserData(null);
        setError("");
        try {
            const response = await fetchUserData(username);
            setUserData(response);
        } catch(error) {
            setError(" Looks like we Can't find the user");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
        <form className="flex gap-x-2 justify-center items-center"
        onSubmit={handleSubmit}>
            <input  className="py-2 px-4 w-64 border-green 
            focus:ring-2 focus:ring-blue-300 focus:outline-none"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your github username" />
            <button className="bg-blue-600 text-white py-2 px-4 
            hover:bg-red-600 text-base font-medium rounded-md"
             type="submit">
                Search 
            </button>
        </form>
        
        {loading && <p className="text-blue-700 text-center mt-4 font-medium">Loading...</p>}
        {error && <p className="text-red-700 text-center mt-4font-medium">{error}</p>}
         {userData && (
            <div className="flex flex-col items-center mt-6 bg-gray-100 rounded-lg shadow-md p-4">
              <img src={userData.avatar_url} 
              alt={userData.login}  className="w-32 h-32 border-gray-300  border-2  rounded-full mb-4"
              />
            <h2 className="font-bold text-2xl text-gray-700 font-medium">{userData.name || userData.login}</h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer"
            className="hover:underline bg-blue-300 font-medium mb-2">View Profile</a>
            </div>
    )}
        </div>
    );
};
export default Search;