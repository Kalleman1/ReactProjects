import { Crud } from './Pages/CRUD';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart'
import {motion} from 'framer-motion';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const removeItem = (key) => {
    const updatedCartItems = cartItems.filter((item) => item.key !== key);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }

  return (
    <>
     <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/crud" element={<Crud />} />
            <Route path=''element={<Home cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path='/cart' element={<Cart cartItems={cartItems} removeItem={removeItem} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>
        <Footer/>
      </motion.div>
    </div>
    </>
  );
}

export default App;
