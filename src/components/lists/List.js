import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './List.css'
// import './App.css';
// import TodoList from './ListForm';
// import TodoItem from './ListItems';

export default class List extends Component {
    render() {
        return (
            <React.Fragment>
<section className="List">
{this.props.lists.map(list => {
    return (<div key={list.id} className="lists">
    <div className="list-body">
    <h6 className="list-body-name">{list.name}</h6>
    </div>
    </div>

    )

})}
    <div className="listButton">
<Button variant="outline-dark" type="submit"
                            onClick={() => {
                                this.props.history.push("/lists/new")
                            }
                            }>
                            Add New List
                    </Button></div>

</section>
                </React.Fragment>
        )}
}

//     constructor(){
//         super();

//         this.state={
//             value:"",
//             items:[]
//         }

//         this.handleInput=(event)=>{
//             this.setState({
//                 value:event.target.value
//             })
//         }

//         this.handleAddItem=(event)=>{
//             event.preventDefault();

//             if(this.state.value==="")
//                 return;

//             const newItem={
//                 task:this.state.value,
//                 id: Date.now(),
//                 status:false
//             }

//             this.setState( (prevState)=>({
//                 items:prevState.items.concat(newItem),
//                 value: "",

//             }))
//         }

//         this.handleMarkItemComplete=(itemId)=>{

//             const updatedItems= this.state.items.map(item =>{
//                 if(itemId === item.id)
//                     item.status = !item.status;

//                 return item;
//             })

//             this.setState({
//                 items:[].concat(updatedItems)
//             })
//         }

//         this.handleDeleteItem=(itemId)=>{

//             const updatedItems=this.state.items.filter(item=>{
//                 return item.id!==itemId
//             })

//             this.setState({
//                 items:[].concat(updatedItems)
//             })
//         }
//     }

//     render() {

//         const btn_style={
//             marginLeft:"10px",
//             marginBottom:"5px"
//         }

//         const input_style={
//             width:"250px",
//             padding:"5px"
//         }

//     return (
//         <div className="container-fluid">
//         <div className="row">

//         <div className="col-md-4"></div>
//         <div className="col-md-4">
//         <div className="body">
//         <h2 className="heading">List</h2>
//         <input style={input_style} placeholder="Add New List Item" type="input" onChange={this.handleInput} value={this.state.value} />
//         <button style={btn_style} type="button" className="btn btn-primary btn-md" onClick={this.handleAddItem}>Add</button>
//         <TodoList items={this.state.items} deleteItem={this.handleDeleteItem} markItemComplete={this.handleMarkItemComplete} />
//         </div>
//         </div>
//         <div className="col-md-4"></div>

//         </div>
//         </div>
//     );
//   }
// }

// export default List;