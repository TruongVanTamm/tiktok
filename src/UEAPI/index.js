import {useState,useEffect} from 'react'
import {tabs} from './Constain'
function UEAPI(){
    const [post,setPost]=useState([])
    const [type,setType]=useState('posts')
      useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts =>{
         setPost(posts)
        })
      },[type])
      return (
        <div className="App">
          <div>
          {tabs.map((tab)=>{ return <button key={tab}
            style={type === tab ? 
                {
              color: '#0063BD',
              backgroundColor:'#f8f8f8'} 
             : {}
                  } 
             onClick={()=>{setType(tab)}}>
               {tab}
               </button>})}
          </div>
         <h1> Fake API</h1>
          <ul>
            {
              post.map((post)=>{
              return <li key={post.id}>{post.title || post.body || post.name}</li>})
            }
          </ul>
        </div>
      )
        }
export default UEAPI