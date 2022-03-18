import {useState} from 'react'
function TodoState(){
      const [job,setJob]=useState('')
      const [jobs,setJobs]=useState(function(){
        const storageJobs=JSON.parse(localStorage.getItem('jobStorage'))
        return storageJobs ?? []
      })
      function handleSummit(){
        if(job !== ''){
          setJobs(function(prev){
           const newJobs=[...prev, job]
           const jsonJobs=JSON.stringify(newJobs)
           localStorage.setItem('jobStorage',jsonJobs)
           return newJobs
         })
         setJob('')
        }
      }
      return (
          <>
        <div style={{display: 'flex',alignItems:'center',justifyContent: 'center',gap:20}}>
          <input type="text"
          value={job}
          onChange={function(e){
            return setJob(e.target.value )
          }}
           />
           <button onClick={handleSummit} style={{display:'block'}}>Add</button>
        </div>
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
export default TodoState