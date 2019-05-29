import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>What to do?</h1>
        <span className="tagline">{this.props.tagline}</span>
      </header>
    );
  }
}

export default Header;
