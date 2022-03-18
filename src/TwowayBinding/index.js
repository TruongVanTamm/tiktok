import {useState} from 'react'
function TwowayBinding(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
 function handleSummit(){
   console.log(
    {
      name,
      email
    }
   )
 }
  return (
    <div style={{padding: 32}}>
      <input type="text"
      value={name}
      onChange={function(e){
        return setName(e.target.value)
      }}
      />
        <input type="email"
      value={email}
      onChange={function(e){
        return setEmail(e.target.value)
      }}
      />
      <button onClick={handleSummit}>Summit</button>
    </div>
  )
}
export default TwowayBinding