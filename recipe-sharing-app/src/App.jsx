import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/Recipelist';
import RecipeDetails from './components/RecipeDeatils';


function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      </BrowserRouter>
  );
}


export default App;