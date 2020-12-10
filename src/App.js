import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';


class App extends Component {

  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div>
        {/* <NewTodo addTodo={this.addTodo} />
        <NewTodo newTodo={this.newTodo} onChange={this.onChange} input={this.state.input} /> */}
        <div className="App">
          <h1>Kyra Hamerling-Potts' ToDo App</h1>
          </div>
          <section id="todos">
            <NewTodo addTodo={this.addTodo} newTodo={this.newTodo} onChange={this.onChange} input={this.state.input}/>
            <ul id="todoList">
              {console.log(this.state.todos)}
            {this.state.todos.map((todo) =>
              
              // {console.log(todo.id)},
              <Todo key={todo.id} id={todo.id} update = {todo.update} removeTodo = {this.removeTodo} text={todo.text} />
              
            )}
            </ul>
          </section>
      </div>  
    );
  }

  onChange = (event) =>{
    // Set the state to the value of the input
    const self = this;
    //{console.log(event.target.value)}
    self.setState({
      input: event.target.value 
    });
  }

  addTodo(event){
    event.preventDefault();
    const self = this;
    const newTodoText = self.state.input;
   //{console.log(event.target.id)}
    //{console.log(this.state.input)}
    var data = {
      text: newTodoText
    }

    {console.log(data)}
    //var self = this;
    var createRequest = new XMLHttpRequest();
    createRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // save new Todo to state
      self.setState({
        todos: [...self.state.todos, JSON.parse(this.responseText)]
      })
      // clear the input field
      self.setState({input: ''});
  }     
}
  createRequest.open("POST", "https://cse204.work/todos", true);
  createRequest.setRequestHeader("Content-type", "application/json");
  createRequest.setRequestHeader("x-api-key", "f32d02-3f32cc-c59414-4b288d-c7f6a6");
  createRequest.send(JSON.stringify(data));
    // fetch('https://cse204.work/todos',{
    //   method: 'POST',
    //   headers:{
    //     'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
    //     'Content-type': 'application/json'
    //   }
    // })
    // this.setState({
    //   todos: [...this.state.todos, newItem]
    // })
  }

  removeTodo(todoId){
    
    //     fetch('https://cse204.work/todos/'+todo.id,{
    //       method: 'DELETE',
    //       headers:{
    //         'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
    //         'Content-type': 'application/json'
    //       }
    //     })
    //     .then(response=>response.json())
    //       .then((responseData)=>{
    //         this.setState({todos: responseData});
    //       })
    //   }
    
        const self = this;
        {console.log(todoId)}
       // {console.log(todo)}
        //Initalize AJAX Request
        var createRequest = new XMLHttpRequest();
        createRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // You need the id of the todo you want to delete as a variable.
            const remainingTodos = self.state.todos.filter((todo) => {
             // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
                if (todo.id !== todoId) {
                    return todo;
                }
            });
            // Update state with filtered list using this.setState();
            self.setState({
                todos: [remainingTodos]
            })
        }     
        }
        
        createRequest.open("DELETE", "https://cse204.work/todos/"+todoId, true);
        createRequest.setRequestHeader("Content-type", "application/json");
        createRequest.setRequestHeader("x-api-key", "f32d02-3f32cc-c59414-4b288d-c7f6a6");
        createRequest.send();
    }

  componentDidMount() {
    {console.log("componentdidmount activated")}
    const self = this;
    // // AJAX goes here
    // var createRequest = new XMLHttpRequest();
    // createRequest.onreadystatechange = function () {
    // if (this.readyState === 4 && this.status === 200) {
    //   {console.log("ajax successful")}
    //   // If AJAX successful, parse the JSON and save to state
    //   var todos = JSON.parse(this.responseText);
    //   self.setState({todos: todos});
    //   {console.log("Requested todos: " + self.state.todos)}
    // }
    
    // }
    // createRequest.open("GET", "https://cse204.work/todos", true);
    // createRequest.setRequestHeader("x-api-key","f32d02-3f32cc-c59414-4b288d-c7f6a6");
    // createRequest.send();

    // Make API call to fetch existing Todos.
    fetch('https://cse204.work/todos',{
      "method": "GET",
      "headers":{
        'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
        //'Content-type': 'application/json'
      }
    })
    //I used Free Code Camp to understand processing response data
      .then(response=>response.json())
      .then((responseData)=>{
        this.setState({todos: responseData});
      })
  //     .then(function (response) {
  //       self.setState({todos: JSON.parse(response)});
  //     }
  //  )
  }
  
  // componentWillUpdate() {
  //   // Make modifications like re-ordering array 
  //   const toOrder = this.state.todos
  //   toOrder.sort()
  //   this.setState({todos: toOrder});
  // }
  
  // componentWillUnmount() {
  //   // clean-up
  // }

}



export default App;
