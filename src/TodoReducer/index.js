import React from 'react';
import {useReducer,useRef} from 'react'
import {setJob,addJob,deleteJob} from './Action'
import reducer from './Reducer'
import {initState} from './Reducer' 
  function Todo (){
    const inputRef=useRef()
    const [state,dispatch]=useReducer(reducer,initState)
    const {job,jobs}=state
    const handleSummit=()=>{
      dispatch(addJob(job))
      dispatch(setJob(''))
      inputRef.current.focus()
    }
    return (
      <div>
   
        <h2>Todo</h2>
        <i className='bx bx-user'></i>
     <i className='bx bxs-user'></i>
      <i className='bx bxl-facebook-square'></i>
        <input 
        ref={inputRef}
        type="text" 
        placeholder='Enter todo...'
        value={job}
        onChange={(e)=>{return dispatch(setJob(e.target.value))}}
        />
        <button onClick={handleSummit}>Add</button>
        <ul>
          {jobs.map((job,index)=>{
            return <li key={index}>{job}   <i className="fa-solid fa-xmark" onClick={()=>{
              return dispatch(deleteJob(index))}}></i></li>    
          })}
  
        </ul>
      </div>
    )
  }
export default Todo