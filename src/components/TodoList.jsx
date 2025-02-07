import TodoItem from "./todo-items/TodoItem";

function TodoList({ todoData }) {
    function handleCheckboxClick(index) {
        console.log(index);
    }

    return (
        <ul>
            {todoData.map((todo) => {
                const todoItemConfigs = {todoIndex: todo.id, text: todo.text, onCheckboxClick: handleCheckboxClick};
                
                return <TodoItem key={todo.id} {...todoItemConfigs}/>
            })}
        </ul>  
    );
}

export default TodoList;