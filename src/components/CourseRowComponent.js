import React from "react";
import {Link} from "react-router-dom";

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
        <Link to={`/edit/${course._id}`}>{course.title} {course._id}</Link>
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
