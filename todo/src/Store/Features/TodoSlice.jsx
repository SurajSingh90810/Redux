/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearTodo: (state, action) => {
      state.todos = [];
    },
  },
});

console.log("Actions", TodoSlice);

export const { addTodo, deleteTodo, clearTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
