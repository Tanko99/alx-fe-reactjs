import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';

const App = () => {
    return (
        <div> 
            <h1 className="text-20xl text-center font-bold px-8 py-8"> Github User Search App</h1>
       <BrowserRouter>
           <Routes>
            <Route path="/search" element={<SearchBar /> />
            <Route path="/user/:id" element={<UserProfile />} />
           </Routes>
       </BrowserRouter>
       </div>
    );
};

export default App;