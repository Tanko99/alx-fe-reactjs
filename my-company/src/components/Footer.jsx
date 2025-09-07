
function Footer () {
     const styles = {
    footer: {
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "15px",
      marginTop: "auto",
    },
    text: {
      margin: 0,
      fontSize: "14px",
    },
  };
    return (
        <footer style={styles.footer}>
            <p style={styles.text}> &copy: Edu-Tech 2025, All rights reserverd</p>
        </footer>
    );
}

export default Footer; 