import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav className='nav'>
      <a className='site-title' href='../'>PhoneShoppen</a>
      <ul>
        <li>
          <a href="../">About</a>
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
  );
}

export default Navbar;