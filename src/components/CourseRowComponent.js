import React from "react";

const CourseRowComponent = ({course, deleteCourse, editCourse, courseBeingEdited}) =>
  <tr>
    <td>
      {
        course === courseBeingEdited &&
        <input
          className="form-control"
          value={courseBeingEdited.title}/>
      }
      {
        course !== courseBeingEdited &&
        <label>{course.title}</label>
      }
    </td>
    <td>{course.owner}</td>
    <td>{course.modified}</td>
    <td>
      <button
        onClick={() => deleteCourse(course)}
        className="btn btn-danger">
        Delete
      </button>
      <button
        onClick={() => editCourse(course)}
        className="btn btn-primary">Edit</button>
    </td>
  </tr>

export default CourseRowComponent
