import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Notes.css'

class Notes extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="notes">
                    <div className="notesButton">

                        <Button variant="outline-dark" type="submit"
                            onClick={() => {
                                this.props.history.push("/notes/new")
                            }
                            }>
                            Add New Note
                    </Button>

                    </div>
                    <section className="notes">
                    {


                        this.props.notes.sort((a, b) => a.date > b.date ? 1 : -1).map(notes =>
                            {
                                if (notes.userId === sessionStorage.getItem('credentials')) {
                                return (

                            <div key={notes.id} className="notes-card">
                                <div className="notes-card-body">
                                    <h4 className="notes-card-title">
                                        {notes.title}</h4>

                                       <h5 className="notes-card-body"> {notes.date}
                                       <br />

                                        <p className="notes-link"><Link className="nav-link" to={`/notes/${notes.id}`}>Details</Link>
</p>
                                    </h5>
                                </div>
                            </div>
                          )

                        }})}

                </section>
                </section>
            </React.Fragment>
        );
    }
}

export default Notes;