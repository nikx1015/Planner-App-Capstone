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


                        this.props.notes.sort((a, b) => a.date > b.date ? 1 : -1).map(note =>
                            {
                                if (note.userId === sessionStorage.getItem('credentials')) {
                                return (

                            <div key={note.id} className="notes-card">
                                <div className="notes-card-body">
                                    <h5 className="notes-card-title">
                                        {note.title}
                                        <br />
                                        {note.date}

                                        <Link className="nav-link" to={`/notes/${note.id}`}>Details</Link>

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