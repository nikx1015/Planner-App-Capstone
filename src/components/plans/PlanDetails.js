import React, { Component } from "react"
import './Plans.css'
import Button from 'react-bootstrap/Button'



export default class PlanDetails extends Component {
  render() {
    /*
        Using the route parameter, find the article that the
        user clicked on by looking at the `this.props.news`
        collection that was passed down from ApplicationViews
    */
    const plan= this.props.plans.find(a => a.id === parseInt(this.props.match.params.planId)) || {}

    return (
      <section className="plans">
        <div key={plan.id} className="plans-card">
          <div className="plans-card-body">
            <h4 className="plans-card-title">
              {plan.name}
            </h4>
            <h6 className="plans-card-title">{plan.description}</h6>
            <h6 className="plans-card-title">{plan.date}</h6>
   {/* <Timestamp time={Date} /> </h6> */}

   <Button variant="outline-danger" type="submit"
                            onClick={() => { this.props.deletePlan(plan.id)
                                .then(()=>this.props.history.push("/plans"))
                            }
                            }>
                            Delete
                    </Button>
            {/* <button
              href="#"
              className="btn btn-danger"
              onClick={() =>
                this.props
                  .deletePlan(plan.id)
                  .then(() => this.props.history.push("/plans"))
              }
            >
              Delete
            </button> */}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/plans/${plan.id}/edit`
                );
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </section>
    );
  }
}