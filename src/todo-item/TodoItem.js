import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const { todo } = this.props;

        return (
            <div
                onClick={this.toggleTodo}
                className="todo-item">
                {todo.text}
            </div>
        );
    }

    toggleTodo() {
        this.props.updateTodoFn(this.props.todo);
    }
}
