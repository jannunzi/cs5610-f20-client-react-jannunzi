import React from "react";

const HeadingWidget = (
  {
    editing=true,
    widget
  }) =>
  <div>
    {
      widget.editing &&
      <div>
        <h3>Heading</h3>
        <input className="form-control" placeholder="Text"/>
        <select className="form-control" >
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
          <option>Heading 4</option>
          <option>Heading 5</option>
        </select>
        <input placeholder="Name" className="form-control" />
      </div>
    }
    {
      !widget.editing &&
        <div>
          {
            widget.size === 1 &&
            <h1>{widget.text}</h1>
          }
          {
            widget.size === 2 &&
            <h2>{widget.text}</h2>
          }
          {
            widget.size === 3 &&
            <h3>{widget.text}</h3>
          }
        </div>
    }
  </div>

export default HeadingWidget
