import { useState } from 'react'
import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList';

const INITIAL_DATA = [
  {
    id: 0,
    text: "sleep",
    isCompleted: false,
  },
  {
    id: 1,
    text: "eat",
    isCompleted: false,
  },
  {
    id: 2,
    text: "study",
    isCompleted: false,
  },
];

// const newTodoObj = {
//   id: todoData[todoData.length - 1].id + 1, // Increment off the last item in 'todoData'
//   text: newTodo,
//   isCompleted: false,
//   style: {},
//   edit: false,
// };

// const crossStyle = {
//   "text-decoration": "line-through",
// }

function App() {
  const [todoData, setTodoData] = useState(INITIAL_DATA);

  /* Adds a new todo to state data */
  function addTodo(newTodo) {
    // Create the new todo object
    const newTodoObj = {
      id: todoData[todoData.length - 1].id + 1, // Increment off the last item in 'todoData'
      text: newTodo,
      isCompleted: false,
      style: {},
      edit: false,
    };

    setTodoData(todoData.concat(newTodoObj));
  }

  /* Toggles the line-through CSS property for a given todo */
  function toggleStrike() {

  }

  return (
    <>
      <h2>Todo App</h2>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoData={todoData} />
    </>
  )
}

export default App
