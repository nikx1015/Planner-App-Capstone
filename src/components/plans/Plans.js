import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Plans.css'

class Plans extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="plans">
                    <div className="plansButton">

                        <Button variant="outline-dark" type="submit"
                            onClick={() => {
                                this.props.history.push("/plans/new")
                            }
                            }>
                            Add New Event
                    </Button>

                    </div>
                    <section className="sort-plans">
                    {


                        this.props.plans.sort((a, b) => a.date > b.date ? 1 : -1).map(plan =>
                            {
                                if (plan.userId === sessionStorage.getItem('credentials')) {
                                return (

                            <div key={plan.id} className="plans-card">
                                <div className="plans-card-body">
                                    <h5 className="plans-card-title">
                                        {plan.name}
                                        <br />
                                        {plan.date}

                                        <Link className="nav-link" to={`/plans/${plan.id}`}>Details</Link>

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

export default Plans;