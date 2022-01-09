import { useState } from "react";
import "./styles.css";
import Todo from "./todo.js"

export default function App() {
  
  
  const [todos, setTodos] = useState([""]);
  const [value, setValue] = useState("");

  //re-rendering
  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <input
        onChange = {
          function(event){
            setValue(event.target.value);
          }
        }
        value = {value}
        placeholder = "What tasks do you have?"
      />

      <button onClick = {
        function(){
          if (value === ""){
            return;
          }
          setTodos([...todos, value])
          setValue("");
        }
      } > Add task </button>

      <ul>
      {todos.map(function(todo){
            return <Todo todo = {todo} />
          })}
      </ul>

      <button onClick = {
        function(){
          setTodos([...""]);
        }
      } > Erase All</button>
      
    </div>
  );
}
