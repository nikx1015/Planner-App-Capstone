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

    //   if (this.state.name === "") {
    //     window.alert("Please enter a new plan");
    //   } else {
        const plan = {
          name: this.state.name,
          description: this.state.description,
          date: this.state.date,
          userId: sessionStorage.getItem("credentials")
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        };

        // Create the article and redirect user to news list

        this.props.addPlan(plan)
          .then(() => this.props.history.push("/plans"));
      }


    render() {
      return (
        <React.Fragment>
<Form>
  <Form.Group controlId="formBasicPlan">
    <Form.Label>Name of Plan</Form.Label>
    <Form.Control type="text" placeholder="Enter Activity Name" />
  </Form.Group>

  <Form.Group controlId="formBasicDescription">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder="Description" />
  </Form.Group>
  <Form.Group controlId="formDate">
    <Form.Check type="date" label="Date" />
  </Form.Group>
  <Button variant="primary" type="submit"
  onClick={this.constructPlan}
  className="btn btn-primary">
    Submit
  </Button>
</Form>
</React.Fragment>
);
  }
}