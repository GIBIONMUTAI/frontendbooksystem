import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookList() {
  const baseUrl = "http://localhost:8000/";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 4; 
  useEffect(() => {
    getData();
  }, []);

  const config = {
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*"
    }
  };

  async function getData() {
    try {
      const response = await axios.get(baseUrl + 'books', config);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const handleDelete = async (bookId) => {
    // Confirmation before deletion
    const confirmDelete = window.confirm("Confirm book deletion?");

    if (confirmDelete) {
      try {
        const response = await axios.delete(baseUrl + 'books/' + bookId, config);
        console.log(response.data);
        // Update the data state to reflect the deleted book
        const updatedData = data.filter((item) => item._id !== bookId);
        setData(updatedData);
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  }
  // Function to calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  // Function to generate page buttons dynamically
  const renderPageButtons = () => {
    const pageButtons = [];
    // Create buttons for a maximum of 5 pages around the current page
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'primary' : 'secondary'}
          onClick={() => handlePageChange(i)}
        > {i}
        </Button>
      );
    }
    return pageButtons;
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const slicedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="container mt-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Year Published</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {slicedData.map((item) => (
              <tr key={item._id}>
                {/* <td>{item._id}</td> */}
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.genre}</td>
                <td>{item.year_published}</td>
                <td>
                  <Link to={`update/${item._id}`} className='btn btn-info btn-sm m-2'>Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center mt-2">
        {renderPageButtons()}
      </div>
    </div>
  );
}

export default BookList;
