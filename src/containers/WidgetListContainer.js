import React from "react";
import {connect} from "react-redux";
import WidgetList from "../components/WidgetList";

const stateToPropertyMapper = (state) => ({
  widgets: state.widgetsReducer.widgets
})

export default connect
(stateToPropertyMapper)
(WidgetList)
