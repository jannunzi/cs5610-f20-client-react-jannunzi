import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const courses = [
  {
    _id: "123",
    title: "CS5610",
    owner: "me",
    lastOpened: "yesterday"
  },
  {
    _id: "234",
    title: "CS4550",
    owner: "me",
    lastOpened: "yesterday"
  },
  {
    _id: "345",
    title: "CS5200",
    owner: "me",
    lastOpened: "yesterday"
  },
  {
    _id: "456",
    title: "CS3200",
    owner: "me",
    lastOpened: "yesterday"
  },
]

const CourseListComponent = ({term, instructor}) =>
  <div>
    <h1>Course List (For {instructor}) {term}</h1>
    <table className="table">
      {
        courses.map(item =>
          <CourseRowComponent item={item}/>
        )
      }
    </table>
  </div>

export default CourseListComponent
