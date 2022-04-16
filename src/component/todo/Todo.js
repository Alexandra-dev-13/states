import React from 'react'

export const Todo = ({todo}) =>{
  return (
    <div>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
        <input type="checkbox" value={todo.isDone} checked={todo.isDone} />
    </div>
  )
}
