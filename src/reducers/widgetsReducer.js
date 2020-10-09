import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions"

const initialState = {
  widgets: [
    {
      _id: "123",
      name: "Widget 1",
      editing: false
    },
    {
      _id: "234",
      name: "Widget 2",
      editing: true
    },
    {
      _id: "345",
      name: "Widget 3",
      editing: false
    }
  ]
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WIDGET:
      return {
        widgets: [...state.widgets, {
          _id: Date.now()+"",
          name: "New Widget"
        }]
      }
    case UPDATE_WIDGET:
      return {
        widgets: state.widgets.map(
          widget => widget._id === action.widget._id ?
            action.widget : widget)
      }
    case DELETE_WIDGET:
      return {
        widgets: state.widgets.filter(widget => widget !== action.widget)
      }
    default:
      return state
  }
}

export default widgetReducer
