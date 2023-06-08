import React, { createContext, useState ,useRef } from 'react'
// import Lists from './Lists';
import axios from 'axios';
export const GetValues = createContext();
const Todo = () => {
    const cleardata = useRef();
    console.log("clear",cleardata);
    const [values, setvalues] = useState({
        list : "",
        completed : false
    })
    function PostData(e){
        e.preventDefault()
        axios.post('http://localhost:3500/lists',values)
        .then((response)=>{
            document.location.reload(response);
        })
        .catch((error)=>{
            console.log(error)
        })
        cleardata.current.value = '';

    }
    console.log(values)
    return (
        <GetValues.Provider value={values}>
            <div className='relative'>
                <form onSubmit={PostData}>
                    <input className='py-3 px-4 rounded-sm border-2 border-gray-400 w-80' type="text" placeholder='Enter your Tod work .....'
                    ref={cleardata} onChange={(e) => setvalues({ ...values, list :e.target.value})}/>
                    <button type='submit' className='px-5 py-[0.88rem] absolute right-[0.25rem] rounded-sm text-center bg-slate-600 text-white'>+</button>
                </form>
            </div>
        </GetValues.Provider>
    )
}

export default Todo