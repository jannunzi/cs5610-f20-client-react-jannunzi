import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "./WidgetListContainer";
import WidgetList from "../components/WidgetList";
import ModuleListComponent from "../components/ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import LessonTabs from "../components/LessonTabsComponent";

class CourseEditorContainer extends React.Component {

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    const moduleId = this.props.match.params.moduleId
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const moduleId = this.props.match.params.moduleId
    if(moduleId !== prevProps.match.params.moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
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
            <LessonTabs/>
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
    })),
  findLessonsForModule: (moduleId) =>
    lessonService.findLessonsForModule(moduleId)
      .then(lessons => dispatch({
        type: "FIND_LESSONS_FOR_MODULE",
        lessons,
        moduleId
      }))
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)
