import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'
import Search from './Search';


const Create = () => {
    const navigate = useNavigate()
    const [ data, setData ] = useState(
        {
            fname : "",
            lname : "",
            email : "",
            number : "",
            password : "",
            cpassword : ""
        }
    );
    
    const handleSubmit = async (event) =>{

        event.preventDefault()
        console.log(event.target)
        console.log(data)

        const res = await axios.post('http://localhost:5000/create',data)

        if(res.status == 200){
            console.log(res.data)
            console.log(res.data)
            console.log("form received status in reactjs...")
            navigate("/",{replace : true})
            
        }else{
            console.log("issue in sharing data...")
        }


    }

    const handleData = (event) => {
        const { name , value} = event.target

        setData((prevState)=>{
            return {
                ...data,
                [name] : value
            }
        })
    }

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);
    return (
        <div>
            <div className='container'>
                <h1 className='mt-5'>Enter Form Data...</h1>
                <form action='http://localhost:5000/create' className='mt-5 ' method="post">
                    <div className='row mt-5'>
                        <div className='col'>
                            <div className='form-group'>
                                <input type="text" name="fname" value={data.fname} onChange={handleData} placeholder="enter first name" className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <input type="text" name="lname" value={data.lname} onChange={handleData} placeholder="enter last name" className='form-control' />
                            </div>
                        </div>
                    </div><div className='row mt-5'>
                        <div className='col'>
                            <div className='form-group'>
                                <input type="email" name="email" value={data.email} onChange={handleData} placeholder="enter email" className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <input type="tel" name="number" value={data.number} onChange={handleData} placeholder="enter number" className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col'>
                            <div className='form-group'>
                                <input type="password" name="password" value={data.password} onChange={handleData} placeholder="enter password" className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <input type="password" name="cpassword" value={data.cpassword} onChange={handleData} placeholder="enter confirm password" className='form-control' />
                            </div>
                        </div>
                        <div className='mt-5 text-center'>
                            <input type="submit" className='btn btn-primary' onClick={handleSubmit} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
