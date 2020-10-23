import React from "react";
import {findCourseById} from "../services/CourseService";
import WidgetListContainer from "./WidgetListContainer";
import WidgetList from "../components/WidgetList";
import ModuleListComponent from "../components/ModuleListComponent";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import widgetService from "../services/WidgetService"
import topicService from "../services/TopicService"
import LessonTabs from "../components/LessonTabsComponent";
import TopicPills from "../components/TopicPills";

class CourseEditorContainer extends React.Component {

  componentDidMount() {
    const courseId = this.props.match.params.courseId
    const moduleId = this.props.match.params.moduleId
    const lessonId = this.props.match.params.lessonId
    this.props.findCourseById(courseId)
    this.props.findModulesForCourse(courseId)
    if(moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if(lessonId) {
      this.props.findTopicsForLesson(lessonId)
    }

    this.props.findAllWidgets()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    debugger
    const courseId = this.props.match.params.courseId
    const moduleId = this.props.match.params.moduleId
    const lessonId = this.props.match.params.lessonId
    if(moduleId !== prevProps.match.params.moduleId) {
      this.props.findLessonsForModule(moduleId)
    }
    if(lessonId !== prevProps.match.params.lessonId) {
      this.props.findTopicsForLesson(lessonId)
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
            <TopicPills/>
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
  findAllWidgets: () =>
    widgetService.findAllWidgets()
      .then(widgets => dispatch({
        type: "FIND_ALL_WIDGETS",
        widgets
      })),
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
      })),
  findTopicsForLesson: (lessonId) =>
    topicService.findTopicsForLesson(lessonId)
      .then(topics => dispatch({
        type: "FIND_TOPICS_FOR_LESSON",
        topics,
        lessonId
      }))

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)
