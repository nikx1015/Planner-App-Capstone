import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Plans extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="planButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/plans/new")
                        }
                        }>
                        Add New Plan
                    </button>
                </div>
                <section className="plans">
                    {

                        this.props.plans.sort((a, b) => a.date > b.date ? 1 : -1).map(plans=>

                            <div key={plans.id} className="plans-card">
                                <div className="plans-card-body">
                                    <h5 className="plans-card-title">
                                        {plans.name}
                                        <br />
                                        {plans.date}

                                        <Link className="nav-link" to={`/plans/${plans.id}`}>Details</Link>
                                    </h5>
                                </div>
                            </div>
                        )}
                </section>
            </React.Fragment>
        );
    }
}

export default Plans;