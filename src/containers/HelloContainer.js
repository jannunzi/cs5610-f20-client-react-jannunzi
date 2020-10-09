import React from "react";
import {connect} from "react-redux";
import Hello from "../components/Hello"

const stateMapper = state => ({
  message: state.fsm.communications.msg
})

export default connect(stateMapper)(Hello)
