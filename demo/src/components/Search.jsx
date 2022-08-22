import React from 'react';
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate();
       const handle = () =>{
        navigate('/')
       }
        return (
         
            <div onLoad={handle}></div>
            
        );
}

export default Search;
