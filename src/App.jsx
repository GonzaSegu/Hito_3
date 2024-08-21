import React from 'react';
import Navbar from './components/Navbar';
//import Home from './components/Pizzas_Resumen'; 
import Footer from './components/Footer';
import Cart from './components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';
import Pizzas_Listado from './components/Pizzas_Resumen';
import Pizzas_Resumen from './components/Pizzas_Resumen';

function App() {
  return (
    <div>
      <Navbar/>
      {/*<Pizzas_Resumen/>
      <Register/>
      <Login/> */}
      <Cart/>
      <Footer />
    </div>
  );
}

export default App;

