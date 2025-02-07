import TodoItem from "./todo-items/TodoItem";

function TodoList({ todoData, onToggle }) {
    function handleCheckboxClick(index) {
        onToggle(index);
    }

    // console.log(todoData);
    return (
        <ul>
            {todoData.map((todo) => {
                const todoItemConfigs = {todoIndex: todo.id, text: todo.text,  style: todo.style, onCheckboxClick: handleCheckboxClick};

                return <TodoItem key={todo.id} {...todoItemConfigs}/>
            })}
        </ul>  
    );
}

export default TodoList;