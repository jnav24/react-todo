import React, { Component } from 'react';

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
        };
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={(e) => this.submitTodo(e)}>
                    <input id="addTodoInput" onChange={(e) => this.updateInput(e)} type="text"/>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value });
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    }
}
