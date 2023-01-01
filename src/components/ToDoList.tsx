import { List } from '@mui/material'
import ToDoItem from './ToDoItem'
import { useTodoStore } from '../store/todoStore'

const ToDoList = () => {
    const { todos } = useTodoStore()

    return (
        <List>
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                />
            ))}
        </List>
    )
}

export default ToDoList
