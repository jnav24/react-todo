import React, { Component } from 'react';
import './App.css';
import AddTodo from './add-todo/AddTodo';
import TodoItem from './todo-item/TodoItem';
import TodoList from './todo-list/TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    render() {
        return (
            <div className="app">
                <AddTodo></AddTodo>
                <TodoList/>
                <TodoItem/>
            </div>
        );
    }

    componentDidMount = () => {
        const todos = localStorage.getItem('todos');

        if (todos) {
            const savedTodos = JSON.parse(todos);
            this.setState({
                todos: savedTodos,
            });
        } else {
            console.log('no todos');
        }
    }
}

export default App;
