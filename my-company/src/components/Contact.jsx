  import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };


     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };




     return (
       <div style={{padding: "20px"}}>
         <h1 style={{fontSize: "2rem", color: "#333", marginBottom: "20px"}}>Contact Us</h1>
         <form onSubmit={handleSubmit} style={{display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px"}}>

           <input style={{ padding: "12px",
           fontSize: "1rem",
           border: "1px solid #ccc",
            borderRadius: "6px"}}
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input style={{ padding: "12px",
              fontSize: "1rem",
             border: "1px solid #ccc",
            borderRadius: "6px",}}
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea style={{ padding: "12px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "6px",
      minHeight: "100px"}}
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
           />
           <button type="submit" style={{padding: "12px",
             background: "#007BFF",
             color: "white",
             fontSize: "1rem",
             border: "none",
            borderRadius: "6px",
           cursor: "pointer"}}>Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;