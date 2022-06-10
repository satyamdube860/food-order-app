import React from 'react';
import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Carts/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]= useState(false);
  
  const showCartHandler = ()  =>{
    setCartIsShown(!cartIsShown)}
   
  const closeCartHandler =()=>{
  setCartIsShown(false);
  }
  return (
   <CartProvider>
     {cartIsShown && <Cart onClose={closeCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
  <Meals/>
     </main>
   </CartProvider>
  );
}

export default App;
