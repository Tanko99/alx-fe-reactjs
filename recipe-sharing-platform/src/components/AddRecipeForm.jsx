
import { useState } from "react";


function AddRecipeForm (){
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

      const handleChange = (e) => {
           setFormData({
            ...formData, [e.target.name]: e.target.value
           });
           setError('');
           setSuccess('');
     };
     const handleSubmit = (e) => {
        e.preventDefault();

        const { title, ingredients, instructions } = formData;
        if(!title || !ingredients || !instructions) {
            setError('All fields must be filled');
            return;
        }
        const ingredientList = formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

        if(ingredientList.length < 2 ){
            setError('Ingredients must not be less that two!');
            return;
        }
        const newRecipe = {
            title: formData.title.trim(),
            ingredients: ingredientList,
            instructions: formData.instructions.trim(),

        };
        setSuccess('Your recipe has been successfully added');
        setFormData({
            title: '',
            ingredients: '',
            instructions: '',
        });
     };

     return (
        <div>
        
            <div className="min-h-screen shadow-lg rounded-lg bg-green-400 mx-auto  text-gray-400">
                <form onSubmit={handleSubmit} className="w-full mb-6 md:flex items-center sm:flex-col">
                    <h2 className="md:text-3xl sm:text-lg text-xl text-center font-bold"> Add new Recipe</h2>
                    {error && <p className="text-red-700 text-center">{error}</p>}
                    {success && <p className="text-green text-center">{success}</p>}

                    <label className="text-gray-400 font-medium md:text-2xl sm:text-base text-lg ">Recipe title </label>
                    <input className="w-full sm:w-96 focus:border-gray-600 focus:ring-2 focus:ring-gray-600
                    focus:outline-none bg-gray-100 text-sm py-2 px-4 mb-2 rounded-lg"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter recipe title" required/>

                    <label className="text-gray-400 font-medium md:text-2xl sm:text-base text-lg">Ingredients</label>
                    <textarea  className="w-full sm:w-96 focus:border-gray-600 focus:ring-2 focus:ring-gray-600
                    focus:outline-none bg-gray-100 text-sm px-6 py-4 mb-2 rounded-lg"
                     name="ingredients"
                     value={formData.ingredients}
                     onChange ={handleChange} 
                     placeholder="enter your ingredients"
                     rows="4" 
                     required />

                     <label className="text-gray-400 font-medium md:text-2xl sm:text-base text-lg" >Instructions for preparation </label>
                     <textarea className="w-full sm:w-96 focus:border-gray-600 focus:ring-2 focus:ring-gray-600
                    focus:outline-none bg-gray-100 text-sm p-8 rounded-lg"
                     name="instructions"
                     value={formData.instructions}
                     onChange={handleChange}
                     placeholder="write your preparation instructions here!"
                     rows="10" required />

                     <button className="px-4 py-2 bg-green-600 text-gray-200 cursor-pointer hover:bg-green-900" type="submit" > Add Recipe </button>
                </form>
            </div>
        </div>
     );
}

export default AddRecipeForm;