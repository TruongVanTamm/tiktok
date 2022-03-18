import {useState} from 'react'
import {courses} from './Course.js'
function CheckBox(){
    const [checked,setCheckd]=useState([])
    function handleSummit(){
        console.log(checked)
    }
    function handleCheckd(id){
        setCheckd(function(prev){
          let isChecked=checked.includes(id)
          if(isChecked){
            return checked.filter(function(item){
              return item !== id
            })
          }
          else{
            return  [...prev, id]   
          }
        }
        )           
    }
    return (
        <div className="" >
        {
        courses.map(function(item){
          return (
            <div key={item.id}>
             <input type="checkbox"
             checked={checked.includes(item.id)}
             onChange={function(){
              return handleCheckd(item.id )
            }}
             />
             <label>{item.name}</label>
            </div>
          )
        })   
    }
     <button onClick={handleSummit}>Summit</button>
      </div>
    )
}
export default CheckBox