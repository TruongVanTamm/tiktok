import {useState} from 'react'
function MouseOver({contentH1}){
    const [toado,setToado]=useState({x:0, y:0})
    const handleMouseOver=(e)=>{
      const { clientX, clientY } = e
      return setToado({x: clientX , y: clientY })
    }
    return (
        <div style={{ height: '100%' ,  backgroundColor: 'red'}} onMouseMove={handleMouseOver}>       
            <h1>{contentH1} <div>{toado.x}, {toado.y}</div></h1> 
        </div>
      )
    }
export default MouseOver