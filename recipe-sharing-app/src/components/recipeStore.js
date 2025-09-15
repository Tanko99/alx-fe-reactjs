import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => {{
        recipes: [...state.recipes, newRecipe] }}),

    updateRecipe: (id, updatedFields) => set((state) => ({recipes: satisfies.recipes.map((recipe) =>
          recipe.id === id ? {...recipe, ...updatedFields} : recipe ),
    })),
    
    deleteRecipe: (id) => set((state) => ({
        recipe: state.recipes.filter((recipe) => recipe.id !== id ),
    })),
    setRecipes: (recipes) => set({recipes})
    
}));

export default useRecipeStore;