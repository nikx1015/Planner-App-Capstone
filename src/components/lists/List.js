import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './List.css'


export default class List extends Component {
    render() {
        return (
            <React.Fragment>
<section className="List">
{this.props.lists.map(list => {
    if (list.userId === sessionStorage.getItem('credentials')) {
    return (<div key={list.id} className="lists">
    <div className="list-body">
    <h6 className="list-body-name">{list.name}</h6>
    </div>
    </div>

    )

}})}
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
