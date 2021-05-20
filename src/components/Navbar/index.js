import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Trabajo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/basico' activeStyle>
            Basicos
          </NavLink>
          <NavLink to='/avanzado' activeStyle>
            Avanzados
          </NavLink>
          <NavLink to='/grafica' activeStyle>
            Grafica
          </NavLink>
          <NavLink to='/grafica2' activeStyle>
            Grafica2
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
