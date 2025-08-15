import { createSlice } from "@reduxjs/toolkit"
import { appendAnecdote, updateAnecdote } from "./anecdoteReducer"

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clearNotification() {
      return ''
    }
  },
  extraReducers: builder => {
    builder
      .addCase(appendAnecdote, (state, action) => {
        return `New anecdote added: "${action.payload.content}"`
      })
      .addCase(updateAnecdote, (state, action) => {
        return `You voted for: "${action.payload.content}"`
      })
  }
})

export const { clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
