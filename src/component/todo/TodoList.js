import React from 'react';
import { Todo } from "./Todo";

export default function TodoList({ todos }) {
    return (
        <div className="container">
            {todos.map((todo) => {
                return (
                    <div style={{ marginTop: "10px" }}>
                        <Todo todo={todo} />
                    </div>
                )
            })}</div>
    );
}
