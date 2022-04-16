import React from 'react'

export default function AddTask({ todo, handleChange, onSubmit }) {
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h2 className="text text-center">Add Task</h2>
                <label htmlFor="name" className="form-label">Task Name:</label>
                <input type="text" className="form-control" name="name" value={todo.name} onChange={handleChange} /> <br /> <br />
                <label htmlFor="description" className="form-label"> Task Description:</label>
                <input type="text" className="form-control" name="description" value={todo.description} onChange={handleChange} /> <br /> <br />
                <label htmlFor="isDone" className="form-label">Task is Done :</label>
                <input type="checkbox" name="isDone" value={todo.isDone} checked={todo.isDone} onChange={handleChange} /> <br /> <br />
                <input type="submit" value="Enregistrer" />
            </form>
        </div>

    )
}
