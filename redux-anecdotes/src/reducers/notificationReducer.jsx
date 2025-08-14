import { createSlice } from "@reduxjs/toolkit"
import { createAnecdote, addVote } from "./anecdoteReducer"

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
      .addCase(createAnecdote, (state, action) => {
        return `New anecdote added: "${action.payload}"`
      })
      .addCase(addVote, (state, action) => {
        return `You voted for: "${action.payload.content}"`
      })
  }
})

export const { clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
