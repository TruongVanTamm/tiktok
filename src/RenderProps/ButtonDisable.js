import {useState} from 'react'
function Button({content,data}){
    const [disabled,setDisabled]=useState(false)
    const handleConsole=()=>{
      setDisabled(true)
      setTimeout(()=>{
        setDisabled(false)
      },10000)
      return console.log(Math.random())
    }
    return (
      <div>
        <button onClick={handleConsole} disabled={disabled}>{content}</button>
        {
          data.map((item)=>{
            return <li key={item}>{item}</li>
          })
        }
      </div>
    )
  }
  export default Button