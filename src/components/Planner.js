import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "../ApplicationViews"
// import {withRouter} from 'react-router-dom';

class Planner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}
export default Planner