import React, { Component } from 'react';


class ListItemForm extends Component {

  state = {
    name: "",
    listId: ""
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
  constructList = evt => {
    evt.preventDefault();

    // if (this.state.name === "") {
    //   window.alert("Please enter a new plan");
    // } else {
      const listItems = {
        name: this.state.name,
        listId: this.state.listId,
        userId: sessionStorage.getItem("credentials")
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
      }

      // Create the article and redirect user to news list

      this.props.addListItem(listItems)
        // .then(() => this.props.history.push("/lists"));
        .then(() => this.props.history.push("/listItems"));
    }
  // }
  render() {
    return (
      <React.Fragment>
        <form className="listItemForm">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="list item name"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructListItem}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

    //     <div>
    //     {this.props.items.map(item => (
    //     <TodoItem key={item.id} id={item.id} status={item.status} task={item.task} deleteItem={this.props.deleteItem} markItemComplete={this.props.markItemComplete} />
    //     ))}
    // </div>

export default ListItemForm;