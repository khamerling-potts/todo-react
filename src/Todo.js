import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
    constructor(props){
        super(props)
        // this.retrieve = this.retrieve.bind(this);
         this.update = this.update.bind(this);
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
    //{console.log("current todo that will be passed to update: " + currentTodo.text)}
       if (currentTodo.completed){
        return (
            <div id = {this.props.id}>
                {/* {console.log(this.props.id)} */}
                
               {/* {console.log(this.id)} */}
            {/* <article id="{this.props.id}" className="todo">
                <button className="check"></button>
                <p>{this.props.text}</p>
            </article> */}
            {/* {console.log(this)} */}
            
                 <li style = {{color: 'lightgrey'}}>
                     {/* Make the ids a normal number instead of id */}
                     <button onClick = {this.update} id={this.props.id} style={{marginRight: '10px', backgroundColor: '#ceffc9', color: 'black'}}>Done</button>
                     <span className = {this.props.id} >{this.props.text} </span>
                     <button onClick = {this.props.removeTodo.bind(this, idParameter)} id={this.props.id} style={{cssFloat: 'right', backgroundColor: '#ffbdaf', color: 'black'}}>Delete</button>
                 </li>
            </div>
            );
       }
       else{
        return (
            <div id = {this.props.id}>
                 <li>
                   {/* Make the ids a normal number instead of id */}
                   <button onClick = {this.update} id={this.props.id} style={{marginRight: '10px', backgroundColor: '#ceffc9'}}>Done</button>
                   <span className = {this.props.id}>{this.props.text}</span>
                   <button onClick = {this.props.removeTodo.bind(this, idParameter)} id={this.props.id} style={{cssFloat: 'right', backgroundColor: '#ffbdaf'}}>Delete</button>
                 </li>
            </div>
            );
       }
        
       
   }

   update(event){
    const self = this;
    {console.log(event.target.id)}
    //{console.log("todo text that was updated: " + event.target.parentNode.text)}
    var id = event.target.id;
    //todo.completed = true;
    var data = {
      completed: true
    }

    // Initalize AJAX Request
    var xhttp3 = new XMLHttpRequest();

    // Response handler
    xhttp3.onreadystatechange = function() {

        // Wait for readyState = 4 & 200 response
        if (this.readyState === 4 && this.status === 200) {
            //document.getElementById(id).parentNode.style.color = "lightgrey";
            document.getElementsByClassName(id)[0].style.color = "lightgrey";
           // document.getElementById(id).style.color = "black";


            //document.getElementById(id).style.color = "black";
            // parse JSON response
            // var todo = JSON.parse(this.responseText);

        } 
    };

    {console.log(id)}
    xhttp3.open("PUT", "https://cse204.work/todos/"+id, true);

    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", "f32d02-3f32cc-c59414-4b288d-c7f6a6");
    xhttp3.send(JSON.stringify(data));
    self.setState({
      completed: true
    })
   {console.log(this)}
    //{console.log(event.target.parentNode.completed)}


    // fetch('https://cse204.work/todos/'+todo.id,{
    //   method: 'PUT',
    //   headers:{
    //     'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
    //     'Content-type': 'application/json'
    //   }
    // })
    // .then(response=>response.json())
    //   .then((responseData)=>{
    //     this.setState({todos: responseData});
    //   })
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