import React, { Component } from "react";
import './List.css'
export default class ListForm extends Component {
    // Set initial state
    state = {
        name: "",
        description: "",
        dueDate: "",
        complete: false

    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating task object, and
          invoking the function reference passed from parent component
       */
    createList = evt => {
        evt.preventDefault();
        if (this.state.name === "") {
            window.alert("Please create a list");
        } else {
            const list = {
                name: this.state.name,
                description: this.state.description,
                dueDate: this.state.dueDate,
                complete: this.state.complete,
                userId: sessionStorage.getItem("credentials")
            };

            // Create the task and redirect user to task list

            this.props.addList(list)
                .then(() => this.props.history.push("/lists"));
        }
    };

    render() {
        return (
            <React.Fragment>
                <form className="listForm">
                    <div className="form-group">
                        <label htmlFor="name">List Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="List"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder="List Description"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date</label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="dueDate"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.createList}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}