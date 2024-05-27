import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <div className={`navMenu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
                    Home
                </Link>
                <a href="#menu" onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>
                    Menu
                </a>
                <a href="#downloadApp" onClick={() => setMenu('mobileApp')} className={menu === 'mobileApp' ? 'active' : ''}>
                    Mobile App
                </a>
                <Link to="About" onClick={() => setMenu('About')} className={menu === 'About' ? 'active' : ''}>
                    About
                </Link>
                <a href="#footer" onClick={() => setMenu('contactUs')} className={menu === 'contactUs' ? 'active' : ''}>
                    Contact Us
                </a>
            </div>
            <div className="rightNav">
                <img src={assets.search_icon} alt="" />
                <div className="navSearchIcon">
                    <Link to='/cart'><img className="cart" src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                </div>
            </div>
            <div className="menuToggle" onClick={toggleMenu}>
                <span className="toggleIcon">&#9776;</span> {/* Hamburger icon */}
            </div>
        </div>
    );
};

export default Navbar;













// import React, { useState } from 'react'
// import  './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const Navbar = ({setShowLogin}) => {

// const [menu, setMenu]  = useState("Home");

//   return (
//     <div className='navbar'>
//         <img src={assets.logo} alt="" className="logo" />
//         <ul className="navMenu">
//             <Link to='/' onClick={()=>setMenu("Home")} className={menu === "Home"?"active":""}>Home</Link>
//             <a href='#menu' onClick={()=>setMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
//             <a href='#downloadApp' onClick={()=>setMenu("mobileApp")} className={menu === "mobileApp"?"active":""}>Mobile App</a>
//             <a href='#' onClick={()=>setMenu("about")} className={menu === "about"?"active":""}>About</a>
//             <a href='#footer' onClick={()=>setMenu("contactUs")} className={menu === "contactUs"?"active":""}>Contact Us</a>
//         </ul>
//         <div className="rightNav">
//             <img src={assets.search_icon} alt="" />
//             <div className="navSearchIcon">
//                 <img className="cart" src={assets.basket_icon} alt="" />
//                 <div className="dot"></div>
//                 <button onClick={()=>setShowLogin(true)}> Sign In</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar









// import React, { useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';

// const Navbar = ({ setShowLogin }) => {
//     const [menu, setMenu] = useState('Home');
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

//     // Function to toggle menu
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="navbar">
//             <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
//             <div className={`navMenu ${isMenuOpen ? 'active' : ''}`}>
//                 <Link to="/" onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>
//                     Home
//                 </Link>
//                 <a href="#menu" onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>
//                     Menu
//                 </a>
//                 <a
//                     href="#downloadApp"
//                     onClick={() => setMenu('mobileApp')}
//                     className={menu === 'mobileApp' ? 'active' : ''}
//                 >
//                     Mobile App
//                 </a>
//                 <a href="#" onClick={() => setMenu('about')} className={menu === 'about' ? 'active' : ''}>
//                     About
//                 </a>
//                 <a
//                     href="#footer"
//                     onClick={() => setMenu('contactUs')}
//                     className={menu === 'contactUs' ? 'active' : ''}
//                 >
//                     Contact Us
//                 </a>
//             </div>
//             <div className="rightNav">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navSearchIcon">
//                     <Link to='/cart'><img className="cart" src={assets.basket_icon} alt="" /></Link>
//                     <div className="dot"></div>
//                     <button onClick={() => setShowLogin(true)}>Sign In</button>
//                 </div>
//             </div>
//             <div className="menuToggle" onClick={toggleMenu}>
//                 {/* Icon for toggling menu */}
//             </div>
//         </div>
//     );
// };

// export default Navbar;