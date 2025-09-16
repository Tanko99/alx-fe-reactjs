import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar"; 

const App = () => {
  return (
    <div>
      <h1> Recipe Sharing App </h1>
      <BrowserRouter>
    
        <SearchBar />

        <Routes>
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;