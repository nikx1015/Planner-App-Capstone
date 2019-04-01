import React, { Component } from "react"
import Card from 'react-bootstrap/Card'

export default class NoteDetail extends Component{
    render() {
    const notes = this.props.notes.find(note => note.id === parseInt(this.props.match.params.noteId)) || {};
    return (
        <section className="notes">
        <div key="id" className="note-card">
        <Card className="notes">
  <Card.Header>{notes.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
       {notes.description}
      </p>
      <footer className="blockquote-footer">
        {notes.date}
      </footer>
    </blockquote>
  </Card.Body>
</Card>

<button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deleteNote(notes.id)
                  .then(() => this.props.history.push("/notes"))
              }
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/notes/${notes.id}/edit`
                );
              }}
            >
              Edit
            </button>
</div>
</section>

    )
}
}

