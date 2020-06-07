import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentJsx from "./StudentJsx";

export class StudentsPage extends Component {
  constructor(props) {
    super(props);
    const initialState = [
      { id: 1, name: "Aaron" },
      { id: 2, name: "Jamie" },
    ];
    this.state = {
      students: initialState,
    };

    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent(id) {
    this.setState({
      students: this.state.students.filter((student) => {
        return student.id != id;
      }),
    });
  }

  render() {
    return (
      <div>
        <h1>Students Page</h1>
        <StudentJsx
          studentData={this.state.students}
          delete={this.deleteStudent}
        />
        <Link to="/contact">Go to the contact page!</Link>
      </div>
    );
  }
}

export default StudentsPage;
