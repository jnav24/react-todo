import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list/TodoList';
import TodoItem from './todo-item/TodoItem';

class App extends Component {
    render() {
        return (
            <div className="app">
                <TodoList/>
                <TodoItem/>
            </div>
        );
    }

    componentDidMount = () => {
        const todos = localStorage.getItem('todos');

        if (todos) {
            console.log('has todos');
        } else {
            console.log('no todos');
        }
    }
}

export default App;
