import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
    const [values, setvalues] = useState({
        list: "",
        completed: false
    })
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3500/lists/' + id)
            .then((response) => {
                setvalues(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const navigate = useNavigate();
    function EditData(e) {
        e.preventDefault();
        axios.put('http://localhost:3500/lists/' + id, values)
            .then((response) => {
                console.log(response);
                navigate('/');
            }
            )
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className='p-5'>
            <form onSubmit={EditData}>
                <input className='px-4 py-3 w-72 ' type="text" placeholder='edit your todo ....' onChange={(e) => setvalues({...values,list:e.target.value})} />
                <p className='my-2 p-3'>{values.list}</p>
                <button className='px-5 py-3 bg-green-500' type='submit'>Edit</button>
            </form>
        </div>
    )
}

export default Edit