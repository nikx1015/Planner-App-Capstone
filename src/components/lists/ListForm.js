import React, { Component } from 'react';
import addListItem from '../../modules/ListItemManager'
import ListItems from './ListItems';


class ListForm extends Component {

  state = {
    name: "",
    showInputField: false
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating object, and
        invoking the function reference passed from parent component
     */

  constructList = evt => {
    evt.preventDefault();

    // if (this.state.name === "") {
    //   window.alert("Please enter a new list");
    // } else {
    const list = {
      name: this.state.name,
      showInputField: this.state.showInputField,
      userId: sessionStorage.getItem("credentials")
      // Make sure the employeeId is saved to the database as a number since it is a foreign key.
    }

    // Create the article and redirect user to news list

    this.props.addList(list)
      .then(() => this.props.history.push("/lists"))
      .then(() => this.state.showInputField === true);
    // .then(() => this.props.history.push("/listItems"));

    if (this.state.showInputField === true) {
      // this.props.addListItem()
      constructListItem = evt => {
        evt.preventDefault();

        const listItem = {
          item: this.state.item,
          listId: this.state.listId
        }

        this.props.constructListItem(listItem)
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="listForm">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="list name"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructList}
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

export default ListForm;