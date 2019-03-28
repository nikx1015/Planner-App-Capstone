const ListManager = {
    getAllLists: () => {
        return fetch ("http://localhost:5002/lists")
        .then(lists => lists.json())
    },

getOneList: id =>
fetch(`http://localhost:5002/lists/${id}`).then(list => list.json()),
put(editedList) {
return fetch(`http://localhost:5002/lists/${editedList.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(editedList)
}).then(data => data.json());
},

deleteList: (id) => {
  return fetch (`http://localhost:5002/lists/${id}`, {
  method: "DELETE"
})
  .then(()=> fetch(`http://localhost:5002/lists`))
  .then(r=>r.json())
},

addList(newList) {
    return fetch("http://localhost:5002/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newList)
    }).then(r => r.json())
  },
  completeList(completeList, listId) {
    return fetch(`http://localhost:5002/lists/${listId}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(completeList)
    })

}
}

export default ListManager;