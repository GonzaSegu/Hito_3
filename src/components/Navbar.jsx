import React from 'react';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const total = 0;
    const token = false;
  
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Pizzería Mamma Mia!</h1>
          <button className='btn_negro'><img src="../src/assets/img/pizzota.jfif" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} /> Home</button>
          {token ? (
            <>
              <button>Profile</button>
              <button>Logout</button>
            </>
          ) : (
            <>
              <button className='btn_negro'><img src="../src/assets/img/login.png" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} /> Login</button>
              <button className='btn_negro'><img src="../src/assets/img/registrarse.jfif" alt="Ver más" style={{ width: '26px', marginLeft: '5px' }} /> Register</button>
            </>
          )}
        </div>
        <div className="navbar-right">
          <button className='btn_negro'><img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '25px', marginLeft: '5px' }} /> Total: ${total.toLocaleString()}</button>
        </div>
      </nav>
    );
}
  
  export default Navbar;