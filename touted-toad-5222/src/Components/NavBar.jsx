import {Link} from 'react-router-dom';
import React from 'react';


const NavBar=()=>{

return (
<div className = "navbar" >
        <div className="logo">Beauty World</div>
        <nav className="item">
         <ul className="ul">
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
             <Link to='/skincare'>Skincare</Link>
            </li>  
            <li>
            <Link to='/sets'>Sets</Link>
            </li>
            <li>
            <Link to='/all'>All</Link>
            </li> 
        </ul>    
     </nav>            
</div>
)
};

export default NavBar