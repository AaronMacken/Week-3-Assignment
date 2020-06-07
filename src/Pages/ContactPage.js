import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ContactPage extends Component {
  render() {
    let urlVariable = this.props.match.params;
    console.log(urlVariable);
    return (
      <div>
        <h1>Contact Page</h1>
        <h3>URL Variable: {this.props.match.params.id}</h3>
        <Link to="/"> Go to the Students page </Link>
        <br />
        <a href="/">Go to teh students page (anchor tag)</a>
      </div>
    );
  }
}

export default ContactPage;
