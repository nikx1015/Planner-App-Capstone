import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import List from './List'



export default class ListItems extends Component {
    state = {
        lists: "",
        items: []
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          lists: '',
          items: [...this.state.items, this.state.lists]
        });
      }
      render() {
        return (
          <div>
            <form className="items" onSubmit={this.onSubmit}>
              <input value={this.state.items} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <List items={this.state.items} />
          </div>
        );
      }
    }

