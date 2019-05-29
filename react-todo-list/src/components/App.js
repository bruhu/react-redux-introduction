import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header tagline="This could be your shopping list" />
        <ToDoList />
      </div>
    );
  }
}

export default App;
