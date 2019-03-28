const planManager = {
    getAll: () => {
        return fetch("http://localhost:5002/plans")
        .then(plans => plans.json())
    },

    getOne: (id) =>
    fetch(`http://localhost:5002/plans/${id}`).then(plan => plan.json()),

    deletePlan: id => {
        return fetch(`http://localhost:5002/plans/${id}`, {
          method: "DELETE"
        })
          .then(() => fetch(`http://localhost:5002/plans`))
          .then(e => e.json());
      },
    postPlan(newPlan) {
        return fetch("http://localhost:5002/plans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPlan)
        }).then(data => data.json())
      },
      put(editedPlan) {
        return fetch(`http://localhost:5002/plans/${editedPlan.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedPlan)
        }).then(data => data.json());
      }

}

export default planManager;