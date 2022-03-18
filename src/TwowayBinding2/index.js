import  TodolistLocalStorage from './TodolistLocalStorage.js'
import  Radio from './Radio.js'
import  CheckBox from './CheckBox.js'
function TwowayBinding2(){
  
  return (
    <div style={{padding: 32}}>
      <Radio></Radio>
      < TodolistLocalStorage></TodolistLocalStorage>
      <CheckBox></CheckBox>
    </div>
  )
}
export default TwowayBinding2