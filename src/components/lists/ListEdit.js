import React, { Component } from "react";
import ListItemManager from "../../modules/ListItemManager";
import "./List.css"
export default class ListItemEditForm extends Component {
  // Set initial state
  state = {
    item: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingListItem = evt => {
    evt.preventDefault();

      const editedItem = {
        id: this.props.match.params.itemId,
        listId: this.props.match.params.listId,
        item: this.state.item
      };

      this.props
        .updateListItem(editedItem)
        .then(() => this.props.history.push("/lists/new"));
    }


  componentDidMount() {
    ListItemManager.getOneListItem(this.props.match.params.itemId).then(item => {
      this.setState({
        item: item.item
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="itemForm">
          <div className="form-group">
            <label htmlFor="item">item</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="item"
              value={this.state.item}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingListItem}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}