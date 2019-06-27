import React, { Component } from 'react';
import './App.css';
import AddTodo from './add-todo/AddTodo';
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
                <AddTodo addTodoFn={this.addTodo}></AddTodo>
                <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos} />
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

    addTodo = async (todo) => {
        await this.setState({
            todos: [
                ...this.state.todos,
                {
                    text: todo,
                    completed: false
                },
            ],
        });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    updateTodo = (todo) => {
        const todos = this.state.todos.map((_todo) => {
            if (todo === _todo) {
                return {
                    text: todo.text,
                    completed: !todo.completed
                }
            }

            return todo;
        });
        this.setState({
            todos,
        });
    }
}

export default App;
