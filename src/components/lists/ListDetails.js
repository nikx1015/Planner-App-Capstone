
import React, { Component } from "react"
import './List.css'
import Button from 'react-bootstrap/Button';
import ListForm from './ListForm'
import ListItems from './ListItems'

export default class ListDetail extends Component {
  handleCheckbox = evt => {
    evt.preventDefault();
    const completeListItem = {
      complete: true
    };
    this.props.completeListItem(completeListItem, this.props.match.params.itemId);
  };


  render() {
    /*
        Using the route parameter, find the event that the
        user clicked on by looking at the `this.props.events`
        collection that was passed down from ApplicationViews
    */
    const list = this.props.lists.find(a => a.id === parseInt(this.props.match.params.listId)) || {};



    return (

      <section className="list">

        {/* {this.props.lists.map(singleList => {
          console.log(singleList) */}

            <div key={list.id}>
              <h4>{list.name}</h4>

              <section>
                {this.props.listItems
                  //.filter(listItem => listItem.listId === singleList.id)
                  .map(item =>
                    //console.log(item)
                    <ListItems key={item.id} listItems={this.props.listItems}
                    />

                  )}
                  {this.props.listItems.map (item => <div key={item.id} className="items"><div className="itemList">
         <h5 className="item-info">{item.item}
         <input
                  type="checkbox"
                  onChange={() =>
                    this.props.completeListItem({ complete: true }, item.id)
                  }
                />
         <Button variant="outline-danger" type="submit"
                            onClick={() => { this.props.deleteListItem(item.id)
                            }
                            }>
                            Delete
                    </Button>
         {/* <button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deleteListItem(item.id)
              }
            > Delete

            </button> */}


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
              </section>



              {/* <button
                href="#"
                className= "btn btn-danger"
                onClick={() =>
                  this.props
                    .deleteList(list.id)
                    .then(() => this.props.history.push("lists"))
                }
              >
              Delete
            </button> */}
            <Button variant="outline-danger" type="submit"
                            onClick={() => { this.props.deleteList(list.id)
                                .then(() => this.props.history.push(`/lists/${list.id}`))
                            }
                            }>
                            Delete
                    </Button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.props.history.push(
                    `/lists/${list.id}/edit`
                  );
                }}
              >
                Edit
            </button>

              <Button variant="outline-dark" type="submit"
                onClick={() => {
                  this.props.history.push(`/listItems/${this.props.match.params.listId}/new`)
                }
                }>
                + Items
                    </Button>

            </div>


      </section>
    );
  }
}