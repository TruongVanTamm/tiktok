import {useState,useEffect} from 'react'
const lessons=[
      {
        id:1,
        name:'HTML'
      },
      {
        id:2,
        name:'JavaScript'
      },
      {
        id:3,
        name:'ReactJS'
      },
    ]
    function emitComment(id){
      setInterval(()=>{
        window.dispatchEvent(
          new CustomEvent(`lesson-${id}`,{
            detail: ` Noi dung comment cua lessin ${id}`
          })
        )
      },2000)
    }
    emitComment(1)
    emitComment(2)
    emitComment(3)
    function Fakechat(){
      const [lessonId, setLessonId]=useState(1)
      useEffect(() =>{
        const handleCommnet=({detail})=>{
          console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`,handleCommnet)
        return (()=>{
          return  window.removeEventListener(`lesson-${lessonId}`,handleCommnet)
        }
        )
      },[lessonId])
      return (
        <div>
          <ul>
            {
              lessons.map((lesson)=>{
                return <li 
                key={lesson.id} 
                style={{
                  color: lessonId === lesson.id ? 'red' : '#333',
                  cursor: 'pointer'
                }}
                onClick={()=>{return setLessonId(lesson.id)}}
                >
                  {lesson.name}
                </li>
              })
            }
          </ul>
        </div>
      )
    }
export default  Fakechat