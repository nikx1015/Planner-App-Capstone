import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../authentication/Auth";

class NavBar extends Component {
 signOut = () => {
   auth0Client.signOut();
   sessionStorage.clear()
   this.props.history.replace("/");
 };

 render() {
   return (
     <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
       <Link className="navbar-brand" to="/">
         Planner
       </Link>
       {!auth0Client.isAuthenticated() ? (
         <button className="btn btn-success" onClick={auth0Client.signIn}>
           Sign In
         </button>
       ) : (
         <React.Fragment>
           <div>
             <label className="mr-2 text-blue">
               {auth0Client.getProfile().name}
             </label>
             <button
               className="btn btn-danger"
               onClick={() => {
                 this.signOut();
               }}
             >
               Sign Out
             </button>
           </div>
           <ul className="nav nav-pills">
             <li className="nav-item">
               <Link className="nav-link" to="/">
                 Planner
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/plans">
                 Daily Planner
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/lists">
                 Lists
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/notes">
                 Notes
               </Link>
             </li>
           </ul>
         </React.Fragment>
       )}
     </nav>
   );
 }
}

export default withRouter(NavBar);