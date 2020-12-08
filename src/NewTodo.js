import React, { Component } from 'react';
import './App.css';

class NewTodo extends Component {
   render() {
       return (
        <div>
            <div className="row">
            <div className="col-sm-12 addbar">
            <form className="addform" id="addform" onSubmit = {this.props.addTodo}>
                <label htmlFor="add" className="formlabel">To Do List</label>
                <div className="input-group">
                <input value={this.props.input} onChange={this.props.onChange} type="text" className="form-control" id="add" placeholder="New item"/>
                <div className="input-group-addon">
                    <input type = "submit" value="Add Item" className = "addbutton"></input>
                </div>
                </div>
            </form>
            </div>
            </div>
        {/* <article id="{this.props.id}" className="todo">
            <button className="check"></button>
            <p>{this.props.text}</p>
        </article> */}

        </div>
       );
   }
}

export default NewTodo;