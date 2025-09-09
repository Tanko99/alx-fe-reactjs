 function Services() {
     return (
       <div style={{ padding: '20px' }}>
         <h1 style={{textAlign:'center', backgroundColor: '#ccc', color: 'black', fontSize: '28px', fontWeight: 'bolf'}}>Our Services</h1>
         <ul style={{listStyleType: 'none'}}>
           <li style={{ backgroundColor: "#f4f4f4",
            margin: "10px auto",
            padding: "15px",
            width: "60%",
           borderRadius: "8px",
           fontSize: "18px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)}} >Technology Consulting</li>
           <li style={{ backgroundColor: "#f4f4f4",
            margin: "10px auto",
            padding: "15px",
            width: "60%",
            borderRadius: "8px",
           fontSize: "18px",
           boxShadow: "0 2px 5px rgba(0,0,0,0.1)}}">Market Analysis</li>
           <li style={{ backgroundColor: "#f4f4f4",
              margin: "10px auto",
             padding: "15px",
              width: "60%",
             borderRadius: "8px",
              fontSize: "18px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"}}>Product Development</li>
         </ul>
       </div>
     );
   }

   export default Services;