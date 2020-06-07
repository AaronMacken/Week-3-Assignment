import React, { Component } from "react";
import { Link } from "react-router-dom";

export class StudentJsx extends Component {
  render() {
    let theJsx = this.props.studentData.map((student) => {
      return (
        <div key={student.id}>
          <Link to={`/user/${student.id}`}>
            <h4>{student.name}</h4>
          </Link>
          <button onClick={() => this.props.delete(student.id)}>Delete</button>
        </div>
      );
    });

    return <div>{theJsx}</div>;
  }
}

export default StudentJsx;
