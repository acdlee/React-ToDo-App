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

function App() {
  const [todoData, setTodoData] = useState(INITIAL_DATA);

  function updateTodoData(newTodo) {
    // Create the new todo object
    const newTodoObj = {
      id: todoData[todoData.length - 1].id + 1, // Increment off the last item in 'todoData'
      text: newTodo,
      isCompleted: false,
    };

    setTodoData(todoData.concat(newTodoObj));
  }

  return (
    <>
      <AddTodoForm onAddTodo={updateTodoData} />
      <TodoList todoData={todoData} />
    </>
  )
}

export default App
