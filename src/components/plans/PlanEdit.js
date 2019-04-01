import React, { Component } from "react";
import PlanManager from "../../modules/PlanManager";
import "./Plans.css"
export default class PlanEditForm extends Component {
  // Set initial state
  state = {
    name: "",
    description: "",
    date: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingPlan = evt => {
    evt.preventDefault();

    // if (this.state.name === "") {
    //   window.alert("Please enter a title");
    // } else {
      const editedPlan = {
        id: this.props.match.params.planId,
        name: this.state.name,
        description: this.state.description,
        date: this.state.date,
        userId: this.state.userId
        // newsId: parseInt(this.state.newsId)
      };

      this.props
        .updatePlan(editedPlan)
        .then(() => this.props.history.push("/plans"));
    }
//   };

  componentDidMount() {
    PlanManager.getOne(this.props.match.params.planId).then(plan => {
      this.setState({
        name: plan.name,
        description: plan.description,
        date: plan.date
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="planForm">
          <div className="form-group">
            <label htmlFor="Name">Plan Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value={this.state.name}
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
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingPlan}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}