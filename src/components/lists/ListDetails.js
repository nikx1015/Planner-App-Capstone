
import React, { Component } from "react"
import './List.css'



export default class ListDetail extends Component {
  render() {
    /*
        Using the route parameter, find the event that the
        user clicked on by looking at the `this.props.events`
        collection that was passed down from ApplicationViews
    */
    const list = this.props.lists.find(a => a.id === parseInt(this.props.match.params.listId)) || {};

    return (
      <section className="list">
        <div key={list.id} className="list-card">
          <div className="list-card-body">
            <h6 className="list-card-name">{list.name}</h6>
            <h6 className="list-card-description">{list.description}</h6>
            <h6 className="list-card-date">{list.dueDate}</h6>



            <button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deleteList(list.id)
                  .then(() => this.props.history.push("lists"))
              }
            >
              Delete
            </button>
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
          </div>
        </div>
      </section>
    );
  }
}