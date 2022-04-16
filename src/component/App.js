import React, { Component } from 'react';
import TodoList from "./todo/TodoList";
import AddTask from './todo/AddTask';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      isDone: false,
      todos: [
        {
          name: "react courses",
          description: "Nous apprenons react",
          isDone: true,
        },
        {
          name: "react courses",
          description: "Nous apprenons react",
          isDone: true,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const { name, description, isDone, todos } = this.state;
    const todo = { name, description, isDone };
    const newTodos = [...todos, todo];
    this.setState({ todos: newTodos });
    this.setState({
      name: "",
      description: "",
      isDone: "",
    });
  }



  render() {
    const { name, description, isDone } = this.state;
    const todo = { name, description, isDone };
    return (
      <div className="">
        <h1 className="text text-center">Todos Apps</h1>
        <AddTask
          todo={todo}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        /> <hr />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

