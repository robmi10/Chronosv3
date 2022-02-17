import './App.css';
import Home from './pages';
import { ContextProvider } from './components/Context/Context';
import { Product } from './components/Shop/Products/product';
import Cart from './components/Cart/Cart';
import Data from './components/Data';
import Checkout from './components/Checkout/CheckoutForm/Checkout';
import { Chronos } from './components/ReadMore/Chronos/chronos';
import { Science } from './components/ReadMore/Science/science';
import { useState } from 'react';
import Sidebar2 from './components/SideBar2';
import { Routes, Route } from "react-router-dom";

function App() {
  
  const [isOpen, setisOpen] = useState(false)

  const toggle = () =>{
    console.log("inside toogleee in app js FIRST!", isOpen)
    setisOpen(!isOpen)
    console.log("inside toogleee in app js SECOND!",isOpen)
}
  return (
    <ContextProvider>
        <Sidebar2 isOpen = {isOpen} toggle = {toggle}/>
       
            <Data/>
            
            <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cart"  element={<Cart toggle = {toggle} />}/>
            <Route exact path="/checkout" element={<Checkout />}/>
            <Route exact path="/omoss" element={<Chronos />}/>
            <Route exact path="/vetenskap" element={<Science/>}/>
            </Routes>
       

    </ContextProvider>
  );
}

export default App;
