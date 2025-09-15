import useRecipeStore from "./recipeStore";


const DeleteRecipeButton = () => [
    const deleteRecipe = useRecipeStore(state=> state.deleteRecipe);
    return (
        <button onClick={()=> deleteRecipe(recipeId)}>
            Delete recipe
        </button>
    );
];

export default DeleteRecipeButton;
