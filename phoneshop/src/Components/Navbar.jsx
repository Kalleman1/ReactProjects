import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import {motion} from 'framer-motion';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };
  if(user !== null){
    return (
      <motion.div 
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}>
        <nav className='nav'>
        <a className='site-title' href='../'>PhoneShoppen</a>
        <ul>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="crud">Admin page</a>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <a href="login">Login</a>
            </li>
          )}
        </ul>
      </nav>
      </motion.div>
    );
  }
  else{
    return(
      <motion.div 
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}>
        <nav className='nav'>
        <a className='site-title' href='../'>PhoneShoppen</a>
        <ul>
          <li>
            <a href="../">About</a>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <a href="login">Login</a>
            </li>
          )}
        </ul>
      </nav>
      </motion.div>
    )
  }
}

export default Navbar;