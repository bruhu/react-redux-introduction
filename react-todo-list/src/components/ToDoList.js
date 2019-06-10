import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ul className="todo-items">
          {Object.keys(this.props.items).map(uuid => (
            <ToDoItem
              key={`todo-item-${uuid}`}
              data={this.props.items[uuid]}
              updateToDoText={this.props.updateToDoText}
              toggleToDoDone={this.props.toggleToDoDone}
              removeToDo={this.props.removeToDo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;

// To loop over our object of items we will use a combination of Object.keys() and Array.map().
// With Object.keys() we get all the property names of our object, which are equal
// With Array.map() we create a new array of JSX templates that get rendered into our ToDoItem component.
