import React, { Component } from "react";

export class UserIdPage extends Component {
  render() {
    return <h1>User ID: {this.props.match.params.id}</h1>;
  }
}

export default UserIdPage;
