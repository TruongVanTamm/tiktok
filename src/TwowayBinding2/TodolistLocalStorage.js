import {useState} from 'react'
function TodolistLocalStorage(){
    const [jobs,setJobs]=useState(function(){
        const storageJobs=JSON.parse(localStorage.getItem('job'))
        return storageJobs ?? []
      })
      const [job,setJob]=useState('')
    function handleSummit(){
        if(job !== ''){
          setJobs(function(prev){
            const newJobs=[...prev,job]
            const jsonJobs=JSON.stringify(newJobs)
            localStorage.setItem('job',jsonJobs)
            return newJobs
          })
          setJob('')
        }
      }
      return (
          <>
         <input type="text"
        value={job}
        onChange={function(e){
          return setJob(e.target.value)
          
        }}
         />
      <button onClick={handleSummit}>Add</button>
      <ul>
       {
         jobs.map(function(job,index){
            return <li key={index}>{job}</li>
         })
       }
      </ul>
          </>
      )
}
export default  TodolistLocalStorage