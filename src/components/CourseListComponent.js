import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";

class CourseListComponent extends React.Component {

  state = {
    courses: [],
    courseBeingEdited: {}
  }

  componentDidMount() {
    findAllCourses()
      .then(courses => {
        this.setState({
            courses: courses
          })
      })
  }

  deleteCourse = (course) => {
    deleteCourse(course._id)
      .then(status => this.setState(prevState =>({
          courses: prevState.courses.filter(c => c._id !== course._id)
        })
      ))
      .catch(error => {

      })
  }

  addCourse = () => {
    const newCourse = {
      title: "New Course",
      owner: "me",
      modified: (new Date()).toDateString()
    }

    createCourse(newCourse)
      .then(actualCourse => this.setState(prevState => ({
        courses: [
          ...prevState.courses, actualCourse
        ]
      })))
  }

  editCourse = (course) => {
    this.setState({
      courseBeingEdited: course
    })
  }

  render() {
    return (
      <div>
        <h1>Course List (For {this.props.instructor}) {this.props.term}</h1>
        <table className="table">
          {
            this.state.courses.map(course =>
              <CourseRowComponent
                deleteCourse={this.deleteCourse}
                course={course}/>
            )
          }
        </table>
        <button
          onClick={this.addCourse}
          className="btn btn-success">
          Add Course
        </button>
      </div>
    );
  }
}

export default CourseListComponent
