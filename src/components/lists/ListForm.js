import React, { Component } from 'react';
import TodoItem from './ListItems'
// import './component.css';

class TodoList extends React.Component {

    render() {
    return (
        <div>
        {this.props.items.map(item => (
        <TodoItem id={item.id} status={item.status} task={item.task} deleteItem={this.props.deleteItem} markItemComplete={this.props.markItemComplete} />
        ))}
    </div>

    );
  }
}

export default TodoList;