import React from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import uuid from "uuid/v4";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: {}
    };
  }

  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };

    this.setState(state => {
      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };

  // Updates the text of a todo item and will be used for the input field of each item.
  updateToDoText = (uuid, text) => {
    this.setState(state => {
      state.toDoItems[uuid].text = text;
      return state;
    });
  };

  // (Un)checks a todo item and will be used on click on the checkbox in front of each item.
  toggleToDoDone = event => {
    const checkbox = event.target;

    this.setState(state => {
      state.toDoItems[checkbox.value].done = checkbox.checked;
      return state;
    });
  };

  // Removes a todo item and will be used on click on the remove icon, we will add to each item.
  removeToDo = uuid => {
    this.setState(state => {
      delete state.toDoItems[uuid];
      return state;
    });
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
