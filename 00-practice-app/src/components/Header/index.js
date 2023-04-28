import React from 'react';
import NavBar from '../Navbar';
function Header({ currentPage, handlePageChange }) {


    return (
        <header className="border-1">

            <h1>Cameron's Portfolio</h1>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

        </header>
    );
}

export default Header;
