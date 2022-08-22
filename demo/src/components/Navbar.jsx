import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            {/* <nav> */}
                <Link to="/">Home </Link>
                <Link to="/create">Create </Link>
                <Link to="/search">Search </Link>
                <Link to="/update">Update </Link>
                <Link to="/delete">Delete </Link>
            {/* </nav>    */}
        </div>
    );
}

export default Navbar;
