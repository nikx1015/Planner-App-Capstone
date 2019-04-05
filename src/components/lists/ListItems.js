import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class ListItems extends Component {

    render() {
        return (
            <React.Fragment>
<section className="list-items">
{this.props.listItems.map(listItem => {
    return (<div key={listItem.id} className="list-item">
    <div className="list-item-body">
    <h6 className="list-item-body-name">{listItem.item}</h6>
    </div>
    </div>

    )

})}
    <div className="listButton">
<Button variant="outline-dark" type="submit"
                            onClick={() => {
                                this.props.history.push("/listItems/new")
                            }
                            }>
                            Add New List Item
                    </Button></div>

</section>
                </React.Fragment>
        )}
}


//}