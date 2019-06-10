import React from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
// import { getRandomTagline } from "../helpers.js";
//uuid - npm package
import uuid from "uuid/v4";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: {}
    };
  }
  
  
  //mutations are added as functions and change/update the state
  addToDo = text => {
    const todo = {
      uuid: uuid,
      text: text,
      done: false
    };
    this.setState(state => {
      state.toDoItems[todo.uuid] = todo;
      return state
    })
  };
  
  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList items={this.state.toDoItems} />
      </div>
    );
  }
}

export default App;
