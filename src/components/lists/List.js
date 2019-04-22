import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './List.css'


export default class List extends Component {
    render() {
        return (
            <React.Fragment>
<section className="list">
{this.props.lists.map(list => {
    if (list.userId === sessionStorage.getItem('credentials')) {
    return (
    <div key={list.id} className="lists">
    <section className="lists">
    <div className="list-body">
    <h6 className="list-detail-name">{list.name}</h6>
    <br />
    </div>

    {/* <Button variant="outline-dark" type="submit" className="details"
                            onClick={() => {
                                this.props.history.push(`/lists/${list.id}`)
                            }
                            }>
                            Details
                    </Button> */}
    <Link className="list-card-link" to={`/lists/${list.id}`}>Details</Link>

    </section>
    </div>

    )}
    })}
    <div className="listButton">
<Button variant="outline-dark" type="submit"
                            onClick={() => {
                                this.props.history.push("/lists/new")
                            }
                            }>
                            Add New List
                    </Button></div>

</section>
                </React.Fragment>
        )}
}
