/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../Store/Features/TodoSlice";

function Todo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todo.todos);

  console.log(todos);
  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo("");
    }
  };

  const handleClearTodos = () => {
    dispatch(clearTodo());
  };

  return (
    <>
      <Container>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button onClick={handleAddTodo}>Add List</button>
        </div>

        {todos.map((todo) => (
          <div key={todo.id} className="show">
            <div>{todo.text}</div>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </div>
        ))}
        {todos.length > 0 && (
          <button onClick={handleClearTodos}>Clear All</button>
        )}
      </Container>
    </>
  );
}

export default Todo;
