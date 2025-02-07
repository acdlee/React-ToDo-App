import TodoItem from "./todo-items/TodoItem";
import TodoItemEdit from "./todo-items/TodoItemEdit";

function TodoList({ todoData, onToggle, onDelete, onEdit, onUpdate }) {
    function handleCheckboxClick(index) {
        onToggle(index);
    }

    function handleDeleteClick(index) {
        onDelete(index);
    }

    function handleEditClick(index) {
        onEdit(index);
    }

    function handleUpdateClick(index, text) {
        onUpdate(index, text);
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
                                            onEditClick: handleEditClick,
                                            onUpdateClick: handleUpdateClick,
                                        };

                return (!todo.edit) ? <TodoItem key={todo.id} {...todoItemConfigs}/>
                                    : <TodoItemEdit key={todo.id} {...todoItemConfigs}/>
            })}
        </ul>  
    );
}

export default TodoList;