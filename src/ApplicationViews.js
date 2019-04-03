import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Plans from './components/plans/Plans'
import PlanEdit from './components/plans/PlanEdit'
import PlanForm from './components/plans/PlanForm'
import PlanDetail from './components/plans/PlanDetails'
import Notes from './components/notes/Notes'
import NoteEdit from './components/notes/NotesEdit'
import NoteForm from './components/notes/NotesForm'
import NoteDetail from './components/notes/NoteDetails'
import List from './components/lists/List'
// import ListEdit from './components/lists/ListEdit'
import ListForm from './components/lists/ListForm'
import ListDetail from './components/lists/ListDetails'
// import Items from './components/lists/ListItems'
// import EditListItems from './components/lists/EditListItems'
// import ListItemDetails from './components/lists/ListItemDetails'
// import Calendar from './components/calendar/Calendar'
import PlanManager from './modules/PlanManager'
import ListManager from './modules/ListManager'
import NotesManager from './modules/NotesManager'
// import ListItemManager from './modules/ListItemManager'
// import UserManager from './modules/UserManager'
import Callback from './components/authentication/Callback'
import Auth0Client from './components/authentication/Auth'

class ApplicationViews extends Component {

    state = {
        users: [],
        lists: [],
        listItems: [],
        notes: [],
        plans: []
    }
    postPlan = (PlanObject) =>
        PlanManager.postPlan(PlanObject)
            .then(() => PlanManager.getAll()).then(plans =>
                this.setState({
                    plans: plans
                })
            );
    deletePlan = id => {
        return PlanManager.deletePlan(id).then(plans =>
            this.setState({
                plans: plans
            })
        );
    };
    updatePlan = (editedPlanObject) => {
        return PlanManager.put(editedPlanObject)
            .then(() => PlanManager.getAll())
            .then(plans => {
                this.setState({
                    plans: plans
                })
            });
    }

    addNote = (NoteObject) =>
        NotesManager.postNote(NoteObject)
            .then(() => NotesManager.getAll()).then(notes =>
                this.setState({
                    notes: notes
                })
            );
    deleteNote = id => {
        return NotesManager.deleteNote(id).then(notes =>
            this.setState({
                notes: notes
            })
        );
    };
    updateNote = (editedNoteObject) => {
        return NotesManager.put(editedNoteObject)
            .then(() => NotesManager.getAll())
            .then(notes => {
                this.setState({
                    notes: notes
                })
            });
    }

    addList = (ListObject) =>
        ListManager.addList(ListObject)
            .then(() => ListManager.getAllLists()).then(lists =>
                this.setState({
                    lists: lists
                })
            );
    deleteList = id => {
        return ListManager.deleteList(id).then(lists =>
            this.setState({
                lists: lists
            })
        );
    };
    updateList = (editedListObject) => {
        return ListManager.put(editedListObject)
            .then(() => ListManager.getAllLists())
            .then(lists => {
                this.setState({
                    lists: lists
                })
            });
    };
    completeList = (listObject, listId) => {
        return ListManager.completeList(listObject, listId)
            .then(() => ListManager.getAllLists())
            .then(lists => this.setState({
                lists: lists
            }))
    }
    componentDidMount() {
        const newState = {};
        return PlanManager.getAll()
            .then(parsedPlans => {
                newState.plans = parsedPlans;
                return NotesManager.getAll()
            })
            .then(parsedNotes => {
                newState.notes = parsedNotes;
                return ListManager.getAllLists();
            })
            .then(parsedLists => {
                newState.lists = parsedLists;
                this.setState(newState);
            })
    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/callback" component={Callback} />
                {/* <Route exact path="/" render={(props) => {
                    return <Plans {...props} plans={this.state.plans} />
                }} /> */}
                <Route exact path="/plans/new" render={(props) => {
                    return <PlanForm {...props} postPlan={this.postPlan} plans={this.state.plans} />
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
                />    <Route exact path="/plans/:planId(\d+)" render={(props) => {

                    return (<PlanDetail {...props} deletePlan={this.deletePlan} plans={this.state.plans} />
                    )
                }} />
                <Route
                    exact path="/plans/:planId(\d+)/edit"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return (
                                <PlanEdit
                                    {...props}
                                    // news={this.state.news}
                                    updatePlan={this.updatePlan}
                                />
                            )
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
                            return <List {...props} lists={this.state.lists} items={this.state.items}
                            />;
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
                        return <ListForm {...props} addList={this.addList} lists={this.state.lists} />;
                    }}
                />
                <Route exact path="/lists/:listId(\d+)" render={(props) => {

                    return (<ListDetail {...props} deleteList={this.deleteList} lists={this.state.lists} />
                    )
                }} />
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
                    path="/notes/new"
                    render={props => {
                        return <NoteForm {...props} addNote={this.addNote} notes={this.state.notes} />;
                    }}
                />
                <Route exact path="/notes/:noteId(\d+)" render={(props) => {

                    return (<NoteDetail {...props} deleteNote={this.deleteNote} notes={this.state.notes} />
                    )
                }} />
                    <Route
                    exact path="/notes/:noteId(\d+)/edit"
                    render={props => {
                                return ( <NoteEdit
                                    {...props}
                                    // news={this.state.news}
                                    updateNote={this.updateNote}
                                />
                                )

                    }}
                />
                {/* <Route
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
                /> */}
            </div>
        )
    }
}

export default ApplicationViews