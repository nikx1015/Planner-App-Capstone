import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class NoteForm extends Component {
    // Set initial state
    state = {
      title: "",
      description: "",
      date: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };

    /*
          Local method for validation, creating news object, and
          invoking the function reference passed from parent component
       */
    constructNote = evt => {
      evt.preventDefault();

      // if (this.state.name === "") {
      //   window.alert("Please enter a new plan");
      // } else {
        const note = {
          title: this.state.title,
          description: this.state.description,
          date: this.state.date,
        //   userId: sessionStorage.getItem("credentials")
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        }

        // Create the article and redirect user to news list

        this.props.addNote(note)
          .then(() => this.props.history.push("/notes"));
      }
    // }
    render() {
      return (
        <React.Fragment>
          <form className="notesForm">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                placeholder="note title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="description"
                placeholder="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
              />
            </div>
            <button
              type="submit"
              onClick={this.constructNote}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
  }