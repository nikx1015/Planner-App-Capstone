import React, { Component } from "react";
import ListManager from "../../modules/ListManager";
import "./List.css"
export default class ListEditForm extends Component {
  // Set initial state
  state = {
    name: "",
    userId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingList = evt => {
    evt.preventDefault();

      const editedList = {
        id: this.props.match.params.listId,
        name: this.state.name,
        userId: sessionStorage.getItem("credentials")
      };

      this.props
        .updateList(editedList)
        .then(() => this.props.history.push("/lists"));
    }


  componentDidMount() {
    ListManager.getOneList(this.props.match.params.listId).then(list => {
      this.setState({
        name: list.name,
        userId: this.state.userId
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="listForm">
          <div className="form-group">
            <label htmlFor="name">list name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value={this.state.name}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingList}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}