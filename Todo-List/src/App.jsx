import { useState } from "react"
import './App.css'

function App(){

  const [ todos , settodos] = useState([])

  function addClick(){
    if (todoText.trim()===""){
      return
    }
    else{
      settodos([
      ...todos,
      {
        id : Date.now(),
        text:todoText,
        completed : false,
      }
    ])
    setTodoText("")
    }
    
    
  }

  function checkButton(id){
    settodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed : !todo.completed
          }
        }
        return todo
      })
    )
  }


  function deleteButton(id){
    settodos(
      todos.filter(todo => todo.id !== id )
    )

  }

  const [todoText,setTodoText] = useState("")

  function todoInputText(event) {
    setTodoText(event.target.value)
  }
  return(
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter your task" onChange={todoInputText}  value={todoText} />
      <button onClick={addClick}>Add</button>
      {todos.map(todo => {
        return (<div key={todo.id}>
          <input type="checkbox"  onChange={() => checkButton(todo.id)}/>
          <span className={todo.completed ? "todotextaftermarked" : ""} >{todo.text}</span>
          <button onClick={() => deleteButton(todo.id)} >x</button>
          </div>)
        })}
    </div>
  )
}

export default App