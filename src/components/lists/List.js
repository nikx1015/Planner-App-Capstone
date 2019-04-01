import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


class List extends Component {
    handleCheckbox = evt => {
        evt.preventDefault();
        const completeList = {
            complete: true
        };
        this.props.completeList(completeList, this.props.match.params.listId);
    };
    render() {
        return (
            <React.Fragment>
                <section className="lists">
                    <div className="listButton">
                        <Button variant="outline-primary"
                            onClick={() => {
                                console.log("you clicked it")
                                this.props.history.push("/lists/new")
                            }
                            }>
                            Add New List
                    </Button>
                    </div>
                    <section className="lists">
                        {this.props.lists.map(list =>
                            <div key={list.id} className="lists-card">

                                <div className="lists-card-body">
                                    <h5 className="lists-card-title">
                                        {list.name}
                                        <br />
                                        {list.date}
                                        <label>Complete?
                                <input
                                                type="checkbox"
                                                onChange={() =>
                                                    this.props.completeList({ complete: true }, list.id)
                                                }
                                            />
                                        </label>

                                        <Link className="nav-link" to={`/lists/${list.id}`}>Details</Link>
                                    </h5>
                                </div>
                            </div>
                        )}
                    </section>
                </section>
            </React.Fragment>
        )
    }
}


export default List
