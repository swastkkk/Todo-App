import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos';



function App(){
  const [todos, setTodos]=useState([]);

  function getTodos(){
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
    const json=await res.json();
    console.log(json);
    setTodos(json.todos);
  });
}
useEffect(()=>{
  getTodos()
},[]);
  return(
    <div>
      <CreateTodo getTodos={getTodos}></CreateTodo>
      <Todos todos={todos} getTodos={getTodos}></Todos>
    </div>
  )

}

export default App
