import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './List.css'

export default class ListItems extends Component {
    render() {
        return (
            <React.Fragment>
                    <section className="listItems">
                            {this.props.listItems.map(item =>
                                <div key={item.id} className="items">
                                    <section className="items">
                                        <div className="list-item-body">
                                            {/* <h6 className="list-item-body-name">{item.item}</h6> */}
                                        </div>
                                        {/* <Link className="nav-link" to={`/listItems/${items.id}`}>Details</Link> */}
                                    </section>
                                </div>

                            )}

                        </section>
            </React.Fragment>
                );
            }
        }


// export default class ListItems extends Component {

//         render() {
//           return (
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {this.props.listItems.name}
//                   <Link className="nav-link" to={`/listItems/${this.props.listItems.id}`}>
//               Details
//             </Link>
//                 </h5>
//               </div>
//             </div>
//           );
//         }
//       }
//     render() {
//         return (
//             <React.Fragment>
// <section className="list-items">
// {this.props.listItems.map(listItem => {
//     return (<div key={listItem.id} className="list-item">
//     <div className="list-item-body">
//     <h6 className="list-item-body-name">{listItem.item}</h6>
//     </div>
//     </div>

//     )

// })}
//     <div className="listButton">
// <Button variant="outline-dark" type="submit"
//                             onClick={() => {
//                                 this.props.history.push("/listItems/new")
//                             }
//                             }>
//                             Add New List Item
//                     </Button></div>

// </section>
//                 </React.Fragment>
//         )}
// }


//}