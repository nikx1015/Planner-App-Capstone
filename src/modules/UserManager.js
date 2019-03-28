export default {
    getAllUsers: () => {
        return fetch("http://localhost:5002/users")
            .then(allUsers => allUsers.json())
    },

    getSingleUser: (userId) => {
        return fetch(`http://localhost:5002/users/${userId}`)
            .then(singleUser => singleUser.json())
    },

    postUser: (newUser) => {
        return fetch(`http://localhost:5002/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(user => user.json())
    }
}