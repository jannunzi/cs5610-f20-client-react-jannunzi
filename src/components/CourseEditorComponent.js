import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetList from "./WidgetList";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"

class CourseEditorComponent extends React.Component {

  componentDidMount() {
    this.props.findCourseById(this.props.match.params.courseId)
    this.props.findModulesForCourse(this.props.match.params.courseId)
  }

  render() {
    return(
      <div>
        <h1>Course Editor</h1>
        <div className="row">
          <div className="col-4">
            <ModuleListComponent/>
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

const stateToPropertyMapper = (state) => ({
  course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  findCourseById: (courseId) => findCourseById(courseId)
    .then(actualCourse => dispatch({
      type: "SET_COURSES",
      course: actualCourse
    })),
  findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
    .then(actualModules => dispatch({
      type: "FIND_MODULES_FOR_COURSE",
      modules: actualModules
    }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorComponent)
