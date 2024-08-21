import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import {pizzas} from '../data/listado_pizzas';
import '../assets/css/Pizzas_Resumen.css';

const Pizzas_Resumen = () => {
  return (
    <div>
        <Header />
      <div className='row'>
        {pizzas.map((pizza, index) => (
          <div className='col-md-4' style={{ display: 'flex', justifyContent: 'center' }}>
          <CardPizza
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Pizzas_Resumen
