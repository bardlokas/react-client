import React from "react";
import {Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Norconsult Workshop</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/">Home</Link> 
            <Link to="/leagues">Leagues</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/sports">Sports</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
