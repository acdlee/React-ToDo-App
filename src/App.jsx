import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList';

const INITIAL_DATA = [
  {
    id: uuidv4(),
    text: "sleep",
    isCompleted: false,
    edit: false,
  },
  {
    id: uuidv4(),
    text: "eat",
    isCompleted: false,
    edit: false,
  },
  {
    id: uuidv4(),
    text: "study",
    isCompleted: false,
    edit: false,
  },
];

function App() {
  const [todoData, setTodoData] = useState(INITIAL_DATA);

  /* Adds a new todo to state data */
  function addTodo(newTodo) {
    // Create the new todo object
    const newTodoObj = {
      id: uuidv4(),
      text: newTodo,
      isCompleted: false,
      edit: false,
    };

    setTodoData(todoData.concat(newTodoObj));
  }

  /* Toggles the line-through CSS property for a given todo */
  function toggleStrike(index) {
    setTodoData(todoData.map((todo) => (
      todo.id == index ? {...todo, isCompleted: !todo.isCompleted} : todo // Toggle target todo's "isComplete" property
    )));
  }

  return (
    <>
      <h2>Todo App</h2>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList 
        todoData={todoData} 
        onToggle={toggleStrike} />
    </>
  )
}

export default App
