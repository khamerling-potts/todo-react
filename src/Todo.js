import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
    constructor(props){
        super(props)
        // this.retrieve = this.retrieve.bind(this);
        // this.update = this.update.bind(this);
         //this.removeTodo = this.removeTodo.bind(this);
        // this.deleteClicked = this.deleteClicked.bind(this);
        }
    
   render() {
    // var className = "todo";
    // if (this.state.completed) {
    //   className = "todo completed";
    // }
    var idParameter = this.props.id;
    var currentTodo = this.props;
    {console.log("current todo that will be passed to update: " + currentTodo.text)}
       return (
           <div id = {this.props.id}>
               {/* {console.log(this.props.id)} */}
               
              {/* {console.log(this.id)} */}
           {/* <article id="{this.props.id}" className="todo">
               <button className="check"></button>
               <p>{this.props.text}</p>
           </article> */}
           {/* {console.log(this)} */}
           
           
               <li>
                  {/* Make the ids a normal number instead of id */}
                  <button onClick = {this.props.update.bind(this, currentTodo)} id={this.props.id} style={{marginRight: '10px', backgroundColor: '#ceffc9'}}>Done</button>
                  {this.props.text}
                  <button onClick = {this.props.removeTodo.bind(this, idParameter)} id={this.props.id} style={{cssFloat: 'right', backgroundColor: '#ffbdaf'}}>Delete</button>
                </li>
           </div>
       );
   }

   

//    deleteClicked(todoId){
//     //this.retrieve(todoId);
//     //this.update(todoId);
//     this.removeTodo(todoId);
//   }

//    retrieve(todo){
//     const self = this;
//     fetch('https://cse204.work/todos/'+todo.id,{
//       method: 'GET',
//       headers:{
//         'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
//         'Content-type': 'application/json'
//       }
//     })
//       .then(response=>response.json())
//       .then((responseData)=>{
//         self.setState({todos: responseData});
//       })
//   }



  
}

export default Todo;