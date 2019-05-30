import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
// import { getRandomTagline } from "../helpers.js";

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Header tagline="Here are all the next tasks."/>
        {/* <Header tagline={getRandomTagline()} /> */}
        <ToDoList />
      </div>
    );
  }
}

export default App;
