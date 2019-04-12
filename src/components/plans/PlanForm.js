import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class PlanForm extends Component {
    // Set initial state
    state = {
      name: "",
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
    constructPlan = evt => {
      evt.preventDefault();

      // if (this.state.name === "") {
      //   window.alert("Please enter a new plan");
      // } else {
        const plan = {
          name: this.state.name,
          description: this.state.description,
          date: this.state.date,
          userId: sessionStorage.getItem("credentials")
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        }

        // Create the article and redirect user to news list

        this.props.postPlan(plan)
          .then(() => this.props.history.push("/plans"));
      }
    // }
    render() {
      return (
        <React.Fragment>
          <form className="plansForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                placeholder="plan name"
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
              onClick={this.constructPlan}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
  }

