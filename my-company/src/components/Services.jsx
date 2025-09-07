 function Services() {
     const styles = {
    container: {
      padding: "20px",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#f4f4f4",
      margin: "10px auto",
      padding: "15px",
      width: "60%",
      borderRadius: "8px",
      fontSize: "18px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
  };

     return (
       <div style={styles.container}>
         <h1 styke={styles.title}>Our Services</h1>
         <ul style={style.list}> 
           <li style={styles.listItem}>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
       </div>
     );
   }

   export default Services;