import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Plans from './components/plans/Plans'
import PlanEdit from './components/plans/PlanEdit'
import PlanForm from './components/plans/PlanForm'
import PlanDetail from './components/plans/PlanDetails'
import Notes from './components/notes/Notes'
import NoteEdit from './components/notes/NotesEdit'
import NoteForm from './components/notes/NotesForm'
import NoteDetails from './components/notes/NoteDetails'
import Lists from './components/lists/List'
import ListEdit from './components/lists/ListEdit'
import ListForm from './components/lists/ListForm'
import ListDetails from './components/lists/ListDetails'
import Calendar from './components/calendar/Calendar'
import PlanManager from './modules/PlanManager'
import ListManager from './modules/ListManager'
import NotesManager from './modules/NotesManager'
import UserManager from './modules/UserManager'
import Callback from './components/authentication/Callback'
import Auth0Client from "./authentication/Auth";

class ApplicationViews extends Component {

    state = {
        users: [],
        lists: [],
        listItems: [],
        notes: [],
        plans: []
    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/callback" component={Callback} />
                <Route exact path="/" render={(props) => {
                    return <Plans {...props} plans={this.state.plans} />
                }} />
                <Route exact path="/plans/new" render={(props) => {
                    return <PlanForm {...props} plans={this.state.plans} />
                }} />
                <Route
                    exact
                    path="/plans"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <Plans {...props} plans={this.state.plans} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                   <Route
                    exact
                    path="/lists"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <Lists {...props} plans={this.state.lists} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                   <Route
                    exact
                    path="/lists/new"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <ListForm {...props} plans={this.state.lists} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                       <Route
                    exact
                    path="/notes"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <Notes {...props} notes={this.state.notes} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                       <Route
                    exact
                    path="/calendar"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <Calendar {...props} calendar={this.state.calendar} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
            </div>
        )
    }
}

export default ApplicationViews