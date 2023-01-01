import { Typography } from '@mui/material'
import { useTodoStore } from '../store/todoStore'

const CompletedToDosCounter = () => {
    const { getCompletedTodos } = useTodoStore()
    const totalCompletedTodos = getCompletedTodos()

    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            Total completed to-dos: {totalCompletedTodos}
        </Typography>
    )
}

export default CompletedToDosCounter
