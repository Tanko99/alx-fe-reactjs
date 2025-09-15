import useRecipeStore from "./recipeStore";


const DeleteRecipeButton = ({reciprId}) => [
    const deleteRecipe = useRecipeStore(state=> state.deleteRecipe);
    const handleDelete = () => {
        if(windows,confirm("Are you sure you want to delete this recipe?")){
            deleteRecipe(recipeId);
        }
    };
    return (
        <button onClick={handleDelete}>
            Delete 
        </button>
    );
];

export default DeleteRecipeButton;
