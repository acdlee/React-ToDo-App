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
    style: {},
    edit: false,
  },
  {
    id: uuidv4(),
    text: "eat",
    isCompleted: false,
    style: {},
    edit: false,
  },
  {
    id: uuidv4(),
    text: "study",
    isCompleted: false,
    style: {},
    edit: false,
  },
];

// const newTodoObj = {
//   id: todoData[todoData.length - 1].id + 1, // Increment off the last item in 'todoData'
//   text: newTodo,
//   isCompleted: false,
//   style: {},
//   edit: false,
// };

const CROSSSTYLE = {
  "textDecoration": "line-through",
}

function App() {
  const [todoData, setTodoData] = useState(INITIAL_DATA);

  /* Adds a new todo to state data */
  function addTodo(newTodo) {
    // Create the new todo object
    const newTodoObj = {
      id: uuidv4(),
      text: newTodo,
      isCompleted: false,
      style: {},
      edit: false,
    };

    setTodoData(todoData.concat(newTodoObj));
  }

  /* Toggles the line-through CSS property for a given todo */
  function toggleStrike(index) {
    setTodoData(todoData.map((todo) => {
      const updatedStyle = Object.keys(todo.style).length === 0 ? CROSSSTYLE : {};  // To strike or not to strike
      return todo.id == index ? {...todo, style: updatedStyle} : todo;              // Return updated or unchanged todo
    }))
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
