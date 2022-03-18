import {useState} from 'react'
import {courses} from './Course.js'
function Radio(){
const [checked,setCheckd]=useState([])
  function handleSummit(checked){
        const Summit= {id: checked}
        console.log(Summit)
  }
  return (
      <div className="" >
        {
        courses.map(function(item){
          return (
            <div key={item.id}>
             <input type="radio"
              checked={item.id === checked}
             onChange={function(){
                handleSummit(item.id);
               return setCheckd(item.id)
             }}
             />
            </div>
          )
        })   
      }
      </div>
  )
}
export default Radio