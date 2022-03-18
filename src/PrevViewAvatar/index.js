import {useState,useEffect} from 'react'
function PrevViewAvatar(){
    const [avatar,setAvatar]=useState()
    useEffect(()=>{
        return(()=>{
          return avatar && URL.revokeObjectURL(avatar.PrevView)
        })
      },[avatar])
    const handlePreAvatar= (e)=>{
        const file=e.target.files[0]
        file.PrevView=URL.createObjectURL(file)
        setAvatar(file)
      }
    return (
      <div className="chooseAvatar" >
      <input type="file" 
    onChange={handlePreAvatar}
        />
          {avatar && (
      <img src={avatar.PrevView} alt="" className="avatar"/>
         )}
    </div>
    )   
}
export default PrevViewAvatar