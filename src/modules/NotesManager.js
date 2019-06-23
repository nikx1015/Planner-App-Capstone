const NotesManager = {
    getAll: () => {
        return fetch("http://localhost:5002/notes")
        .then(notes => notes.json())
    },

    getOneNote: (id) =>
    fetch(`http://localhost:5002/notes/${id}`).then(notes => notes.json()),

    deleteNote: id => {
        return fetch(`http://localhost:5002/notes/${id}`, {
          method: "DELETE"
        })
          .then(() => fetch("http://localhost:5002/notes"))
          .then(e => e.json());
      },
    postNote(newNote) {
        return fetch("http://localhost:5002/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newNote)
        }).then(data => data.json())
      },
      put(editedNote) {
        return fetch(`http://localhost:5002/notes/${editedNote.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedNote)
        }).then(data => data.json());
      }

}

export default NotesManager;