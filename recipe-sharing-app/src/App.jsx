import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/Recipelist';
import RecipeDetails from './components/RecipeDeatils';


function App ()  {
  return (
    <div>
      <h1> Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="edit/:id" element={<EditRecipeForm />}  />
      </Routes>
    </div>
  );
}


export default App;