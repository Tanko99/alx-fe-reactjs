import { Link } from  'react-router-dom';


function Navbar () {
    return ( 
        <nav style = {{display: 'flex' jsutifyContent: 'space-between', padding: '10px' ,
         gap: '20px', backgroundColor: '#333'
        }} >
            <ul style={{color: 'white', fontWeight: 'bold', listStyleType: 'none'}}   >
                <li> < Link to="/" style={{textDecoration: 'none', color: 'white', linkHover: 'red', linkActive: 'blue'}}> Home </Link></li>
                <li> <Link to="/about" style={{textDecoration: 'none', color: 'white', linkHover: 'red', linkActive: 'blue'}}> About </Link></li>
                <li> <Link to="/services"style={{textDecoration: 'none', color: 'white', linkHover: 'red', linkActive: 'blue'}}> Services </Link></li>
                <li> <Link to="/contact"style={{textDecoration: 'none', color: 'white', linkHover: 'red', linkActive: 'blue'}}> Contact </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;