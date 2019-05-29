import React from "react";
import { render } from "react-dom";

class Header extends React.Component {
    render(){
        return <h1>What to do?</h1>
    }
}

render(<Header/>, document.querySelector('#main'))
// render(<p>Hello, World!</p>, document.querySelector("#main"));
