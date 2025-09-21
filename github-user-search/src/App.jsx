import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search';


const App = () => {
    return (
        <div> 
            <h1 className="text-4xl text-center font-bold px-8 py-8"> Github User Search App</h1>
       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Search />} />
           </Routes>
       </BrowserRouter>
       </div>
    );
};

export default App;