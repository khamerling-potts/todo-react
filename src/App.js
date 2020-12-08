import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';


class App extends Component {

  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
    
    this.componentDidMount = this.componentDidMount.bind(this);
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
              <>
              <Todo key={todo.id}
                text={todo.text} />
              </>
            )}
            </ul>
          </section>
      </div>  
    );
  }

  onChange(event) {
    // Set the state to the value of the input
    this.setState({
      input: event.target.value
    });
  }

  addTodo(event){
    event.preventDefault();
    
    const newTodoText = this.state.input;
    var newItem = new Todo();
    newItem = {
      text: newTodoText
    }

    var self = this;
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

  createRequest.open("POST", "https://cse204.work/todos", true);
  createRequest.setRequestHeader("Content-type", "application/json");
  createRequest.setRequestHeader("x-api-key", "f32d02-3f32cc-c59414-4b288d-c7f6a6");
  createRequest.send(JSON.stringify(newItem));
        
}
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

  

  componentDidMount() {
    const self = this;
    // AJAX goes here
    var createRequest = new XMLHttpRequest();
    createRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // If AJAX successful, parse the JSON and save to state
      var todos = JSON.parse(this.responseText);
      self.setState({todos: todos});
      {console.log("Requested todos: " + todos)}
    }
    createRequest.open("GET", "https://cse204.work/todos", true);
    createRequest.setRequestHeader("x-api-key","f32d02-3f32cc-c59414-4b288d-c7f6a6");
    createRequest.send();
    }

    // // Make API call to fetch existing Todos.
    // fetch('https://cse204.work/todos',{
    //   method: 'GET',
    //   headers:{
    //     'x-api-key': 'f32d02-3f32cc-c59414-4b288d-c7f6a6',
    //     'Content-type': 'application/json'
    //   }
    // })
    //I used Free Code Camp to understand processing response data
      // .then(response=>response.json())
      // .then((responseData)=>{
      //   this.setState({todos: responseData});
      // })
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
