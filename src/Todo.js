import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
    constructor(props){
        super(props)
        this.retrieve = this.retrieve.bind(this);
        //this.update = this.update.bind(this);
        //this.remove = this.remove.bind(this);
        //this.deleteClicked = this.deleteClicked.bind(this);
        }
    
   render() {
       return (
           <div id = {this.props.id}>
               {console.log(this.props.id)}
              {/* {console.log(this.id)} */}
           {/* <article id="{this.props.id}" className="todo">
               <button className="check"></button>
               <p>{this.props.text}</p>
           </article> */}
           
               <li>
                  {/* Make the ids a normal number instead of id */}
                  <button id={this.props.id} style={{marginRight: '10px', backgroundColor: '#ceffc9'}}>Done</button>
                  {this.props.text}
                  <button id={this.props.id} style={{cssFloat: 'right', backgroundColor: '#ffbdaf'}}>Delete</button>
                </li>
           </div>
       );
   }

   deleteClicked(todo){
    this.retrieve(todo);
    this.update(todo);
    this.remove(todo);
  }

   retrieve(todo){
    //const self = this;
    fetch('https://cse204.work/todos/'+todo.id,{
      method: 'GET',
      headers:{
        'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
        'Content-type': 'application/json'
      }
    })
      .then(response=>response.json())
      .then((responseData)=>{
        this.setState({todos: responseData});
      })
  }

  update(todo){
    //const self = this;
    todo.completed = true;
    fetch('https://cse204.work/todos/'+todo.id,{
      method: 'PUT',
      headers:{
        'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
        'Content-type': 'application/json'
      }
    })
    .then(response=>response.json())
      .then((responseData)=>{
        this.setState({todos: responseData});
      })
  }

  remove(todo){
    //const self = this;
    fetch('https://cse204.work/todos/'+todo.id,{
      method: 'DELETE',
      headers:{
        'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
        'Content-type': 'application/json'
      }
    })
    .then(response=>response.json())
      .then((responseData)=>{
        this.setState({todos: responseData});
      })
  }
}

export default Todo;