import React, { Component } from 'react';
import TodoItem from './../todo-item/TodoItem';

export default class TodoList extends Component {
    render() {
        const { todos } = this.props;

        return (
            <div className="todo-list-container">
                { todos.map((todo, index) => {
                    return(
                        <TodoItem key={index} todo={todo}></TodoItem>
                    );
                }) }
            </div>
        );
    }
}
