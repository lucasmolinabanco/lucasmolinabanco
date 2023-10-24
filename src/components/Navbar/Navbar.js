import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"
 const Navbar = () => {
  return (
    <div className='nav-container'>
     <nav className='navbar'>
     <h1 className='navbar-logo'>shop</h1>
     <ul className='nav-list'>
      <li>
        cart items: <span className='cart-count'>0</span>
      </li>

     </ul>
     <Link className='seeCarrito' to={"/cart"}>Carrito</Link>
     </nav>
    </div>
  )
}
export default Navbar
