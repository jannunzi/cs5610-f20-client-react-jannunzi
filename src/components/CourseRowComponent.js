import React from "react";

const CourseRowComponent = ({item}) =>
  <tr>
    <td>{item.title}</td>
    <td>{item.owner}</td>
    <td>{item.lastOpened}</td>
    <td>
      <button className="btn btn-danger">Delete</button>
      <button className="btn btn-primary">Edit</button>
    </td>
  </tr>

export default CourseRowComponent
