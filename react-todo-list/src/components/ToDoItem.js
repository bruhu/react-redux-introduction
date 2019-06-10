import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        {this.props.data.uuid} | {this.props.data.text}
      </div>
    );
  }
}

export default ToDoItem;
