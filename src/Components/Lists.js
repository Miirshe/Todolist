import React, { useContext, useEffect, useState } from 'react'
import  {GetValues}  from './Todo';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
const Lists = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3500/lists')
        .then((response)=>{setData(response.data)})
        .catch((error)=>{
            console.log(error)
        })
    },[])
    const textData = useContext(GetValues);
    // console.log("haye",textData);
    function DeletList(id){
        const confirm = window.confirm("did your sure to delete this todo...")
        if(confirm){
            axios.delete('http://localhost:3500/lists/'+id)
        .then((response)=>{
            document.location.reload(response);
        })
        .catch((error)=>{
            console.log(error)
        })
        }
    }
    function completedTodo(id){
        const tick = data.map(val=>{
            if(val.id===id){
                return {...val , completed : !val.completed}
            }else{
                return val;
            }
        })
        setData(tick);
    }
    const tasks = data.map(task=>{
        return task;
    })
    const completedTasks = data.filter(task=>{
        return task.completed === true;
    })
  return (
    <div className='mt-3'>
        {
            data.map(val=>{
                return(
                    <div key={val.id} className='p-2 flex justify-start items-center gap-4'>
                        <p className='text-gray-900 border-b-2 border-gray-600 ' style={{textDecoration : val.completed ? "line-through" : " "}}>{val.list}</p>
                        <button onClick={()=>completedTodo(val.id)} className='text-lg text-green-600'><i className="fa-solid fa-circle-check"></i></button>
                        <Link to={`/Edit/${val.id}`} className='text-lg text-blue-800'><i className="fa-sharp fa-solid fa-file-pen"></i></Link>
                        <button onClick={()=>DeletList(val.id)} className='text-lg text-red-500'><i className="fa fa-trash"></i></button>
                    </div>
                )
            })
        }
        <div className='flex justify-between p-3'>
            <p className=' tracking-wider'>{tasks.length} All Tasks </p>
            <p className=' tracking-wider'>{completedTasks.length} Completed</p>
        </div>
    </div>
  )
}

export default Lists