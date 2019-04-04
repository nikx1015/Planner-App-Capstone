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

  constructListItem  = evt => {
    evt.preventDefault();

    const listItem = {
      item: this.state.item,
      listId: this.state.listId
    }
  }
  /*
        Local method for validation, creating object, and
        invoking the function reference passed from parent component
     */

  constructList = evt => {
    evt.preventDefault();

    const list = {
      name: this.state.name,
      userId: sessionStorage.getItem("credentials")
    }

    this.props.addList(list)
    // this.props.addListItem()

      .then((listObject) => {
        console.log(listObject)
        this.setState(listObject);
        console.log(this.state)

        // this.state.showInputField === true
      }
      )}


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
          <div className="form-group">
          <label htmlFor="form-input">Item</label>
          <input type="text" className="form-control" onChange={this.handleFieldChange} id="item" placeholder="item" />
          </div>

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