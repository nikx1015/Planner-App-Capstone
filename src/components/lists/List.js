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
                    {this.props.lists.map(lists =>
                        <div key={lists.id} className="lists-card">

                            <div className="lists-card-body">
                                <h5 className="lists-card-title">
                                    {lists.name}
                                    <br />
                                    {lists.date}
                                    <label>Complete?
                                <input
                                            type="checkbox"
                                            onChange={() =>
                                                this.props.completeList({ complete: true }, lists.id)
                                            }
                                        />
                                    </label>

                                    <Link className="nav-link" to={`/lists/${lists.id}`}>Details</Link>
                                </h5>
                            </div>
                            </div>
        )}
                </section>
            </React.Fragment>
        )
    }
}


export default List
