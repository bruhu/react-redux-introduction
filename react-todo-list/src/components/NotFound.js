import React, { Component } from 'react'
import Header from "./Header";

export class NotFound extends Component {
    componentDidMount() {
        document.title = "Error 404 - What to do?"
    }
    render() {
        return (
            <div className="container">
                <Header tagline="404 - Page not found!">
                    <div className="alert alert-warning">
                        <strong>
                            Oops... sorry!<br></br>
                        </strong>
                        The requested page could not be found.
                    </div>
                </Header>
            </div>
        )
    }
}

export default NotFound