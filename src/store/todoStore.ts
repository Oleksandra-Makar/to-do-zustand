import create from 'zustand'
import { IToDo } from '../interfaces/Todo'
import { v4 as uuidv4 } from 'uuid'

interface TodoState {
    todos: IToDo[]
    addTodo: (title: string) => void
    deleteTodo: (id: string) => void
    toggleTodoStatus: (id: string) => void
    getCompletedTodos: () => number
}

export const useTodoStore = create<TodoState>((set, getState) => ({
    todos: [],
    addTodo: (title) => {
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: uuidv4(),
                    title,
                    completed: false,
                } as IToDo,
            ],
        }))
    },
    deleteTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }))
    },
    toggleTodoStatus: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        }))
    },
    getCompletedTodos: () => getState().todos.filter((todo) => todo.completed === true).length,
}))
