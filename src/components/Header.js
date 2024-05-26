import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission if applicable

    // Implement search logic here
    if (searchTerm) {
      // Perform search using searchTerm
      console.log(`Search term: ${searchTerm}`);
    } else {
      console.log('Empty search term');
    }
  };

  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand>BOOK SYSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/add-book" className="nav-link">
              Add Book
            </Link>
          </Nav>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2" type="search" placeholder="Search Books..." value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search"
            />
            <button type="submit" className="btn btn-outline-success">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
