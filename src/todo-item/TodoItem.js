import React, { Component } from 'react';
import './todo-items.css';

export default class TodoItem extends Component {
    render() {
        const { todo } = this.props;

        return (
            <div
                onClick={this.toggleTodo}
                className={'todo-item ' + (todo.completed ? 'completed' : '')}>
                {todo.text}
            </div>
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }
}
