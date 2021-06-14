import React,{useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar() {
const [nav,setNav] = useState(false);

const changeBackground = () => {
 if (window.scrollY >= 50) {
setNav(true);
 }
 else{
  setNav(false);
 }
}
window.addEventListener('scroll',changeBackground);


 return (
  <nav className={nav ? "nav active" : "nav"}>
    <Link to='main' className='logo'smoth={true} duration={2000} >
     <img src={logo} alt='' />
    </Link>
    <input className='menu-btn' type='chechbox' id='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
      <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
       <li><Link to='main' smoth={true} duration={1000}>Header</Link></li>
        <li><Link to='features' smoth={true} duration={1000}>Features</Link></li>
         <li><Link to='offer' smoth={true} duration={1000} >Offer</Link></li>
          <li><Link to='about' smoth={true} duration={1000} >About</Link></li>
           <li><Link to='contact' smoth={true} duration={1000} > Contact</Link></li>
    </ul>
  </nav>
 );
}

export default Navbar;
