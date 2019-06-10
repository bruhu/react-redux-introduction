import React from "react";

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="header">
//         <h1>What to do?</h1>
//         <span className="tagline">{this.props.tagline}</span>
//       </header>
//     );
//   }
// }

//same as above, but turning it into a stateless functional component
const Header = props => {
    return(
        <header className="header">
        <h1 className="text-muted">What to do?</h1>
        <span className="tagline, text-danger">{props.tagline}</span>
      </header>
    )
}

export default Header;

