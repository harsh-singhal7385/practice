import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="container text-center">
                <h1 className="mt-5">
                welcome to home / index page...
                </h1>
                <div className="mt-5 row">
                    <div className="mt-5 col">
                    <button type="button" className="btn btn-primary"><Link className='text-white' to="/create">Create </Link></button>
                    </div>  
                    <div className="mt-5 col">
                    <button type="button" className="btn btn-warning"><Link className='text-white' to="/search">Search </Link></button>
                    </div>   
                </div> 
                <div className="mt-5 row">
                    <div className="mt-5 col">
                    <button type="button" className="btn btn-info"><Link className='text-white' to="/update">Update </Link></button>
                    </div>  
                    <div className="mt-5 col">
                    <button type="button" className="btn btn-danger"><Link className='text-white' to="/delete">Delete </Link></button>
                    </div>  
                </div> 
            </div>  
        </div>
    );
}

export default Home;
