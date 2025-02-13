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

  /* Removes the todo with id 'index' from state data */
  function deleteTodo(index) {
    setTodoData(todoData.filter((todo) => (
      todo.id != index         // Filter (remove) target todo
    )));
  }

  function toggleEdit(index) {
    setTodoData(todoData.map((todo) => (
      todo.id == index ? {...todo, edit: !todo.edit} : todo // Toggle target todo's "edit" property
    )));
  }

  function updateTodo(index, updateText) {
    // Update todo 
    setTodoData(todoData.map((todo) => (
      todo.id == index ? {...todo, text: updateText, edit: false} : todo   // Update target todo's "text" property; toggle "edit" to leave edit view
    )));
  }

  return (
    <>
      <h2>Todo App</h2>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList 
        todoData={todoData} 
        onToggle={toggleStrike} 
        onDelete={deleteTodo} 
        onEdit={toggleEdit} 
        onUpdate={updateTodo} />
    </>
  )
}

export default App
