import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [{
    id: nanoid(),
    userTodo: 'Start Making Real Life Project',
    isComplete: false
}]
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: nanoid(), userTodo: action.payload, isComplete: false })
        },
        toggleComplet: (state, action) => {
            const todo = state.find((t) => t.id === action.payload)
            if (todo) {
                todo.isComplete = !todo.isComplete
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((t) => t.id !== action.payload)
        }
    }
})
export const { addTodo, toggleComplet, deleteTodo } = todoSlice.actions

export default todoSlice.reducer