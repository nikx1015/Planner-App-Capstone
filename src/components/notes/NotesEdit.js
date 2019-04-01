import React, { Component } from "react";
import NoteManager from "../../modules/NotesManager";
import "./Notes.css"
export default class NoteEditForm extends Component {
  // Set initial state
  state = {
    title: "",
    description: "",
    date: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingNote = evt => {
    evt.preventDefault();

    // if (this.state.name === "") {
    //   window.alert("Please enter a title");
    // } else {
      const editedNote = {
        id: this.props.match.params.noteId,
        title: this.state.title,
        description: this.state.description,
        date: this.state.date,
        userId: this.state.userId
        // newsId: parseInt(this.state.newsId)
      };

      this.props
        .updateNote(editedNote)
        .then(() => this.props.history.push("/notes"));
    }
//   };

  componentDidMount() {
    NoteManager.getOneNote(this.props.match.params.noteId).then(note => {
      this.setState({
        title: note.title,
        description: note.description,
        date: note.date
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <form className="noteForm">
          <div className="form-group">
            <label htmlFor="Title">Note Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="description"
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingNote}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}