import TodoItem from "./todo-items/TodoItem";

function TodoList({ todoData, onToggle, onDelete }) {
    function handleCheckboxClick(index) {
        onToggle(index);
    }

    function handleDeleteClick(index) {
        onDelete(index);
    }

    // console.log(todoData);
    return (
        <ul>
            {todoData.map((todo) => {
                const todoItemConfigs = {
                                            todoIndex: todo.id, 
                                            text: todo.text,
                                            isCompleted: todo.isCompleted,
                                            onCheckboxClick: handleCheckboxClick,
                                            onDeleteClick: handleDeleteClick,
                                        };

                return <TodoItem key={todo.id} {...todoItemConfigs}/>
            })}
        </ul>  
    );
}

export default TodoList;