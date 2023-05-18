import React from 'react';

function Navbar() {
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
        <li>
          <a href="login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;