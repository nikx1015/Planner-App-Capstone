import React, { Component } from 'react';
// import addListItem from '../../modules/ListItemManager'
// import ListItems from './ListItems';
// import getAllListItems from '../../modules/ListItemManager'


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
      listId: this.state.id,
      itemId: this.state.item.itemId
    }
    this.props.addListItem(listItem)
    this.setState(listItem)
    console.log(listItem)

    // .then((listItem)=> {
    //   console.log(listItem)
    //     })

    console.log(this.state)
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
          {this.props.listItems.map (item => <div key={item.id} className="items"><div className="itemList">
         <h5 className="item-info">{item.item}   <button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deleteListItem(item.id)
              }
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/listItems/${item.id}/edit`
                );
              }}
            >
              Edit
            </button></h5>
          </div></div>)}
          <div className="form-group">
          <label htmlFor="form-input">Item</label>
          <input type="text" className="form-control" onChange={this.handleFieldChange} id="item" placeholder="item" />
          </div>
          <button
            type="submit"
            onClick={this.constructListItem}
            className="btn btn-primary"
          >
            Add Item
          </button>

        </form>
      </React.Fragment>
    );
  }
}

export default ListForm;