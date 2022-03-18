import './App.css';
import {useState} from 'react'
import Content from '../Content/Content.js';
function App() {
  const [show, setShow]=useState(false)
  return (
    <div className=""style={{textAlign: "center"}} >
      <button onClick={()=> { setShow(!show)}}>Toggle</button>            
          {show && <Content />}
      </div>
  )
}
export default App;

