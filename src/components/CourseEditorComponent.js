import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetList from "./WidgetList";

export default class CourseEditorComponent extends React.Component {

  state = {
    course: {
      _id: "",
      title: ""
    }
  }

  componentDidMount() {
    console.log(this.props)
    findCourseById(this.props.match.params.courseId)
      .then(actualCourse => this.setState({
        course: actualCourse
      }))
  }

  render() {
    return(
      <div>
        <h1>Course Editor {this.props.match.params.courseId}</h1>
        <h2>{this.state.course.title}</h2>
        <div className="row">
          <div className="col-4">
            <h1>Modules</h1>
          </div>
          <div className="col-8">
            <h1>Lessons</h1>
            <h1>Topics</h1>
            <WidgetList/>
          </div>
        </div>
      </div>
    )
  }
}
