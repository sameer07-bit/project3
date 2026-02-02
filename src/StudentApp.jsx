import React, { Component } from 'react';
import './StudentApp.css'

export default class StudentApp extends Component {
  constructor() {
    super();
    this.state = {
      showGrades: false,
      student: {
        name: "Shaik Sameer Ahmed",
        id: "2500080004",
        department: "AI/DS",
        cgpa: "9",
        courses: ["Algorithms", "Database Systems", "UI/UX Design"]
      }
    };
  }

  toggleGrades = () => {
    this.setState({ showGrades: !this.state.showGrades });
  };

  render() {
    const { student, showGrades } = this.state;
    return (
      <div className="card">
        <h1>{student.name}</h1>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Department:</strong> {student.department}</p>

        {showGrades && (
          <div className="details">
            <p><strong>Current GPA:</strong> {student.cgpa}</p>
            <p><strong>Enrolled Courses:</strong></p>
            <ul>
              {student.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}

        <button className="btn" onClick={this.toggleGrades}>
          {showGrades ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}