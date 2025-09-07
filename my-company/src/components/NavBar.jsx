import { Link } from  'react-router-dom';


function Navbar () {
    return ( 
        <nav style = {{display: 'flex' jsutifyContent: 'space-between', padding: '10px' ,
         gap: '20px', backgroundColor: '#333'
        }} >
            <ul style={{color: 'white', fontWeight: 'bold', listStyle: 'none'}}   >
                <li> < Link to="/" style={{textDecoration: 'none'}}> Home </Link></li>
                <li> <Link to="/about"> About </Link></li>
                <li> <Link to="/services"> Services </Link></li>
                <li> <Link to="/contact"> Contact </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;