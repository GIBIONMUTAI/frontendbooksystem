import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Add logic here to handle search functionality 
  };
  return (
    <div>
      <>
        <Navbar bg="info" data-bs-theme="info">
          <Container>
            <Navbar.Brand>BOOK SYSTEM</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" style={{ textDecoration: 'none', paddingLeft: 13 }}>
                Home
              </Link>
              <Link to="/add-book" style={{ textDecoration: 'none', paddingLeft: 13 }}>
                Add Book
              </Link>
            </Nav>
            <div className="search-container">
              <input type="text" placeholder="Search Books..."value={searchTerm} onChange={handleSearchChange}
                className="search-input"/>
              <button type="button" className="search-button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
