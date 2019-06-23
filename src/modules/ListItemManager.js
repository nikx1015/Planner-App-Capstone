const ListItemManager = {

  getAllListItems: () => {
    return fetch ("http://localhost:5002/listItems")
    .then(listItems => listItems.json())
},
// getAllListItems: (id, listId) => {
//   return fetch (`http://localhost:5002/listItems?/${id}&${listId}`)
//   .then(listItems => listItems.json())
// },

    // getAllListItems: (listId) => {
    //     return fetch (`http://localhost:5002/listItems?listId=${listId}`)
    //     .then(listItems => listItems.json())
    // },

  //   getAllListItems: (itemId, listId) => {
  //     return fetch (`http://localhost:5002/listItems?itemId=${itemId}&listId=${listId}`)
  //     .then(listItems => listItems.json())
  // },

//   getAllListItems: (itemId, listId) => {
//     return fetch (`http://localhost:5002/listItems?${itemId}&${listId}`)
//     .then(listItems => listItems.json())
// },

getOneListItem: id =>
fetch(`http://localhost:5002/listItems/${id}`).then(listItems => listItems.json()),
put(editedListItem) {
return fetch(`http://localhost:5002/listItems/${editedListItem.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(editedListItem)
}).then(data => data.json());
},

deleteListItem: id => {
  return fetch (`http://localhost:5002/listItems/${id}`, {
  method: "DELETE"
})
  .then(()=> fetch(`http://localhost:5002/listItems`))
  .then(r=>r.json())
},

addListItem(newListItem) {
    return fetch("http://localhost:5002/listItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newListItem)
    }).then(r => r.json())
  },
  completeListItem(completeListItem, listItemId) {
    return fetch(`http://localhost:5002/listItems/${listItemId}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(completeListItem)
    })

}
}

export default ListItemManager;