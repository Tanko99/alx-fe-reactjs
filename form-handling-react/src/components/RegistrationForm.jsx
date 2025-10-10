import { useState } from "react";

function RegistrationForm(){
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) =>  {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value, 
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const {name, email, password} = formData;
        if (!name){
            setError("Name required!");
            return;
        }
        if(!email){
            setError("Email required");
            return;
        }
        if(!password){
            setError("Password required");
            return;
        }
        setFormData({
            name: "",
            email: "",
            password: "",
        });
        setError("");
    };

    return (
        <div>
            <h1> Registration form</h1>
            <form onSubmit={handleSubmit}>
               <label htmlFor="name">Username</label>
               <input
               id="name"
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange} 
               placeholder="username"
               minLength="6" required
               />

               <label htmlFor="email" >Email</label>
               <input
               id="email"
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="email"
               required
               />

               <label htmlFor="password">Password</label>
               <input 
               id="password"
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="password"
               required
               />

               <button type="submit" >Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;