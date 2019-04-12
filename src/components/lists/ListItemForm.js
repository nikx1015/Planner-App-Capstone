import React, { Component } from 'react';
import list from './ListForm'


class ListItemForm extends Component {

  state = {
    item: "",
    listId: this.props.match.params.listId
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
  constructListItem = evt => {
    evt.preventDefault();

      const listItems = {
        item: this.state.item,
        listId: this.state.listId,
        itemId: this.state.itemId,
        complete: this.state.complete

      }

      // Create the article and redirect user to news list

      this.props.addListItem(listItems)
        // .then(() => this.props.history.push("/lists"));
        .then(() => this.props.history.push(`/lists/${this.state.listId}`));
    }
  // }
  render() {
    return (
      <React.Fragment>
        <form className="listItemForm">
          <div className="form-group">
            <label htmlFor="item">item</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="item"
              placeholder="list item"
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


export default ListItemForm;